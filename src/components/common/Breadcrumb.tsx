import React from 'react';

import Link from 'next/link';

interface Props {
  title: string;
  sub_text?: string;
  sub_titles?: {
    title: string;
    path: string;
  }[];
  curParams?: string;
}

function Breadcrumb({title, sub_text, sub_titles = [], curParams = '***'}: Props) {
  const sub_len = sub_titles.length;
  let sub_width = '';
  switch (sub_len) {
    case 3:
      sub_width = 'w-1/3';
      break;

    case 5:
      sub_width = 'w-1/5';
      break;
    default:
      break;
  }
  return (
    <div className="w-full sm:max-w-[1700px] mx-auto px-2 sm:px-6 md:px-16 break-keep mt-4">
      <div className="flex items-center gap-8">
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
                className={`${sub_width} border-b-[7px] pb-5 text-center ${
                  sub_title.title.includes(curParams) ? 'border-blue-4' : 'border-sub-4'
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
