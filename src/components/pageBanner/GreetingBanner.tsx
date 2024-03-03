'use client';
import React, {useState} from 'react';

import Image from 'next/image';

import GreetingBannerImg from '../../../public/introPage/인사말.jpg';
export default function GreetingBanner() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  return (
    <>
      <Image
        src={GreetingBannerImg}
        className="object-cover object-right sm:object-center"
        fill
        alt="회사소개배너"
        onLoad={() => setIsImageLoaded(true)}
        placeholder="blur"
        priority
      />
      <div className="absolute top-[30%] left-[10%]  font-bold text-5xl flex flex-col sm:flex-row gap-6  sm:text-6xl text-blue-4">
        <p className={`${isImageLoaded && `transition-transform animate-show`} opacity-0`}>수능 성적은,</p>
        <p className={`${isImageLoaded && `transition-transform animate-show_delay_1s`} opacity-0`}>수능 전문가에게</p>
      </div>
    </>
  );
}
