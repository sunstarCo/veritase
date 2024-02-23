import React from 'react';

import Image from 'next/image';

import Breadcrumb from '@/components/common/Breadcrumb';

const subjectArr = [
  {
    title: '국어 영역',
    desc: '국어 영역은 독서, 문학을 공통과목으로 하며, 화법과 작문, 언어와 매체 중에서 한 과목을 선택할 수 있습니다.',
  },
  {
    title: '수학 영역',
    desc: '수학영역은 수학1, 수학Ⅱ를 공통과목으로 하며, 확률과 통계, 미적분, 기하 중에서 한 과목을 선택할 수 있습니다.',
  },
  {
    title: '영어 영역',
    desc: '영어 영역은 절대평가로 시행되며, EBS 연계 문항은 모두 간접연계 방식으로 출제됩니다.',
  },
  {
    title: '한국사 영역',
    desc: '한국사 영역은 절대평가로 시행되며 필수 영역입니다. 이 영역에 응시하지 않으면 수능 응시 자체가 무효 처리되고 성적 전체가 제공되지 않습니다.',
  },
  {
    title: '탐구 영역',
    desc: '사회·과학탐구 영역은 사회·과학탐구 영역의 17개 선택과목 중에서 최대 2과목을 자유롭게 선택할 수 있습니다. 직업탐구 영역은 전문 공통 과목인 ‘성공적인 직업생활’과 5개 선택과목 중에서 최대 2개 과목을 선택할 수 있습니다. 단, 2개 과목 선택 시 전문 공통 과목인 ‘성공적인 직업생활’은 필수 선택입니다.',
  },
  {
    title: '제2외국어/한문 영역',
    desc: '제2외국어/한문 영역은 절대평가로 시행되며, 9개 선택과목 중에서 1개 과목을 선택할 수 있습니다.',
  },
];

export default function Page() {
  return (
    <div>
      <Breadcrumb title="정시" />
      <div className="max-w-[1280px] mx-auto break-keep px-6 sm:px-18 md:px-36">
        <p className="mt-24 font-medium leading-7 px-4">
          수능은 모든 영역에서 2015개정에 따라 교과 교육과정이 적용되는 시험이며, 한국사 영역은 필수로 지정되어 모든
          수험생이 응시하여야 합니다. <br />
          지난 수능과 비교하면 영역(과목)별 총 문항수와 배점, 시험순서는 동일하고 국어 및 수학 영역의 공통과목+선택과목
          출제 체제 입니다. <br />
          영어,한국사,제2외국어/한문 영역의 절대평가, 탐구영역의 과목 선택 방식 또한 동일하게 유지됩니다.
        </p>
        <article className="mt-10">
          <div className="flex gap-3 items-center">
            <div className="w-8">
              <Image src={'/icons/Search_blue.svg'} width={0} height={0} sizes="100" className="w-full" alt="돋보기" />
            </div>
            <p className="text-2xl font-bold text-blue-4">모집군별 대학 지원 방법이 궁금해요!</p>
          </div>
          <div className="mt-14 px-4">
            <div className="flex flex-col md:flex-row gap-20 items-center">
              <Image
                src={'/sat/정시지원분류.svg'}
                width={0}
                height={0}
                sizes="100"
                className="w-64"
                alt="정시 지원 분류"
              />
              <div>
                <p>
                  대학 정시 시험에서는 가군, 나군, 다군에서 각각 한 번씩 원서를 제출할 수 있습니다. 이는 총 3 번의 원서
                  접수를 의미합니다. 주로 수능 성적이 중요하게 반영되지만, 몇몇 대학은 학생부 성적이나 면접을 고려하기도
                  합니다. <br />
                  <br />각 대학은 수능 반영 방식이 상이하며, 이에 따라 대학별로 환산점수를 산출합니다.
                </p>
                <br />
                <p className="font-bold">원서접수를 진행한 후 가나다군에 따라 전형기간이 나누어 진행됩니다.</p>
              </div>
            </div>
            <div className="font-medium mt-12">
              <p className="">1{')'} 모집군별 대학 지원 방법</p>
              <div className="p-3 px-6">
                <p className=" list-item">
                  가,나,다군의 각 모집군에서 한 개의 학교만 지원이 가능 예를 들어 가군에서 고려대와 연세대 중 두 학교를
                  모두 지원 못하고 한 개의 대학만 선택 지원가능 그러나, 동일대학 내 군이 다른 모집단위에는 전공에 따라
                  복수 지원이 가능합니다. 서울 대학 가운데 선호도가 높은 학교는 보통 가군,나군에서 선발합니다.
                </p>
                <br />
                <p className="list-item">
                  가,나,다군 상관없이 지원 가능한 대학군별로 3 번의 원서를 쓴 후에 모집군 외로 추가 지원이
                  가능합니다.예를 들면 카이스트, 디지스트, 과학기술원 대학과 전문대학, 청운대, 호원대 등 산업대학 등이
                  있습니다.
                </p>
              </div>
              <div className="bg-slate-200 mt-8 p-2 rounded-2xl">
                <p>
                  <span className="text-red font-bold">※ 수시 추가합격자는 정시지원 불가</span>
                  <br />
                  수시에 합격하고 최종 등록을 하지 않았어도 합격한 기록이 있으면 정시 지원은 불가합니다.
                  <br /> 또한 수시지원하고 예비번호를 받은 경우 추가합격 전화를 받지 않았다고 해도 이미 합격한 기록이
                  남아 있기 때문에 정시 지원이 불가합니다.{' '}
                </p>
              </div>
            </div>
          </div>
        </article>
        <article className="mt-10">
          <div className="flex gap-3 items-center">
            <div className="w-8">
              <Image src={'/icons/Search_blue.svg'} width={0} height={0} sizes="100" className="w-full" alt="돋보기" />
            </div>
            <p className="text-2xl font-bold text-blue-4">학생부 반영 대학이 궁금해요!</p>
          </div>
          <div className="mt-10 px-4">
            <p>
              일부대학에서는 정시모집에서 수능 100%가 아닌 학생부도 반영하고 있으니 지원하는 대학별 모집요강을 꼭
              확인하는 습관을 가져야 합니다. 대학 및 학과별로 반영 영역수 및 비율을 다르기 떄문에 꼼꼼히 따져서 자신에게
              유리하게 반영되는 대학 및 학과를 확인하고 전력을 세워야 합니다.
            </p>
            <p className="mt-2">• 서울대학교 : 23 학년도부터 수능80% + 교과평가 20% 선발</p>
            <p>• 고려대학교 : 수능-교과 우선전형을 신설하고 수능 성적 외 내신성적 20% 반영 </p>
          </div>
        </article>
        <article className="my-10">
          <div className="flex gap-3 items-center">
            <div className="w-8">
              <Image src={'/icons/Search_blue.svg'} width={0} height={0} sizes="100" className="w-full" alt="돋보기" />
            </div>
            <p className="text-2xl font-bold text-blue-4">과목선택은 어떻게 하나요?</p>
          </div>
          <div className="mt-10 px-4 space-y-8 sm:space-y-6">
            {subjectArr.map((subject, i) => {
              return (
                <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-9 ">
                  <div className="bg-blue-3 text-white min-w-[9.75rem] h-16 flex items-center justify-center rounded-3xl py-1">
                    <div>{subject.title}</div>
                  </div>
                  <p className="max-sm:px-4">{subject.desc}</p>
                </div>
              );
            })}
          </div>
        </article>
      </div>
    </div>
  );
}
