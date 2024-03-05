'use client';
import React from 'react';

function EduSystemCard({card}: {card: any}) {
  return (
    <div className="p-4 observer w-full">
      <div className={`card w-full`}>
        <div className="bg-blue-4 rounded-t-md py-8 md:py-12 px-4 md:px-4 flex gap-2 justify-center items-center text-white ">
          <p className="text-2xl md:text-3xl font-medium text-nowrap">{card.title} / </p>
          <p className="text-lg md:text-xl font-medium mt-2">
            {card.times[0]}회 ~ {card.times[1]}회
          </p>
        </div>
        <div className="w-full card-back">
          <div className="bg-blue-4 rounded-t-md py-8 md:py-12 px-4 md:px-4 flex gap-2 justify-center items-center text-white h-36 min-[870px]:min-h-40">
            <p className="text-2xl md:text-3xl font-medium text-nowrap">{card.title} / </p>
            <p className="text-lg md:text-xl font-medium mt-2">
              {card.times[0]}회 ~ {card.times[1]}회
            </p>
          </div>
          <div className="bg-[#e7e7e7] rounded-b-md pt-20 md:pt-44 px-4 pb-16 flex flex-col justify-end h-[340px] md:h-[420px]">
            {card.desc.map((text: any, i: number) => (
              <div key={i} className="px-2">
                <p className="text-2xl font-semibold text-blue-4">{text.title}</p>
                <div className="px-5 text-xl font-medium mt-1">
                  {text.content.map((text: any, i: number) => (
                    <p key={i} className="list-item text-lg">
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EduSystemCard;
