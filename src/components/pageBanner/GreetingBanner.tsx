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
      {/* 가독성용 스크림. 모바일은 object-right 라 어두운 의자 쪽이 잡히므로 왼쪽을 밝게 깐다.
          이미지 뒤·텍스트 앞에 놓이려면 이 DOM 순서를 유지해야 한다
          (전부 z-index 없는 absolute 라 배치 순서가 곧 쌓임 순서다). */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-transparent" />

      {/* 좁은 화면에서는 br 로 끊는 지점을 직접 지정해 어절이 혼자 떨어지지 않게 한다 */}
      <div className="absolute top-[30%] left-[10%] pr-[10%] break-keep font-bold text-blue-6 text-[2.25rem] lg:text-[2.75rem] leading-[1.4]">
        <p className={`opacity-0 ${isImageLoaded ? 'animate-show' : ''}`}>
          수능은 기적을 바라는{' '}
          <br className="md:hidden" />
          시험이 아니라,
        </p>
        <p className={`mt-3 opacity-0 ${isImageLoaded ? 'animate-show_delay_1s' : ''}`}>
          합격을 만드는{' '}
          <br className="md:hidden" />
          실력의 기준입니다.
        </p>
      </div>
    </>
  );
}
