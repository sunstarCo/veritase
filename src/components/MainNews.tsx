import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import {getMainNews} from '@/app/api/getNews';

async function MainNews() {
  const data = await getMainNews();
  return (
    <div className="w-full lg:max-w-[31rem] min-[1100px]:max-w-[35rem] xl:max-w-[30rem] mx-auto">
      <div className="border-b pb-2 px-2 border-black flex justify-between items-start">
        <p className="text-lg font-bold">입시뉴스</p>
        <Link href={'/news'} className="p-2">
          <Image src={'/icons/plus_black.svg'} alt="plus" width={0} height={0} sizes="100" className="w-[1.25rem]" />
        </Link>
      </div>
      <div className="px-2 space-y-4 mt-4 w-full">
        {data?.map((news, i) => {
          return (
            <Link href={`news/${news.id}`} key={i} className="flex gap-1 px-2">
              <p className="w-full overflow-ellipsis overflow-hidden whitespace-nowrap"> • {news.title}</p>
              {/*TODO:  시간같은걸로 조건 넣어서 오른쪽 형태로 쓰면 될듯  >>>   { "판별기준" && <Image... /> }      */}
              <Image src={'/icons/new.svg'} alt="plus" width={0} height={0} sizes="100" className="w-[1.25rem]" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default MainNews;
