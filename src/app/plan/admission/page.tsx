import React from 'react';

import Breadcrumb from '@/components/common/Breadcrumb';

const sub_title = [
  {
    title: '학생부 교과 전형',
    path: '/plan/admission?type=교과',
  },
  {
    title: '학생부 종합 전형',
    path: '/plan/admission?type=종합',
  },
  {
    title: '논술 전형',
    path: '/plan/admission?type=논술',
  },
];

export default function Page({searchParams: {type}}: {searchParams: {type: string}}) {
  return (
    <div>
      <Breadcrumb title="수시" sub_titles={sub_title} curParams={type} />
    </div>
  );
}
