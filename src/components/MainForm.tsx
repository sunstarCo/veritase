'use client';
import React, {useState} from 'react';

function MainForm() {
  const [check, setCheck] = useState(false);
  return (
    <div className="p-8 text-white bg-blue-5">
      <p className="text-lg font-bold">무료 시범강의 신청</p>
      <form className="mt-4 flex flex-col gap-4">
        <input type="text" placeholder="성함" className="bg-transparent border p-2 w-64" />
        <input type="text" placeholder="신청과목" className="bg-transparent border p-2 w-64" />
        <input type="text" placeholder="연락처" className="bg-transparent border p-2 w-64" />
        <textarea placeholder="세부사항" className="bg-transparent border p-2 w-64 min-h-36 resize-none" />
        <div className="flex gap-3 items-center justify-between">
          <p className="text-sm text-sub-2">개인정보 제공하는 것에 동의합니다.</p>
          <button type="button" onClick={() => setCheck(prev => !prev)} className="w-4 h-4 border p-1">
            {check && <div className="w-full h-full bg-white" />}
          </button>
        </div>
        <button className="w-full text-lg font-bold p-2 rounded bg-[#66B6BD]">시범수업 신청</button>
      </form>
    </div>
  );
}

export default MainForm;
