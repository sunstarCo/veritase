'use client';
import {useEffect, useRef, useState} from 'react';

/**
 * 배너 글자 애니메이션을 배경 이미지가 다 뜬 뒤로 미룬다.
 *
 * 반응형으로 이미지를 두 장 깔면 CSS 로 숨긴 쪽도 브라우저는 받아온다.
 * 숨은 쪽은 sizes 가 1px 라 항상 먼저 끝나므로, 둘 중 아무거나 하나만 보고
 * 시작하면 정작 보이는 배경이 없는 채로 글자만 움직인다. 등록된 이미지가
 * 전부 끝나야 시작한다.
 *
 * onLoad prop 을 안 쓰고 ref 로 직접 보는 이유: 캐시가 있으면 하이드레이션
 * 전에 로드가 끝나 React 로는 load 이벤트가 오지 않는다. complete 를 먼저
 * 확인해야 한다. 실패도 '더 기다릴 것 없음' 으로 친다. 안 그러면 글자가
 * 영영 안 보인다.
 */
export default function useBannerReady() {
  const imgs = useRef<(HTMLImageElement | null)[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const els = imgs.current.filter((el): el is HTMLImageElement => el !== null);
    if (els.length === 0) {
      setReady(true);
      return;
    }

    let left = els.length;
    const done = () => {
      if (--left === 0) setReady(true);
    };

    const off = els.map(el => {
      if (el.complete) {
        done();
        return () => {};
      }
      el.addEventListener('load', done);
      el.addEventListener('error', done);
      return () => {
        el.removeEventListener('load', done);
        el.removeEventListener('error', done);
      };
    });

    return () => off.forEach(fn => fn());
  }, []);

  /** <Image ref={register(0)} /> 처럼 각 배경 이미지에 붙인다 */
  const register = (i: number) => (el: HTMLImageElement | null) => {
    imgs.current[i] = el;
  };

  return [ready, register] as const;
}
