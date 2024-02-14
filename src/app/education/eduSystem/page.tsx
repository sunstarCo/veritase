import React from 'react';

import Image from 'next/image';

import Breadcrumb from '@/components/common/Breadcrumb';

const data = [
  {
    title: '입시전문가의 진단',
    sub_title: '시범강의 및 대안제시',
    img: '/eduSystem/입시전문가의진단.jpg',
    text: '1:1 시범강의를 통한 학생수준 진단 및 현장에서 대안제시',
    desc: [
      '상위권 : 각 영역별 단원과 단원의 융합과정을 통한 심화학습 지도',
      '중위권 : 취약과목 집중지도 / 원리유형 및 개념, 철저히 분석',
      '하위권 : 전 영역 기본 개념과 수능 필수유형 지도',
    ],
  },
  {
    title: '최적의 맞춤형 전략수립',
    sub_title: '학습커리큘림 제공',
    img: '/eduSystem/맞춤형전략수립.jpg',
    text: '영역별 최약과목 분석에 따른 최적의 커리큘럼 제공',
    desc: ['수능 유형의 원리를 각 영역별 세부적으로 나눠서 강의', '수능 단원별 분석', '출제유형 난이도별 분석'],
  },
  {
    title: '영역별 전문강사의 노하우',
    sub_title: '전문가의 노하우 전수',
    img: '/eduSystem/전문강사의노하우.jpg',
    text: null,
    desc: ['각 영역별 최고의 강사진을 통한 수업제공', '학생의 성향에 따라 최적의 강사배정'],
  },
  {
    title: '체계적인 진행상황 체크',
    sub_title: '멘토링 시스템',
    img: '/eduSystem/진행상황체크.jpg',
    text: '완벽한 관리시스템',
    desc: [
      '최초 진단선생님을 통한 꾸준한 학습관리',
      '수능 교육자료 제공, 모의고사분석 및 대안제시',
      '상황에 따른 입시상담/수시/정시/논술/구술/면접 등',
    ],
  },
];

export default function Page() {
  return (
    <>
      <Breadcrumb title="학습관리시스템" sub_text="베리타스 교육의 체계적인 학습시스템" />
      <div className="max-w-[1280px] mx-auto">
        <Image
          src="/eduSystem/worry.svg"
          alt="어머님들이 우리 아이들을 위해 걱정하시는 리스트."
          sizes="100"
          width={0}
          height={0}
          style={{width: '100%'}}
          className="max-sm:hidden"
        />
        <div className="px-6 flex flex-col gap-5 my-14 sm:hidden">
          <Image
            src="/eduSystem/교육시스템모바일1.jpg"
            alt="어머님들이 우리 아이들을 위해 걱정하시는 리스트."
            sizes="100"
            width={0}
            height={0}
            style={{width: '100%'}}
          />
          <Image
            src="/eduSystem/교육시스템모바일2.svg"
            alt="어머님들이 우리 아이들을 위해 걱정하시는 리스트."
            sizes="100"
            width={0}
            height={0}
            style={{width: '100%'}}
          />
          <Image
            src="/eduSystem/교육시스템모바일3.svg"
            alt="어머님들이 우리 아이들을 위해 걱정하시는 리스트."
            sizes="100"
            width={0}
            height={0}
            style={{width: '100%'}}
          />
        </div>
        <div className="px-6 xl:px-24">
          <div className="flex gap-4 items-center">
            <div className="w-10">
              <Image
                src={'/icons/check.svg'}
                alt="check icon"
                sizes="100"
                width={0}
                height={0}
                style={{width: '100%'}}
              />
            </div>
            <p className="text-[1.75rem] font-medium">작은 부분 하나도 놓치지 않겠습니다!</p>
          </div>
          <div className="mx-4 flex flex-col gap-16 my-16 items-center lg:items-start">
            {data.map((card, i) => {
              return (
                <div
                  className="card flex flex-col lg:flex-row lg:justify-start gap-4 lg:gap-[3.25rem] max-lg:max-w-[40rem] "
                  key={i}>
                  <div className="w-full lg:max-w-96">
                    <Image src={card.img} alt={''} width={0} height={0} sizes="100" className="w-full" />
                  </div>
                  <article className="lg:mt-4">
                    <span className="font-bold ml-7">{card.sub_title}</span>
                    <div className="flex gap-5">
                      <div className="w-[5px] h-[64px] bg-blue-4" />
                      <div>
                        <p className="text-4xl text-blue-3 font-medium py-3">{card.title}</p>
                        <div className="p-2">
                          <p className="font-bold text-lg">{card.text}</p>
                          <p className="p-2 text-lg">
                            {card.desc.map((text, i) => {
                              return (
                                <span key={i}>
                                  <span className="font-bold">·</span>
                                  {text}
                                  <br />
                                </span>
                              );
                            })}
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
