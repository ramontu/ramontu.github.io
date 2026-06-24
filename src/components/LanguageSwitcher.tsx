import { useLang } from '../i18n/LanguageContext';
import { LANGS, LANG_LABELS } from '../i18n/lang';

export function LanguageSwitcher() {
  const { lang, setLang } = useLang();
  return (
    <div className="flex items-center gap-1 text-xs">
      <span className="text-term-dim">lang:</span>
      {LANGS.map((l, i) => (
        <span key={l} className="flex items-center">
          {i > 0 && <span className="text-term-dim">|</span>}
          <button
            type="button"
            onClick={() => setLang(l)}
            aria-pressed={lang === l}
            className={`px-1.5 transition-colors hover:text-term-green ${
              lang === l ? 'text-term-green text-glow' : 'text-term-dim'
            }`}
          >
            {LANG_LABELS[l]}
          </button>
        </span>
      ))}
    </div>
  );
}
