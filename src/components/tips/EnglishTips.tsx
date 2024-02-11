import React from 'react';

function EnglishTips() {
  return (
    <div className="flex flex-col gap-9">
      <article>
        <p className="text-xl font-medium text-blue-4">가. 시험의 성격</p>
        <p className="mt-3">
          영어 영역의 시험은 고등학교 영어과 교육과정 성취기준의 달성 정도와 일상생활에 필요한 실용 영어 사용 능력 및
          대학에서 수학하는 데 필요한 영어 사용 능력을 평가한다.
        </p>
      </article>
      <article>
        <p className="text-xl font-medium text-blue-4">나. 평가목표</p>
        <p className="mt-3">
          영어 영역의 평가 목표는 간접 말하기를 포함한 듣기 이해 능력과 간접 쓰기를 포함한 읽기 이해 능력 측정을
          기본으로 하며, 구체적인 하위 평가 요소는 다음과 같다.
        </p>
        <div className="px-2 space-y-8 mt-10">
          {actionData.map((item, i) => {
            return (
              <div className="flex gap-8 items-center" key={i}>
                <div className="bg-blue-4 text-white min-w-28 min-h-28 flex justify-center items-center rounded-full">
                  {item.title}
                </div>
                <p>{item.content}</p>
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

export default EnglishTips;

const actionData = [
  {
    title: '중심 내용 파악',
    content:
      '중심 내용 파악 능력이란 대화·담화를 듣거나 글을 읽고 전체적인 내용을 이해·추론할 수 있는 능력으로서, 대화·담화 또는 글의 주제, 요지, 제목 등을 이해하고 추론할 수 있는 능력을 의미한다. ',
  },
  {
    title: '세부 정보 파악',
    content:
      '세부 정보 파악 능력이란 대화·담화나 글에 제시된 특정 정보를 사실적이고 정확하게 이해하는 능력으로서, 대화·담화나 글의 내용 일치/불일치, 그림·도표 등의 시각 자료와의 일치/불일치, 화자의 할/한 일, 부탁할/한 일, 숫자 정보나 기타 세부 정보를 파악할 수 있는 능력을 의미한다.',
  },
  {
    title: '함축적의미 추론',
    content:
      '함축적 의미 추론 능력이란 지문의 전체 내용에 비추어 밑줄 친 표현이 의미하는 바를 추론하는 능력을 의미한다.',
  },
  {
    title: '맥락 파악',
    content:
      '맥락 파악 능력이란 대화·담화를 듣거나 글을 읽고 말하는 이나 글쓴이의 의도나 목적 등을 파악하는 능력으로서, 말하는 이나 글쓴이의 목적, 의견, 주장 그리고 글의 분위기나 등장인물의 심경 등을 파악할 수 있는 능력, 그리고 글에서 빠진 정보(단어, 구, 절, 문장, 연결어)를 글의 내용에 의거하여 추론할 수 있는 능력을 의미한다.',
  },
  {
    title: '간접 말하기',
    content:
      ' 간접 말하기 능력이란 가상의 의사소통 상황에 대한 대화나 담화를 듣고 전체적인 맥락과 의사소통 상황을 고려하여 가장 적절한 응답을 표현할 수 있는 능력을 의미한다.',
  },
  {
    title: '간접 쓰기',
    content:
      ' 간접 쓰기 능력이란 글의 전체적인 맥락과 문장 간의 논리적 흐름을 파악하여 가상의 글쓰기에 적용할 수 있는 능력으로서, 읽기 자료를 통해 흐름에 무관한 문장이나 주어진 문장의 적합한 위치 파악, 글의 순서 파악, 그리고 문단을 요약할 수 있는 능력을 의미한다.',
  },
  {
    title: '언어형식·어휘 ',
    content:
      '언어형식·어휘 능력이란 글의 전체적인 의미나 문장 간의 의미적 관련성을 통하여 언어형식의 적합성이나 어휘의 적합성을 파악하는 능력으로서, 문맥에 따른 언어형식이나 어휘의 정확성 파악 및 지칭 추론 등을 할 수 있는 능력을 의미한다.',
  },
];
