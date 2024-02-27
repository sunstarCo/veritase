import React from 'react';

import Breadcrumb from '@/components/common/Breadcrumb';
import TeacherBox from '@/components/TeacherBox';

export default function Page() {
  let arr = [0, 1, 2, 3, 4, 5, 6];
  return (
    <div>
      <Breadcrumb title="수능강사" sub_text="최고의 강사진으로 구성된 베리타스 교육" />
      <div className="max-w-[1700px] mx-auto px-6 md:px-12 py-12">
        {arr.map(item => (
          <TeacherBox num={item} key={item} />
        ))}
      </div>
    </div>
  );
}
