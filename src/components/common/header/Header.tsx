'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, {useState} from 'react';
import SubMenuBar from './SubMenuBar';

const menus = [
  {
    name: '회사소개',
    default_path: '/greeting',
    sub_menu: [
      {
        name: '인사말',
        path: '/greeting',
      },
      {
        name: '회사소개',
        path: '/introduce',
      },
      {
        name: '오시는 길',
        path: '/way',
      },
    ],
  },
  {
    name: '교육시스템',
    default_path: '/eduSystem',
    sub_menu: [
      {
        name: '학습관리시스템',
        path: '/eduSystem',
      },
      {
        name: '수능강사',
        path: '/teacher',
      },
      {
        name: '자주묻는질문',
        path: '/qna',
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
    default_path: '/eduPeriod',
    sub_menu: [
      {
        name: '시기별학습법',
        path: '/eduPeriod',
      },
      {
        name: '수시',
        path: '/admission',
      },
      {
        name: '정시',
        path: '/sat',
      },
      {
        name: '교육과정',
        path: '/curriculum',
      },
    ],
  },
  {
    name: '입시뉴스',
    default_path: '/news',
  },
];

function Header() {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [selectMenu, setSelectMenu] = useState([{name: '', path: ''}]);
  return (
    <div className="w-full p-8">
      <div className="max-w-[1280px] flex">
        <div className="w-[214px] h-[46px]">
          <Image
            src={'/logo/베리타스헤더로고.png'}
            alt="베리타스헤더로고"
            width={0}
            height={0}
            sizes="100"
            style={{objectFit: 'cover'}}
          />
        </div>
        <div className="flex gap-4">
          {menus.map(menu => {
            return <SubMenuBar menu={menu} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Header;
