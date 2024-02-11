import React from 'react';

import Image from 'next/image';

import ReqPageForm from '@/components/form/ReqPageForm';

function Page() {
  return (
    <section className="mx-auto w-[51.25rem] h-[80.4375rem] px-12 py-14 border-4 rounded-3xl border-[4472C4] flex flex-col items-center mb-2">
      <div className="flex items-center gap-5 mb-9">
        <div className="relative w-[5.4375rem] h-[5.4375rem]">
          <Image alt="7" src="/icons/상담신청.svg" fill className="absolute" />
        </div>
        <h1 className="text-[2rem] font-bold">수강 상담신청</h1>
      </div>
      <div className="flex flex-col items-center text-xl gap-2 font-bold mb-14 text-nowrap">
        <h2>전문가의 정확한 분석상담을 통해 학생의 취약부분과 잘못된 공부습관을 찾아야합니다.</h2>
        <h2>(주)베리타스교육에서 예비 고3 학생의 학습점검과 문제점을 찾아드립니다. </h2>
      </div>
      <ReqPageForm />
    </section>
  );
}

export default Page;
