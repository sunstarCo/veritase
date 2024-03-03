'use client';
import React, {useState} from 'react';

import Image from 'next/image';

import IntroduceBannerImg from '../../../public/introPage/회사소개.jpg';
export default function IntroduceBanner() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  return (
    <>
      <Image
        src={IntroduceBannerImg}
        className="object-cover object-center"
        fill
        alt="회사소개배너"
        priority
        onLoad={() => setIsImageLoaded(true)}
        placeholder="blur"
      />
      <div className="absolute top-[30%] left-[10%]  font-bold text-5xl flex flex-col sm:flex-row gap-6  sm:text-6xl text-blue-4">
        <p className={`${isImageLoaded && `transition-transform animate-show`} opacity-0`}>수능 성적은,</p>
        <p className={`${isImageLoaded && `transition-transform animate-show_delay_1s`} opacity-0`}>수능 전문가에게</p>
      </div>
    </>
  );
}
