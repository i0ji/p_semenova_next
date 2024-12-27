import type { Metadata } from 'next';
import Metrics from '@/services/metrics';
import './globals.scss';

export const metadata: Metadata = {
  title: 'Katerina Semenova',
  description: 'Graphic designer| Katerina Semenova | ',
  icons: {
    icon: '/favicon.ico'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <Metrics />
      <body>{children}</body>
    </html>
  );
}
