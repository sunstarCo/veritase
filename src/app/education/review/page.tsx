'use client';
import React, {useState} from 'react';

import Image from 'next/image';

import BannerLayout from '@/components/common/BannerLayout';

export default function Page() {
  const [curImg, setCurImg] = useState(1);
  const onClickHandler = () => {
    if (curImg === 78) {
      setCurImg(1);
    } else {
      setCurImg(prev => prev + 1);
    }
  };

  return (
    <BannerLayout className="flex justify-center items-start sm:items-center">
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
      <div className="absolute flex max-md:flex-col gap-16 md:justify-evenly w-full items-center mt-2 max-w-[1400px] max-sm:mt-16">
        <div className="text-white">
          <h2 className="text-5xl md:text-6xl font-medium tracking-wide">수강후기</h2>
          <p className="text-2xl font-medium mt-4 md:mt-8">(주)베리타스교육의 100% 실제 후기</p>
        </div>
        <div
          onClick={onClickHandler}
          className="cursor-pointer bg-[url('/reviews/모바일사진.svg')] p-3 bg-cover w-[240px] h-[430px] md:h-[550px] md:w-[310px] flex items-center">
          <Image
            src={`https://onuqprohgtghlcbucalq.supabase.co/storage/v1/object/public/reviews/${curImg}.jpg`}
            alt=""
            width={0}
            height={0}
            sizes="100"
            className="w-[220px] md:w-[285px]"
            placeholder="blur"
            blurDataURL={`/reviews/reviewPage/review1.jpg`}
          />
        </div>
      </div>
    </BannerLayout>
  );
}
