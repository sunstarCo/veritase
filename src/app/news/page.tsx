import React from 'react';

import Link from 'next/link';

export const newsMockData = [
  {
    id: 'asd',
    origin: 'www.hehlwkdsjsdjlsd.com',
    title: "2028 대학입시제도 개편 확정안 '사교육비 경감 vs 수능 내신영향력 약화'",
    content:
      "[입시톡톡] 2028 대학입시제도 개편 확정안 '사교육비 경감 vs 수능∙내신 영향력 약화' ... 확정안의 주요 내용은 2028 수능부터 심화수학 없이 핵심적인 과목 위주로",
  },
  {
    id: 'dsa',
    origin: 'www.hehlwkdsjsdjlsd.com',
    title: "2028 대학입시제도 개편 확정안 '사교육비 경감 vs 수능 내신영향력 약화'",
    content:
      " [입시톡톡] 2028 대학입시제도 개편 확정안 '사교육비 경감 vs 수능∙내신 영향력 약화' ... 확정안의 주요 내용은 2028 수능부터 심화수학 없이 핵심적인 과목 위주로 [입시톡톡] 2028 대학입시제도 개편 확정안 '사교육비 경감 vs 수능∙내신 영향력 약화' ... 확정안의 주요 내용은 2028 수능부터 심화수학 없이 핵심적인 과목 위주로 [입시톡톡] 2028 대학입시제도 개편 확정안 '사교육비 경감 vs 수능∙내신 영향력 약화' ... 확정안의 주요 내용은 2028 수능부터 심화수학 없이 핵심적인 과목 위주로 [입시톡톡] 2028 대학입시제도 개편 확정안 '사교육비 경감 vs 수능∙내신 영향력 약화' ... 확정안의 주요 내용은 2028 수능부터 심화수학 없이 핵심적인 과목 위주로 [입시톡톡] 2028 대학입시제도 개편 확정안 '사교육비 경감 vs 수능∙내신 영향력 약화' ... 확정안의 주요 내용은 2028 수능부터 심화수학 없이 핵심적인 과목 위주로",
  },
  {
    id: 'adw',
    origin: 'www.hehlwkdsjsdjlsd.com',
    title: "2028 대학입시제도 개편 확정안 '사교육비 경감 vs 수능 내신영향력 약화'",
    content:
      "[입시톡톡] 2028 대학입시제도 개편 확정안 '사교육비 경감 vs 수능∙내신 영향력 약화' ... 확정안의 주요 내용은 2028 수능부터 심화수학 없이 핵심적인 과목 위주로",
  },
];

export default function Page() {
  const data = newsMockData;
  return (
    <div className="max-w-[1280px] mx-auto px-20">
      {/* header */}
      <div className="pb-2 border-b-2 border-black">
        <div className="flex gap-5 items-center">
          <h3 className="text-3xl font-bold">입시뉴스</h3>
          <p className="opacity-70">누구보다 빠르게 입시 뉴스를 알아보세요!</p>
        </div>
        <div className="w-full justify-end flex gap-8 py-2">
          <p>총 216건</p>
          <p>현재페이지 1/22</p>
        </div>
      </div>
      {/* body */}
      <div className="p-2 mt-4 flex flex-col">
        {data.map((news, i) => {
          return (
            <Link href={`/news/${news.id}`} key={i} className="w-full border-b p-3 pb-5">
              <p className="text-lg font-bold">{news.title}</p>
              <p className="mt-4 text-sub-5 w-11/12 whitespace-nowrap overflow-ellipsis overflow-hidden break-keep ">
                {news.content}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
