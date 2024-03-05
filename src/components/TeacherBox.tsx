import React from 'react';

import Image from 'next/image';

interface ITeacherProps {
  num: number;
  position: string;
}

export default function TeacherBox({num, position}: ITeacherProps) {
  const isOdd = num % 2 == 0;
  return (
    <>
      {num == 0 && (
        <h1 className="text-xl sm:text-3xl font-bold mb-10 text-nowrap pl-3">
          베리타스교육에서 이런 선생님을 만날 수 있습니다.
        </h1>
      )}
      {num == 4 && (
        <h1 className="text-xl sm:text-3xl font-bold mb-10 mt-20 pl-3">엄격한 선발과정을 거친 최고의 선생님들만</h1>
      )}

      <div
        className={`w-full flex flex-col items-center mb-14 sm:mb-0 ${isOdd ? 'sm:flex-row-reverse' : 'sm:flex-row'}`}>
        <div className="w-full sm:w-1/2 h-[19rem] sm:h-[29rem]  relative">
          <Image
            src={`/teacherPage/teacherImage/수능강사${num}.jpg`}
            alt="수능강사이미지"
            className={`${position} object-cover`}
            fill
            sizes="100"
          />
        </div>
        <div className="w-full flex items-center sm:w-1/2 sm:h-[29rem] bg-[#F3F3F3]">
          <Image
            src={`/teacherPage/teacherContent/수능강사컨텐츠${num}.svg`}
            alt="수능강사컨텐츠"
            width={0}
            height={0}
            sizes="100"
            className={`w-full min-h-[209px] ${num <= 3 ? 'object-cover' : 'object-contain'}`}
          />
        </div>
        {/* <div className="w-full sm:w-1/2 h-[19rem] sm:h-[29rem] relative">
        </div> */}
      </div>
    </>
  );
}
