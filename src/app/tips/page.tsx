import React from 'react';

import Breadcrumb from '@/components/common/Breadcrumb';
import DocArticle from '@/components/common/DocArticle';
import DocNav from '@/components/common/DocNav';
import {TIPS} from '@/components/tips/tipsData';

export default function Page({searchParams: {subject: curParams}}: {searchParams: {subject: string}}) {
  // 파라미터가 없거나 목록에 없는 값이면 첫 영역을 보여준다(빈 화면 방지)
  const current = TIPS.find(tip => tip.param === curParams) ?? TIPS[0];
  // 탭 이름('사회탐구')에 파라미터('사탐')가 안 들어있으므로 활성 여부를 직접 넘긴다
  const links = TIPS.map(({param, tab}) => ({
    title: tab,
    label: tab,
    path: `/tips?subject=${param}`,
    active: param === current.param,
  }));

  return (
    <div>
      <Breadcrumb
        title="영역별 학습팁"
        sub_text="영역별로 학습 꿀팁을 알아봐요"
        sub_titles={links}
        curParams={curParams}
      />
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 mt-20 md:mt-28 mb-24 break-keep">
        <DocArticle content={current.content} />
        <DocNav title="다른 영역 학습팁" items={links} />
      </div>
    </div>
  );
}
