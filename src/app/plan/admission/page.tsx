import React from 'react';

import Essay from '@/components/admission/Essay';
import Subject from '@/components/admission/Subject';
import Total from '@/components/admission/Total';
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
      <div className="max-w-[1280px] mx-auto break-keep px-6 sm:px-18 md:px-36">
        {type === '교과' && <Subject />}
        {type === '종합' && <Total />}
        {type === '논술' && <Essay />}
      </div>
    </div>
  );
}
