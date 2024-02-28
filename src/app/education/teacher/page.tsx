import React from 'react';

import Breadcrumb from '@/components/common/Breadcrumb';
import TeacherBox from '@/components/TeacherBox';

export default function Page() {
  let arr = [
    {id: 0, position: 'object-center'},
    {id: 1, position: 'object-center'},
    {id: 2, position: 'object-center'},
    {id: 3, position: 'object-center'},
    {id: 4, position: 'object-left'},
    {id: 5, position: 'object-right'},
    {id: 6, position: 'object-center '},
  ];
  return (
    <div>
      <Breadcrumb title="수능강사" sub_text="최고의 강사진으로 구성된 베리타스 교육" />
      <div className="max-w-[1700px] mx-auto px-6 md:px-12 py-12">
        {arr.map(item => (
          <TeacherBox num={item.id} position={item.position} key={item.id} />
        ))}
      </div>
    </div>
  );
}
