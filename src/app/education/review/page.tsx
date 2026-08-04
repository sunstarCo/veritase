'use client';
import React, {useState} from 'react';

import Image from 'next/image';
import {TbHandClick} from 'react-icons/tb';

import BannerLayout from '@/components/common/BannerLayout';

// static import 여야 placeholder="blur" 가 자동으로 붙는다(문자열 src 는 blurDataURL 을 직접 줘야 한다)
import ReviewBg from '../../../../public/reviews/review_bg.jpg';
import PhoneFrame from '../../../../public/reviews/모바일사진.png';

const TOTAL_IMAGES = 93;
// 세로로 이어붙여 두는 장수. 1장만 화면에 보이고 나머지는 아래에서 미리 로드된다.
const PANELS = 3;
const SCROLL_MS = 450;

// public/reviews/모바일사진.png 의 실제 지오메트리.
// 원본 SVG(412×734)에서 흰 폰 바디 path 가 차지하는 사각형 좌표를 그대로 옮긴 값이라
// 화면 영역을 베젤 안쪽에 딱 맞출 수 있다.
const FRAME = {w: 412, h: 734};
const SCREEN = {x: 11, y: 15, w: 386.178, h: 703.538, r: 37};
const pct = (part: number, whole: number) => `${(part / whole) * 100}%`;

const reviewSrc = (index: number) =>
  `https://onuqprohgtghlcbucalq.supabase.co/storage/v1/object/public/reviews/${index}.jpg`;

// 역순 순환: 93 → 92 → … → 1 → 93
const prevIndex = (index: number) => (index <= 1 ? TOTAL_IMAGES : index - 1);

export default function Page() {
  const [panels, setPanels] = useState(() =>
    Array.from({length: PANELS}, (_, i) => {
      let index = TOTAL_IMAGES;
      for (let step = 0; step < i; step++) index = prevIndex(index);
      return index;
    }),
  );
  const [scrolling, setScrolling] = useState(false);

  const onClickHandler = () => {
    if (scrolling) return;
    setScrolling(true);

    setTimeout(() => {
      // 트랙을 한 칸 밀어낸 뒤, 애니메이션 없이 원위치시키면서 목록을 한 칸 당긴다.
      // 이 순간 화면에 보이는 그림이 동일해 깜빡임이 없다.
      setPanels(prev => [...prev.slice(1), prevIndex(prev[prev.length - 1])]);
      setScrolling(false);
    }, SCROLL_MS);
  };

  return (
    <BannerLayout className="flex justify-center items-start sm:items-center min-h-[600px]">
      <Image src={ReviewBg} alt="" sizes="100vw" fill priority placeholder="blur" className="object-cover object-center" />
      <div className="absolute flex max-md:flex-col gap-16 md:justify-evenly w-full items-center mt-2 max-w-[1440px] max-sm:mt-16">
        <div className="text-white">
          <h2 className="text-5xl md:text-6xl font-medium tracking-wide">수업후기</h2>
          <p className="text-2xl font-medium mt-4 md:mt-8">(주)베리타스교육의 100% 실제 후기</p>
        </div>

        <div
          onClick={onClickHandler}
          // 프레임과 같은 비율을 유지해야 아래 화면 좌표(%)가 그대로 들어맞는다
          className="cursor-pointer relative w-[240px] md:w-[310px]"
          style={{aspectRatio: `${FRAME.w} / ${FRAME.h}`}}>
          <Image
            src={PhoneFrame}
            alt="모바일 사진"
            fill
            placeholder="blur"
            className="object-contain"
            sizes="(max-width: 768px) 240px, 310px"
          />

          {/* 폰 화면 = 뷰포트. 세로로 이어진 트랙이 이 안에서 스크롤된다. */}
          <div
            className="absolute overflow-hidden"
            style={{
              left: pct(SCREEN.x, FRAME.w),
              top: pct(SCREEN.y, FRAME.h),
              width: pct(SCREEN.w, FRAME.w),
              height: pct(SCREEN.h, FRAME.h),
              // 모서리는 프레임과 같은 곡률이라야 베젤 밖으로 삐져나오지 않는다
              borderRadius: `${pct(SCREEN.r, SCREEN.w)} / ${pct(SCREEN.r, SCREEN.h)}`,
            }}>
            <div
              className={`absolute inset-x-0 top-0 ${scrolling ? 'transition-transform ease-out' : ''}`}
              style={{
                // 높이·이동거리를 PANELS 하나에서 유도해 둘이 어긋날 수 없게 한다
                height: `${PANELS * 100}%`,
                transform: scrolling ? `translateY(-${100 / PANELS}%)` : 'translateY(0)',
                transitionDuration: scrolling ? `${SCROLL_MS}ms` : undefined,
              }}>
              {panels.map((index, i) => (
                // 배경이 없으면 object-contain 여백으로 다음 장이 비친다
                <div key={index} className="relative w-full bg-[#FCFCFC]" style={{height: `${100 / PANELS}%`}}>
                  <Image
                    src={reviewSrc(index)}
                    alt={`후기메세지 ${index}`}
                    fill
                    sizes="(max-width: 768px) 220px, 285px"
                    className="object-contain"
                    {...(i === 0 ? {priority: true} : {loading: 'eager' as const})}
                  />
                </div>
              ))}
            </div>
          </div>

          <TbHandClick className="text-6xl absolute bottom-3 right-6 animate-blink z-10" />
        </div>
      </div>
    </BannerLayout>
  );
}
