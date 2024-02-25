import React from 'react';

import Breadcrumb from '@/components/common/Breadcrumb';
import QnABox from '@/components/QnABox';

const data = [
  {
    id: '1',
    question: '지금 준비해도 늦지 않았을까?',
    answer: (
      <p className="break-keep">
        네..늦지 않았습니다. “생각의 차이” 입니다. 공부를 해야하는 건 아는데, 어디서부터 어떻게 해야할 지 모르겠죠?
        우선, 계획을 세워야 내가 해야할 것이 무엇인지를 알 수가 있고 그래야 시작 할 수 있습니다.
      </p>
    ),
  },
  {
    id: '2',
    question: '우리 아이가 학원도 열심히 다니는데, 왜 성적의 변화가 없을까?',
    answer: <p>성적의 변화는 “학습방법”, “생각의차이”에서 비롯됩니다.</p>,
  },
  {
    id: '3',
    question: '내신말고, 수능 성적을 올릴 수 있는 방법이 있을까?',
    answer: <p>네.. 있습니다. “누구의 도움으로 어떻게 준비”하느냐에 따라 얼마든지 역전이 가능합니다.</p>,
  },
  {
    id: '4',
    question: '아이가 공부하는 학습방법을 모르는 것 같은데...',
    answer: <p>공부는 “수준별 학습목표”와 “적합한 학습커리큘럼 설정”이 중요합니다.</p>,
  },
  {
    id: '5',
    question: '부모가 신경쓰지 못한 대입정보는 어디서 얻을 수 있을까?',
    answer: (
      <p>
        막연한 입시정보는 어디에서든 얻을 수 있습니다. 다만, 우리 아이에게 맞는 상담을 통한 맞춤 정보에 따라 대입 합격이
        좌우됩니다.
      </p>
    ),
  },
  {
    id: '6',
    question: '현재 우리아이 성적으로 갈 수 있는 대학은 어디일까?',
    answer: <p>현재의 성적으로 대학을 가늠하는 것은 의미가 없습니다. 목표에 따라 달성할 수 있는 학습이 중요합니다.</p>,
  },
  {
    id: '7',
    question: '대입을 전략싸움 이라던데, 어떻게 준비시켜야 할까?',
    answer: (
      <p>지금까지의 학업성적에 의미를 두지 마세요. 오늘부터 새롭게 나만의 전략을 세운다면 목표에 도달할 수 있습니다.</p>
    ),
  },
  {
    id: '8',
    question: '논술을 준비해야할 시기는 언제일까?',
    answer: (
      <p>
        획일적으로 준비해야 하는 시기가 정해진 것은 없습니다. 다만, 개인별 학습상황과 특이상황에 따라 전략이 다를 수
        있습니다.
      </p>
    ),
  },
  {
    id: '9',
    question: '아이가 수시는  포기, 정시만 준비한다는데 가능할까?',
    answer: (
      <p>
        어쩌면 학생 자신에게 맞는 입시 전략이 없어서 그럴 수 있습니다. 자신의 현재 학업 상황의 점검이 반드시 필요합니다.
      </p>
    ),
  },
  {
    id: '10',
    question: '아이에게만 모든걸 맡겨도 괜찮을까?',
    answer: (
      <p>고등자녀를 두신 부모님들은 우리 아이가 목표대학에 입학할 때까지 온 가족이 모든 부분 동참해야 바람직합니다.</p>
    ),
  },
];

export default function Page() {
  return (
    <div>
      <Breadcrumb title="자주하는 질문" sub_text="학생과 학부모님들이 제일 많이 묻는 질문과 답변" />
      <div className="max-w-[1700px] mx-auto">
        <div className="mt-24 mb-36 flex flex-col gap-9 px-12">
          {data.map((qna, i) => {
            return <QnABox question={qna.question} answer={qna.answer} key={i} id={qna.id} />;
          })}
        </div>
      </div>
    </div>
  );
}
