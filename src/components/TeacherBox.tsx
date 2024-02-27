import React from 'react';

import Image from 'next/image';

interface ITeacherProps {
  num: number;
}

export default function TeacherBox({num}: ITeacherProps) {
  const isOdd = num % 2 == 0;
  return (
    <>
      {num == 0 && (
        <h1 className="text-xl sm:text-3xl font-bold mb-10 text-nowrap">
          베리타스교육에서 이런 선생님을 만날 수 있습니다.
        </h1>
      )}
      {num == 4 && (
        <h1 className="text-xl sm:text-3xl font-bold mb-10 mt-12">엄격한 선발과정을 거친 최고의 선생님들만</h1>
      )}

      <div
        className={`w-full flex flex-col items-center mb-14 sm:mb-0 ${isOdd ? 'sm:flex-row-reverse' : 'sm:flex-row'}`}>
        <div className="w-full sm:w-1/2 h-[19rem] sm:h-[29rem]  relative">
          <Image src={`/teacherPage/teacherImage/수능강사${num}.jpg`} alt="수능강사이미지" objectFit="cover" fill />
        </div>
        <div className="w-full sm:w-1/2 h-[19rem] sm:h-[29rem]  relative">
          <Image
            src={`/teacherPage/teacherContent/수능강사컨텐츠${num}.svg`}
            alt="수능강사컨텐츠"
            objectFit="cover"
            fill
          />
        </div>
      </div>
    </>
  );
}
