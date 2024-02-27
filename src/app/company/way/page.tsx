'use client';
import React from 'react';

import Image from 'next/image';

import BannerLayout from '@/components/common/BannerLayout';
import KakaoMap from '@/components/KakaoMap';

export default function Page() {
  return (
    <div>
      <BannerLayout>
        <Image
          src={'/introPage/찾아오시는길.jpg'}
          className="object-right object-cover max-sm:hidden"
          sizes="100"
          fill
          alt="회사소개배너"
          priority
        />
        <Image
          src={'/introPage/찾아오시는길_모바일.jpg'}
          className="object-right object-cover sm:hidden"
          fill
          sizes="100"
          alt="회사소개배너"
          priority
        />
        <div className="w-full h-full bg-white opacity-20 sm:hidden" />
        <p className="absolute top-[30%] left-[15%] font-bold text-6xl text-blue-4 opacity-0 animate-showUpper">
          찾아오시는 길
        </p>
      </BannerLayout>
      <article className="max-w-[1700px] mx-auto p-8 px-4 md:px-10">
        <div className="flex flex-col gap-7 justify-center items-center ">
          <section className="w-full">
            <div className="w-full h-[35rem]">
              <KakaoMap />
            </div>
          </section>
          <section className="w-full flex flex-col sm:flex-row">
            <ul className="list-disc flex flex-col gap-7 text-[#3F9EC4] font-medium px-4 md:px-10 sm:text-nowrap">
              <li className="text">
                주소 (네비게이션 이용)
                <p className="text-black text-lg sm:text-xl font-bold mt-3">
                  서울 강남구 도산대로27길20, 2층(신사동, 오름빌딩)
                </p>
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

            <ul className="list-disc flex flex-col gap-7 text-[#3F9EC4] font-medium px-4 md:px-10 text-nowrap">
              <li className="text">
                연락처
                <div className="flex flex-col justify-center my-4 gap-5 ">
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
              </li>
            </ul>
          </section>
        </div>
      </article>
    </div>
  );
}
