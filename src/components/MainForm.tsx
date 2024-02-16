'use client';
import React from 'react';

import Link from 'next/link';

import Slider from './common/Slider';

function MainForm() {
  return (
    <div className="w-full md:max-w-96 lg:w-80 mx-auto flex flex-col gap-4">
      <div className="p-6 text-white bg-blue-5 rounded">
        <p className="text-lg font-bold text-center">(주)베리타스교육 첫수업 반응</p>
        <div className="mt-4 flex flex-col gap-4">
          <Slider type="main" />
        </div>
      </div>
      <Link href={'/'} className="w-full text-lg font-bold text-center p-2 text-white rounded bg-[#66B6BD]">
        후기 더보기 →
      </Link>
    </div>
  );
}

export default MainForm;
