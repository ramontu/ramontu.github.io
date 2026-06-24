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
      <div className="flex items-center gap-2 border-b border-term-border bg-black/30 px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-term-red/80" />
        <span className="h-3 w-3 rounded-full bg-term-amber/80" />
        <span className="h-3 w-3 rounded-full bg-term-green/80" />
        <span className="ml-3 truncate text-xs text-term-dim">{title}</span>
      </div>
      <div className="p-5 sm:p-7">{children}</div>
    </div>
  );
}
