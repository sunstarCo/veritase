'use client';
import React, {useRef, useState} from 'react';

import Image from 'next/image';

import {useInterval} from '@/utils/useInterval';

const teacher_reviews = [
  '/teacher/reviews/pc/review_pc_1.svg',
  '/teacher/reviews/pc/review_pc_2.svg',
  '/teacher/reviews/pc/review_pc_3.svg',
  '/teacher/reviews/pc/review_pc_4.svg',
  '/teacher/reviews/pc/review_pc_5.svg',
  '/teacher/reviews/pc/review_pc_6.svg',
  '/teacher/reviews/pc/review_pc_7.svg',
  '/teacher/reviews/pc/review_pc_8.svg',
];

const main_reviews = [
  '/reviews/reviewPage/review1.jpg',
  '/reviews/reviewPage/review2.jpg',
  '/reviews/reviewPage/review3.jpg',
  '/reviews/reviewPage/review4.jpg',
];

type innerMatch = {
  size: number[];
  contentWidth: string;
};
type Match = Record<string, innerMatch>;

function Slider({type}: {type: 'main' | 'teacher'}) {
  const reviews = type === 'main' ? main_reviews : teacher_reviews;
  const cloneContents = [...reviews, reviews[0]];
  const slideRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setCurrentSlide] = useState(0);
  const lastSlide = cloneContents.length - 1;

  const slideObj: Match = {
    main: {
      size: [260],
      contentWidth: 'w-[220px] md:w-[285px]',
    },
    teacher: {
      size: [800],
      contentWidth: 'w-[800px]',
    },
  };

  const autoplayIterator = () => {
    setCurrentSlide(prev => {
      const newSlide = prev + 1;
      if (slideRef.current) {
        slideRef.current.style.transition = 'all 0.5s ease-in-out';
        slideRef.current.style.transform = `translateX(-${newSlide * (100 / cloneContents.length)}%)`;
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
    <div className={`flex items-center justify-center mx-auto relative ${slideObj[type].contentWidth} `}>
      <div className={` overflow-x-hidden flex `}>
        <div className={`flex`} ref={slideRef}>
          {cloneContents.map((img, i) => (
            <div key={i} className={`${slideObj[type].contentWidth}`}>
              <Image src={img} alt="" width={0} height={0} sizes="100" className="w-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slider;
