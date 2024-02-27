import Image from 'next/image';

import BannerLayout from '@/components/common/BannerLayout';
import CardContainer from '@/components/main/CardContainer';

export default function Home() {
  return (
    <>
      <BannerLayout>
        <Image
          src={'/mainPage/mainBanner.jpg'}
          fill
          className="object-cover object-left-bottom max-sm:hidden"
          alt="메인배너"
          priority
        />
        <Image
          src={'/mainPage/mainBannerMobile.jpg'}
          fill
          className="object-cover object-bottom sm:hidden"
          alt="메인배너"
          priority
        />
        <div className="flex flex-col min-[410px]:flex-row absolute top-[15%] sm:top-[30%] break-keep w-full px-[10%]">
          <h1 className="text-white text-nowrap text-[3rem] lg:text-[4.5rem] font-semibold transition-transform animate-show opacity-0">
            수능단기 고득점,&nbsp;
          </h1>
          <h1 className="text-white text-[3rem] lg:text-[4.5rem] max-[410px]:ml-auto font-semibold transition-transform animate-show_delay_1s opacity-0">
            가능하다!
          </h1>
        </div>
      </BannerLayout>
      <div className="flex items-center justify-start px-2 md:px-8 mt-16">
        <CardContainer />
      </div>
    </>
  );
}
