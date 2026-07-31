import BannerLayout from '@/components/common/BannerLayout';
import CardContainer from '@/components/main/CardContainer';
import MainBanner from '@/components/pageBanner/MainBanner';

export default function Home() {
  return (
    <>
      <BannerLayout>
        <MainBanner />
      </BannerLayout>

      {/* 폭·패딩을 Header 와 동일하게 두어야 로고와 카드의 좌우 끝이 맞는다 */}
      <div className="flex flex-col items-center mt-20 md:mt-24">
        <div className="w-full xl:max-w-[1640px] px-6 lg:px-4 xl:px-8">
          <h3 className="text-4xl my-2 font-extrabold font-inter">Meeting / Confidence</h3>
          <CardContainer />
        </div>
      </div>
    </>
  );
}
