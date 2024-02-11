import React from 'react';

import Image from 'next/image';

import Breadcrumb from '@/components/common/Breadcrumb';

export default function Page() {
  return (
    <div>
      <Breadcrumb
        title="시기별학습법"
        sub_text="연간 주요 입시 일정에 따라 준비해야 할 사항과 마음가짐을 정리해 두도록 하자!"
      />
      <div className="max-w-[1280px] mx-auto">
        <Image
          src={'/eduPeriod/content_desktop.svg'}
          alt="월별/시기별 학습법 정리"
          width={0}
          height={0}
          sizes="100"
          className="w-full mt-20 max-sm:hidden"
        />
        <Image
          src={'/eduPeriod/content_mobile.svg'}
          alt="월별/시기별 학습법 정리"
          width={0}
          height={0}
          sizes="100"
          className="w-full mt-20 sm:hidden"
        />
      </div>
    </div>
  );
}
