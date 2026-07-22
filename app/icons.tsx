import type { ReactElement } from 'react';

const paths: Record<string, ReactElement> = {
  briefcase: <><rect x="3" y="7" width="18" height="12" rx="1.2" /><path d="M8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7" /><line x1="3" y1="12.5" x2="21" y2="12.5" /></>,
  document: <><rect x="5.5" y="3" width="13" height="18" rx="1" /><line x1="8.5" y1="8" x2="15.5" y2="8" /><line x1="8.5" y1="12" x2="15.5" y2="12" /><line x1="8.5" y1="16" x2="13" y2="16" /></>,
  shield: <><path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z" /><polyline points="9,12 11,14 15,10" /></>,
};

export function Icon({ name }: { name: string }) {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {paths[name] ?? paths.document}
    </svg>
  );
}
