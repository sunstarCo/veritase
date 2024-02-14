export const revalidate = 0;
import Image from 'next/image';
import Link from 'next/link';

import MainForm from '@/components/MainForm';
import MainNews from '@/components/MainNews';

export default function Home() {
  return (
    <>
      <div className="relative bg-[url('/banner/메인배너기본.png')] h-[30rem] sm:h-[30rem] md:h-[40rem] lg:h-[50rem] xl:h-[42.75rem] bg-cover">
        <div className="max-w-[1280px] mx-auto px-8 pt-[20%]">
          <h1 className="text-white text-[5rem] font-normal">수능은, 기세야</h1>
          <h2 className="text-white text-xl font-normal">
            1대1 집중교육으로 학생의 공부습관과 성적을 끝까지 책입집니다!
          </h2>
          <section className="flex gap-8 items-start mt-16">
            <div>
              <div className="flex gap-3">
                <Link
                  href={'/plan/eduPeriod'}
                  className="flex sm:flex-none sm:relative w-36 h-16 sm:w-[16rem] sm:h-[10rem] bg-blue-3">
                  <Image
                    src={'/icons/plus.svg'}
                    alt="plus"
                    width={0}
                    height={0}
                    sizes="100"
                    style={{width: 'fit-content'}}
                    className="absolute top-3 right-4 hover:animate-rotate360 transition-transform duration-300"
                  />
                  <div className="text-white px-5 flex items-center justify-center sm:block sm:pt-12">
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
                    <div className="text-sm font-normal hidden sm:block ">
                      <p>학생마다 다 다른 입시전략</p>
                      <p>나에게 맞는 입시전략으로 인서울!</p>
                    </div>
                  </div>
                </Link>
                <Link
                  href={'/education/eduSystem'}
                  className="flex sm:flex-none sm:relative w-36 h-16 sm:w-[16rem] sm:h-[10rem] bg-blue-4">
                  <Image
                    src={'/icons/plus.svg'}
                    alt="plus"
                    width={0}
                    height={0}
                    sizes="100"
                    style={{width: 'fit-content'}}
                    className="absolute top-3 right-4"
                  />
                  <div className="text-white px-5 flex items-center justify-center sm:block sm:pt-12">
                    <p className="font-bold text-lg sm:mb-3">학원 소개</p>
                    <Image
                      src={'/icons/plus.svg'}
                      alt="plus"
                      width={0}
                      height={0}
                      sizes="100"
                      style={{width: '10px'}}
                      className="block sm:hidden"
                    />
                    <div className="text-sm font-normal hidden sm:block ">
                      <p>1대1 대면 과외로</p>
                      <p>학생의 상황에 맞는 올바른 수업</p>
                    </div>
                  </div>
                </Link>
                <Link
                  href={'/education/qna'}
                  className="flex sm:flex-none sm:relative w-36 h-16 sm:w-[16rem] sm:h-[10rem] bg-blue-3">
                  <Image
                    src={'/icons/plus.svg'}
                    alt="plus"
                    width={0}
                    height={0}
                    sizes="100"
                    style={{width: 'fit-content'}}
                    className="absolute top-3 right-4"
                  />
                  <div className="text-white px-5 flex items-center justify-center sm:block sm:pt-12">
                    <p className="font-bold text-lg sm:mb-3">자주하는 질문</p>
                    <Image
                      src={'/icons/plus.svg'}
                      alt="plus"
                      width={0}
                      height={0}
                      sizes="100"
                      style={{width: '10px'}}
                      className="block sm:hidden"
                    />
                    <div className="text-sm font-normal hidden sm:block ">
                      <p>성적이 오르지 않는 이유</p>
                      <p>실수를 줄이는 법</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="flex gap-12 mt-16">
                <div className="w-72">
                  <Link href={'/plan/curriculum'}>
                    <Image
                      src={'/sat/대입개편안바로가기.png'}
                      alt="한국교육과정평가원 로고"
                      width={0}
                      height={0}
                      sizes="100"
                      className="w-full"
                    />
                  </Link>
                  <a href="tel:02-512-8343">
                    <Image
                      src={'/sat/학원연락처.svg'}
                      alt="전화로고"
                      width={0}
                      height={0}
                      sizes="100"
                      className="w-full mt-4"
                    />
                  </a>
                </div>
                <MainNews />
              </div>
            </div>
            <MainForm />
          </section>
        </div>
      </div>
      <div className="h-[30rem] w-full" />
    </>
  );
}
