import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import EduSystemImg from '../../../public/mainPage/교육시스템.jpg';
import PlanImg from '../../../public/mainPage/입시전략.jpg';
import CompanyImg from '../../../public/mainPage/회사소개.jpg';
import ReviewImg from '../../../public/mainPage/후기.jpg';
import './cardStyle.css';

const cardData = [
  {
    img: CompanyImg,
    path: '/company/greeting',
    title: '회사소개',
    text: '여러분의 목표를 달성해드립니다',
  },
  {
    img: EduSystemImg,
    path: '/education/system',
    title: '교육시스템',
    text: '목표달성까지 함께합니다',
  },
  {
    img: PlanImg,
    path: '/plan/eduPeriod',
    title: '입시전략',
    text: '지금부터의 전략이 중요합니다',
  },
  {
    img: ReviewImg,
    path: '/education/review',
    title: '회원들의 반응도',
    text: '당사 회원들의 생생한 후기',
  },
];

function CardContainer() {
  return (
    <div className="flex gap-4 w-full mb-20 overflow-x-scroll lg:overflow-hidden">
      {cardData.map((card, i) => (
        <Link
          key={i}
          href={card.path}
          // 높이는 각 구간의 카드 폭 기준 2:3. hover 로 폭이 변해 aspect-ratio 는 쓸 수 없다
          className={`card relative min-h-[320px] md:min-h-[400px] lg:min-h-[430px] xl:min-h-[490px] 2xl:min-h-[570px] flex items-end min-w-[210px] md:min-w-[260px] md:w-1/4 hover:w-[50%] break-keep transition-[width] duration-500 ease-out rounded-lg overflow-hidden`}>
          <Image
            src={card.img}
            alt=""
            fill
            sizes="(max-width: 768px) 260px, (max-width: 1760px) 50vw, 880px"
            placeholder="blur"
            className="object-cover"
          />
          <div className="article relative z-10 text-white from-[rgba(0,0,0,0.6)] to-transparent w-full px-8 pb-8 pt-8 min-h-[180px] flex flex-col bg-gradient-to-t gap-3 justify-end">
            <h3 className="text-2xl lg:text-4xl font-bold">{card.title}</h3>
            <p className="overflow-hidden overflow-ellipsis text-nowrap">{card.text}</p>
            <div className="Link ml-auto text-sm border border-white font-bold transition-colors px-5 p-3 rounded-md hover:bg-white hover:text-blue-4 hover:border-transparent">
              자세히보기
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default CardContainer;
