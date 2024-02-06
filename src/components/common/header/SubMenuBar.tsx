'use client';
import Link from 'next/link';
import React, {useState} from 'react';

interface MenusI {
  menu: {
    name: string;
    default_path: string;
    sub_menu?: SubMenuI[];
  };
}

interface SubMenuI {
  name: string;
  path: string;
}

function SubMenuBar({menu}: MenusI) {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [selectMenu, setSelectMenu] = useState([{name: '', path: ''}]);
  return (
    <>
      <Link
        key={menu.name}
        href={menu.default_path}
        className="flex flex-col relative"
        onMouseOver={() => {
          if (menu.sub_menu) {
            setShowSubMenu(prev => !prev);
            setSelectMenu(menu.sub_menu);
          } else {
            setShowSubMenu(false);
          }
        }}
        onMouseOut={() => {
          setShowSubMenu(false);
        }}>
        {menu.name}
        {showSubMenu && (
          <div className="flex gap-4 absolute p-4 text-nowrap top-4">
            {selectMenu.map(sub_menu => {
              return <Link href={sub_menu.path}>{sub_menu.name}</Link>;
            })}
          </div>
        )}
      </Link>
    </>
  );
}

export default SubMenuBar;
