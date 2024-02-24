import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import ReviewCarousel from '@/components/common/antd/ReviewCarousel';
import Breadcrumb from '@/components/common/Breadcrumb';

export default function Page() {
  return (
    <div>
      <Breadcrumb title="수능강사" sub_text="최고의 강사진으로 구성된 베리타스 교육" />
      <div className="max-w-[1700px] mx-auto px-6 md:px-36 py-12">
        <p className="text-lg text-center font-semibold px-4 p-2 text-white bg-blue-4 rounded w-full mb-16">
          타사에서 강사 정보 유출사례가 빈번하여, 당사는 모든 강사진들의 정보를 홈페이지에 공개하지 않습니다.
        </p>
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
            src={'/teacher/강사소개.png'}
            alt=""
            width={0}
            height={0}
            sizes="100"
            className="w-full hidden md:block"
          />
          <Image
            src={'/teacher/강사소개_모바일.png'}
            alt=""
            width={0}
            height={0}
            sizes="100"
            className="w-full md:hidden"
          />
        </section>
        <div className="mt-12 w-full">
          {/* <div className="max-lg:hidden">
            <Slider type="teacher" />
          </div> */}
          <ReviewCarousel />
        </div>
        <div className="mt-4 flex justify-end w-full">
          <Link href={'/education/review'} className=" text-lg text-center p-2 text-white rounded bg-blue-4">
            후기 더보기 →
          </Link>
        </div>
      </div>
    </div>
  );
}
