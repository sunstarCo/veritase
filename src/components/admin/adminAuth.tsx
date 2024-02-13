'use client';
import React, {useState} from 'react';

function AdminAuth() {
  const [code, setCode] = useState('');

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target;
    setCode(value);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const admin_key = process.env.NEXT_PUBLIC_ADMIN_SECRET_KEY as string;
    if (admin_key === String(code)) {
      window.sessionStorage.setItem('Auth', 'true');
      window.location.reload();
      return;
    }
    return alert('입력하신 코드가 틀렸습니다.');
  };

  return (
    <div className="w-full flex flex-col items-center p-20 ">
      <form className="border-2 p-10 rounded-lg text-start" onSubmit={onSubmit}>
        <p className="text-2xl mb-2 p-2">관리자 페이지로 이동하기</p>
        <p className="mb-4 text-gray-400 p-2">관리자 권한을 이용하시려면 코드가 필요합니다.</p>
        <input
          type="password"
          placeholder="관리자 코드"
          className="border p-2 w-full mb-4"
          autoFocus
          value={code}
          onChange={onChangeHandler}
        />
        <div className="w-full flex justify-center">
          <button disabled={false} className="border-2 p-2 rounded-lg bg-hover_primary hover:bg-primary ">
            인증하기
          </button>
        </div>
      </form>
    </div>
  );
}

export default AdminAuth;
