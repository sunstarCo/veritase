import React from 'react';

import Image from 'next/image';

import Breadcrumb from '@/components/common/Breadcrumb';

const reviews_arr = Array.from({length: 14}, (v, i) => i + 1);

export default function page() {
  return (
    <>
      <Breadcrumb title="수강후기" sub_text="(주)베리타스교육의 100% 실제 후기" />
      <div className="w-full max-w-[1700px] mx-auto px-3 py-3">
        <div className="flex gap-4 items-center my-11">
          <div className="w-10">
            <Image src={'/icons/check.svg'} alt="check icon" sizes="100" width={0} height={0} style={{width: '100%'}} />
          </div>
          <p className="text-2xl font-bold">(주)베리타스교육을 경험한 학생과 학부모님들의 생생한 후기</p>
        </div>
        <div className="flex flex-col w-full items-center">
          {reviews_arr.map(i => (
            <div key={i} className="w-[80%] mb-16">
              <Image
                src={`/teacher/reviews/reviewPage/review_${i}.png`}
                alt="reviews"
                width={0}
                height={0}
                sizes="100"
                className="w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
