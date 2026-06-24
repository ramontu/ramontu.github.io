import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { Lang, LANGS } from './lang';

interface LanguageCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
}

const LanguageContext = createContext<LanguageCtx | null>(null);

function detectLang(): Lang {
  try {
    const saved = localStorage.getItem('lang');
    if (saved && (LANGS as readonly string[]).includes(saved)) return saved as Lang;
    const nav = navigator.language.slice(0, 2).toLowerCase();
    if (nav === 'es') return 'es';
    if (nav === 'ca') return 'ca';
  } catch {
    /* localStorage/navigator may be unavailable */
  }
  return 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => detectLang());

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    try {
      localStorage.setItem('lang', l);
    } catch {
      /* ignore */
    }
    setLangState(l);
  };

  return <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used within a LanguageProvider');
  return ctx;
}
