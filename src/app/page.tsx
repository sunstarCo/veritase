import BannerLayout from '@/components/common/BannerLayout';
import CardContainer from '@/components/main/CardContainer';
import MainBanner from '@/components/pageBanner/MainBanner';

export default function Home() {
  return (
    <>
      <BannerLayout>
        <MainBanner />
      </BannerLayout>

      <div className="flex items-center flex-col justify-start px-2 md:px-8 mt-20 md:mt-24">
        <h3 className="w-full max-w-[1760px] text-3xl my-2 font-bold font-inter">Conviction Through Meeting</h3>
        <CardContainer />
      </div>
    </>
  );
}
