import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/lib/supabase';

const formSchema = z.object({
  nome: z.string().min(2, 'Informe ao menos 2 caracteres.'),
  email: z.string().email('Informe um e-mail válido.'),
  whatsapp: z.string().optional().refine((val) => {
    if (!val) return true;
    return /^\(\d{2}\)\s?\d{4,5}-\d{4}$/.test(val);
  }, 'Use o formato (99) 99999-9999.'),
  site_linkedin: z.string().optional().refine((val) => {
    if (!val) return true;
    return /^https?:\/\/.+$/.test(val);
  }, 'Use http:// ou https:// no início.'),
  segmento: z.enum(['PMEs de tecnologia', 'Empreendedor/Profissional liberal', 'Serviços operacionais']),
  urgencia: z.enum(['Imediato', '30 dias', '60–90 dias', '90+ dias']),
  orcamento: z.enum(['até R$ 5k', 'R$ 5–10k', 'R$ 10–20k', 'R$ 20k+']),
  dor_principal: z.string().min(10, 'Conte um pouco mais (mín. 10 caracteres).'),
  decisor: z.enum(['Sim', 'Em conjunto', 'Não']),
  consentimento: z.boolean().refine(val => val === true, 'É necessário concordar com a Política de Privacidade')
});

type FormData = z.infer<typeof formSchema>;

interface Recommendation {
  product: string;
  priority: string;
  score: number;
}

const formatPhone = (value: string) => {
  const numbers = value.replace(/\D/g, '');
  if (numbers.length <= 2) return `(${numbers}`;
  if (numbers.length <= 7) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
  return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
};

const calculateRecommendation = (data: FormData): Recommendation => {
  // Scoring logic ajustado para campos restantes
  const scoring = {
    orcamento: { 'até R$ 5k': 1, 'R$ 5–10k': 2, 'R$ 10–20k': 3, 'R$ 20k+': 4 },
    urgencia: { 'Imediato': 3, '30 dias': 3, '60–90 dias': 2, '90+ dias': 1 },
    decisor: { 'Sim': 3, 'Em conjunto': 2, 'Não': 1 },
  } as const;

  const score =
    scoring.orcamento[data.orcamento] +
    scoring.urgencia[data.urgencia] +
    scoring.decisor[data.decisor];

  let priority = 'C (frio)';
  if (score >= 10) priority = 'A (quente)';
  else if (score >= 7) priority = 'B (morno)';

  // Recomendação baseada apenas em orçamento/urgência
  let product = 'Essentia';
  if (
    ['até R$ 5k', 'R$ 5–10k'].includes(data.orcamento) &&
    ['Imediato', '30 dias'].includes(data.urgencia)
  ) {
    product = 'Essentia Light';
  }

  return { product, priority, score };
};

