import React from 'react';

import Link from 'next/link';

import {getNewsDetail} from '@/app/api/getNews';

export default async function Page({params: {id}}: {params: {id: string}}) {
  const news = await getNewsDetail(id);
  const contentLines = news.content.split(/\n/);
  return (
    <div className="max-w-[1440px] mx-auto px-6 md:px-10 mt-16">
      {/* header. Breadcrumb 을 쓰는 다른 페이지와 글자 크기·구분선을 맞춘다 */}
      <div className="flex items-center justify-between gap-8">
        <h3 className="text-xl sm:text-2xl md:text-[1.75rem] font-bold">입시뉴스</h3>
        <p className="text-sub-5">누구보다 빠르게 입시 뉴스를 알아보세요!</p>
      </div>
      <div className="w-full justify-end flex py-2">
        <Link href={'/news'} className="border border-black rounded-md px-4 p-2">
          목록으로
        </Link>
      </div>
      <div className="w-full h-[7px] bg-sub-4 relative mt-2">
        <div className="absolute left-0 top-0 h-full bg-blue-4 w-1/3" />
      </div>
      {/* body */}
      {news ? (
        <>
          <div className="p-2 mt-8 flex flex-col border-b-2 pb-16">
            <p className="text-2xl font-bold">{news.title}</p>
            <div className="mt-12 text-sub-5 break-keep w-full leading-8">
              {contentLines.map((line, index) => {
                if (line === '') {
                  return <br key={index} />;
                }
                return <p key={index}>{line}</p>;
              })}
            </div>
          </div>
          <div className="flex w-full mt-24 mb-16 border-y-2 border-sub-3 items-center">
            <div className="bg-sub-2 p-6 w-[3rem] flex items-center justify-center text-nowrap px-2">출처</div>
            <div className="flex justify-between px-6">
              <a href={news.origin} className="text-blue-600 underline break-all" target="_black">
                {news.origin}
              </a>
            </div>
          </div>
        </>
      ) : (
        <div>게시물이 존재하지 않습니다.</div>
      )}
    </div>
  );
}
