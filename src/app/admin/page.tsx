'use client';
import React from 'react';

import AdminAuth from '@/components/admin/adminAuth';
import AdminPage from '@/components/admin/adminPage';
import useCheckAdmin from '@/components/admin/useCheckAdmin';

import type {IPagination} from '../news/page';

function Page({searchParams: {page}}: IPagination) {
  const [isAdmin] = useCheckAdmin();

  if (isAdmin === 'loading') {
    return;
  }

  return isAdmin ? <AdminPage page={page} /> : <AdminAuth />;
}

export default Page;
