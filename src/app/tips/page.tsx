import React from 'react';

import Breadcrumb from '@/components/common/Breadcrumb';

export default function Page({searchParams: {subject}}: {searchParams: {subject: string}}) {
  const sub_titles = [
    {
      title: '국어영역',
      path: '/tips?subject=국어',
    },
    {
      title: '수학영역',
      path: '/tips?subject=수학',
    },
    {
      title: '영어영역',
      path: '/tips?subject=영어',
    },
    {
      title: '사탐영역',
      path: '/tips?subject=사탐',
    },
    {
      title: '과탐영역',
      path: '/tips?subject=과탐',
    },
  ];
  return (
    <div>
      {' '}
      <Breadcrumb
        title="영역별 학습팁"
        sub_text="영역별로 학습 꿀팁을 알아봐요"
        sub_titles={sub_titles}
        curParams={subject}
      />
    </div>
  );
}
