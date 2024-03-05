import React from 'react';

function SystemCard({card}: {card: any}) {
  return (
    <div key={card.step} className={`${card.color} text-white w-full`}>
      <div className="border-b-2 py-6 px-6 h-52 flex flex-col justify-center">
        <p className="font-semibold text-3xl">{card.step}단계</p>
        <p className="font-medium mt-2 text-2xl">{card.title}&nbsp;&nbsp;</p>
      </div>
      <div className="min-h-[370px] md:min-h-[500px] max-h-[300px] md:max-h-[700px] flex flex-col justify-end">
        <div className="px-6 space-y-2 text-2xl sm:text-xl lg:font-medium mb-14">
          {card.desc.map((text: any, i: number) => (
            <p key={i} className="">
              {text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SystemCard;
