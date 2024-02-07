import Image from 'next/image';
import React from 'react';

export function Footer() {
  return (
    <footer className="w-full relative  bottom-0 p-8 text-white bg-[#163B7B] flex justify-center items-center gap-9 text-nowrap  h-72 text-sub6">
      <div className="flex flex-col gap-2 pb-5 sm:flex-row sm:gap-8">
        <div className="max-w-[294px] min-w-[200px] sm:max-w-[294px] sm:min-w-[200px] sm:mr-8">
          <Image
            alt="footerLogo"
            src="/logo/베리타스푸터로고.png"
            width={0}
            height={0}
            sizes="100"
            style={{width: '100%'}}
            priority
          />
        </div>
        <p className="font-medium">(주)베리타스 교육</p>
        <div className="flex flex-col gap-1">
          <div className="flex flex-col font-[350px] sm:flex-row text-sm">
            <p>서울 강남구 도산대로27길20, 2층(신사동, 오름빌딩)</p>
            <p>사업자 등록 번호:520-87-10407</p>
          </div>
          <p className="text-sm mb-2">대표번호 : 02-512-8343 | 팩스 : 02-6952-9334</p>
          <p className="text-xs">Copyright © (주)베리타스 교육.All rights reserved.</p>
        </div>
      </div>
      <div className="bg-[#0C2F52] w-2/5 h-11 absolute bottom-0 left-0 rounded-tr-full"></div>
      <div className="bg-[#0C2F52] w-2/5 h-11 absolute bottom-0 right-0 rounded-tl-full"></div>
    </footer>
  );
}
