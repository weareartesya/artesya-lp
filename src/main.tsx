import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Force dark theme to match design
if (!document.documentElement.classList.contains('dark')) {
  document.documentElement.classList.add('dark');
}

createRoot(document.getElementById("root")!).render(<App />);
