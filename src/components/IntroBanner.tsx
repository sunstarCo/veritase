import React from 'react';

import Image from 'next/image';

function IntroBanner() {
  return (
    <div className="relative">
      <Image
        src={'/banner/회사소개배너.png'}
        width={0}
        sizes="100"
        height={0}
        style={{width: '100%', objectFit: 'cover'}}
        alt="회사소개배너"
        className=" max-h-72 min-h-60"
      />
      <div className="absolute top-1/2 -translate-y-1/2 w-full px-4">
        <div className="text-white font-urbanist text-3xl lg:text-3xl xl:text-4xl w-full xl:max-w-[1280px] mx-auto px-12">
          <p className=""> &ldquo;수능 성적은 수능 전문가에게&rdquo;</p>
          <p className="font-semibold mt-4">&nbsp;(주)베리타스 교육</p>
        </div>
      </div>
    </div>
  );
}

export default IntroBanner;
