import './globals.css';
import './mobile.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Seno Petri Advogados Associados | +30 Anos em Parauapebas',
  description:
    'Mais de 30 anos de tradição em Parauapebas e Canaã dos Carajás (PA). Atuação especializada em Direito Trabalhista, Cível e Previdenciário.',
};

export default function Layout({ children }: { children: ReactNode }) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
