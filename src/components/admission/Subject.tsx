import React from 'react';

import Image from 'next/image';

function Subject() {
  return (
    <>
      <article className="mt-10">
        <div className="flex gap-3 items-center">
          <div className="w-8">
            <Image src={'/icons/Search_blue.svg'} width={0} height={0} sizes="100" className="w-full" alt="돋보기" />
          </div>
          <p className="text-2xl font-medium text-blue-4">학생부 교과 전형이란?</p>
        </div>
        <div className="mt-4 px-12">
          <p>
            학교 생활기록부 중 교과성적, 즉 내신점수를 기준으로 합격을 판가름 하는 전형입니다. 교과성적은 주로
            석차등급을 활용하거나 성취도를 대학별 자체 기준에 따라 석차 등급으로 환산하여 반영합니다.
          </p>
        </div>
      </article>
      <article className="mt-10">
        <div className="flex gap-3 items-center">
          <div className="w-8">
            <Image src={'/icons/Search_blue.svg'} width={0} height={0} sizes="100" className="w-full" alt="돋보기" />
          </div>
          <p className="text-2xl font-medium text-blue-4">학교 생활기록부의 모든 성적을 반영할까요?</p>
        </div>
        <div className="mt-4 px-12">
          <p>
            대부분 대학들은 3학년 1학기까지의 성적을 활용하여 대학별로 환산등급을 활용하는 경우가 많습니다.
            반영교과목에도 대학별로 차이가 있습니다. 대학마다 반영하는 교과와 반영과목이 다르기 때문에 대학별 환산
            내신을 통해 자신에게 유리한 대학을 찾는 것이 매우 중요할 것 입니다.
          </p>
          <table className="border-black mt-8 w-full" border={1}>
            <thead>
              <tr className="border-b-2 border-black">
                <th className="h-24">대학명</th>
                <th className="">전형명</th>
                <th className="">반영교과</th>
                <th className="">반영방법</th>
              </tr>
            </thead>
            <tbody className="font-medium">
              <tr className=" text-center border-b-2 border-black">
                <td className="p-2 h-24">가천대</td>
                <td className="p-2">학생부우수자, 지역균형</td>
                <td className="p-2">
                  인문: 국, 수, 영, 사<br />
                  자연: 국, 수, 영, 과
                </td>
                <td className="p-2">
                  우수한 4개 학기 반영 <br />
                  우수 학기 순 40:30:20:10
                </td>
              </tr>
              <tr className="text-center">
                <td className="p-2 row-span-2 h-24" rowSpan={2}>
                  덕성여대
                </td>
                <td className="p-2">학생부 100%</td>
                <td className="p-2">국, 수, 영, 사/과</td>
                <td className="p-2">상위 3개 교과목의 4개 과목 - 총 12과목</td>
              </tr>
              <tr className="text-center border-b-2 border-black">
                <td className="p-2"> 고교추천</td>
                <td className="p-2">국, 수, 영, 사/과</td>
                <td className="p-2"> 상위 3개 교과 전 과목</td>
              </tr>
              <tr className="text-center border-b-2 border-black">
                <td className="p-2 h-24">동국대</td>
                <td className="p-2">학교장 추천인재</td>
                <td className="p-2">
                  인문: 국, 수, 영, 사, 한국사
                  <br />
                  자연: 국, 수, 영, 과, 한국사
                </td>
                <td className="p-2">석차등급 상위 10과목</td>
              </tr>
              <tr className=" text-center border-b-2 border-black">
                <td className="p-2 h-24">서울여대</td>
                <td className="p-2">교과 우수자</td>
                <td className="p-2">국, 수, 영, 사/과</td>
                <td className="p-2">교과별 상위 3과목 - 총 12과목</td>
              </tr>
              <tr className=" text-center border-b-2 border-black">
                <td className="p-2 h-24">한국항공대</td>
                <td className="p-2">교과성적 우수자</td>
                <td className="p-2">
                  공학: 국, 수, 영, 과<br />
                  어학/사회: 국, 수, 영, 사/과
                </td>
                <td className="p-2">교과별 상위 5과목 - 총 20과목</td>
              </tr>
            </tbody>
          </table>
        </div>
      </article>
      <article className="mt-10">
        <div className="flex gap-3 items-center">
          <div className="w-8">
            <Image src={'/icons/Search_blue.svg'} width={0} height={0} sizes="100" className="w-full" alt="돋보기" />
          </div>
          <p className="text-2xl font-medium text-blue-4">학생부교과전형은 수능성적은 반영하지 않을까요?</p>
        </div>
        <div className="mt-4 px-12">
          <p>
            수도권대학의 경우 대부분의 대학이 수능 최저학력기준을 요구하고 있기 때문에 수능성적도 필요하다고 볼수
            있습니다. (수도권대학 : 일반학과 기준입니다.)
          </p>

          <table className="border-black mt-8 w-full" border={1}>
            <thead>
              <tr className="h-32 border-b-2 border-black">
                <th className="">대학명</th>
                <th className="">전형명</th>
                <th className="">계열</th>
                <th className="">최저기준</th>
              </tr>
            </thead>
            <tbody className="font-medium">
              <tr className=" text-center">
                <td className="p-2 h-32" rowSpan={3}>
                  고려대
                </td>
                <td className="p-2" rowSpan={3}>
                  학업우수
                </td>
                <td className="p-2">인문</td>
                <td className="p-2">국수영탐(1) 4 합8</td>
              </tr>
              <tr className=" text-center">
                <td className="p-2">자연</td>
                <td className="p-2">국미기영과(1) 4 합8</td>
              </tr>
              <tr className=" text-center  border-b-2 border-black">
                <td className="p-2">반도체 등</td>
                <td className="p-2">국미기영과(1) 4 합7</td>
              </tr>
              <tr className=" text-center">
                <td className="p-2 h-32" rowSpan={3}>
                  연세대
                </td>
                <td className="p-2" rowSpan={2}>
                  활동우수
                </td>
                <td className="p-2">인문</td>
                <td className="p-2">국수 1개 포함 2 합4. 영3</td>
              </tr>
              <tr className=" text-center">
                <td className="p-2">자연</td>
                <td className="p-2">미기 포함 2 합5. 영3</td>
              </tr>
              <tr className=" text-center border-b-2 border-black">
                <td className="p-2">국제형(국내)</td>
                <td className="p-2">아시아학 등</td>
                <td className="p-2">국수 1개 포함 2 합5. 영1</td>
              </tr>
              <tr className=" text-center">
                <td className="p-2 h-32" rowSpan={3}>
                  이화여대
                </td>
                <td className="p-2" rowSpan={3}>
                  미래인재
                </td>
                <td className="p-2">인문</td>
                <td className="p-2">국수영탐(1) 3 합6</td>
              </tr>
              <tr className=" text-center">
                <td className="p-2">자연</td>
                <td className="p-2">국미기영과(1) 2 합5</td>
              </tr>
              <tr className=" text-center  border-b-2 border-black">
                <td className="p-2">스크랜튼</td>
                <td className="p-2">국수영탐(1) 3 합5</td>
              </tr>
              <tr className=" text-center">
                <td className="p-2 h-32" rowSpan={2}>
                  홍익대
                </td>
                <td className="p-2" rowSpan={2}>
                  학교생활우수
                </td>
                <td className="p-2">인문</td>
                <td className="p-2">국수영탐(1) 3 합8</td>
              </tr>
              <tr className=" text-center  border-b-2 border-black">
                <td className="p-2">자연</td>
                <td className="p-2">국미기영과(1) 3 합8</td>
              </tr>
            </tbody>
          </table>
        </div>
      </article>
      <article className="mt-10 mb-40">
        <div className="flex gap-3 items-center">
          <div className="w-8">
            <Image src={'/icons/Search_blue.svg'} width={0} height={0} sizes="100" className="w-full" alt="돋보기" />
          </div>
          <p className="text-2xl font-medium text-blue-4">학생부 교과전형을 지원하는 조건이 따로 있을까요?</p>
        </div>
        <div className="mt-4 px-12">
          <p>
            대학마다 다르기에 지원전 대학별 모집요강을 확인하는 것이 중요합니다. 알부 대학들은 재학생만으로 지원자격을
            한정하는 대학도 있고, 졸업생중에서는 특졍연도 이후 졸업생으로 지원자격을 제한하는 대학도 있습니다.  때로는
            학교(장) 추천을 받은 자로 한정하는 대학도 있습니다.
          </p>
        </div>
      </article>
    </>
  );
}

export default Subject;
