'use client';
import React, {useEffect, useRef, useState} from 'react';

import Image from 'next/image';
import Link from 'next/link';
import {usePathname, useSearchParams} from 'next/navigation';

import SubMenuBar from './SubMenuBar';

const menus = [
  {
    name: '회사소개',
    default_path: '/company/greeting',
    category: 'company',
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
    default_path: '/education/system',
    category: 'education',
    sub_menu: [
      {
        name: '시스템소개',
        path: '/education/system',
      },
      {
        name: '학습관리시스템',
        path: '/education/eduSystem',
      },
      {
        name: '수능강사',
        path: '/education/teacher',
      },
      {
        name: '수업후기',
        path: '/education/review',
      },
      {
        name: '자주하는질문',
        path: '/education/qna',
      },
    ],
  },
  {
    // path를 search params로 영역별 분리
    name: '영역별 학습팁',
    default_path: '/tips?subject=국어',
    category: 'tips',
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
    category: 'plan',
    sub_menu: [
      {
        name: '시기별학습법',
        path: '/plan/eduPeriod',
      },
      {
        name: '수시',
        path: '/plan/admission?type=교과',
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
    category: 'news',
  },
];

function Header() {
  const curPath = usePathname();
  const searchParams = useSearchParams().get('subject');
  const [showMenu, setShowMenu] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  const [forceBlock, setForceBlock] = useState(false);

  const onForceBlock = (name: string) => {
    if (name === '입시뉴스') return;
    setForceBlock(true);
  };

  const offForceBlock = () => {
    setForceBlock(false);
  };

  useEffect(() => {
    if (mobileMenuRef.current) {
      if (showMenu) {
        mobileMenuRef.current.classList.remove('animate-[rightOut_0.5s_ease-in-out_forwards]');
        mobileMenuRef.current.classList.add('animate-[rightIn_0.5s_ease-in-out_forwards]');
      } else {
        mobileMenuRef.current.classList.remove('animate-[rightIn_0.5s_ease-in-out_forwards]');
        mobileMenuRef.current.classList.add('animate-[rightOut_0.5s_ease-in-out_forwards]');
      }
    }
  }, [showMenu]);

  const selectMenu = menus.find(menu => {
    return curPath.includes(menu.category);
  });

  return (
    <div
      className={`fixed top-0 left-0 w-screen text-nowrap flex justify-center md:shadow-[1px_4px_4px_0_rgba(53,60,73,0.08)] z-20 bg-white`}>
      <div
        className={`w-full xl:max-w-[1700px] ${
          forceBlock && 'pb-11'
        } relative transition-all ease-in-out duration-500`}>
        <div className="w-full flex items-center justify-center relative pt-8 px-6 xl:p-8 lg:justify-between">
          <Link href={'/'} className="min-w-[140px] max-w-[180px] md:min-w-[270px] md:max-w-[270px]">
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
          <button
            className={`lg:hidden absolute z-50 right-12 ${showMenu && 'rotate-90'}`}
            onClick={() => setShowMenu(prev => !prev)}>
            <Image
              src={'/icons/hamberger.svg'}
              alt="메뉴버튼"
              width={0}
              height={0}
              sizes="100"
              style={{width: '100%'}}
            />
          </button>
          {showMenu && (
            <div
              ref={mobileMenuRef}
              className={`absolute lg:hidden overflow-hidden bg-white z-30 w-1/2 sm:w-1/3 h-screen top-0 right-0 translate-x-full flex flex-col justify-center items-center p-4`}>
              {menus.map((menu, i) => {
                return (
                  <Link
                    href={menu.default_path}
                    key={i}
                    className="w-full p-4 text-center border"
                    onClick={() => setShowMenu(false)}>
                    {menu.name}
                  </Link>
                );
              })}
              <Link
                href={'/request'}
                onClick={() => setShowMenu(false)}
                className="w-full p-4 text-center text-white bg-blue-4">
                상담신청
              </Link>
            </div>
          )}

          <div className="lg:flex items-center hidden">
            {menus.map(menu => {
              return (
                <SubMenuBar
                  menu={menu}
                  key={menu.name}
                  curPath={curPath}
                  onForceBlock={onForceBlock}
                  offForceBlock={offForceBlock}
                  searchParams={searchParams ?? ''}
                />
              );
            })}
            <Link
              href={'/request'}
              className="py-2 bg-blue-4 text-white rounded px-20 text-nowrap ml-2 lg:ml-3 xl:ml-5">
              상담신청
            </Link>
          </div>
        </div>
        <div className="w-full px-8 lg:hidden md:gap-4 flex justify-center">
          {selectMenu?.sub_menu?.map(sub_menu => {
            return (
              <Link
                href={sub_menu.path}
                key={sub_menu.name}
                className={`p-2 hover:text-blue-4 hover:font-bold ${
                  curPath === sub_menu.path ||
                  searchParams === sub_menu.path.split('=')[1] ||
                  (curPath.includes('admission') && sub_menu.name === '수시')
                    ? 'font-bold text-blue-4'
                    : ''
                }`}>
                {sub_menu.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Header;
