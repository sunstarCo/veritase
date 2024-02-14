export const revalidate = 0;
import Image from 'next/image';
import Link from 'next/link';

import MainForm from '@/components/MainForm';
import MainNews from '@/components/MainNews';

export default function Home() {
  return (
    <>
      <div className="relative bg-[url('/banner/메인배너기본.png')] h-[26rem] sm:h-[36rem] md:h-[38rem] xl:h-[42.75rem] 2xl:[50rem] bg-cover break-keep">
        <div className="absolute h-[26rem] sm:h-[36rem] md:h-[38rem] xl:h-[42.75rem] 2xl:[50rem] overflow-hidden w-full">
          <div className="absolute top-1/2 left-1/2 transition-transform w-0 h-auto -translate-x-[50%] -translate-y-[50%] bg-blue-500 blur-xl opacity-20 mix-blend-multiply animate-ink rounded-full" />
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 max-w-[1280px] w-full mx-auto px-2 md:px-8 pt-[20%] flex flex-col">
          <div className="w-11/12 mx-auto max-lg:text-center">
            <h1 className="text-white text-[3rem] md:text-[5rem] font-normal">수능은, 기세야</h1>
            <h2 className="text-white text-xl font-normal">
              1대1 집중교육으로 학생의 공부습관과 성적을 끝까지 책입집니다!
            </h2>
          </div>
          <section className="flex gap-8 items-start justify-center mt-16 w-full">
            <div className="w-full">
              <div className="flex gap-3 max-sm:justify-center">
                <Link
                  href={'/plan/eduPeriod'}
                  className="flex sm:flex-none relative w-40 h-16 sm:w-[32%] sm:h-[10rem] bg-blue-3">
                  <Image
                    src={'/icons/plus.svg'}
                    alt="plus"
                    width={0}
                    height={0}
                    sizes="100"
                    style={{width: 'fit-content'}}
                    className="absolute top-2 right-2 sm:top-3 sm:right-4 max-sm:scale-50 transition-transform hover:animate-rotate"
                  />
                  <div className="text-white px-5 flex items-center justify-center sm:block sm:pt-12">
                    <p className="font-bold text-lg sm:mb-3">입시전략</p>
                    <div className="text-sm font-normal hidden sm:block ">
                      <p>학생마다 다 다른 입시전략</p>
                      <p>나에게 맞는 입시전략으로 인서울!</p>
                    </div>
                  </div>
                </Link>
                <Link
                  href={'/education/eduSystem'}
                  className="flex sm:flex-none relative w-40 h-16 sm:w-[32%] sm:h-[10rem] bg-blue-4">
                  <Image
                    src={'/icons/plus.svg'}
                    alt="plus"
                    width={0}
                    height={0}
                    sizes="100"
                    style={{width: 'fit-content'}}
                    className="absolute top-2 right-2 sm:top-3 sm:right-4 max-sm:scale-50 transition-transform hover:animate-rotate"
                  />
                  <div className="text-white px-5 flex items-center justify-center sm:block sm:pt-12">
                    <p className="font-bold text-lg sm:mb-3">학원소개</p>
                    <div className="text-sm font-normal hidden sm:block ">
                      <p>1대1 대면 과외로</p>
                      <p>학생의 상황에 맞는 올바른 수업</p>
                    </div>
                  </div>
                </Link>
                <Link
                  href={'/education/qna'}
                  className="flex sm:flex-none relative w-40 h-16 sm:w-[32%] sm:h-[10rem] bg-blue-3">
                  <Image
                    src={'/icons/plus.svg'}
                    alt="plus"
                    width={0}
                    height={0}
                    sizes="100"
                    style={{width: 'fit-content'}}
                    className={`absolute top-2 right-2 sm:top-3 sm:right-4 max-sm:scale-50 transition-transform animate-rotate`}
                  />
                  <div className="text-white px-5 flex items-center justify-center sm:block sm:pt-12">
                    <p className="font-bold text-lg sm:mb-3">자주하는질문</p>
                    <div className="text-sm font-normal hidden sm:block ">
                      <p>성적이 오르지 않는 이유</p>
                      <p>실수를 줄이는 법</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="flex gap-6 mt-16 w-full max-lg:hidden">
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
            <div className="max-lg:hidden">
              <MainForm />
            </div>
          </section>
        </div>
      </div>
      <div className="lg:hidden mt-12 px-6">
        <MainNews />
        <div className="flex flex-col md:flex-row w-4/5 mx-auto gap-16 mt-12 justify-center items-center mb-12">
          <MainForm />
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
        </div>
      </div>
      <div className="w-full sm:h-[35rem]" />
    </>
  );
}
