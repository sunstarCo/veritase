'use client';
import React, {useMemo, useState} from 'react';

import Link from 'next/link';

interface MenusI {
  menu: {
    name: string;
    default_path: string;
    sub_menu?: SubMenuI[];
  };
  curPath: string;

  onForceBlock: (menu: string) => void;
  offForceBlock: () => void;
  searchParams: {};
}

interface SubMenuI {
  name: string;
  path: string;
}

function SubMenuBar({menu, curPath, onForceBlock, offForceBlock, searchParams}: MenusI) {
  const [hoverMenu, setHoverMenu] = useState(false);
  const [selectMenu, setSelectMenu] = useState([{name: '', path: ''}]);
  if (curPath === '/') {
    curPath = '/home';
  }

  const isClicked = useMemo(() => {
    if (menu.default_path.includes('tips') && curPath.includes('tips')) {
      return true;
    }
    return menu.default_path.includes(curPath.split('/')[1]);
  }, [menu.default_path, curPath]);

  return (
    <div
      className="relative cursor-pointer px-2 lg:px-3 xl:px-5 break-keep"
      onMouseOver={() => {
        if (menu.sub_menu) {
          setHoverMenu(prev => !prev);
          setSelectMenu(menu.sub_menu);
          onForceBlock(menu.name);
        } else if (menu.default_path === '/news') {
          onForceBlock(menu.name);
        } else {
          setHoverMenu(false);
        }
      }}
      onMouseOut={() => {
        setHoverMenu(false);
        offForceBlock();
      }}>
      <Link key={menu.name} href={menu.default_path} className={`flex flex-col px-2 font-semibold`}>
        <p
          className={`border-b-4 hover:border-blue-4 py-3 ${
            isClicked || hoverMenu ? 'border-blue-4' : 'border-transparent'
          } ${isClicked && 'text-blue-4 font-semibold'}`}>
          {menu.name}
        </p>
      </Link>
      {hoverMenu && (
        <div
          className={`flex gap-4 absolute p-4 pt-3 text-nowrap -left-5 opacity-0 transition-transform ${
            hoverMenu && 'animate-show delay-300'
          } `}>
          {selectMenu.map(sub_menu => {
            return (
              <Link
                href={sub_menu.path}
                key={sub_menu.name}
                className={`p-2 hover:text-blue-4 text-nowrap hover:font-bold ${
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
      )}
    </div>
  );
}

export default SubMenuBar;
