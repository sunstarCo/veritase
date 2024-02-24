import React from 'react';

import Image from 'next/image';

import Breadcrumb from '@/components/common/Breadcrumb';

// const data = [
//   {
//     title: '입시전문가의 진단',
//     sub_title: '시범강의 및 대안제시',
//     img: '/eduSystem/입시전문가의진단.jpg',
//     text: '1:1 시범강의를 통한 학생수준 진단 및 현장에서 대안제시',
//     desc: [
//       '상위권 : 각 영역별 단원과 단원의 융합과정을 통한 심화학습 지도',
//       '중위권 : 취약과목 집중지도 / 원리유형 및 개념, 철저히 분석',
//       '하위권 : 전 영역 기본 개념과 수능 필수유형 지도',
//     ],
//   },
//   {
//     title: '최적의 맞춤형 전략수립',
//     sub_title: '학습커리큘림 제공',
//     img: '/eduSystem/맞춤형전략수립.jpg',
//     text: '영역별 최약과목 분석에 따른 최적의 커리큘럼 제공',
//     desc: ['수능 유형의 원리를 각 영역별 세부적으로 나눠서 강의', '수능 단원별 분석', '출제유형 난이도별 분석'],
//   },
//   {
//     title: '영역별 전문강사의 노하우',
//     sub_title: '전문가의 노하우 전수',
//     img: '/eduSystem/전문강사의노하우.jpg',
//     text: null,
//     desc: ['각 영역별 최고의 강사진을 통한 수업제공', '학생의 성향에 따라 최적의 강사배정'],
//   },
//   {
//     title: '체계적인 진행상황 체크',
//     sub_title: '멘토링 시스템',
//     img: '/eduSystem/진행상황체크.jpg',
//     text: '완벽한 관리시스템',
//     desc: [
//       '최초 진단선생님을 통한 꾸준한 학습관리',
//       '수능 교육자료 제공, 모의고사분석 및 대안제시',
//       '상황에 따른 입시상담/수시/정시/논술/구술/면접 등',
//     ],
//   },
// ];

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
  return (
    <>
      <Breadcrumb title="학습관리시스템" sub_text="베리타스 교육의 체계적인 학습시스템" />
      <div className="relative w-full h-[calc(100vh-200px)] mt-10 mx-auto">
        <Image
          src={'/eduSystem/학습관리시스템.jpg'}
          alt=""
          sizes="100"
          width={0}
          height={0}
          fill
          className="object-cover object-center"
        />
        <h2 className="absolute font-medium text-6xl tracking-wide text-white top-1/3 left-1/4">학습관리시스템</h2>
      </div>
      <div className="flex flex-col md:flex-row gap-4 max-w-[1700px] mx-auto my-20 px-6 break-keep">
        {cardData.map((card, i) => (
          <div key={i} className="w-full">
            <div className="bg-blue-4 py-8 px-6 md:p-12  text-white">
              <p className="text-2xl md:text-4xl font-semibold">{card.title}</p>
              <p className="text-xl md:text-2xl font-medium mt-2">
                ({card.times[0]}회 ~ {card.times[1]}회)
              </p>
            </div>
            <div className="bg-[#f5f5f5] py-8 px-4 h-[200px] md:h-[350px]">
              {card.desc.map((text, i) => (
                <div key={i} className="px-2 mb-8 h-24">
                  <p className="text-xl font-semibold">- {text.title}</p>
                  <div className="px-8 mt-2">
                    {text.content.map((text, i) => (
                      <p key={i} className="list-item">
                        {text}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
