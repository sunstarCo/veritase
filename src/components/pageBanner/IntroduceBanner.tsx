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
      {/* 가독성용 스크림. 배경 오른쪽이 어두워 진한 글자가 묻히므로 왼쪽을 밝게 깐다.
          이미지 뒤·텍스트 앞에 놓이려면 이 DOM 순서를 유지해야 한다
          (전부 z-index 없는 absolute 라 배치 순서가 곧 쌓임 순서다). */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/45 to-transparent" />

      <div className="absolute top-[30%] left-[10%] pr-[12%] break-keep font-bold text-blue-6 leading-[1.4] text-[1.75rem] sm:text-[2rem]">
        <p className={`opacity-0 ${isImageLoaded ? 'animate-show' : ''}`}>상위권으로 가는 마지막 사다리</p>
        {/* 받쳐주는 줄이라 들여쓰기. lg 부터는 줄바꿈 없이 한 줄로 흐른다 */}
        <p className={`mt-4 ml-6 lg:ml-20 opacity-0 ${isImageLoaded ? 'animate-show_delay_1s' : ''}`}>
          <span className="text-blue-4">“아는 것과 풀 수 있는 것”</span>의{' '}
          <br className="lg:hidden" />
          차이를 만들어 주는 회사
        </p>
      </div>
    </>
  );
}
