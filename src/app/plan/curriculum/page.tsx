import React from 'react';

import Image from 'next/image';

import Breadcrumb from '@/components/common/Breadcrumb';

export default function Page() {
  return (
    <div>
      <Breadcrumb title="2028 대입 개편안" />
      <div className="max-w-[1280px] mx-auto break-keep px-6 sm:px-14">
        <div className="flex flex-col md:flex-row gap-11 mt-24">
          <Image
            src={'/sat/대입개편안.png'}
            alt="대입개편안"
            width={0}
            height={0}
            sizes="100"
            className="md:w-1/2 w-full object-contain"
          />
          <div className="md:w-1/2 w-full">
            <p className="text-2xl font-medium mb-10">통합형·융합형 수능 과목체계로 개편</p>
            <div className="space-y-8 px-4">
              <p className="list-item">
                통합형 과목체계를 도입(선택과목 폐지)하여,
                <br /> 과목 선택의 유·불리를 해소하고 수능 ‘공정성’ 확보
              </p>
              <p className="list-item">사회·과학 통합 응시로 벽을 허물고, 융합적 학습 유도</p>
              <p className="list-item">
                (통합형 과목체계 도입) 국어·수학·영어 영역은 선택과목 없이 동일한 내용과 기준으로 평가하고, 공정하고
                단순하게 점수 부여
              </p>

              <div className="list-item">
                교육과정 중 일반적으로 개설되고 분야별 주요 내용을 다루는 과목* 위주로 출제, 현행 수능과 학습량
                동일(고교수업 기준 8과목)
                <div className="flex gap-1 text-sm mt-3">
                  <span>*</span>
                  <p>
                    (국어) 화법과언어, 독서와작문, 문학 <br />
                    (수학) 대수, 미적분Ⅰ, 확률과통계
                    <br /> (영어) 영어Ⅰ·Ⅱ
                  </p>
                </div>
              </div>
              <div>
                <p className="list-item">한국사 영역, 제2외국어/한문 영역은 교육과정에 따라 출제과목만 조정</p>
                <p className="list-item">영역별 평가방식 및 성적제공 방식은 안정성을 위해 현행 유지</p>
                <p className="list-item">
                  EBS 연계는 현행 유지(50% 간접 연계) : 연계 체감도가 높은 출제로 공교육 및 EBS 중심 수능 준비 지원
                </p>
              </div>

              <table className="w-full">
                <thead className="bg-yellow-200">
                  <tr>
                    <th className="p-2">기존명칭</th>
                    <th>2028대입개편안 과목 명칭</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr>
                    <td className="bg-slate-200">수1</td>
                    <td className="font-semibold">대수</td>
                  </tr>
                  <tr>
                    <td className="bg-slate-200">수2</td>
                    <td className="font-semibold">미적분1</td>
                  </tr>
                  <tr>
                    <td className="bg-slate-200">미적분</td>
                    <td className="font-semibold">미적분2</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="flex w-full mt-24 mb-16 border-y-2 border-sub-3 items-center">
          <div className="bg-sub-2 h-14 w-1/6 flex items-center justify-center">첨부파일</div>
          <div className="flex justify-between w-full px-6">
            <div>
              <span>[교육부 자료]</span>
              <a href="/2028대입개편안.hwp" download className="text-blue-700 underline ml-2">
                2028 대입개편안.hwp
              </a>
            </div>
            <a href="/2028대입개편안.hwp" download className="text-blue-700 underline ml-2">
              파일 다운로드
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
