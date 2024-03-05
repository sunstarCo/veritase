import React from 'react';

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
      <div className="flex flex-col max-md:gap-2 md:flex-row max-w-[1700px] w-full px-2 sm:px-6 md:px-12 my-16 break-keep opacity-0 animate-showUpper">
        {cardData.map(card => (
          <SystemCard card={card} key={card.step} />
        ))}
      </div>
    </div>
  );
}
