import { useState } from 'react';
import { profile } from '../data/profile';

interface AvatarProps {
  className?: string;
}

/**
 * Profile photo with a graceful fallback to initials if the image
 * (public/profile.jpg) isn't present yet.
 */
export function Avatar({ className = '' }: AvatarProps) {
  const [errored, setErrored] = useState(false);
  const initials = profile.name
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('');

  return (
    <div
      className={`relative shrink-0 overflow-hidden rounded-lg border border-term-green/40 bg-term-panel shadow-lg shadow-term-green/10 ${className}`}
    >
      {errored ? (
        <div className="flex h-full w-full items-center justify-center text-3xl font-bold text-term-green text-glow">
          {initials}
        </div>
      ) : (
        <img
          src={profile.photo}
          alt={profile.name}
          loading="lazy"
          onError={() => setErrored(true)}
          className="h-full w-full object-cover"
        />
      )}
      {/* subtle scanline tint to match the terminal aesthetic */}
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5" />
    </div>
  );
}
