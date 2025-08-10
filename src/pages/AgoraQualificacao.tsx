import { useEffect } from 'react';
import AgoraForm from '@/components/forms/AgoraForm';

const AgoraQualificacao = () => {
  useEffect(() => {
    document.title = "Agende sua Ágora — Artesya";
    const desc = "Qualificação rápida em 2 minutos. Entendemos seu contexto e indicamos o melhor próximo passo para sua solução digital.";
    const setMeta = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };
    setMeta("description", desc);

    let link: HTMLLinkElement | null = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = window.location.href;
  }, []);

  return (
    <main className="min-h-screen bg-background py-12 px-4">
      <AgoraForm />
    </main>
  );
};

export default AgoraQualificacao;