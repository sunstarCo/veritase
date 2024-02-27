import React from 'react';

import Breadcrumb from '@/components/common/Breadcrumb';
import Slider from '@/components/common/Slider';

export default function page() {
  return (
    <>
      <Breadcrumb title="수강후기" sub_text="(주)베리타스교육의 100% 실제 후기" />
      <div className="mt-4 w-full flex flex-col justify-center items-center relative from-10% via-25% to-90% from-blue-4 via-black to-blue-4 bg-gradient-to-t h-[calc(100vh-99px)] md:h-[calc(100vh-122px)] lg:h-[calc(100vh-87.29px)] xl:h-[calc(100vh-227.3px)]">
        {/* <Image
          src={'/reviews/review_bg.jpg'}
          alt=""
          width={0}
          height={0}
          sizes="100"
          fill
          className="object-cover object-center"
        /> */}
        {/* 
        <Image
          src={'/reviews/모바일사진.svg'}
          alt=""
          width={0}
          height={0}
          sizes="100"
          className="object-cover object-center w-80"
        /> */}
        <div className="absolute bg-[url('/reviews/모바일사진.svg')] p-6 bg-cover h-[550px] flex items-center">
          <Slider type="main" />
        </div>
      </div>
    </>
  );
}