export default function AgoraForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [recommendation, setRecommendation] = useState<Recommendation | null>(null);
  const { toast } = useToast();

  const { control, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      consentimento: false
    }
  });

  const watchedWhatsapp = watch('whatsapp');

  const onSubmit = async (data: FormData) => {
    try {
      const rec = calculateRecommendation(data);
      
      // Save to Supabase
      const { error } = await supabase
        .from('agora_leads')
        .insert([{
          ...data,
          recommended_product: rec.product,
          priority: rec.priority,
          score: rec.score,
          created_at: new Date().toISOString()
        }]);

      if (error) throw error;

      setRecommendation(rec);
      setIsSubmitted(true);
      
      toast({
        title: "Formulário enviado!",
        description: "Recebido! Veja abaixo a recomendação inicial.",
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente em alguns instantes.",
        variant: "destructive"
      });
    }
  };

  if (isSubmitted && recommendation) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-center text-green-600">Recomendação Inicial</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <div className="p-6 bg-green-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Produto Recomendado:</h3>
            <p className="text-lg text-primary">{recommendation.product}</p>
            <p className="text-sm text-muted-foreground mt-2">
              Prioridade: {recommendation.priority} (Score: {recommendation.score})
            </p>
          </div>
          <p className="text-sm text-muted-foreground">
            Nossa equipe entrará em contato em breve para detalhar a proposta personalizada.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Agende sua Ágora — qualificação rápida</h2>
        <p className="text-lg text-muted-foreground">
          Em 2 minutos entendemos seu contexto e indicamos o melhor próximo passo.
        </p>
      </div>

      <Card>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Nome */}
              <div className="md:col-span-2">
                <Label htmlFor="nome">Nome completo</Label>
                <Controller
                  name="nome"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      placeholder="Como podemos te chamar?"
                      className={errors.nome ? 'border-red-500' : ''}
                    />
                  )}
                />
                {errors.nome && <p className="text-sm text-red-500 mt-1">{errors.nome.message}</p>}
              </div>


              {/* Email */}
              <div>
                <Label htmlFor="email">E-mail</Label>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="email"
                      placeholder="nome@empresa.com"
                      className={errors.email ? 'border-red-500' : ''}
                    />
                  )}
                />
                {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>}
              </div>

              {/* WhatsApp */}
              <div>
                <Label htmlFor="whatsapp">WhatsApp</Label>
                <Controller
                  name="whatsapp"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      value={watchedWhatsapp ? formatPhone(watchedWhatsapp) : ''}
                      onChange={(e) => field.onChange(formatPhone(e.target.value))}
                      placeholder="(00) 00000-0000"
                      className={errors.whatsapp ? 'border-red-500' : ''}
                    />
                  )}
                />
                {errors.whatsapp && <p className="text-sm text-red-500 mt-1">{errors.whatsapp.message}</p>}
              </div>

              {/* Site/LinkedIn */}
              <div className="md:col-span-2">
                <Label htmlFor="site_linkedin">Site / LinkedIn (opcional)</Label>
                <Controller
                  name="site_linkedin"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      placeholder="https://"
                      className={errors.site_linkedin ? 'border-red-500' : ''}
                    />
                  )}
                />
                {errors.site_linkedin && <p className="text-sm text-red-500 mt-1">{errors.site_linkedin.message}</p>}
              </div>

              {/* Segmento */}
              <div>
                <Label htmlFor="segmento">Segmento</Label>
                <Controller
                  name="segmento"
                  control={control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className={errors.segmento ? 'border-red-500' : ''}>
                        <SelectValue placeholder="Selecione..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="PMEs de tecnologia">PMEs de tecnologia</SelectItem>
                        <SelectItem value="Empreendedor/Profissional liberal">Empreendedor/Profissional liberal</SelectItem>
                        <SelectItem value="Serviços operacionais">Serviços operacionais</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.segmento && <p className="text-sm text-red-500 mt-1">{errors.segmento.message}</p>}
              </div>




              {/* Urgência */}
              <div>
                <Label htmlFor="urgencia">Urgência</Label>
                <Controller
                  name="urgencia"
                  control={control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className={errors.urgencia ? 'border-red-500' : ''}>
                        <SelectValue placeholder="Selecione..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Imediato">Imediato</SelectItem>
                        <SelectItem value="30 dias">30 dias</SelectItem>
                        <SelectItem value="60–90 dias">60–90 dias</SelectItem>
                        <SelectItem value="90+ dias">90+ dias</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.urgencia && <p className="text-sm text-red-500 mt-1">{errors.urgencia.message}</p>}
              </div>

              {/* Orçamento */}
              <div>
                <Label htmlFor="orcamento">Orçamento disponível</Label>
                <Controller
                  name="orcamento"
                  control={control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className={errors.orcamento ? 'border-red-500' : ''}>
                        <SelectValue placeholder="Selecione..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="até R$ 5k">até R$ 5k</SelectItem>
                        <SelectItem value="R$ 5–10k">R$ 5–10k</SelectItem>
                        <SelectItem value="R$ 10–20k">R$ 10–20k</SelectItem>
                        <SelectItem value="R$ 20k+">R$ 20k+</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.orcamento && <p className="text-sm text-red-500 mt-1">{errors.orcamento.message}</p>}
              </div>


              {/* Dor principal */}
              <div className="md:col-span-2">
                <Label htmlFor="dor_principal">Onde mais dói hoje?</Label>
                <Controller
                  name="dor_principal"
                  control={control}
                  render={({ field }) => (
                    <Textarea
                      {...field}
                      placeholder="descreva seu principal gargalo"
                      rows={3}
                      className={errors.dor_principal ? 'border-red-500' : ''}
                    />
                  )}
                />
                {errors.dor_principal && <p className="text-sm text-red-500 mt-1">{errors.dor_principal.message}</p>}
              </div>

              {/* Decisor */}
              <div className="md:col-span-2">
                <Label>Você é o decisor?</Label>
                <Controller
                  name="decisor"
                  control={control}
                  render={({ field }) => (
                    <div className="flex gap-4 mt-2">
                      {['Sim', 'Em conjunto', 'Não'].map((option) => (
                        <label key={option} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            value={option}
                            checked={field.value === option}
                            onChange={() => field.onChange(option)}
                            className="w-4 h-4"
                          />
                          <span>{option}</span>
                        </label>
                      ))}
                    </div>
                  )}
                />
                {errors.decisor && <p className="text-sm text-red-500 mt-1">{errors.decisor.message}</p>}
              </div>

              {/* Consentimento */}
              <div className="md:col-span-2">
                <Controller
                  name="consentimento"
                  control={control}
                  render={({ field }) => (
                    <div className="flex items-start gap-2">
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className={errors.consentimento ? 'border-red-500' : ''}
                      />
                      <Label className="text-sm leading-relaxed">
                        Li e concordo com a{' '}
                        <a href="/politica-de-privacidade" className="text-primary hover:underline">
                          Política de Privacidade
                        </a>
                      </Label>
                    </div>
                  )}
                />
                {errors.consentimento && <p className="text-sm text-red-500 mt-1">{errors.consentimento.message}</p>}
              </div>
            </div>

            <div className="space-y-4">
              <Button 
                type="submit" 
                className="w-full" 
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar'}
              </Button>
              
              <p className="text-xs text-muted-foreground text-center">
                Usaremos seus dados para retorno de contato e proposta. Você pode solicitar exclusão a qualquer momento.
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}