export const revalidate = 0;

import Image from 'next/image';
import Link from 'next/link';

import NavCard from '@/components/main/NavCard';
import MainForm from '@/components/MainForm';
import MainNews from '@/components/MainNews';

export default function Home() {
  return (
    <>
      <div className="relative h-[26rem] bg-[url('/banner/메인배너기본.png')] sm:h-[36rem] md:h-[38rem] xl:h-[42.75rem] 2xl:[50rem] bg-cover break-keep">
        {/* <Image src={'/banner/메인배너기본.png'} fill sizes="100" alt="" className={`object-top object-cover`} /> */}

        <div className="absolute h-[26rem] sm:h-[36rem] md:h-[38rem] xl:h-[42.75rem] 2xl:[50rem] overflow-hidden w-full">
          <div className="absolute top-1/2 left-1/4 transition-transform w-0 h-auto -translate-x-[50%] -translate-y-[50%] bg-blue-600 blur-xl opacity-30 mix-blend-multiply animate-ink rounded-full" />
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 max-w-[1280px] w-full mx-auto px-2 md:px-8 pt-[35%] min-[450px]:pt-[20rem] flex flex-col">
          <div className="w-11/12 mx-auto max-lg:text-center">
            <div className="flex">
              <h1 className="text-white text-[3rem] md:text-[5rem] font-medium transition-transform animate-show opacity-0">
                수능은,&nbsp;
              </h1>
              <h1 className="text-white text-[3rem] md:text-[5rem] font-medium transition-transform animate-show_delay opacity-0">
                기세야
              </h1>
            </div>
            <h2 className="text-white text-xl font-normal">
              1대1 집중교육으로 학생의 공부습관과 성적을 끝까지 책입집니다!
            </h2>
          </div>
          <section className="flex gap-8 items-start justify-center mt-8 sm:mt-12 w-full">
            <div className="w-full">
              <NavCard />
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
      <div className="lg:hidden mt-20 px-6">
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
