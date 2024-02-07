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
  forceBlock: boolean;
  onForceBlock: () => void;
  offForceBlock: () => void;
  searchParams: {};
}

interface SubMenuI {
  name: string;
  path: string;
}

function SubMenuBar({menu, curPath, forceBlock, onForceBlock, offForceBlock, searchParams}: MenusI) {
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
      className="relative cursor-pointer px-2 lg:px-3 xl:px-5"
      onMouseOver={() => {
        if (menu.sub_menu) {
          setHoverMenu(prev => !prev);
          setSelectMenu(menu.sub_menu);
          onForceBlock();
        } else if (menu.default_path === '/news') {
          onForceBlock();
        } else {
          setHoverMenu(false);
        }
      }}
      onMouseOut={() => {
        setHoverMenu(false);
        offForceBlock();
      }}>
      <Link key={menu.name} href={menu.default_path} className={`flex flex-col  px-2`}>
        <p className={`border-b-4 hover:border-blue-4 py-3 ${isClicked ? 'border-blue-4' : 'border-transparent'}`}>
          {menu.name}
        </p>
      </Link>
      {(hoverMenu || (!forceBlock && isClicked)) && (
        <div className="flex gap-4 absolute p-4 pt-3 text-nowrap -left-5">
          {selectMenu.map(sub_menu => {
            return (
              <Link
                href={sub_menu.path}
                key={sub_menu.name}
                className={`p-2 hover:text-blue-4 hover:font-bold ${
                  curPath === sub_menu.path || searchParams === sub_menu.path.split('=')[1]
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
