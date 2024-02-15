'use client';
import React, {useState} from 'react';

import Image from 'next/image';
import Link from 'next/link';

function NavCard() {
  const [hover, setHover] = useState('');
  return (
    <div className="flex gap-3 max-sm:justify-center">
      <Link
        href={'/plan/eduPeriod'}
        onMouseOver={() => setHover('first')}
        onMouseLeave={() => setHover('')}
        className="flex sm:flex-none relative w-40 h-20 sm:w-[32%] sm:h-[10rem] bg-blue-3">
        <Image
          src={'/icons/plus.svg'}
          alt="plus"
          width={0}
          height={0}
          sizes="100"
          style={{width: 'fit-content'}}
          className={`absolute top-1 right-0 sm:top-3 sm:right-4 max-sm:scale-50 transition-transform  ${
            hover === 'first' ? 'animate-rotateRight' : ' rotate-0'
          }`}
        />
        <div className="text-white px-5 flex items-center justify-center sm:block sm:pt-12">
          <p className="font-bold text-lg sm:mb-3">입시전략</p>
          <div className="text-sm font-normal hidden sm:block ">
            <p>학생마다 다 다른 입시전략</p>
            <p>나에게 맞는 입시전략으로 인서울!</p>
          </div>
        </div>
      </Link>
      <Link
        href={'/education/eduSystem'}
        onMouseOver={() => setHover('second')}
        onMouseLeave={() => setHover('')}
        className="flex sm:flex-none relative w-40 h-20 sm:w-[32%] sm:h-[10rem] bg-blue-4">
        <Image
          src={'/icons/plus.svg'}
          alt="plus"
          width={0}
          height={0}
          sizes="100"
          style={{width: 'fit-content'}}
          className={`absolute top-1 right-0 sm:top-3 sm:right-4 max-sm:scale-50 transition-transform  ${
            hover === 'second' ? 'animate-rotateRight' : ' rotate-0'
          }`}
        />
        <div className="text-white px-5 flex items-center justify-center sm:block sm:pt-12">
          <p className="font-bold text-lg sm:mb-3">회사소개</p>
          <div className="text-sm font-normal hidden sm:block ">
            <p>1대1 대면 과외로</p>
            <p>학생의 상황에 맞는 올바른 수업</p>
          </div>
        </div>
      </Link>
      <Link
        href={'/education/qna'}
        onMouseOver={() => setHover('third')}
        onMouseLeave={() => setHover('')}
        className="flex sm:flex-none relative w-40 h-20 sm:w-[32%] sm:h-[10rem] bg-blue-3">
        <Image
          src={'/icons/plus.svg'}
          alt="plus"
          width={0}
          height={0}
          sizes="100"
          style={{width: 'fit-content'}}
          className={`absolute top-1 right-0 sm:top-3 sm:right-4 max-sm:scale-50 transition-transform  ${
            hover === 'third' ? 'animate-rotateRight' : ' rotate-0'
          }`}
        />
        <div className="text-white px-5 flex items-center justify-center sm:block sm:pt-12">
          <p className="font-bold text-lg sm:mb-3">자주하는질문</p>
          <div className="text-sm font-normal hidden sm:block ">
            <p>성적이 오르지 않는 이유</p>
            <p>실수를 줄이는 법</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default NavCard;
