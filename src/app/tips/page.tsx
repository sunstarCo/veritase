import React from 'react';

import Breadcrumb from '@/components/common/Breadcrumb';

export default function Page({searchParams: {subject}}: {searchParams: {subject: string}}) {
  return (
    <div>
      {' '}
      <Breadcrumb
        title="영역별 학습팁"
        sub_text="영역별로 학습 꿀팁을 알아봐요"
        sub_titles={['국어영역', '수학영역', '영어영역', '사탐영역', '과탐영역']}
        curParams={subject}
      />
    </div>
  );
}
