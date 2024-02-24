'use client';
import type {ChangeEvent, FormEvent} from 'react';
import React, {useState} from 'react';

import Link from 'next/link';
import {useRouter} from 'next/navigation';

import {postNews} from '@/app/api/admin';
import useCheckAdmin from '@/components/admin/useCheckAdmin';

function Page() {
  const [isAdmin] = useCheckAdmin();
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [origin, setOrigin] = useState('');
  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target;
    setTitle(value);
  };

  const onChangeContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const {value} = e.target;
    setContent(value);
  };

  const onChangeOrigin = (e: ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target;
    setOrigin(value);
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title === '') return alert('제목을 입력하세요');
    if (content === '') return alert('본문에 들어갈 내용을 작성해주세요');

    const newPost = {
      title,
      content,
      origin,
    };
    const error = await postNews(newPost);
    if (error) {
      return;
    }
    alert('등록이 완료되었습니다.');
    router.push('/admin');
  };

  if (isAdmin === 'loading') {
    return;
  }
  if (!isAdmin) {
    alert('접근이 제한되었습니다.');
    router.push('/admin');
    return;
  }
  return (
    <div className="max-w-[1700px] mx-auto flex flex-col items-center gap-10 px-8 mb-20">
      <p className="text-3xl border-b-2 border-black pb-10 w-full text-center ">입시 뉴스 등록</p>
      <form className="flex flex-col items-center w-full md:p-10" onSubmit={onSubmit}>
        <div className="flex flex-col w-full gap-4">
          <label>
            제목<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="제목을 입력하세요"
            className="border w-full p-2"
            onChange={onChangeTitle}
            value={title}
          />
          <label>본문</label>
          <textarea
            placeholder="본문을 입력하세요"
            className="resize-none border p-2 min-h-52"
            value={content}
            onChange={onChangeContent}
          />
          <label>
            출처<span className="text-red-500"></span>
          </label>
          <input
            type="text"
            placeholder="출처를 입력하세요"
            className="border p-2"
            onChange={onChangeOrigin}
            value={origin}
          />
        </div>
        <div className="flex gap-10 mt-4">
          <Link href={'/admin'} className="p-2 px-2 w-fit rounded-lg mt-4 border-2 border-black">
            취소하기
          </Link>
          <button className="p-2 px-2 w-fit bg-blue-4 text-white rounded-lg mt-4">등록하기</button>
        </div>
      </form>
    </div>
  );
}

export default Page;
