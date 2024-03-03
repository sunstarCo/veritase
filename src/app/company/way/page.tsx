'use client';
import React, {useState} from 'react';

import Image from 'next/image';

import BannerLayout from '@/components/common/BannerLayout';
import KakaoMap from '@/components/KakaoMap';

import WayBanner from '../../../../public/introPage/찾아오시는길.jpg';
import WayBannerMo from '../../../../public/introPage/찾아오시는길_모바일.jpg';
export default function Page() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div>
      <BannerLayout>
        <Image
          src={WayBanner}
          className="object-right object-cover max-sm:hidden"
          sizes="100"
          fill
          alt="회사소개배너"
          onLoad={() => setIsImageLoaded(true)}
          priority
          placeholder="blur"
        />
        <Image
          src={WayBannerMo}
          className="object-right object-cover sm:hidden"
          fill
          sizes="100"
          alt="회사소개배너"
          priority
          placeholder="blur"
        />
        <div className="w-full h-full bg-white opacity-20 sm:hidden" />
        <div
          className={`absolute flex items-center gap-10 top-[5%] left-[10%] sm:top-[30%] sm:left-[15%] opacity-0 ${
            isImageLoaded && `animate-show`
          }`}>
          <div className="w-[7px] h-[54px] sm:h-[88px] bg-blue-4" />
          <p className=" font-bold text-5xl sm:text-6xl ">찾아오시는 길</p>
        </div>
      </BannerLayout>
      <article className="max-w-[1700px] mx-auto p-8 px-4 md:px-10">
        <div className="flex flex-col gap-7 justify-center items-start ">
          <section className="w-full">
            <div className="w-full h-[35rem] border-2 border-blue-5">
              <KakaoMap />
            </div>
          </section>
          <section className="w-full max-w-[1000px] flex flex-col sm:flex-row sm:justify-between">
            <ul className="list-disc flex flex-col gap-7 text-[#3F9EC4] font-medium px-4 md:px-10 sm:text-nowrap">
              <li>
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
                    <p className="text-lg sm:text-xl font-bold">02-512-8343</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="icon-box">
                      <Image alt="email" src="/icons/email.svg" fill className="absolute" />
                    </div>
                    <p className="text-lg sm:text-xl font-bold">veritase2f@naver.com</p>
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
