import Header from '@/components/ui/web-components/Header';
import PageTransition from '@/components/ui/web-components/PageTransition';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-jetbrainsMono',
});

export const metadata = {
  title: 'Aniket B.',
  description: 'Next App Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={jetbrainsMono.variable}>
        <Header />

        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
