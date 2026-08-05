'use client';
import React from 'react';

import Image from 'next/image';

import TypeIn from '@/components/common/TypeIn';
import useBannerReady from '@/utils/useBannerReady';

import MainBannerImg from '../../../public/mainPage/mainBanner2.jpg';
import MainBannerImgMo from '../../../public/mainPage/mainBannerMobile.jpg';
export default function MainBanner() {
  const [isImageLoaded, register] = useBannerReady();
  return (
    <>
      <Image
        src={MainBannerImg}
        fill
        // sm 미만에서는 CSS로 숨겨지므로 최소 크기만 받는다
        sizes="(max-width: 639px) 1px, 100vw"
        className="object-cover object-left-bottom max-sm:hidden"
        alt="메인배너"
        ref={register(0)}
        placeholder="blur"
        priority
      />
      <Image
        src={MainBannerImgMo}
        fill
        sizes="(max-width: 639px) 100vw, 1px"
        className="object-cover object-bottom sm:hidden"
        alt="메인배너"
        ref={register(1)}
        placeholder="blur"
        priority
      />
      {/* 가독성용 스크림. 이미지 뒤·텍스트 앞에 놓이려면 이 DOM 순서를 유지해야 한다
          (전부 z-index 없는 absolute 라 배치 순서가 곧 쌓임 순서다). */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/15 to-transparent" />

      <div className="absolute top-[15%] sm:top-[30%] break-keep w-full px-[10%]">
        {/* 헤드라인은 기존대로 통째로 나타난다. 한 글자씩 찍히는 건 아래 카피만 */}
        <div className="flex flex-col min-[440px]:flex-row">
          <h1
            className={`text-white text-nowrap text-[3rem] lg:text-[4.5rem] font-semibold ${
              isImageLoaded ? 'transition-transform animate-show' : ''
            } opacity-0 px-1`}
            style={{textShadow: '0 2px 10px rgba(0,0,0,0.35)'}}>
            수능단기 고득점,&nbsp;
          </h1>
          <h1
            className={`text-white text-[3rem] lg:text-[4.5rem] max-[440px]:ml-auto font-semibold ${
              isImageLoaded ? 'transition-transform animate-show' : ''
            } opacity-0`}
            // 지속시간은 앞줄보다 긴 1s 를 유지하고 시작만 앞당긴다.
            // fill 이 forwards 라 지연 중에는 opacity-0 이 남아 미리 보이지 않는다
            style={{
              textShadow: '0 2px 10px rgba(0,0,0,0.35)',
              animationDelay: '400ms',
              animationDuration: '1s',
            }}>
            가능하다!
          </h1>
        </div>

        <div className="px-1 text-white" style={{textShadow: '0 2px 10px rgba(0,0,0,0.35)'}}>
          {/* 헤드라인이 끝나고(400+700ms) 바로 이어진다 */}
          <TypeIn
            start={isImageLoaded}
            delay={1250}
            lines={[
              {
                pieces: [{text: '단기 고득점, 기적이 아닌 압축 전략입니다.'}],
                className: 'mt-4 lg:mt-6 text-[1.25rem] sm:text-[1.75rem] lg:text-[2.25rem] font-medium',
              },
            ]}
          />
        </div>
      </div>
    </>
  );
}
