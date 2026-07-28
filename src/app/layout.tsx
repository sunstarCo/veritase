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
          {/* Header 가 useSearchParams 를 쓰므로 Suspense 로 감싸지 않으면
              모든 페이지가 클라이언트 렌더링으로 이탈해 빈 HTML 이 나간다 */}
          <Suspense>
            <Header />
          </Suspense>
          <Suspense fallback={<Loading lodingText="로딩중" />}>
            <div className="min-h-screen pt-[90px] sm:pt-[99px] md:pt-[122px] lg:pt-[87.29px] xl:pt-[123.3px]">
              {children}
            </div>
          </Suspense>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
