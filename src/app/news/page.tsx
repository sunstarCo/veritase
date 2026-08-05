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
    <div className="max-w-[1440px] mx-auto px-6 md:px-10 mt-16">
      {/* header. Breadcrumb 을 쓰는 다른 페이지와 글자 크기·구분선을 맞춘다 */}
      <div className="flex items-center justify-between gap-8">
        <h3 className="text-xl sm:text-2xl md:text-[1.75rem] font-bold">입시뉴스</h3>
        <p className="text-sub-5">누구보다 빠르게 입시 뉴스를 알아보세요!</p>
      </div>
      <div className="w-full justify-end flex gap-8 py-2">
        <p>총 {count}건</p>
        <p>현재페이지 {`${pageParams}/${totalPages}`}</p>
      </div>
      <div className="w-full h-[7px] bg-sub-4 relative mt-2">
        <div className="absolute left-0 top-0 h-full bg-blue-4 w-1/3" />
      </div>
      {/* body */}
      <div className="p-2 mt-4 flex flex-col h-[35rem]">
        {data?.map((news, i) => {
          return (
            <Link href={`/news/${news.id}`} key={i} className="w-full border-b p-3 pb-5 whitespace-nowrap break-keep ">
              <p className="text-lg font-bold overflow-hidden overflow-ellipsis">{news.title}</p>
              <p className="mt-4 text-sub-5 w-11/12 overflow-hidden overflow-ellipsis">{news.content}</p>
            </Link>
          );
        })}
      </div>
      <div className="flex justify-center ">
        <PaginationContoller pageParams={pageParams} total={count} />
      </div>
    </div>
  );
}
