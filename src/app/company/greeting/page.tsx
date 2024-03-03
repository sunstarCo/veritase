import React from 'react';

import Image from 'next/image';

import BannerLayout from '@/components/common/BannerLayout';

export default function Page() {
  return (
    <>
      <div className="w-full mb-7 relative">
        <BannerLayout>
          <Image
            src={'/introPage/인사말.jpg'}
            className="object-cover object-right sm:object-center"
            fill
            alt="회사소개배너"
            priority
          />
          <div className="absolute top-[30%] left-[10%]  font-bold text-5xl flex flex-col sm:flex-row gap-6  sm:text-6xl text-blue-4">
            <p className="transition-transform animate-show opacity-0">수능 성적은,</p>
            <p className="transition-transform animate-show_delay_1s opacity-0 ">수능 전문가에게</p>
          </div>
        </BannerLayout>
        <div className="flex gap-10 items-start w-full xl:max-w-[1700px] mx-auto px-4 md:px-20 pt-20">
          <div className="w-[7px] h-[66px] bg-blue-4" />
          <div>
            <p className="text-3xl py-4 relative w-fit">(주) 베리타스 교육은...</p>
            <p className="w-full break-keep mt-10 leading-[30px] font-medium pr-8">
              수많은 학생들이 가지는 저마다 다른꿈을 획일적인 주입식 교육으로는 실현할 수 없습니다. <br />
              교육은 무엇보다 한사람 한사람의 꿈을 가질 수 있게 하는 근간입니다. <br />
              <br />
              저희 (주)베리타스교육은 한사람 한사람의 꿈을 소중히 여기고 개인의 적성과 흥미를 고려하여{' '}
              <span className="text-blue-4 font-bold">학습의 성취감과 자신감</span>을 가질 수 있게 하는{' '}
              <span className="text-blue-4 font-bold">개인별, 수준별 맞춤학습을 지향</span>합니다. <br /> 또한, 학습자와
              교수자 모두를 위한 교육환경의 실현과 미래의 새로운 교육환경은 교수자와 학습자, 학습자와 학습자간 뿐만
              아니라 다차원적인 상호작용이 구현되는 학습으로 구현됩니다. <br /> <br />
              장벽없이 열린교육의 패러다임에 기초한 배움의 터전으로, (주)베리타스교육 임직원은 배우고 가르치는 일에 모든
              사람이 만족하는 교육이 펼쳐지는 세상을 만들어 가도록 최선의 노력을 다하겠습니다. <br /> <br />
              감사합니다.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
