'use client';

import React from 'react';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import dynamic from 'next/dynamic';

// 정적 import 로 두면 조건부 렌더를 걸어도 모듈이 번들에 남는다(측정 결과 24KB).
// NODE_ENV 는 빌드 시 상수로 치환되므로, 프로덕션에서는 아래 import() 자체가
// 죽은 코드가 되어 청크째로 빠진다.
const ReactQueryDevtools =
  process.env.NODE_ENV === 'development'
    ? dynamic(() => import('@tanstack/react-query-devtools').then(m => m.ReactQueryDevtools), {ssr: false})
    : () => null;

type Props = {
  children: React.ReactNode;
};

function Providers({children}: Props) {
  const [client] = React.useState(
    new QueryClient({
      defaultOptions: {
        // react-query 전역 설정
        queries: {
          refetchOnWindowFocus: false,
          retry: false,
        },
      },
    }),
  );

  return (
    <QueryClientProvider client={client}>
      {children}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default Providers;
