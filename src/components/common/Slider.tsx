'use client';
import React, {useRef, useState} from 'react';

import Image from 'next/image';

import {useInterval} from '@/utils/useInterval';

const images = [
  '/teacher/reviews/pc/review_pc_1.svg',
  '/teacher/reviews/pc/review_pc_2.svg',
  '/teacher/reviews/pc/review_pc_3.svg',
  '/teacher/reviews/pc/review_pc_4.svg',
  '/teacher/reviews/pc/review_pc_5.svg',
  '/teacher/reviews/pc/review_pc_6.svg',
  '/teacher/reviews/pc/review_pc_7.svg',
  '/teacher/reviews/pc/review_pc_8.svg',
];

function Slider() {
  const cloneContents = [...images, images[0]];
  const slideRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setCurrentSlide] = useState(0);
  const lastSlide = cloneContents.length;

  const autoplayIterator = () => {
    setCurrentSlide(prev => {
      const newSlide = prev + 1;
      if (slideRef.current) {
        slideRef.current.style.transition = 'all 0.5s ease-in-out';
        slideRef.current.style.transform = `translateX(-${newSlide * 800}px)`;
        if (newSlide > lastSlide) {
          slideRef.current.style.transition = '';
          slideRef.current.style.transform = `translateX(-0px)`;
          setCurrentSlide(0);
        }
      }

      return newSlide;
    });
  };

  useInterval(autoplayIterator, 6000);

  return (
    <div className="flex items-center justify-center mx-auto relative w-[800px] mt-20">
      <div className={` overflow-x-hidden flex `}>
        <div className={`flex`} ref={slideRef}>
          {images.map((img, i) => (
            <div key={i} className="w-[800px] ">
              <Image src={img} alt="" width={0} height={0} sizes="100" className="w-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slider;
