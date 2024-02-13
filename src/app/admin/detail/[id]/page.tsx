import React from 'react';

import Link from 'next/link';

import {getNewsDetail} from '@/app/api/getNews';
import DeleteBtn from '@/components/admin/deleteBtn';

async function Page({params: {id}}: {params: {id: string}}) {
  const data = await getNewsDetail(id);
  if (!data) {
    return <div className="w-full text-center text-2xl">해당 게시물이 존재하지 않습니다.</div>;
  }
  return (
    <div className="flex flex-col items-center text-center px-10 gap-10 mb-80 break-keep">
      {/* 헤더 부분 */}
      <div className="flex flex-col gap-4 w-full relative">
        <div className="flex justify-start items-center border-b-2 pb-10  p-1">
          <Link
            href={'/admin'}
            className="rounded-md p-2 px-4 bg-slate-500 text-white hover:bg-hover_primary border-b-2 ">
            ← 목록
          </Link>
        </div>

        <div className="bg-slate-100 border-y-[1px] border-black">
          <div className="flex">
            <div className="p-2 font-bold">제목</div>
            <div className="p-2">{data.title}</div>
          </div>
          <div className="flex">
            <div className="p-2 font-bold">작성일</div>
            <div className="p-2">{data.created_at.split('.')[0].replace('T', ' ')}</div>
          </div>

          <DeleteBtn id={data.id} />
        </div>
      </div>
      {/* 본문 영역 */}
      <div className="w-full text-start p-2">
        <div className="flex gap-3">
          <p className="min-h-[20vh]">{data.content}</p>
        </div>
        <div className="flex gap-3 border-t-2 mt-4 p-3">
          <p className="font-semibold">출처 : </p>
          <p>{data.origin}</p>
        </div>
      </div>
    </div>
  );
}

export default Page;
