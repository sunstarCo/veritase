import React from 'react';

import Link from 'next/link';

import {getNewsDetail} from '@/app/api/getNews';

export default async function Page({params: {id}}: {params: {id: string}}) {
  const news = await getNewsDetail(id);
  const contentLines = news.content.split(/\n/);
  return (
    <div className="max-w-[1280px] mx-auto px-8 mb:px-20">
      {/* header */}
      <div className="pb-2 border-b-2 border-black">
        <div className="flex gap-5 items-center">
          <h3 className="text-3xl font-bold">입시뉴스</h3>
          <p className="opacity-70">누구보다 빠르게 입시 뉴스를 알아보세요!</p>
        </div>
        <div className="w-full justify-end flex">
          <Link href={'/news'} className="border border-black rounded-md px-4 p-2">
            목록으로
          </Link>
        </div>
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
            <div className="bg-sub-2 h-14 w-1/6 flex items-center justify-center">출처</div>
            <div className="flex justify-between w-full px-6">
              <div>
                <span>{news.origin}</span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div>게시물이 존재하지 않습니다.</div>
      )}
    </div>
  );
}
