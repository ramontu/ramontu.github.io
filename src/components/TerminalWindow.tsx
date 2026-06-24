import { ReactNode } from 'react';

interface TerminalWindowProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

export function TerminalWindow({ title = 'bash', children, className = '' }: TerminalWindowProps) {
  return (
    <div
      className={`overflow-hidden rounded-lg border border-term-border bg-term-panel/80 shadow-2xl shadow-black/40 backdrop-blur-sm ${className}`}
    >
      <div className="flex items-center justify-between gap-2 border-b border-term-border bg-black/30 px-3 py-2">
        <span className="truncate px-1 text-xs text-term-dim">{title}</span>
        <div className="flex items-center gap-1.5" aria-hidden>
          <span className="flex h-5 w-5 items-center justify-center rounded bg-white/5 text-xs leading-none text-term-dim">
            &minus;
          </span>
          <span className="flex h-5 w-5 items-center justify-center rounded bg-white/5 text-[10px] leading-none text-term-dim">
            &#9633;
          </span>
          <span className="flex h-5 w-5 items-center justify-center rounded bg-white/5 text-xs leading-none text-term-dim transition-colors hover:bg-term-red/40 hover:text-term-text">
            &#10005;
          </span>
        </div>
      </div>
      <div className="p-5 sm:p-7">{children}</div>
    </div>
  );
}
