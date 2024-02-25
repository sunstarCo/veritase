'use client';
import React, {useState} from 'react';

function Card({content}: any) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="">
      <div
        className={`flex justify-between rounded-md transition-colors duration-300 ${
          isOpen ? 'bg-blue-3 text-white' : 'bg-[#F5F5F5]'
        }  min-h-64 items-center px-2 md:px-10`}>
        <div className="flex flex-col sm:flex-row justify-between w-full px-2">
          <h3 className="text-2xl sm:text-3xl md:text-4xl text-nowrap font-bold w-24 md:w-32 text-start">
            {content.time}
          </h3>
          <div className="flex gap-5 justify-between w-full sm:w-[85%] items-center">
            <div className="text-xl md:text-2xl font-medium max-sm:mt-4">{content.sub_text}</div>
          </div>
        </div>
        {isOpen ? (
          <button
            onClick={() => {
              setIsOpen(prev => !prev);
            }}
            className="relative rounded-full w-[30px] h-[30px] md:min-w-[50px] md:h-[50px] bg-white text-blue-4">
            <div className="absolute w-5 h-1 bg-blue-4 mx-auto left-1/2 -translate-x-1/2" />
          </button>
        ) : (
          <button
            onClick={() => {
              setIsOpen(prev => !prev);
            }}
            className="relative text-3xl md:text-4xl font-bold rounded-full w-[30px] h-[30px] md:min-w-[50px] md:h-[50px] bg-blue-4 text-white">
            <p className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">+</p>
          </button>
        )}
      </div>
      {isOpen && (
        <div className="min-h-60 text-lg font-medium md:text-2xl rounded-b-md shadow-[1px_4px_7px_0_rgba(53,60,73,0.08)] p-4 md:p-12 transition-colors duration-300">
          {content.main_text}
        </div>
      )}
    </div>
  );
}

export default Card;
