import React from 'react';

import Link from 'next/link';

// 본문 하단 영역 이동 네비게이션.
// 상단 Breadcrumb 는 전체폭 균등 탭 + 굵은 밑줄이므로, 여기서는 겹치지 않도록
// 알약(pill) 칩을 나열하는 형태로 구분한다.
// 색상은 시안 팔레트(#1a4bc4 / #f2f5fc / #dde5fa / #e4e7ee)와 같다.
// hover 가 필요해 인라인 스타일 대신 Tailwind 클래스로 둔다(임의값은 리터럴이어야 JIT 가 읽는다).

export type DocNavItem = {label: string; path: string; active?: boolean};

export default function DocNav({title, items}: {title: string; items: DocNavItem[]}) {
  return (
    <nav aria-label={title} className="mt-14 border-t border-[#e4e7ee] pt-7 md:mt-20 md:pt-9">
      <p className="mb-4 text-sm md:text-base font-bold tracking-[0.02em] text-[#7a8090] md:mb-5">{title}</p>
      <ul className="flex flex-wrap gap-2 md:gap-3">
        {items.map(item => (
          <li key={item.path}>
            <Link
              href={item.path}
              aria-current={item.active ? 'page' : undefined}
              className={`block rounded-full px-4 py-2.5 text-base md:text-lg font-bold transition-colors md:px-6 md:py-3 ${
                item.active
                  ? 'bg-[#1a4bc4] text-white'
                  : 'bg-[#f2f5fc] text-[#1a4bc4] hover:bg-[#dde5fa]'
              }`}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
