import React from 'react';

import Breadcrumb from '@/components/common/Breadcrumb';
import DocArticle from '@/components/common/DocArticle';
import DocNav from '@/components/common/DocNav';
import {TIPS} from '@/components/tips/tipsData';

export default function Page({searchParams: {subject: curParams}}: {searchParams: {subject: string}}) {
  const index = Math.max(
    0,
    TIPS.findIndex(tip => tip.param === curParams),
  );
  const current = TIPS[index];
  // 탭 이름('통합사회')에 파라미터('사탐')가 안 들어있으므로 활성 여부를 직접 넘긴다
  const sub_titles = TIPS.map(({param, tab}) => ({
    title: tab,
    path: `/tips?subject=${param}`,
    active: param === current.param,
  }));
  const toNav = (i: number) => (TIPS[i] ? {label: TIPS[i].tab, path: `/tips?subject=${TIPS[i].param}`} : undefined);

  return (
    <div>
      <Breadcrumb
        title="영역별 학습팁"
        sub_text="영역별로 학습 꿀팁을 알아봐요"
        sub_titles={sub_titles}
        curParams={curParams}
      />
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 mt-20 md:mt-28 break-keep">
        <DocArticle content={current.content} />
        <DocNav prev={toNav(index - 1)} next={toNav(index + 1)} />
      </div>
    </div>
  );
}
