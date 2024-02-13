'use client';
import React, {useRef} from 'react';

import {useRouter} from 'next/navigation';

import {useEmail} from './form/useEmail';

function MainForm() {
  const mainFormRef = useRef<HTMLFormElement | null>(null);
  const [sendEmail] = useEmail();
  const router = useRouter();
  const handleSubmit = e => {
    e.preventDefault();
    if (mainFormRef) {
      sendEmail('lecture', mainFormRef.current);
      alert('상담신청이 완료됐습니다');
      window.location.reload();
      mainFormRef.current = null;
    }
  };
  return (
    <div className="p-8 text-white bg-blue-5">
      <p className="text-lg font-bold">무료 시범강의 신청</p>
      <form className="mt-4 flex flex-col gap-4" ref={mainFormRef} onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="성함"
          className="bg-transparent border p-2 w-64"
          required
        />
        <input
          type="text"
          id="subject"
          name="subject"
          placeholder="신청과목"
          className="bg-transparent border p-2 w-64"
          required
        />
        <input
          type="tel"
          id="phone"
          name="phone"
          pattern="[0-9]*"
          minLength={11}
          maxLength={11}
          placeholder="연락처"
          className="bg-transparent border p-2 w-64"
          required
        />
        <textarea
          placeholder="세부사항"
          id="content"
          name="content"
          className="bg-transparent border p-2 w-64 min-h-36 resize-none"
        />
        <div className="flex gap-3 items-center justify-between">
          <p className="text-sm text-sub-2">개인정보 제공하는 것에 동의합니다.</p>
          <input type="checkbox" className="w-4 h-4 border p-1" required></input>
        </div>
        <button type="submit" className="w-full text-lg font-bold p-2 rounded bg-[#66B6BD]">
          시범수업 신청
        </button>
      </form>
    </div>
  );
}

export default MainForm;
