import './globals.css';
import type { Metadata } from 'next';
import { Libre_Franklin } from 'next/font/google';

const franklin = Libre_Franklin({
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  fallback: ['sans-serif'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Coming Soon',
  description: 'We are launching soon!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={franklin.className}>
        <main className='container'>{children}</main>
      </body>
    </html>
  );
}
