import { useEffect, useState } from 'react'


export default function useCheckAdmin() {

  const [isAdmin, setIsAdmin] = useState<null | string>('loading');

  useEffect(() => {
    setIsAdmin(sessionStorage.getItem('Auth'));
  }, [setIsAdmin,isAdmin]);
  return [isAdmin ]
}
