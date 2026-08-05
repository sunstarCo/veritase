'use client';
import React from 'react';

import Image from 'next/image';

import TypeIn from '@/components/common/TypeIn';
import useBannerReady from '@/utils/useBannerReady';

import IntroduceBannerImg from '../../../public/introPage/회사소개.jpg';
export default function IntroduceBanner() {
  const [isImageLoaded, register] = useBannerReady();
  return (
    <>
      <Image
        src={IntroduceBannerImg}
        className="object-cover object-center"
        fill
        alt="회사소개배너"
        priority
        ref={register(0)}
        placeholder="blur"
      />
      {/* 가독성용 스크림. 흰색이 아니라 이 이미지 왼쪽에서 뽑은 색(#eaf2f6)이라
          덧씌운 티가 덜 난다.
          글자 띠(세로 30~48%)의 실측 휘도는 왼쪽 0.88 → 오른쪽 0.01 이고,
          글자색 #0C2F52 로 큰 글씨 3:1 을 넘기려면 0.182 가 필요하다.
          즉 왼쪽 절반은 원본 그대로 둬도 되고 오른쪽만 덮으면 된다.
          이미지 뒤·텍스트 앞에 놓이려면 이 DOM 순서를 유지해야 한다
          (전부 z-index 없는 absolute 라 배치 순서가 곧 쌓임 순서다). */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#eaf2f6]/0 via-[#eaf2f6]/40 to-[#eaf2f6]/60" />

      {/* 글자 크기는 인사말 배너와 맞춘다.
          스크림 평균이 기준을 넘어도 차트 선처럼 국소적으로 새까만 획이 글자에 겹친다.
          그 부분만 떼어내려고 글리프에 번짐을 두른다. 흰색이면 후광이 도드라져
          스크림과 같은 이미지 색을 쓴다 */}
      <div
        className="absolute top-[30%] left-[10%] pr-[12%] break-keep font-bold text-blue-6 leading-[1.4] text-[2.25rem] lg:text-[2.75rem]"
        style={{textShadow: '0 0 12px rgba(234,242,246,0.85)'}}>
        <TypeIn
          start={isImageLoaded}
          lines={[
            {pieces: [{text: '상위권으로 가는 마지막 사다리'}]},
            {
              // 받쳐주는 줄이라 들여쓰기. lg 부터는 줄바꿈 없이 한 줄로 흐른다
              pieces: [
                {text: '“아는 것과 풀 수 있는 것”', className: 'text-blue-4'},
                {text: '의 '},
                {br: 'lg:hidden'},
                {text: '차이를 만들어 주는 회사'},
              ],
              className: 'mt-4 ml-6 lg:ml-20',
            },
          ]}
        />
      </div>
    </>
  );
}
