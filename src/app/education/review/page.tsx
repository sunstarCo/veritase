'use client';
import React, {useCallback, useEffect, useState} from 'react';

import Image from 'next/image';
import {TbHandClick} from 'react-icons/tb';

import BannerLayout from '@/components/common/BannerLayout';

export default function Page() {
  const TOTAL_IMAGES = 93;
  const [currentIndex, setCurrentIndex] = useState(TOTAL_IMAGES); // 93부터 시작
  const [isLoading, setIsLoading] = useState(false);
  const [preloadedImages, setPreloadedImages] = useState<Set<number>>(new Set([TOTAL_IMAGES]));
  const [throttle, setThrottle] = useState(false);

  // 이미지 프리로딩 함수
  const preloadImage = useCallback(
    (index: number) => {
      if (preloadedImages.has(index)) return Promise.resolve();

      return new Promise<void>(resolve => {
        const img = new window.Image();
        img.onload = () => {
          setPreloadedImages(prev => new Set([...Array.from(prev), index]));
          resolve();
        };
        img.onerror = () => resolve();
        img.src = `https://onuqprohgtghlcbucalq.supabase.co/storage/v1/object/public/reviews/${index}.jpg`;
      });
    },
    [preloadedImages],
  );

  // 다음 3개 이미지를 미리 로드 (역순)
  useEffect(() => {
    const preloadNext = async () => {
      const nextIndexes = [];

      for (let i = 1; i <= 3; i++) {
        let nextIndex = currentIndex - i;
        // 1보다 작아지면 끝에서부터 순환
        if (nextIndex < 1) {
          nextIndex = TOTAL_IMAGES + nextIndex;
        }
        nextIndexes.push(nextIndex);
      }

      await Promise.all(nextIndexes.map(index => preloadImage(index)));
    };

    preloadNext();
  }, [currentIndex, preloadImage]);

  const clickNext = async () => {
    if (isLoading) return;

    setIsLoading(true);
    // 역순: 현재가 1이면 93으로, 아니면 -1
    const nextIndex = currentIndex <= 1 ? TOTAL_IMAGES : currentIndex - 1;

    // 다음 이미지가 로드되었는지 확인
    if (!preloadedImages.has(nextIndex)) {
      await preloadImage(nextIndex);
    }

    // 부드러운 전환을 위한 약간의 지연
    setTimeout(() => {
      setCurrentIndex(nextIndex);
      setIsLoading(false);
    }, 100);
  };

  const onClickHandler = () => {
    if (throttle || isLoading) return;

    setThrottle(true);
    clickNext();

    setTimeout(() => {
      setThrottle(false);
    }, 300);
  };

  return (
    <BannerLayout className="flex justify-center items-start sm:items-center min-h-[600px]">
      <Image src={'/reviews/review_bg.jpg'} alt="" sizes="100vw" fill priority className="object-cover object-center" />
      <div className="absolute flex max-md:flex-col gap-16 md:justify-evenly w-full items-center mt-2 max-w-[1400px] max-sm:mt-16">
        <div className="text-white">
          <h2 className="text-5xl md:text-6xl font-medium tracking-wide">수업후기</h2>
          <p className="text-2xl font-medium mt-4 md:mt-8">(주)베리타스교육의 100% 실제 후기</p>
        </div>

        <div
          onClick={onClickHandler}
          className={`cursor-pointer relative p-3 w-[240px] h-[430px] md:h-[550px] md:w-[310px] flex items-center transition-opacity duration-200 ${
            isLoading ? 'opacity-90' : 'opacity-100'
          }`}>
          <Image
            src={'/reviews/모바일사진.svg'}
            alt="모바일 사진"
            priority
            fill
            className="object-cover"
            sizes="(max-width: 768px) 240px, 310px"
          />

          <div className="relative w-[220px] md:w-[285px] h-[370px] md:h-[460px] overflow-hidden rounded-lg">
            <Image
              key={currentIndex}
              src={`https://onuqprohgtghlcbucalq.supabase.co/storage/v1/object/public/reviews/${currentIndex}.jpg`}
              alt={`후기메세지 ${currentIndex}`}
              fill
              sizes="(max-width: 768px) 220px, 285px"
              className="object-contain transition-opacity duration-300"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQpoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
              onLoad={() => setIsLoading(false)}
            />
          </div>

          <TbHandClick className="text-6xl absolute bottom-3 right-6 animate-blink z-10" />
        </div>
      </div>
    </BannerLayout>
  );
}
