'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, {useState} from 'react';
import SubMenuBar from './SubMenuBar';
import {usePathname, useSearchParams} from 'next/navigation';

const menus = [
  {
    name: '회사소개',
    default_path: '/company/greeting',
    sub_menu: [
      {
        name: '인사말',
        path: '/company/greeting',
      },
      {
        name: '회사소개',
        path: '/company/introduce',
      },
      {
        name: '오시는 길',
        path: '/company/way',
      },
    ],
  },
  {
    name: '교육시스템',
    default_path: '/education/eduSystem',
    sub_menu: [
      {
        name: '학습관리시스템',
        path: '/education/eduSystem',
      },
      {
        name: '수능강사',
        path: '/education/teacher',
      },
      {
        name: '자주묻는질문',
        path: '/education/qna',
      },
    ],
  },
  {
    // path를 search params로 영역별 분리
    name: '영역별 학습팁',
    default_path: '/tips?subject=국어',
    sub_menu: [
      {
        name: '국어',
        path: '/tips?subject=국어',
      },
      {
        name: '수학',
        path: '/tips?subject=수학',
      },
      {
        name: '영어',
        path: '/tips?subject=영어',
      },
      {
        name: '사탐',
        path: '/tips?subject=사탐',
      },
      {
        name: '과탐',
        path: '/tips?subject=과탐',
      },
    ],
  },
  {
    name: '입시전략',
    default_path: '/plan/eduPeriod',
    sub_menu: [
      {
        name: '시기별학습법',
        path: '/plan/eduPeriod',
      },
      {
        name: '수시',
        path: '/plan/admission',
      },
      {
        name: '정시',
        path: '/plan/sat',
      },
      {
        name: '교육과정',
        path: '/plan/curriculum',
      },
    ],
  },
  {
    name: '입시뉴스',
    default_path: '/news',
  },
];

function Header() {
  const curPath = usePathname();
  const searchParams = useSearchParams().get('subject');

  const [forceBlock, setForceBlock] = useState(false);

  const onForceBlock = () => {
    setForceBlock(true);
  };

  const offForceBlock = () => {
    setForceBlock(false);
  };

  return (
    <div className="sticky top-0 w-full text-nowrap flex justify-center">
      <div className="w-full xl:max-w-[1280px] p-8 pb-16">
        <div className="w-full flex items-center justify-between">
          <Link href={'/'} className="min-w-[217px]">
            <Image
              src={'/logo/베리타스헤더로고.svg'}
              alt="veritase_logo"
              width={0}
              height={0}
              sizes="100"
              style={{width: '100%'}}
              priority
            />
          </Link>
          <div className="flex items-center">
            {menus.map(menu => {
              return (
                <SubMenuBar
                  menu={menu}
                  key={menu.name}
                  curPath={curPath}
                  forceBlock={forceBlock}
                  onForceBlock={onForceBlock}
                  offForceBlock={offForceBlock}
                  searchParams={searchParams ?? ''}
                />
              );
            })}
            <Link href={'/request'} className="py-2 bg-blue-4 text-white rounded px-20 text-nowrap">
              상담신청
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
