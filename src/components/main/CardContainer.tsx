import React from 'react';

import Link from 'next/link';
import './cardStyle.css';

const cardData = [
  {
    img: 'bg-[url(/mainPage/회사소개.jpg)] bg-center bg-cover',
    path: '/company/greeting',
    title: '회사소개',
    text: '여러분의 목표를 달성해드립니다',
  },
  {
    img: 'bg-[url(/mainPage/교육시스템.jpg)] bg-cover bg-center',
    path: '/education/system',
    title: '교육시스템',
    text: '목표달성까지 함께합니다',
  },
  {
    img: 'bg-[url(/mainPage/입시전략.jpg)] bg-center bg-cover',
    path: '/plan/eduPeriod',
    title: '입시전략',
    text: '지금부터의 전략이 중요합니다',
  },
  {
    img: 'bg-[url(/mainPage/후기.jpg)] bg-center bg-cover',
    path: '/education/review',
    title: '회원들의 반응도',
    text: '당사 회원들의 생생한 후기',
  },
];

function CardContainer() {
  return (
    <div className="flex gap-4 w-full max-w-[1760px] mx-auto mb-20 overflow-x-scroll lg:overflow-hidden">
      {cardData.map((card, i) => (
        <Link
          key={i}
          href={card.path}
          className={`${card.img} card bg-no-repeat min-h-[400px] md:min-h-[500px] xl:min-h-[600px] flex items-end min-w-[210px] md:min-w-[260px] md:w-1/4 hover:w-[50%] break-keep transition-all duration-500 ease-out rounded-lg overflow-hidden`}>
          <div className="article text-white from-[rgba(0,0,0,0.4)] to-transparent w-full px-8 pb-8 pt-8 min-h-[180px] flex flex-col bg-gradient-to-t gap-3 justify-end">
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
