export const revalidate = 0;
import React from 'react';

import Link from 'next/link';

import PaginationContoller from '@/components/news/PaginationController';

import {getNewsPagination} from '../api/getNews';

export interface IPagination {
  searchParams: {[key: string]: string};
}

export default async function Page({searchParams}: IPagination) {
  const pageParams = Number(searchParams['page']) || 1;
  const {data, count, totalPages} = await getNewsPagination(pageParams);

  return (
    <div className="max-w-[1280px] mx-auto px-20">
      {/* header */}
      <div className="pb-2 border-b-2 border-black">
        <div className="flex gap-5 items-center">
          <h3 className="text-3xl font-bold">입시뉴스</h3>
          <p className="opacity-70">누구보다 빠르게 입시 뉴스를 알아보세요!</p>
        </div>
        <div className="w-full justify-end flex gap-8 py-2">
          <p>총 {count}건</p>
          <p>현재페이지 {`${pageParams}/${totalPages}`}</p>
        </div>
      </div>
      {/* body */}
      <div className="p-2 mt-4 flex flex-col">
        {data?.map((news, i) => {
          return (
            <Link href={`/news/${news.id}`} key={i} className="w-full border-b p-3 pb-5 whitespace-nowrap break-keep ">
              <p className="text-lg font-bold overflow-hidden overflow-ellipsis">{news.title}</p>
              <p className="mt-4 text-sub-5 w-11/12 overflow-hidden overflow-ellipsis">{news.content}</p>
            </Link>
          );
        })}
      </div>
      <div className="flex justify-center mt-10">
        <PaginationContoller pageParams={pageParams} totalPages={totalPages} />
      </div>
    </div>
  );
}
