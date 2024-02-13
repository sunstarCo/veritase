'use client';
import React from 'react';

import AdminAuth from '@/components/admin/adminAuth';
import AdminPage from '@/components/admin/adminPage';
import useCheckAdmin from '@/components/admin/useCheckAdmin';

function Page() {
  const [isAdmin] = useCheckAdmin();

  if (isAdmin === 'loading') {
    return;
  }

  return isAdmin ? <AdminPage /> : <AdminAuth />;
}

export default Page;
