'use client';
import React from 'react';

import Link from 'next/link';

import Slider from './common/Slider';

function MainReview() {
  return (
    <div className="w-full md:max-w-96 lg:w-72 mx-auto flex flex-col gap-4">
      <div className="p-4 text-white bg-blue-5 rounded w-full">
        <p className="text-xl sm:text-lg font-bold text-center">(주)베리타스교육 첫수업 반응</p>
        <div className="mt-4 flex flex-col gap-4">
          <Slider type="main" />
        </div>
      </div>
      <Link
        href={'/education/review'}
        className="w-full text-lg font-bold text-center p-2 text-white rounded bg-[#66B6BD]">
        후기 더보기 →
      </Link>
    </div>
  );
}

export default MainReview;
