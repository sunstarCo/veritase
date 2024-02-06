import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import './globals.css';
import Providers from '@/utils/provider';
import Header from '@/components/common/header/Header';

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
          <div className="w-full xl:max-w-[1280px] mx-auto">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
