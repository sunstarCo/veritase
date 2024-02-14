'use client';
import type {FormEvent} from 'react';
import React, {useRef} from 'react';

import {useRouter} from 'next/navigation';

import {useEmail} from './useEmail';

export default function ReqPageForm() {
  const [sendEmail] = useEmail();
  const formRef = useRef<HTMLFormElement | null>(null);
  const router = useRouter();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formRef) {
      sendEmail('consult', formRef.current);
      alert('상담신청이 완료되었습니다.');
      router.push('/');
      formRef.current = null;
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-8 sm:w-[37.875rem] text-lg ">
      <label htmlFor="name" className="consult_label text-nowrap">
        학생명
        <input type="text" id="name" name="name" className="consult_input" required />
      </label>
      <div className="font-medium flex justify-between">
        <label className="text-nowrap" htmlFor="rel">
          신청자
        </label>
        <div className="sm:w-[28rem] flex gap-7">
          <label className="flex gap-2">
            <input type="radio" id="rel" name="rel" value="학생" required />
            학생
          </label>
          <label className="flex gap-2">
            <input type="radio" name="rel" value="학부모" required />
            학부모
          </label>
        </div>
      </div>
      <label htmlFor="phone" className="consult_label text-nowrap">
        휴대폰 번호
        <input
          id="phone"
          name="phone"
          type="tel"
          pattern="[0-9]*"
          minLength={11}
          placeholder=" -없이 입력해 주세요."
          className="consult_input"
          required
        />
      </label>

      <label htmlFor="location" className="consult_label">
        지역
        <input
          type="text"
          name="location"
          id="location"
          placeholder=" 예) 서울시 강남구 신사동"
          className="consult_input"
        />
      </label>

      <label htmlFor="school" className="consult_label">
        학교
        <input id="school" name="school" type="text" className="consult_input" />
      </label>

      <label htmlFor="content" className="font-medium flex flex-col gap-2">
        상담내용
        <textarea id="content" name="content" className="border border-[#C5C5C5] resize-none h-[8.125rem]" />
      </label>
      <div className="flex flex-col gap-2">
        <p className="font-medium">개인정보 처리방침</p>
        <div className="border border-[#C5C5C5] h-[8.125rem] p-2 text-[#7A7A7A] overflow-scroll">
          <p>
            (주)베리타스교육은 기업/단체 및 개인의 정보 수집 및 이용 등 처리에 있어 아래의 사항을 관계법령에 따라
            고지하고 안내해 드립니다.
          </p>
          <br />
          <p>1. 정보수집의 이용 목적 : 상담 및 진행</p>
          <p>2. 수집/이용 항목 : 이름, 연락처, 지역, 문의내용 등</p>
          <p>3. 보유 및 이용기간 : 상담 종료후 6개월, 정보제공자의 삭제 요청시 즉시</p>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <input type="checkbox" required />
        <label htmlFor="">위 내용에 동의하시겠습니까?</label>
      </div>
      <button type="submit" className="mx-auto w-[14.3125rem] h-[3.6875rem] bg-[#173FB8] text-white font-bold rounded">
        상담신청
      </button>
    </form>
  );
}
