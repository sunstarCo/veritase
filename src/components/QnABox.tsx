'use client';

import React, {useState} from 'react';

import Image from 'next/image';

function QnABox({question, answer, index}: {question: string; answer: JSX.Element; index: number}) {
  const [isOpen, setIsOpen] = useState(index === 0);
  return (
    <div className="px-6 sm:px-12 md:px-24">
      <div className="flex justify-between items-center border-b py-2 pr-7" onClick={() => setIsOpen(prev => !prev)}>
        <div className="flex gap-3 items-center">
          <div className="w-8">
            <Image src={'/icons/Search.svg'} width={0} height={0} sizes="100" className="w-full" alt="돋보기" />
          </div>
          <p className="text-2xl font-bold">{question}</p>
        </div>
        <button className="">
          <Image
            src={'/icons/up.png'}
            className={`w-[26px] ${isOpen || 'rotate-180'}`}
            width={0}
            height={0}
            sizes="100"
            alt="여닫는 버튼"
          />
        </button>
      </div>
      <div className="px-4 md:px-14 pt-5">{isOpen && answer}</div>
    </div>
  );
}

export default QnABox;
