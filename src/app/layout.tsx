import type { Metadata } from 'next';
import localFont from 'next/font/local';
const CenturyGothic = localFont({
  src: '../../public/centurygothic.woff'
});

import './globals.scss';

export const metadata: Metadata = {
  title: 'Katerina Semenova - graphic designer'
};

console.log('v: 0.1.6 a');
console.log('font/favico path issues');

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={CenturyGothic.className}>
      <body>{children}</body>
    </html>
  );
}
