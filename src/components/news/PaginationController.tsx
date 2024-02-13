'use client';

import {Pagination} from 'antd';
import {useRouter} from 'next/navigation';

interface paginationContollerProps {
  pageParams: number;
  totalPages: number;
  admin?: boolean;
}

export default function PaginationContoller({pageParams, totalPages, admin = false}: paginationContollerProps) {
  const router = useRouter();

  const onChangePagination = (page: any) => {
    router.push(`/${admin ? 'admin' : 'news'}?page=${page}`);
  };
  return (
    <Pagination defaultCurrent={pageParams} onChange={onChangePagination} current={pageParams} total={totalPages} />
  );
}
