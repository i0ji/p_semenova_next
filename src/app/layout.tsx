import type { Metadata } from 'next';
import './globals.scss';

export const metadata: Metadata = {
  title: 'Katerina Semenova - graphic designer',
  description: 'Katerina Semenova',
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
      <body>{children}</body>
    </html>
  );
}
