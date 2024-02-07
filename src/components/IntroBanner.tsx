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
        style={{width: '100%'}}
        alt="회사소개배너"
        className="2xl:hidden"
      />
      <Image
        src={'/banner/회사소개배너.png'}
        width={0}
        sizes="100"
        height={0}
        style={{width: '100%', objectFit: 'cover'}}
        alt="회사소개배너"
        className="max-2xl:hidden"
      />
      <div className="absolute top-1/2 -translate-y-1/2 w-full px-4">
        <div className="text-white font-urbanist text-2xl lg:text-4xl leading-normal w-full xl:max-w-[1280px] mx-auto px-12">
          <p className=""> &ldquo;수능 성적은 수능 전문가에게&rdquo;</p>
          <p className="font-semibold">&nbsp;(주)베리타스 교육</p>
        </div>
      </div>
    </div>
  );
}

export default IntroBanner;
