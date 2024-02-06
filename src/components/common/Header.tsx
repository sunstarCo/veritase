import React from 'react';

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
    //  path를 search params로 영역별 분리
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
        path: 'earlyAdmission',
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
  return (
    <div className="w-full">
      <div className="max-w-[1280px]">
        {menus.map(menu => {
          return <div>{menu.name}</div>;
        })}
      </div>
    </div>
  );
}

export default Header;
