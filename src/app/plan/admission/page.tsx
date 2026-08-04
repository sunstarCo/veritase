import React from 'react';

import {ADMISSION} from '@/components/admission/admissionData';
import Breadcrumb from '@/components/common/Breadcrumb';
import DocArticle from '@/components/common/DocArticle';

export default function Page({searchParams: {type}}: {searchParams: {type: string}}) {
  const current = ADMISSION.find(item => item.param === type) ?? ADMISSION[0];
  const sub_titles = ADMISSION.map(({param, tab}) => ({
    title: tab,
    path: `/plan/admission?type=${param}`,
    active: param === current.param,
  }));

  return (
    <div>
      <Breadcrumb title="수시" sub_titles={sub_titles} curParams={type} />
      <div className="max-w-[1440px] mx-auto break-keep px-6 md:px-10 mt-14 md:mt-20">
        <DocArticle content={current.content} />
      </div>
    </div>
  );
}
