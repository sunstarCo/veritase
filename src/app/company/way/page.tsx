'use client';
import React from 'react';

import Image from 'next/image';

import IntroBanner from '@/components/IntroBanner';
import KakaoMap from '@/components/KakaoMap';

export default function Page() {
  return (
    <div>
      <IntroBanner />
      <article className="max-w-[1280px] mx-auto p-8 px-20">
        <div className="flex gap-10 items-center mt-4 mb-14">
          <div className="w-[7px] h-[60px] bg-blue-4" />
          <p className="text-3xl">찾아오시는 길</p>
        </div>
        <div className="flex flex-col-reverse justify-center sm:flex-row">
          <section>
            <ul className="list-disc flex flex-col gap-7 text-[#3F9EC4] font-medium  px-10  text-nowrap">
              <li className="text">
                주소 (네비게이션 이용)
                <p className="text-black text-xl font-bold mt-3">서울 강남구 도산대로27길20, 2층(신사동, 오름빌딩)</p>
              </li>
              <li className="flex flex-col gap-3 pb-12">
                대중교통 이용
                <div className="flex items-center gap-2 text-black">
                  <div className="icon-box">
                    <Image alt="3" src="/icons/3호선.svg" fill className="absolute" />
                  </div>
                  <p>지하철 3호선 (압구정역 4번출구)</p>
                  <p className="text-xs">직진 도보 7-8분 내외</p>
                </div>
                <div className="flex items-center gap-2 text-black">
                  <div className="icon-box">
                    <Image alt="7" src="/icons/7호선.svg" fill className="absolute" />
                  </div>
                  <p>지하철 7호선 (학동역 7,8번출구)</p>
                  <p className="text-xs"> 직진 도보 7-8분 내외</p>
                </div>
              </li>
            </ul>
            <div className="flex flex-col w-[30.75rem] gap-7 border-y-2 px-10 py-5 border-[#173FB8]">
              <div className="flex items-center gap-3">
                <div className="icon-box">
                  <Image alt="phone" src="/icons/phone.svg" fill className="absolute" />
                </div>
                <p>02-512-8343</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="icon-box">
                  <Image alt="email" src="/icons/email.svg" fill className="absolute" />
                </div>
                <p>veritase2f@naver.com</p>
              </div>
            </div>
          </section>
          <section>
            <div className="w-[32rem] h-[21rem]">
              <KakaoMap />
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}
