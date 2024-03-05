'use client';
import React, {useEffect, useRef, useState} from 'react';

import Image from 'next/image';

import './style.css';

import Breadcrumb from '@/components/common/Breadcrumb';
import EduSystemCard from '@/components/education/EduSystemCard';

const cardData = [
  {
    title: '기본개념 정리',
    times: [16, 32],
    desc: [
      {
        title: '개념 정리',
        content: ['디테일한 기본 / 심화 개념 완벽 정리', '기본 / 심화 연계 학습을 통한 개념 확장'],
      },
      {
        title: '유형 정리',
        content: ['연계개념 학습을 통한 유형 정리'],
      },
    ],
  },
  {
    title: '실전응용 정리',
    times: [16, 32],
    desc: [
      {
        title: '응용 활용',
        content: ['기출문제를 통한 유형별 맥락 완전분석'],
      },
      {
        title: '실전 응용',
        content: ['최약단원 집중학습으로 실전 적중도 완성', '기출문제를 통한 실전 감각 향상'],
      },
    ],
  },
  {
    title: '파이널 정리',
    times: [16, 24],
    desc: [
      {
        title: '총관리과정',
        content: ['자주하는 실수 및 약점 단원 집중 클리닉'],
      },
      {
        title: '맞춤 수능',
        content: ['수능문제에서 활용할 수 있는 실전개념 학습'],
      },
    ],
  },
];
export default function Page() {
  const [position, setPosition] = useState(0);
  const startPoint = useRef(0);

  useEffect(() => {
    startPoint.current = window.innerHeight / 4;

    function onScroll() {
      setPosition(window.scrollY);
    }

    if (position > startPoint.current) {
      window.removeEventListener('scroll', onScroll);
    } else {
      window.addEventListener('scroll', onScroll);
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <>
      <Breadcrumb title="학습관리시스템" sub_text="베리타스 교육의 체계적인 학습시스템" />
      <div className="w-full max-w-[1700px] px-2 md:px-12 mx-auto">
        <div className="relative w-full h-[calc(100vh-200px)] mt-10">
          <Image
            src={'/eduSystem/학습관리시스템.jpg'}
            alt=""
            sizes="100"
            width={0}
            height={0}
            fill
            className="object-cover object-center max-sm:hidden"
            priority
          />
          <Image
            src={'/eduSystem/학습관리시스템_모바일.jpg'}
            alt=""
            sizes="100"
            width={0}
            height={0}
            fill
            className="object-cover object-center sm:hidden"
            priority
          />
          <h2 className="absolute font-medium text-5xl md:text-6xl tracking-wide text-white top-1/3 px-4 md:left-[10%] opacity-0 animate-showUpper">
            학습관리시스템
          </h2>
        </div>
        <div
          className={`flex flex-col md:flex-row gap-2 max-w-[1700px] mx-auto items-center justify-center my-20 break-keep opacity-0 ${
            position >= startPoint.current && 'animate-showUpper'
          }`}>
          {cardData.map((card, i) => (
            <EduSystemCard key={i} card={card} />
          ))}
        </div>
      </div>
    </>
  );
}
