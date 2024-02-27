import React from 'react';

import Image from 'next/image';

import BannerLayout from '@/components/common/BannerLayout';

export default function Page() {
  return (
    <div className="break-keep">
      <BannerLayout>
        <Image
          src={'/introPage/회사소개.jpg'}
          className="object-cover object-center"
          fill
          alt="회사소개배너"
          priority
        />
        <div className="absolute top-[30%] left-[10%]  font-bold text-5xl flex flex-col sm:flex-row gap-6  sm:text-6xl text-blue-4">
          <p className="transition-transform animate-show opacity-0">수능 성적은,</p>
          <p className="transition-transform animate-show_delay_1s opacity-0 ">수능 전문가에게</p>
        </div>
      </BannerLayout>
      <div className="mb-20">
        <article className="max-w-[1280px] mx-auto pt-12 pb-24 px-4 sm:px-20 ">
          <div className="w-full bg-blue-4 text-2xl md:text-3xl font-semibold text-center text-white py-6 px-9">
            <p>신뢰와 믿음 / 혁신적 마인드로 학생의 변화를 선도하고 있습니다.</p>
          </div>
          <div className="flex gap-10 items-start mt-16">
            <div className="w-[7px] h-[70px] mt-1 bg-blue-4" />
            <div>
              <div className="text-2xl md:text-3xl flex flex-col justify-center gap-2 font-semibold">
                <p>베리타스 교육은 강남 최고 강사들이</p>
                <p>1:1로 수준높은 강의를 제공하는 입시 전문회사 입니다.</p>
              </div>

              <p className="w-full break-keep mt-10 leading-[30px] font-medium pr-8">
                내신 성적이 부족해 수능에 올인하겠다는 학생 / 모의평가 성적이 내신성적에 비해 턱없이 부족한 학생 / 수능
                실패를 경험한 재수생/ 현재 자신의 위치보다 최상의 점수를 올리고자 하는 학생들에게 특화된 핵심 강의를
                최고의 강사진들을 통해 생동감 넘치는 강의를 제공하는 회사입니다. <br />
              </p>
            </div>
          </div>
          <div className="flex gap-10 items-start mt-10">
            <div className="w-[12px] h-[66px] bg-blue-4" />
            <div>
              <p className="text-2xl md:text-3xl font-semibold py-4">강남 최고의 강사진 보유</p>
              <p className="w-full break-keep mt-10 leading-[30px] font-medium pr-8">
                (주)베리타스교육은 서울 강남 지역에서 최고로 꼽히는 강사진을 자랑하며, 학생들의 고득점을 이루어낸 검증된
                강사들로 구성되어 있습니다. 이들은 수능문제의 <span className="text-blue-4 font-bold">출제 의도</span>를
                꿰뚫고, 다양한 풀이의 접근 방식을 제공하며, <span className="text-blue-4 font-bold">확인학습</span>을
                통한 학습을 보장하는 선생님들입니다. 또한, EBS 교재의 유형을 다양한 패턴으로 제공하고, 단순히 한 교재에
                의존하지 않고&nbsp;
                <span className="text-blue-4 font-bold">다양한 수험 자료</span>의 엑기스를 제공하여 학생들에게 풍부한
                학습 경험을 제공합니다. <br />
                (주)베리타스교육에서는 <span className="text-blue-4 font-bold">이런 선생님을 만날 수 있기에</span>{' '}
                학생들은 자신의 입시에 대한 확고한 신뢰를 가지고 있습니다.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
