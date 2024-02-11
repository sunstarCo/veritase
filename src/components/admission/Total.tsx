import React from 'react';

import Image from 'next/image';

function Total() {
  return (
    <div>
      <article className="mt-10">
        <div className="flex gap-3 items-center">
          <div className="w-8">
            <Image src={'/icons/Search_blue.svg'} width={0} height={0} sizes="100" className="w-full" alt="돋보기" />
          </div>
          <p className="text-2xl font-medium text-blue-4">학생부 종합 전형이란?</p>
        </div>
        <div className="mt-4 px-12">
          <p>
            학교생활기록부 내신성적 +교과활동 외 동아리, 체험활동 등 사회활동 요소가 포함된 비교과 활동까지 포함하여
            종합적으로 평가하는 전형이다.
          </p>
        </div>
      </article>
      <article className="mt-10">
        <div className="flex gap-3 items-center">
          <div className="w-8">
            <Image src={'/icons/Search_blue.svg'} width={0} height={0} sizes="100" className="w-full" alt="돋보기" />
          </div>
          <p className="text-2xl font-medium text-blue-4">
            학교생활기록부(생기부)에 대한 평가요소와 세부사항은 어떻게 될까요?
          </p>
        </div>
        <div className="mt-8 px-12">
          <div className="flex gap-12 items-center">
            <div className="w-28 h-28 sm:w-44 sm:h-44 rounded-full flex justify-center items-center bg-blue-4">
              <div className="w-24 h-24 sm:w-40 sm:h-40 text-lg sm:text-xl rounded-full border-4 border-white bg-blue-4 flex justify-center items-center text-white text-center">
                학생부 종합전형
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-8">
                <div className="w-32 text-center text-xl py-2 bg-blue-4 text-white rounded-full">학업 역량</div>
                <div className="text-lg">
                  <p>• 학업성취도</p>
                  <p>• 학업태도</p>
                  <p>• 탐구력</p>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="w-32 text-center text-xl py-2 bg-blue-4 text-white rounded-full">진로 역량</div>
                <div className="text-lg">
                  <p>• 전공 관련 교과 이수</p>
                  <p>• 노력 & 성취도</p>
                  <p>• 진로 탐색 활동 & 경험</p>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="w-32 text-center text-xl py-2 bg-blue-4 text-white rounded-full">공동체 역량</div>
                <div className="text-lg">
                  <p>• 협업 & 소통 능력</p>
                  <p>• 나눔 & 배려</p>
                  <p>• 성실성 & 규칙 준수</p>
                  <p>• 리더십</p>
                </div>
              </div>
            </div>
          </div>
          <table className="border-black mt-8 w-full" border={1}>
            <thead>
              <tr className="bg-yellow-200">
                <th className="">평가요소</th>
                <th className="" colSpan={2}>
                  평가항목에 따른 세부내용
                </th>
              </tr>
            </thead>
            <tbody className="font-medium">
              <tr className=" text-center">
                <td className="p-2" rowSpan={3}>
                  학업역량
                  <br />- 대학교육을 충실히 이수하는데 필요한 수학능력
                </td>
                <td className="p-2">학업성취도</td>
                <td className="p-2">고교 교육과정에서 이수한 교과의 성취수준이나 학업 발전의 정도</td>
              </tr>
              <tr className=" text-center">
                <td className="p-2">학업태도</td>
                <td className="p-2">학업을 수행하고 학습해 나가려는 의지와 노력</td>
              </tr>
              <tr className=" text-center">
                <td className="p-2">탐구력</td>
                <td className="p-2">지적 호기심을 바탕으로 사물과 현상에 대해 탐구하고, 문제를 해결하려는 노력</td>
              </tr>
              {/*  */}
              <tr className=" text-center">
                <td className="p-2" rowSpan={3}>
                  진로역량
                  <br />- 자신의 진로와 전공(계열)에 관한 탐색 노력과 준비정도
                </td>
                <td className="p-2">
                  전공(계열) 관련 <br />
                  교과이수 노력
                </td>
                <td className="p-2">고교 교육과정에서 전공(계열)에 필요한 과목을 선택하여 이수한 정도</td>
              </tr>
              <tr className=" text-center">
                <td className="p-2">
                  전공(계열) 관련 <br />
                  교과 성취도
                </td>
                <td className="p-2">고교 교육과정에서 전공(계열)에 필요한 과목을 수강하고 취득한 학업 성취 수준</td>
              </tr>
              <tr className=" text-center">
                <td className="p-2">진로탐색 활동과 경험</td>
                <td className="p-2">자신의 진로를 탐색하는 과정에서 이루어진 활동이나 경험 및 노력 정도</td>
              </tr>
              {/*  */}
              <tr className=" text-center">
                <td className="p-2" rowSpan={4}>
                  공동체역량
                  <br />- 공동체의 일원으로서 갖춰야 할 바람직한 사고와 행동
                </td>
                <td className="p-2">협업과 소통능력</td>
                <td className="p-2">
                  공동체의 목표를 달성하기 위해 협력하며, 구성원들과 합리적인 의사소통을 할 수 있는 능력
                </td>
              </tr>
              <tr className=" text-center">
                <td className="p-2">나눔과 배려</td>
                <td className="p-2">
                  상대방을 존중하고 이해하여 원한만 관계를 형성하며, 타인을 위해 기꺼이 나누어 주고자 하는 태도와 행동
                </td>
              </tr>
              <tr className=" text-center">
                <td className="p-2">성실성과 규칙 준수</td>
                <td className="p-2">
                  책임감을 바탕으로 자신의 의무를 다하고, 공동체의 기본 윤리와 원칙을 준수하는 태도
                </td>
              </tr>
              <tr className=" text-center">
                <td className="p-2">리더십</td>
                <td className="p-2">공동체의 목표 달성을 위해 구성원들의 상호작용을 이끌어가는 능력</td>
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
          <p className="text-2xl font-medium text-blue-4">
            학생부 종합전형은 준비한다면 생기부의 어느 부분에 신경을 써야할까요? 
          </p>
        </div>
        <div className="mt-4 px-12">
          <p>
            대학별 차이가 있기에 반드시 가고자 하는 대학에 대한 입시요강을 확인하는 것이 좋습니다. 학생부종합전형을
            준비하기 위해서는 앞에서 언급한 것처럼 평가요소와 세부 내용에 대한 이해가 필요합니다.
            <br />
            아래 표는 2024학년도 학생부종합전형의 대학별 평가요소의 일부입니다.
          </p>
          <table className="border-black mt-8 w-full" border={1}>
            <thead>
              <tr className="bg-yellow-200">
                <th className="">대학명</th>
                <th className="">서류/면접</th>
                <th className="">평가요소(비율)</th>
              </tr>
            </thead>
            <tbody className="font-medium">
              <tr className=" text-center">
                <td className="p-2" rowSpan={2}>
                  가톨릭대
                </td>
                <td className="p-2">잠재능력우수자면접</td>
                <td className="p-2 text-start">학업역량(25), 전공적합성(35), 인성(20), 발전가능성(20)</td>
              </tr>
              <tr className=" text-center">
                <td className="p-2">잠재능력우수자서류</td>
                <td className="p-2 text-start">학업역량(35), 전공적합성(30), 인성(20), 발전가능성(15)</td>
              </tr>
              {/*  */}
              <tr className=" text-center">
                <td className="p-2" rowSpan={2}>
                  고려대
                </td>
                <td className="p-2">학업우수</td>
                <td className="p-2 text-start">학업역량(50), 자기계발역량(30), 공동체역량(20)</td>
              </tr>
              <tr className=" text-center">
                <td className="p-2">계열적합</td>
                <td className="p-2 text-start">학업역량(40), 자기계발역량(40), 공동체역량(20)</td>
              </tr>
              {/*  */}
              <tr className=" text-center">
                <td className="p-2" rowSpan={2}>
                  광운대
                </td>
                <td className="p-2">참빛인재 Ⅰ - 면접형</td>
                <td className="p-2 text-start">학업역량(35), 진로역량(45), 인성(20)</td>
              </tr>
              <tr className=" text-center">
                <td className="p-2">참빛인재 Ⅱ - 서류형</td>
                <td className="p-2 text-start">학업역량(25), 진로역량(50), 인성(25)</td>
              </tr>
              {/*  */}
              <tr className=" text-center">
                <td className="p-2" rowSpan={2}>
                  국민대
                </td>
                <td className="p-2">학교생활우수자</td>
                <td className="p-2 text-start">
                  자기주도성(15), 발전가능성(20), 전공잠재력(35), 학업능력(15), 공동체의식 및 협동능력(15)
                </td>
              </tr>
              <tr className=" text-center">
                <td className="p-2">국민프런티어</td>
                <td className="p-2 text-start">
                  자기주도성(30), 발전가능성(20), 전공잠재력(25), 학업능력(15), 공동체의식 및 협동능력(10)
                </td>
              </tr>
              {/*  */}
              <tr className=" text-center">
                <td className="p-2" rowSpan={2}>
                  서울시립대
                </td>
                <td className="p-2">학생부종합 Ⅰ</td>
                <td className="p-2 text-start">학업역량(35), 잠재역량(40), 사회성(25)</td>
              </tr>
              <tr className=" text-center">
                <td className="p-2">학생부종합 Ⅱ</td>
                <td className="p-2 text-start">학업역량(30), 잠재역량(50), 사회성(20)</td>
              </tr>
              {/*  */}
              <tr className=" text-center">
                <td className="p-2" rowSpan={2}>
                  서울여대
                </td>
                <td className="p-2">바롬인재서류</td>
                <td className="p-2 text-start">학업역량(40), 진로역량(35), 공동체역량(25)</td>
              </tr>
              <tr className=" text-center">
                <td className="p-2">바롬인재면접</td>
                <td className="p-2 text-start">학업역량(35), 진로역량(40), 공동체역량(25)</td>
              </tr>
              {/*  */}
              <tr className=" text-center">
                <td className="p-2" rowSpan={2}>
                  세종대
                </td>
                <td className="p-2">세종창의인재(서류)</td>
                <td className="p-2 text-start">학업역량(45), 진로역량(25), 창의융합(20), 공동체역량(10)</td>
              </tr>
              <tr className=" text-center">
                <td className="p-2">세종창의인재(면접)</td>
                <td className="p-2 text-start">학업역량(25), 진로역량(45), 창의융합(20), 공동체역량(10)</td>
              </tr>
              {/*  */}
              <tr className=" text-center">
                <td className="p-2" rowSpan={2}>
                  중앙대
                </td>
                <td className="p-2">CAU융합형인재</td>
                <td className="p-2 text-start">학업역량(50), 진로역량(30), 공동체역량(20)</td>
              </tr>
              <tr className=" text-center">
                <td className="p-2">CAU탐구형인재</td>
                <td className="p-2 text-start">학업역량(40), 진로역량(50), 공동체역량(10)</td>
              </tr>
              {/*  */}
              <tr className=" text-center">
                <td className="p-2" rowSpan={2}>
                  한국외대
                </td>
                <td className="p-2">학생부종합(서류형)</td>
                <td className="p-2 text-start">학업역량(50), 진로역량(30), 공동체역량(20)</td>
              </tr>
              <tr className=" text-center">
                <td className="p-2">학생부종합(면접형)</td>
                <td className="p-2 text-start">학업역량(30), 진로역량(50), 공동체역량(20)</td>
              </tr>
              {/*  */}
              <tr className=" text-center">
                <td className="p-2" rowSpan={2}>
                  단국대
                </td>
                <td className="p-2">DKU인재-서류형</td>
                <td className="p-2 text-start">학업역량(45), 진로역량(35), 공동체역량(20)</td>
              </tr>
              <tr className=" text-center">
                <td className="p-2">DKU인재-면접형</td>
                <td className="p-2 text-start">학업역량(35), 진로역량(45), 공동체역량(20)</td>
              </tr>
              {/*  */}
              <tr className=" text-center">
                <td className="p-2" rowSpan={2}>
                  경북대
                </td>
                <td className="p-2">일반학생</td>
                <td className="p-2 text-start">학업역량(30), 진로역량(50), 공동체역량(20)</td>
              </tr>
              <tr className=" text-center">
                <td className="p-2">SW특별</td>
                <td className="p-2 text-start">학업역량(40), 진로역량(45), 공동체역량(15)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </article>
    </div>
  );
}

export default Total;
