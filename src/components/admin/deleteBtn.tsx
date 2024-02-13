'use client';
import React from 'react';

import {DeleteOutlined} from '@ant-design/icons';
import {useRouter} from 'next/navigation';

import {deleteNews} from '@/app/api/admin';

function DeleteBtn({id}: {id: string}) {
  const router = useRouter();
  return (
    <DeleteOutlined
      className="absolute bottom-2 right-2 text-2xl hover:scale-110"
      onClick={() => {
        const ischeck = confirm('정말 삭제하시겠습니까?');
        if (ischeck) {
          deleteNews(id);
          alert('삭제가 완료되었습니다.');
          router.push('/admin');
        }
      }}
    />
  );
}

export default DeleteBtn;
