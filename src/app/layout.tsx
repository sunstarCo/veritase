import {Noto_Sans_KR, Urbanist} from 'next/font/google';

import './globals.css';
import {Footer} from '@/components/common/Footer/Footer';
import Header from '@/components/common/header/Header';
import Providers from '@/utils/provider';

import type {Metadata} from 'next';

const noto_sans_kr = Noto_Sans_KR({subsets: ['latin']});
const urbanist = Urbanist({subsets: ['latin'], display: 'swap', variable: '--font-urbanist'});

export const metadata: Metadata = {
  title: 'veritase',
  description: 'veritase education',
  icons: {
    icon: '/베리타스파비콘.png',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ko">
      <body className={`${noto_sans_kr.className} ${urbanist.variable}`}>
        <Providers>
          <Header />
          <div className="min-h-screen pt-[148px]">{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
