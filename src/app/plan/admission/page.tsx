import React from 'react';

import {ADMISSION} from '@/components/admission/admissionData';
import Breadcrumb from '@/components/common/Breadcrumb';
import DocArticle from '@/components/common/DocArticle';

export default function Page({searchParams: {type}}: {searchParams: {type: string}}) {
  // 파라미터가 없거나 목록에 없는 값이면 첫 전형을 보여준다(빈 화면 방지)
  const current = ADMISSION.find(item => item.param === type) ?? ADMISSION[0];
  const sub_titles = ADMISSION.map(({param, tab}) => ({
    title: tab,
    path: `/plan/admission?type=${param}`,
    active: param === current.param,
  }));

  return (
    <div>
      <Breadcrumb title="수시" sub_titles={sub_titles} curParams={type} />
      <div className="max-w-[1440px] mx-auto break-keep px-6 md:px-10 mt-20 md:mt-28 mb-24">
        <DocArticle content={current.content} />
      </div>
    </div>
  );
}
