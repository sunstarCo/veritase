import React from 'react';

import Breadcrumb from '@/components/common/Breadcrumb';
import YearlyRoadmap from '@/components/period/YearlyRoadmap';

export default function Page() {
  return (
    <div>
      <Breadcrumb
        title="시기별학습법"
        sub_text="연간 주요 입시 일정에 따라 준비해야 할 사항과 마음가짐을 정리해 두도록 하자!"
      />
      <div className="max-w-[1440px] mx-auto break-keep px-6 md:px-10 mt-14 md:mt-20">
        <YearlyRoadmap />
      </div>
    </div>
  );
}
