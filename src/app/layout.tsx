import {Suspense} from 'react';

import {Inter, Noto_Sans_KR, Urbanist} from 'next/font/google';

import './globals.css';
import {Footer} from '@/components/common/Footer/Footer';
import Header from '@/components/common/header/Header';
import Loading from '@/components/loading/Loading';
import Providers from '@/utils/provider';

import type {Metadata} from 'next';

const noto_sans_kr = Noto_Sans_KR({subsets: ['latin']});
const urbanist = Urbanist({subsets: ['latin'], display: 'swap', variable: '--font-urbanist'});
const inter = Inter({subsets: ['latin'], variable: '--font-inter'});

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
      <body className={`${noto_sans_kr.className} ${urbanist.variable} ${inter.variable} min-h-screen`}>
        <Providers>
          <Header />
          <Suspense fallback={<Loading lodingText="로딩중" />}>
            <div className="min-h-screen pt-[99px] md:pt-[122px] lg:pt-[87.29px] xl:pt-[123.3px]">{children}</div>
          </Suspense>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
