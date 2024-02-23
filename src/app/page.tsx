import CardContainer from '@/components/main/CardContainer';

export default function Home() {
  return (
    <>
      <div className="relative flex items-center bg-bottom justify-start bg-[url('/mainPage/mainBanner.png')] h-[calc(100vh-148px)] bg-cover break-keep">
        <div className="w-full flex md:px-24 px-6 pb-24">
          <h1 className="text-white text-nowrap text-[2.5rem] lg:text-[4.5rem] font-medium transition-transform animate-show opacity-0">
            수능단기 고득점,&nbsp;
          </h1>
          <h1 className="text-white text-[2.5rem] lg:text-[4.5rem] font-medium transition-transform animate-show_delay opacity-0">
            가능하다!
          </h1>
        </div>
      </div>
      <div className="flex items-center justify-start px-8 mt-12">
        <CardContainer />
      </div>
    </>
  );
}
