import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

const logoImages1 = [
  {img: '교육부.png', link: 'https://www.moe.go.kr/'},
  {img: '한국교육과정평가원.png', link: 'https://www.kice.re.kr/'},
  {img: '서울특별시교육청.png', link: 'https://www.sen.go.kr/'},
];
const logoImages2 = [
  {img: '경기도교육청.png', link: 'https://www.goe.go.kr/'},
  {img: '한국대학교육협의회.png', link: 'http://www.kcue.or.kr/'},
  {img: '커리어넷.png', link: 'https://www.career.go.kr/'},
];

export function Footer() {
  return (
    <>
      <div className="">
        <div className="w-full py-8 bg-[#EAEAEA] flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-11">
          <div className="flex items-center gap-2 sm:gap-11">
            {logoImages1.map(logo => (
              <a href={logo.link} key={logo.img} className="max-w-[164px] min-w-[80px]">
                <Image alt="logo" width={0} height={0} sizes="100" style={{width: '100%'}} src={`/logo/${logo.img}`} />
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2 sm:gap-11">
            {logoImages2.map(logo => (
              <a href={logo.link} key={logo.img} className="max-w-[164px] min-w-[80px]">
                <Image alt="logo" width={0} height={0} sizes="100" style={{width: '100%'}} src={`/logo/${logo.img}`} />
              </a>
            ))}
          </div>
        </div>
        <footer className="w-full relative bottom-0 p-8 text-white bg-[#163B7B] flex justify-center items-center gap-4 lg:gap-9 text-nowrap  h-72 ">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center">
            <div className="max-w-[100px] min-w-[150px] sm:max-w-[294px] sm:min-w-[200px] mx-auto">
              <Image
                alt="footerLogo"
                src="/logo/베리타스푸터로고.png"
                width={0}
                height={0}
                sizes="100"
                style={{width: '100%', objectFit: 'cover'}}
                priority
              />
            </div>
            <div className="flex flex-col sm:flex-row  gap-3 mt-2">
              <p className="font-medium">(주)베리타스 교육</p>
              <div className="flex flex-col gap-0">
                <div className="flex flex-col md:flex-row text-sm">
                  <p>서울 강남구 도산대로27길 20, 2층(신사동, 오름빌딩)</p>
                  <span className="max-md:hidden">&nbsp;|&nbsp;</span>
                  <p>사업자 등록 번호 : 520-87-10407</p>
                </div>
                <p className="text-sm mb-2 sm:mb-2 flex items-center">
                  대표번호 : 02-512-8343 | 팩스 : 02-6952-9334
                  <Link href={'/admin'} className="text-gray-200 opacity-75 text-xs ">
                    &nbsp;관리자용
                  </Link>
                </p>
                <p className="text-xs">Copyright © (주)베리타스 교육.All rights reserved. </p>
              </div>
            </div>
          </div>
          <div className="bg-[#0C2F52] w-2/5 h-9 min:h-11 absolute bottom-0 left-0 rounded-tr-full"></div>
          <div className="bg-[#0C2F52] w-2/5 h-9 min:h-11 absolute bottom-0 right-0 rounded-tl-full"></div>
        </footer>
      </div>
    </>
  );
}
