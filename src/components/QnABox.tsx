'use client';

import React, {useState} from 'react';

function QnABox({question, answer, id}: {question: string; answer: JSX.Element; id: string}) {
  const [isOpen, setIsOpen] = useState(false);
  const isOdd = Number(id) % 2 === 1;
  return (
    <div className="flex flex-col md:flex-row md:min-h-72 break-keep  opacity-0 animate-showUpper">
      <div
        className={`flex text-center relative items-center px-3 sm:px-6 md:px-12 max-md:min-h-32 transition-all ease-in-out duration-500 ${
          isOpen
            ? 'w-full justify-between md:w-1/2 max-md:rounded-t-md md:rounded-l-md'
            : 'justify-between w-full rounded-md'
        } bg-${isOdd ? 'blue-4' : '[#EAEAEA]'}`}>
        <div className="flex justify-between items-center py-2 pr-7">
          <p
            className={`${
              isOpen ? 'absolute' : 'max-md:absolute md:ml-4 md:opacity-100'
            } font-inter text-white left-1/2 -translate-x-1/2 z-0 ${
              isOdd ? 'opacity-[27%]' : 'opacity-50'
            } text-9xl font-bold `}>
            Q
          </p>
          <div className="flex gap-3 items-center">
            <p
              className={`text-2xl md:text-4xl font-medium z-10 ${isOdd && 'text-white'} ${
                isOpen && 'md:animate-reShow'
              }`}>
              {question}
            </p>
          </div>
        </div>
        {!isOpen && (
          <button
            className={`text-nowrap text-xl ${!isOdd ? 'text-blue-4' : 'text-white'}`}
            onClick={() => {
              setIsOpen(prev => !prev);
            }}>
            답변보기
          </button>
        )}
        {isOpen && (
          <button
            className={`text-nowrap text-xl md:hidden ${!isOdd ? 'text-blue-4' : 'text-white'}`}
            onClick={() => {
              setIsOpen(prev => !prev);
            }}>
            닫기
          </button>
        )}
      </div>
      <div
        className={`flex relative justify-between items-center  px-3 sm:px-6 md:px-12 max-md:min-h-36 transition-all ease-in-out duration-500 ${
          isOpen ? 'w-full md:w-1/2 max-md:rounded-b-md md:rounded-r-md' : 'hidden'
        } bg-${!isOdd ? 'blue-4' : '[#EAEAEA]'}`}>
        <p
          className={`absolute font-inter left-1/2 -translate-x-1/2 text-white z-0 ${
            !isOdd ? 'opacity-[27%]' : 'opacity-50'
          } text-9xl font-bold `}>
          A
        </p>
        <div className="flex justify-between items-center py-2 ">
          <div className="flex gap-3 items-center">
            <div
              className={`text-xl md:text-2xl font-medium opacity-0 transition-all animate-[show_1.7s_ease-in-out_forwards] ${
                !isOdd && 'text-white'
              }`}>
              {answer}
            </div>
          </div>
        </div>
        {isOpen && (
          <button
            className={`text-blue-4 text-nowrap max-md:hidden bg-white rounded px-4 p-2 absolute top-2 right-2`}
            onClick={() => {
              setIsOpen(prev => !prev);
            }}>
            닫기
          </button>
        )}
      </div>
    </div>
  );
}

export default QnABox;
