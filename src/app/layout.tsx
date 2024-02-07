import {Inter} from 'next/font/google';

import './globals.css';
import Header from '@/components/common/header/Header';
import Providers from '@/utils/provider';

import type {Metadata} from 'next';
import {Footer} from '@/components/common/Footer/Footer';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'veritase',
  description: 'veritase education',
  // icons: {
  //   icon: '/favicon.png',
  // },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Providers>
          <Header />
          <div>{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
