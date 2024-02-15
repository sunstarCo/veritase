import { useEffect, useRef } from "react";

export const useMount = (callback:any) => {
  const _callback = useRef(callback);

  useEffect(() => {
    _callback.current();
  }, []);
};
