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
        className="object-cover object-left-bottom max-sm:hidden"
        alt="메인배너"
        onLoad={() => setIsImageLoaded(true)}
        placeholder="blur"
        priority
      />
      <Image
        src={MainBannerImgMo}
        fill
        className="object-cover object-bottom sm:hidden"
        alt="메인배너"
        onLoad={() => setIsImageLoaded(true)}
        placeholder="blur"
        priority
      />
      <div className="flex flex-col min-[440px]:flex-row absolute top-[15%] sm:top-[30%] break-keep w-full px-[10%]">
        <h1
          className={`text-white text-nowrap text-[3rem] lg:text-[4.5rem] font-semibold ${
            isImageLoaded && `transition-transform animate-show`
          } opacity-0 px-1`}>
          수능단기 고득점,&nbsp;
        </h1>
        <h1
          className={`text-white text-[3rem] lg:text-[4.5rem] max-[440px]:ml-auto font-semibold ${
            isImageLoaded && `transition-transform animate-show_delay_1s`
          } opacity-0`}>
          가능하다!
        </h1>
      </div>
    </>
  );
}
