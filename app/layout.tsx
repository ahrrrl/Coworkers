import type { Metadata } from 'next';
import './globals.css';
import { pretendard } from '@/lib/font';

export const metadata: Metadata = {
  title: 'Coworkers',
  description: 'A simple coworking space',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko' className={pretendard.variable}>
      <body className={'antialiased'}>{children}</body>
    </html>
  );
}
