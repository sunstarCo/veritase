import React from 'react';

import {JEONGSI} from '@/components/admission/admissionData';
import Breadcrumb from '@/components/common/Breadcrumb';
import DocArticle from '@/components/common/DocArticle';

export default function Page() {
  return (
    <div>
      <Breadcrumb title="정시" />
      <div className="max-w-[1440px] mx-auto break-keep px-6 md:px-10 mt-20 md:mt-28">
        <DocArticle content={JEONGSI} />
      </div>
    </div>
  );
}
