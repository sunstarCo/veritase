import React from 'react';

import Image from 'next/image';

import IntroBanner from '@/components/IntroBanner';

export default function Page() {
  return (
    <div className="">
      <IntroBanner />
      <div className="bg-[url('/banner/회사소개.png')] bg-no-repeat bg-contain bg-right-bottom pb-40">
        <article className="max-w-[1280px] mx-auto p-8 px-20 ">
          <h3 className="flex gap-4 items-center ml-6 text-3xl font-bold">
            <Image
              src={'/icons/1등.svg'}
              alt="1등 아이콘"
              width={0}
              height={0}
              sizes="100"
              style={{width: 'fit-content'}}
            />
            One Stop 입시교육을 실현하는 완벽한 System
          </h3>
          <div className="flex gap-10 items-start mt-4">
            <div className="w-[7px] h-[66px] bg-blue-4" />
            <div>
              <p className="text-3xl">
                (주)베리타스 학원은 국내 최고강사들의 <br />
                수준높은 강의를 1: 1로 제공하는 입시 전문 교육기관입니다.
              </p>
              <p className="max-w-full break-keep mt-10 leading-[30px] font-medium pr-8">
                서울 강남일대 학원가 초일류 강사들의 생동감 넘치는 강의를 학생의{' '}
                <span className="text-blue-4 font-bold">개별 성향에 따라 최적의 맞춤학습을 제공</span>하는 회사입니다.{' '}
                <br />
                급변하는 입시 경향에 발맞춰 늘 새로운 학습 프로그램을 개발, 양질의 서비스를 제공하며 특히 대입수학 능력
                시험을 대비하는 <br />
                예비 수험생들에게 획일적 강의가 아닌 <span className="text-blue-4 font-bold">
                  특화된 핵심 강의
                </span>를 <span className="text-blue-4 font-bold">국내 최고 강사진</span>을 통해 생동감 넘치는 강의를
                제공하는 회사입니다.
              </p>
            </div>
          </div>
          <div className="flex gap-10 items-start mt-10">
            <div className="w-[7px] h-[66px] bg-blue-4" />
            <div>
              <p className="text-3xl py-4">강남 최고의 강사진 보유</p>
              <p className="max-w-full break-keep mt-10 leading-[30px] font-medium pr-8">
                (주)베리타스교육은 서울 강남 지역에서 최고로 꼽히는 강사진을 자랑하며, 학생들의 고득점을 이루어낸 검증된
                강사들로 <br />
                구성되어 있습니다. 이들은 수능문제의 <span className="text-blue-4 font-bold">출제 의도</span>를 꿰뚫고,
                다양한 풀이의 접근 방식을 제공하며, <span className="text-blue-4 font-bold">확인학습</span>을 통한
                <br />
                학습을 보장하는 선생님들입니다. 또한, EBS 교재의 유형을 다양한 패턴으로 제공하고, 단순히 한 교재에
                의존하지 않고 <br />
                <span className="text-blue-4 font-bold">다양한 수험 자료</span>의 엑기스를 제공하여 학생들에게 풍부한
                학습 경험을 제공합니다. <br />
                (주)베리타스교육에서는 <span className="text-red text-lg font-bold">
                  이런 선생님을 만날 수 있기에
                </span>{' '}
                학생들은 자신의 입시에 대한 확고한 신뢰를 가지고 있습니다.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
