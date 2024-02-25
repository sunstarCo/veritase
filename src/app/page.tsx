import Image from 'next/image';

import CardContainer from '@/components/main/CardContainer';

export default function Home() {
  return (
    <>
      <div className="w-full relative h-[calc(100vh-148px)]">
        <Image
          src={'/mainPage/mainBanner.jpg'}
          fill
          className="object-cover object-left-bottom"
          alt="메인배너"
          priority
        />
        <div className="flex flex-col min-[410px]:flex-row absolute top-[30%] break-keep w-full px-[10%]">
          <h1 className="text-white text-nowrap text-[3rem] lg:text-[4.5rem] font-medium transition-transform animate-show opacity-0">
            수능단기 고득점,&nbsp;
          </h1>
          <h1 className="text-white text-[3rem] lg:text-[4.5rem] max-[410px]:ml-auto font-medium transition-transform animate-show_delay_1s opacity-0">
            가능하다!
          </h1>
        </div>
      </div>

      <div className="flex items-center justify-start px-2 md:px-8 mt-12">
        <CardContainer />
      </div>
    </>
  );
}
