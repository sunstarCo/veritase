import React from 'react';

import Image from 'next/image';

import Breadcrumb from '@/components/common/Breadcrumb';
import SystemCard from '@/components/education/SystemCard';

const cardData = [
  {
    step: 1,
    color: 'bg-[#4472c4]',
    title: '상담시작 / 만남단계    ',
    desc: ['학생 / 학부모의 당사방문', '학생의 현상태 진단, 분석', '목표대학과 성적분석'],
  },
  {
    step: 2,
    color: 'bg-[#ED7D31]',
    title: '과목별분석 / 상담단계',
    desc: [
      '현 학습상태 분석을 통한 단점 파악',
      '파악에 따른 대안제시',
      '학부모 / 학생의 분석 상담',
      '100% 만족 보장',
      '수업신청 여부 결정',
    ],
  },
  {
    step: 3,
    color: 'bg-[#FFC000]',
    title: '분석회의 / 관리단계      ',
    desc: ['과목별 강사진 배정', '첫 수업 일정 통보', '과목별 수업 만족도 모니터링'],
  },
  {
    step: 4,
    color: 'bg-[#70AD47]',
    title: '맞춤관리 / 평가단계      ',
    desc: [
      '개인별 맞춤관리 및 멘토링',
      '매월 기출모의평가 우편서비스',
      '기출 모의평가 오답체크 및 관리',
      '수시 / 정시 원서 접수 코치',
    ],
  },
];

export default function Page() {
  return (
    <div className="flex flex-col items-center">
      <Breadcrumb title="시스템소개" sub_text="베리타스 교육의 시스템" />
      <div className="w-full max-w-[1440px] px-2 md:px-12 mx-auto">
        <div className="relative w-full h-[calc(100vh-200px)] mt-10">
          <Image
            src={'/eduSystem/교육시스템.jpg'}
            alt=""
            // sm 미만에서는 CSS로 숨겨지므로 최소 크기만 받는다
            sizes="(max-width: 639px) 1px, (max-width: 1700px) 100vw, 1700px"
            fill
            className="object-cover object-center max-sm:hidden"
            priority
          />
          <Image
            src={'/eduSystem/교육시스템모바일.jpg'}
            alt=""
            sizes="(max-width: 639px) 100vw, 1px"
            fill
            className="object-cover object-center sm:hidden"
            priority
          />
          {/* 배경이 밝은 회색 벽이라 흰 글자 대비가 약하다. 글자가 놓이는 왼쪽만 눌러준다.
              이미지 뒤·텍스트 앞에 놓이려면 이 DOM 순서를 유지해야 한다
              (전부 z-index 없는 absolute 라 배치 순서가 곧 쌓임 순서다). */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/15 to-transparent" />

          <div className="absolute top-1/3 px-4 md:left-[10%] text-white break-keep">
            <h2 className="font-medium text-5xl md:text-6xl tracking-wide opacity-0 animate-showUpper">시스템소개</h2>
            <p
              className="mt-5 md:mt-7 text-[1.25rem] md:text-[1.75rem] font-medium leading-[1.5] opacity-0 animate-showUpper"
              // 제목보다 살짝 늦게. both 여야 지연 중에도 시작 프레임(아래쪽·투명)을 유지한다
              style={{animationDelay: '300ms', animationFillMode: 'both'}}>
              1:1 맞춤진단부터 최종완결까지..
              <br />
              오직 한사람을 위한 로드맵
            </p>
          </div>
        </div>
        <div className="flex flex-col max-md:gap-2 md:flex-row max-w-[1440px] w-full  my-16 break-keep opacity-0 animate-showUpper">
          {cardData.map(card => (
            <SystemCard card={card} key={card.step} />
          ))}
        </div>
      </div>
    </div>
  );
}
