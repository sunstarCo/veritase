'use client';
import React, {useState} from 'react';

import Image from 'next/image';

import MainBannerImg from '../../../public/mainPage/mainBanner2.jpg';
import MainBannerImgMo from '../../../public/mainPage/mainBannerMobile.jpg';
export default function MainBanner() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  return (
    <>
      <Image
        src={MainBannerImg}
        fill
        // sm 미만에서는 CSS로 숨겨지므로 최소 크기만 받는다
        sizes="(max-width: 639px) 1px, 100vw"
        className="object-cover object-left-bottom max-sm:hidden"
        alt="메인배너"
        onLoad={() => setIsImageLoaded(true)}
        placeholder="blur"
        priority
      />
      <Image
        src={MainBannerImgMo}
        fill
        sizes="(max-width: 639px) 100vw, 1px"
        className="object-cover object-bottom sm:hidden"
        alt="메인배너"
        onLoad={() => setIsImageLoaded(true)}
        placeholder="blur"
        priority
      />
      {/* 가독성용 스크림. 이미지 뒤·텍스트 앞에 놓이려면 이 DOM 순서를 유지해야 한다
          (전부 z-index 없는 absolute 라 배치 순서가 곧 쌓임 순서다). */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/15 to-transparent" />

      <div className="flex flex-col min-[440px]:flex-row absolute top-[15%] sm:top-[30%] break-keep w-full px-[10%]">
        <h1
          className={`text-white text-nowrap text-[3rem] lg:text-[4.5rem] font-semibold ${
            isImageLoaded ? 'transition-transform animate-show' : ''
          } opacity-0 px-1`}
          style={{textShadow: '0 2px 10px rgba(0,0,0,0.35)'}}>
          수능단기 고득점,&nbsp;
        </h1>
        <h1
          className={`text-white text-[3rem] lg:text-[4.5rem] max-[440px]:ml-auto font-semibold ${
            isImageLoaded ? 'transition-transform animate-show_delay_1s' : ''
          } opacity-0`}
          style={{textShadow: '0 2px 10px rgba(0,0,0,0.35)'}}>
          가능하다!
        </h1>
      </div>
    </>
  );
}
