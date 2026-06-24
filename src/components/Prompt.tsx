import { profile } from '../data/profile';

interface PromptProps {
  command: string;
  className?: string;
}

/** A static `user@host:~$ command` line used as a section header. */
export function Prompt({ command, className = '' }: PromptProps) {
  return (
    <p className={`font-mono text-sm sm:text-base ${className}`}>
      <span className="text-term-green">
        {profile.handle}@{profile.host}
      </span>
      <span className="text-term-dim">:</span>
      <span className="text-term-cyan">~</span>
      <span className="text-term-dim">$ </span>
      <span className="text-term-text">{command}</span>
    </p>
  );
}
