import React from 'react';

import Link from 'next/link';

export type DocNavItem = {label: string; path: string};

/** 양끝이 비어도 반대쪽 위치가 흔들리지 않도록 자리를 차지한다 */
function Side({item, dir}: {item?: DocNavItem; dir: 'prev' | 'next'}) {
  if (!item) return <div className="flex-1" />;

  const isPrev = dir === 'prev';
  return (
    <Link
      href={item.path}
      className={`group flex flex-1 items-center gap-4 rounded-xl px-5 py-6 transition-colors hover:bg-[#f2f5fc] md:gap-6 md:px-8 md:py-8 ${
        isPrev ? 'justify-start' : 'flex-row-reverse justify-start text-right'
      }`}>
      <span
        aria-hidden
        className="flex-none text-2xl font-bold text-[#c8cedb] transition-colors group-hover:text-[#1a4bc4] md:text-4xl">
        {isPrev ? '←' : '→'}
      </span>
      <span className="min-w-0">
        <span className="block text-sm md:text-base font-bold tracking-[0.02em] text-[#7a8090]">
          {isPrev ? '이전' : '다음'}
        </span>
        <span className="mt-1 block text-lg md:text-2xl font-bold text-[#1b2230] transition-colors group-hover:text-[#1a4bc4]">
          {item.label}
        </span>
      </span>
    </Link>
  );
}

export default function DocNav({prev, next}: {prev?: DocNavItem; next?: DocNavItem}) {
  return (
    <nav
      aria-label="영역 이동"
      className="mt-14 flex items-stretch justify-between gap-3 border-t border-[#e4e7ee] pt-6 md:mt-20 md:pt-8">
      <Side item={prev} dir="prev" />
      <Side item={next} dir="next" />
    </nav>
  );
}
