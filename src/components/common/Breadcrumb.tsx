import React from 'react';

import Link from 'next/link';

interface Props {
  title: string;
  sub_text?: string;
  sub_titles?: {
    title: string;
    path: string;
    /** 탭 이름에 파라미터 문자열이 들어있지 않은 경우(예: 탭 '사회탐구' / 파라미터 '사탐') 직접 지정한다 */
    active?: boolean;
  }[];
  curParams?: string;
}

function Breadcrumb({title, sub_text, sub_titles = [], curParams = '***'}: Props) {
  const sub_len = sub_titles.length;
  return (
    <div className="w-full sm:max-w-[1700px] mx-auto px-2 sm:px-6 md:px-12 break-keep mt-16">
      <div className="flex items-center justify-between px-5 gap-8">
        <h3 className="text-xl sm:text-2xl md:text-[1.75rem] font-bold px-4">{title}</h3>
        {sub_text && <p className="text-sub-5">{sub_text}</p>}
      </div>
      {sub_len === 0 || (
        <div className="w-full flex mt-4 sm:mt-8 ">
          {sub_titles?.map(sub_title => {
            return (
              <Link
                key={sub_title.title}
                href={sub_title.path}
                // flex-1 이면 항목이 몇 개든 균등 분할된다(이전엔 3개·5개만 처리하는 스위치였다)
                className={`flex-1 border-b-[7px] pb-5 text-center ${
                  (sub_title.active ?? sub_title.title.includes(curParams)) ? 'border-blue-4' : 'border-sub-4'
                }`}>
                {sub_title.title}
              </Link>
            );
          })}
        </div>
      )}
      {sub_len === 0 && (
        <div className="w-full h-[7px] bg-sub-4 relative mt-5">
          <div className="absolute left-0 top-0 h-full bg-blue-4 w-1/3" />
        </div>
      )}
    </div>
  );
}

export default Breadcrumb;
