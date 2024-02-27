'use client';
import React, {useState} from 'react';

import Image from 'next/image';

import BannerLayout from '@/components/common/BannerLayout';

export default function Page() {
  const [curImg, setCurImg] = useState(0);

  const images = [
    '/reviews/reviewPage/review1.jpg',
    '/reviews/reviewPage/review2.jpg',
    '/reviews/reviewPage/review3.jpg',
    '/reviews/reviewPage/review4.jpg',
  ];
  return (
    <BannerLayout className="flex justify-center items-center">
      {/* <Breadcrumb title="수강후기" sub_text="(주)베리타스교육의 100% 실제 후기" /> */}
      <Image
        src={'/reviews/review_bg.jpg'}
        alt=""
        width={0}
        height={0}
        sizes="100"
        fill
        className="object-cover object-center"
      />
      {/* 
        <Image
        src={'/reviews/모바일사진.svg'}
        alt=""
        width={0}
        height={0}
        sizes="100"
        className="object-cover object-center w-80"
      /> */}
      <div className="absolute flex max-md:flex-col gap-4 md:justify-evenly w-full items-center mt-2 max-w-[1500px]">
        <div className="text-white">
          <h2 className="text-5xl md:text-6xl font-medium tracking-wide">수강후기</h2>
          <p className="text-2xl font-medium mt-4 md:mt-8">(주)베리타스교육의 100% 실제 후기</p>
        </div>
        <div
          onClick={() => {
            if (curImg === images.length - 1) {
              setCurImg(0);
            } else {
              setCurImg(prev => prev + 1);
            }
          }}
          className="cursor-pointer bg-[url('/reviews/모바일사진.svg')] p-3 bg-cover w-[240px] h-[430px] md:h-[550px] md:w-[310px] flex items-center">
          <Image src={images[curImg]} alt="" width={0} height={0} sizes="100" className="w-[220px] md:w-[285px]" />
        </div>
      </div>
    </BannerLayout>
  );
}
