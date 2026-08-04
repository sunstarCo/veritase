'use client';
import React from 'react';

import Image, {type StaticImageData} from 'next/image';

import useBannerReady from '@/utils/useBannerReady';

type Props = {
  desktop: StaticImageData;
  mobile: StaticImageData;
  /** 가독성용 스크림. 배경 밝기가 페이지마다 달라 호출부에서 정한다 */
  scrim: string;
  title: string;
  lines: string[];
};

export default function HeroBanner({desktop, mobile, scrim, title, lines}: Props) {
  const [ready, register] = useBannerReady();

  return (
    <div className="relative w-full h-[calc(100vh-200px)] mt-10">
      <Image
        src={desktop}
        placeholder="blur"
        alt=""
        // sm 미만에서는 CSS로 숨겨지므로 최소 크기만 받는다
        sizes="(max-width: 639px) 1px, (max-width: 1700px) 100vw, 1700px"
        fill
        className="object-cover object-center max-sm:hidden"
        ref={register(0)}
        priority
      />
      <Image
        src={mobile}
        placeholder="blur"
        alt=""
        sizes="(max-width: 639px) 100vw, 1px"
        fill
        className="object-cover object-center sm:hidden"
        ref={register(1)}
        priority
      />
      {/* 이미지 뒤·텍스트 앞에 놓이려면 이 DOM 순서를 유지해야 한다
          (전부 z-index 없는 absolute 라 배치 순서가 곧 쌓임 순서다). */}
      <div className={`absolute inset-0 ${scrim}`} />

      <div className="absolute top-1/3 px-4 md:left-[10%] text-white break-keep">
        <h2
          className={`font-medium text-5xl md:text-6xl tracking-wide opacity-0 ${ready ? 'animate-showUpper' : ''}`}>
          {title}
        </h2>
        <p
          className={`mt-5 md:mt-7 text-[1.25rem] md:text-[1.75rem] font-medium leading-[1.5] opacity-0 ${
            ready ? 'animate-showUpper' : ''
          }`}
          // 제목보다 살짝 늦게. both 여야 지연 중에도 시작 프레임(아래쪽·투명)을 유지한다
          style={{animationDelay: '300ms', animationFillMode: 'both'}}>
          {lines.map((line, i) => (
            <React.Fragment key={line}>
              {i > 0 && <br />}
              {line}
            </React.Fragment>
          ))}
        </p>
      </div>
    </div>
  );
}
