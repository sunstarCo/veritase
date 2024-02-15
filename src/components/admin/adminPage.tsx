import {useEffect, useState} from 'react';

import {Skeleton} from 'antd';
import Link from 'next/link';

import {getNewsPagination} from '@/app/api/getNews';

import PaginationContoller from '../news/PaginationController';

import type {Tables} from '@/types/supabase';

function AdminPage({page}: {page: string}) {
  const pageParams = Number(page) || 1;
  const [data, setData] = useState<Tables<'news'>[] | null>(null);
  const [count, setCount] = useState<any>();
  const [totalPages, setTotalPages] = useState<any>();

  useEffect(() => {
    (async function () {
      const {data, count, totalPages} = await getNewsPagination(pageParams);
      setData(data);
      setCount(count);
      setTotalPages(totalPages);
    })();
  }, [page]);

  return (
    <div className="max-w-[1280px] mx-auto px-20">
      {/* header */}
      <div className="pb-2 border-b-2 border-black">
        <div className="flex gap-5 items-center justify-center">
          <h3 className="text-3xl font-bold">관리자 페이지</h3>
        </div>
        <div className="w-full flex justify-between py-2 mt-4">
          <div className="flex gap-8">
            <p>총 {count}건</p>
            <p>현재페이지 {`${pageParams}/${totalPages / 10}`}</p>
          </div>
          <Link href={'/admin/post'} className="bg-blue-2 text-white px-2 p-1 rounded-sm hover:opacity-75">
            게시물 작성
          </Link>
        </div>
      </div>
      {/* body */}
      <div className="p-2 mt-4 flex flex-col h-[35rem]">
        {!data ? (
          <>
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </>
        ) : data.length !== 0 ? (
          data?.map((news, i) => {
            return (
              <Link
                href={`/admin/detail/${news.id}`}
                key={i}
                className="w-full border-b p-3 pb-5 whitespace-nowrap break-keep ">
                <p className="text-lg font-bold overflow-hidden overflow-ellipsis">{news.title}</p>
                <p className="mt-4 text-sub-5 w-11/12 overflow-hidden overflow-ellipsis">{news.content}</p>
              </Link>
            );
          })
        ) : (
          <div className="text-2xl w-full text-center p-10">아직 등록된 게시물이 없습니다.</div>
        )}
      </div>
      <div className="flex justify-center">
        <PaginationContoller pageParams={pageParams} totalPages={totalPages} admin />
      </div>
    </div>
  );
}

export default AdminPage;
