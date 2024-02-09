import Image from 'next/image';

const plusSvg = '../';
export default function Home() {
  return (
    <>
      <div className="bg-[url('/banner/메인배너기본.png')] h-[30rem] sm:h-[30rem] md:h-[40rem] lg:h-[50rem] xl:h-[42.75rem] bg-cover">
        <h1 className="text-white text-[5rem] font-normal">수능은, 기세야</h1>
        <h2 className="text-white text-xl font-normal">
          1대1 집중교육으로 학생의 공부습관과 성적을 끝까지 책입집니다!
        </h2>
        <div className="flex sm:flex-none sm:relative w-36 h-16 sm:w-[16rem] sm:h-[10rem] bg-[#195CCD]">
          <Image
            src={'/icons/plus.svg'}
            alt="plus"
            width={0}
            height={0}
            sizes="100"
            style={{width: 'fit-content'}}
            className="absolute top-3 right-4"
          />
          <div className="text-white  flex items-center justify-center sm:block sm:pt-12">
            <p className="font-bold text-lg sm:mb-3">입시전략</p>
            <Image
              src={'/icons/plus.svg'}
              alt="plus"
              width={0}
              height={0}
              sizes="100"
              style={{width: '10px'}}
              className="block sm:hidden"
            />
            <div className="text-sm font-normal hidden sm:block">
              <p>학생마다 다 다른 입시전략</p>
              <p>나에게 맞는 입시전략으로 인서울!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
