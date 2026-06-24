import { useEffect, useState } from 'react';

interface TypeWriterProps {
  /** One or more strings to cycle through. */
  phrases: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pause?: number;
  /** If true, types each phrase once and stops on the last one. */
  once?: boolean;
}

export function TypeWriter({
  phrases,
  className = '',
  typingSpeed = 55,
  deletingSpeed = 28,
  pause = 1400,
  once = false,
}: TypeWriterProps) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[index % phrases.length];
    const isLast = index === phrases.length - 1;

    if (!deleting && text === current) {
      if (once && isLast) return;
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }

    if (deleting && text === '') {
      setDeleting(false);
      setIndex((i) => i + 1);
      return;
    }

    const t = setTimeout(
      () => {
        setText((prev) =>
          deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1),
        );
      },
      deleting ? deletingSpeed : typingSpeed,
    );
    return () => clearTimeout(t);
  }, [text, deleting, index, phrases, typingSpeed, deletingSpeed, pause, once]);

  return (
    <span className={className}>
      {text}
      <span className="ml-0.5 inline-block w-[0.6ch] animate-blink bg-term-green text-term-green">
        &nbsp;
      </span>
    </span>
  );
}
