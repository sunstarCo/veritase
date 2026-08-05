'use client';

import {Pagination} from 'antd';
import {useRouter} from 'next/navigation';

import {NEWS_PAGE_SIZE} from '@/app/api/getNews';

interface paginationContollerProps {
  pageParams: number;
  /** 페이지 수가 아니라 전체 건수. antd Pagination 이 항목 수를 받는다 */
  total: number;
  admin?: boolean;
}

export default function PaginationContoller({pageParams, total, admin = false}: paginationContollerProps) {
  const router = useRouter();
  const onChangePagination = (page: any) => {
    router.push(`/${admin ? 'admin' : 'news'}?page=${page}`);
  };
  return (
    <Pagination
      defaultCurrent={pageParams}
      onChange={onChangePagination}
      current={pageParams}
      total={total}
      // 기본값이 10 이라 지정하지 않으면 페이지 수가 실제의 절반으로 나온다
      pageSize={NEWS_PAGE_SIZE}
      showSizeChanger={false}
    />
  );
}
