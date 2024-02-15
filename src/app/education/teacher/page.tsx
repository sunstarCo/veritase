import React from 'react';

import Image from 'next/image';

import Breadcrumb from '@/components/common/Breadcrumb';
import Slider from '@/components/common/Slider';

export default function Page() {
  return (
    <div>
      <Breadcrumb title="수능강사" sub_text="최고의 강사진으로 구성된 베리타스 교육" />
      <div className="max-w-[1280px] mx-auto px-6 md:px-36 py-24">
        <section className="flex flex-col md:flex-row justify-center gap-16">
          <div className="w-full">
            <Image src={'/teacher/수능강사copywrite.svg'} alt="" width={0} height={0} sizes="100" className="w-full" />
          </div>
          <div className="w-full">
            <Image src={'/teacher/월계수.svg'} alt="" width={0} height={0} sizes="100" className="w-full" />
          </div>
        </section>
        <section className="mt-24 relative">
          <Image
            src={'/teacher/강사소개.svg'}
            alt=""
            width={0}
            height={0}
            sizes="100"
            className="w-full hidden md:block"
          />
          <Image
            src={'/teacher/강사소개_모바일.svg'}
            alt=""
            width={0}
            height={0}
            sizes="100"
            className="w-full md:hidden"
          />
          <div className="absolute top-[7%] left-1/2 -translate-x-1/3 w-1/2">
            <Image
              src={'/teacher/강사사진.png'}
              alt="강사사진"
              width={0}
              height={0}
              sizes="100"
              className="w-2/3 md:hidden"
            />
          </div>
        </section>
        <Slider />
      </div>
    </div>
  );
}
