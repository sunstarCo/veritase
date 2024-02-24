import React from 'react';

function SocietyTips() {
  return (
    <div className="flex flex-col gap-9">
      <article>
        <p className="text-xl font-medium text-blue-4">가. 시험의 성격</p>
        <p className="mt-3">
          사회탐구 영역의 시험은 교과목의 특성에 따라 윤리적·지리적·역사적·사회적 상황을 소재로 제시하고,
          인문학적·사회과학적 접근 방법을 사용하여 대학 교육을 받는 데 필요한 사회과학적 탐구 능력과 사회 문제 해결을
          위한 창의적 사고력을 측정하는 시험이다.
        </p>
      </article>
      <article>
        <p className="text-lg font-medium text-blue-4">나. 평가목표</p>
        <div className="px-2 space-y-8">
          <p className="text-lg mt-8">1) 내용영역</p>
          <p>
            사회탐구 영역은 생활과 윤리, 윤리와 사상, 한국지리, 세계지리, 동아시아사, 세계사, 경제, 정치와 법,
            사회·문화의 과목으로 구성된다.{' '}
          </p>
          <p className="text-lg mt-20">2) 행동영역</p>
          {actionData.map((item, i) => {
            return (
              <div className="flex gap-8 items-center" key={i}>
                <div className="bg-blue-4 text-white min-w-40 min-h-40 flex justify-center items-center rounded-full">
                  {item.title}
                </div>
                <div className="px-8">
                  {item.content.map((text, i) => {
                    return (
                      <p key={i} className="list-item">
                        {text}
                      </p>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </article>
      <article className="mb-40">
        <p className="text-xl font-medium text-blue-4">다. 학습방법</p>
        <p className="mt-3">
          수능에서 좋은 결과를 얻기 위해서는 교과서 내의 다양한 대화·담화와 읽기 자료를 ‘문항 유형’과 연계하여 학습하는
          것이 매우 중요하다
        </p>
      </article>
    </div>
  );
}

export default SocietyTips;

const actionData = [
  {
    title: '개념·원리의 이해 ',
    content: [
      '교과의 개념이나 원리 등 기본적인 지식을 명확하게 파악하기',
      '교과의 개념이나 원리를 구체적인 사례나 상황에 적용하기 ',
    ],
  },
  {
    title: '문제 파악 및 인식',
    content: [
      '자료에 나타난 핵심 논쟁점, 주장, 문제 등 탐구해야 할 주제 찾기',
      '자료에 나타난 주장이나 관점에 내재된 기본 전제나 가정 찾기',
    ],
  },
  {
    title: '탐구 설계 및 수행',
    content: [
      '자료에서 개념이나 요소 간의 연관 관계를 추론하여 가설 설정하기',
      '주어진 과제를 수행하기 위한 적절한 연구 절차나 방법 제시하기',
      '가설이나 주제를 탐구하는 데 적합한 조사 내용 및 자료 찾기',
    ],
  },
  {
    title: '자료 분석 및 해석',
    content: [
      '자료에 나타난 정보를 적절하게 분석하기 ',
      '자료에 나타난 정보를 시대적 배경, 사회적 의미, 관련 이론 등과 연관 지어 해석하기 ',
    ],
  },
  {
    title: '결론 도출 및 평가',
    content: ['여러 가지 정보를 기초로 하여 결론을 적절하게 도출하기', '도출된 결론의 타당성을 평가하기'],
  },
  {
    title: '가치 판단 및 의사 결정',
    content: [
      '제기되는 문제의 쟁점에 담긴 가치 식별하기',
      '여러 가지 대안을 비교·평가하여 선택하고, 이 선택에 대한 타당한 근거 제시하기',
    ],
  },
];
