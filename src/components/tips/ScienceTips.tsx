import React from 'react';

import Image from 'next/image';

function ScienceTips() {
  return (
    <div className="flex flex-col gap-9">
      <article>
        <p className="text-xl font-medium text-blue-4">가. 시험의 성격</p>
        <p className="mt-3">
          과학탐구 영역의 시험은 대학 교육을 이수하는 데 필요한 과학 개념1)에 대한 이해와 적용 능력 및 과학적 탐구 능력,
          과학적 사고력을 고등학교 교육과정의 내용과 수준에 따라 다양한 탐구 상황에서 측정하는 시험이다.
        </p>
      </article>
      <article>
        <p className="text-xl font-medium text-blue-4">나. 평가목표</p>
        <p className="mt-3">
          과학탐구 영역 평가 목표의 틀은 다음과 같이 내용 영역과 행동 영역을 축으로 하는 2차원 구조로 나타낼 수 있다.
        </p>
        <Image
          src={'/sat/TipsChart.svg'}
          alt="내용 영역/행동영역 구분차트"
          width={0}
          height={0}
          sizes="100"
          className="w-3/4 my-8 mx-auto"
        />
        <p className="mt-3">
          과학탐구 영역의 평가 문항은 다양한 탐구 상황에서 내용 영역과 행동 영역의 요소를 평가 하도록 구성한다. 내용
          영역에는 과학 교과 각 과목의 주요 내용이 포함되며, 행동 영역에는 문제 인식 및 가설 설정, 탐구 설계 및 수행,
          자료 분석 및 해석, 결론 도출 및 평가와 같은 탐구 기능 요소가 포함되고, 주요 과학 개념에 대한 이해와 적용
          능력도 포함된다. 또한 문항의 소재로는 순수 과학적 소재뿐만 아니라 실생활 소재도 사용된다.{' '}
        </p>
      </article>
      <article className="mb-40">
        <p className="text-xl font-medium text-blue-4">다. 학습방법</p>
        <p className="mt-3">
          과학탐구 영역의 시험에서 좋은 결과를 얻기 위해서는 과학탐구 영역의 각 과목에서 다루는 기본 개념에 대한 충분한
          이해와 개념을 연관 지어 통합적으로 사고하는 능력, 그리고 학습한 내용을 일상생활에 적용해 보려는 노력이
          필요하다. 또한, 과학탐구 과정에 대한 이해와 교과서에 제시된 그림이나 표 등을 해석하는 능력, 실험 방법과 실험
          기기에 대한 이해 등도 중요하다.
        </p>
        <div className="px-4">
          <p className="text-lg mb-2 mt-8 font-bold">1) 기본적인 과학 지식에 대한 이해와 적용</p>
          <p>
            수능은 기본 개념에 대한 이해를 바탕으로 사고력과 문제 해결력을 측정하는 시험이다. 따라서 교육과정 및
            교과서에 제시되어 있는 기본 개념을 정확히 이해하고 있어야 하며, 학습한 개념을 문제 상황에 적용할 수 있는
            능력을 길러야 한다.
          </p>
          <div className="px-6 mt-2">
            <p className="list-item">교육과정에 제시된 주요 개념 이해하기</p>
            <p className="list-item">일상생활이나 자연환경에서 일어나는 현상을 과학 개념을 활용하여 설명하기</p>
            <p className="list-item"> 현상을 설명하기 위해 필요한 과학 개념을 통합적으로 이해하여 적용하기</p>
          </div>
          <p className="text-lg mb-2 mt-8 font-bold">2) 과학적 탐구 방법에 대한 이해와 활용 </p>
          <p>
            수능에서는 문제 인식 및 가설 설정, 탐구 설계 및 수행, 자료 분석 및 해석, 결론 도출 및 평가와 같은 탐구
            과정에 대한 이해와 탐구 기능을 평가하는 문항이 자주 출제된다. 이러한 문항을 해결하기 위해서는 핵심 개념에
            대한 이해를 바탕으로 다양한 탐구 활동 및 자료를 해석하고 의미를 파악할 수 있는 능력이 필요하다. 또한
            교과서에 제시된 탐구 활동의 수행을 통해 탐구 기능을 향상시켜야 한다.
          </p>
          <div className="px-6 mt-2">
            <p className="list-item">문제를 인식하여 타당한 가설을 설정하고, 가설 검증을 위한 실험 설계하기</p>
            <p className="list-item">실험 과정의 의미를 이해하고 실험 도구를 올바르게 사용하여 실험 수행하기</p>
            <p className="list-item">사물이나 사건을 기준에 따라 분류하거나, 분류된 결과로부터 분류 기준 찾기</p>
            <p className="list-item">
              제시된 탐구 결과 자료(그림, 표, 그래프)의 경향성, 규칙성을 파악하거나 과학 개념을 적용 하여 자료 해석하기
              ∙{' '}
            </p>
            <p className="list-item">
              탐구 결과에 근거하여 자료를 해석하고 결론을 도출하며, 일반화된 진술문의 타당성 평가 하기{' '}
            </p>
          </div>
          <p className="text-lg mb-2 mt-8 font-bold">3) 과학적 사고력 및 문제 해결 능력의 활용 </p>
          <p>
            수능에서는 과학적 사고에 근거하여 주어진 문제 상황을 해결하도록 요구하는 문항이 출제된다. 이러한 문항을
            해결하기 위해서는 과학 개념을 토대로 합리적이고 논리적으로 추론하는 능력, 추리 과정과 논증에 대해 비판적으로
            고찰하는 능력이 필요하다.
          </p>
          <div className="px-6 mt-2">
            <p className="list-item">
              주어진 문제 상황에 적합한 과학 개념을 파악하고 이를 토대로 과학적으로 타당한 해 구하기
            </p>
            <p className="list-item">주어진 자료에서 단서를 찾거나 경향성을 파악하여 단계적으로 추론하기</p>
            <p className="list-item">
              제시된 자료를 문제 해결에 적합한 형태로 변환하거나, 과학 개념을 적용하여 자료 간의 관계 파악하기
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}

export default ScienceTips;
