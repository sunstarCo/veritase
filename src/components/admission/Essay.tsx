import React from 'react';

import Image from 'next/image';

function Essay() {
  return (
    <div className="">
      <article className="mt-10">
        <div className="flex gap-3 items-center">
          <div className="w-8">
            <Image src={'/icons/Search_blue.svg'} width={0} height={0} sizes="100" className="w-full" alt="돋보기" />
          </div>
          <p className="text-2xl font-medium text-blue-4">논술은 어떻게 출제되나요?</p>
        </div>
        <div className="mt-4 px-12 ">
          <p className="">
            논술은 교과별로 주제나 내용을 연계하여 문제를 해결하는 통합논술 형태를 실시합니다. 예를 들어 언어와 정치,
            역사가 통합하여 하나의 주제를 만들어내는 식입니다. 논술을 실시하는 대부분의 대학에서 인문계열은 사회문화,
            역사, 윤리, 경제, 언어 등 인문영역 안에서의 교과목을 통합하고, 자연계열을 수리, 물리, 화학 등 자연계열
            교과목을 통합하여 문제를 구성합니다. 최근에는 상위권 주요 대학들이 인문계열 논술에서 수학적 사고능력을
            측정하기 위한 논제를 강화하여 출제하고 있는 경황이 다분합니다.
          </p>
        </div>
      </article>
      <article className="mt-10">
        <div className="flex gap-3 items-center">
          <div className="w-8">
            <Image src={'/icons/Search_blue.svg'} width={0} height={0} sizes="100" className="w-full" alt="돋보기" />
          </div>
          <p className="text-2xl font-medium text-blue-4">어떤 학생이 준비해야 하나요?</p>
        </div>
        <div className="mt-4 px-12 space-y-4">
          <p className="list-item">
            상위권 대학진학이 목표인 학생 <br />
            상위권 주요대학 수시모집에서 가장 많은 인원을 선발하는 전형이 논술중심 전형
          </p>
          <p className="list-item">
            학생부 성적만으로 상위권 대학 진학이 어려운 학생 <br />
            특히 내신이 불리한 특목고, 비평준화, 명문고 학생들은 논술 중심 전형이 유리
          </p>
          <p className="list-item">
            수능 영역별 성적이 고르지 않은 학생 <br /> 수시 논술 중심 전형은 수능을 반영하지 않거나, 수능 일부영역을
            최저학력 기준으로 활용
          </p>
        </div>
      </article>
      <article className="mt-10 mb-40">
        <div className="flex gap-3 items-center">
          <div className="w-8">
            <Image src={'/icons/Search_blue.svg'} width={0} height={0} sizes="100" className="w-full" alt="돋보기" />
          </div>
          <p className="text-2xl font-medium text-blue-4">어떻게 준비해야 하나요?</p>
        </div>
        <div className="mt-4 px-12">
          <div className="flex flex-col gap-16">
            <Image
              src={'/sat/step.svg'}
              alt="인문계열 단계별 설명 이미지"
              width={0}
              height={0}
              sizes="100"
              className="w-full mt-4"
            />
          </div>
          <div className="mt-20">
            <p className="font-semibold">1. 지원대학의 예시 문항이나 기출문제를 분석, 활용</p>
            <p className="p-4">
              서울대에서 내놓은 통합교과형 논술 예시 문항을 통해 적합한 학습법을 모색해 보는 것이 좋습니다. 인문계열에서
              출제되는 수리 논술의 경우, 정확한 답을 도출해내기 보다는 정답을 이끌어 내기 위한 과정을 논리적으로
              설명하는 것이 중요하므로 평소 풀이과정을 숙지할 필요가 있습니다. 자연계열의 경우 서술 분량의 제한이
              없으므로 비교적 자유로운 범위에서 본인의 의견을 피력할 수 있기 떄문에, 수학 교과를 기본으로 응용문제와
              심화 학습의 풀이과정을 숙지해둡니다.
            </p>
            <p className="font-semibold mt-10">2. 교과 학습의 단원 목표를 파악</p>
            <p className="p-4">
              통합 교과형 논술을 대비해 단원목표, 학습활동, 보충심화 등의 부분을 면밀하게 검토한 후 그것을 토대로 학습을
              진행해야 합니다. 특히 논술에서 잘 다뤄지는 제재인 역사, 도덕, 경제 등의 사회 관련 과목들을 평상시에
              정독합니다. 교과서를 읽을 때는 암기하지 말고 반드시 이해해야 합니다.
            </p>
            <p className="font-semibold mt-10">3. 서술형 평가와 연계한 학습</p>
            <p className="p-4">
              서술형 평가는 단순한 주관식 문제가 아니라 학생이 ‘교과 내용을 올바르게 이해했는가?’가 평가 기준이 되고,
              경우에 따라서는 글자 수에 제한이 있기도 하므로 ‘요약형 논술’의 축소판으로 볼 수 있습니다. 또한 수학의 경우
              답보다는 풀이 과정이 중시됩니다. 이렇듯 서술형 평가는 통합 교과형 논술을 준비하는 첫 단계일 수 있습니다.
              논술과 내신을 별개의 것으로 생각하지 말고 내신 학습을 통해 논술을 준비하는 효율적인 학습 습관이
              필요합니다.
            </p>
            <p className="font-semibold mt-10">4. 다양한 글 읽기 (특히 수능 언어영역 제시문 학습)</p>
            <p className="p-4">
              논술에서는 고전 지문에 대한 이해력이 중요합니다. 고전 지문은 정시 논술에서 가장 많이 인용되고, 수시 전형의
              언어 논술에서도 자주 등장합니다. 고전 지문에 대한 독해력은 단 한권의 고전작품을 읽더라도 꼼꼼하게
              분석하면서 읽고, 그 내용을 현대 사회 문제와 연관해서 생각할 때만 향상 될 수 있습니다. 즉 문학, 동양철학,
              서양철학, 정치학, 사회학 등 분야별로 대표적인 작품을 한권씩 선정하여 많이 생각하며 읽는 것이 좋습니다.
              논술은 암기가 아니라 이해와 응용, 사고력을 요구합니다. 글을 읽을 때 자기 수준에 맞는 쉬운 글 부터 읽는
              것이 좋습니다.
            </p>
            <p className="font-semibold mt-10">5. 스터디 그룹 만들기</p>
            <p className="p-4">
              논술 실력을 키우려면 토론 능력부터 갖추는 것이 필수입니다. 배경지식이 많아도 그것을 잘 표현할 줄 모른다면
              논술을 잘 할 수 없기 때문입니다. 배경지식을 바탕으로 주장을 펴기 위해서는 논리가 정연해야 합니다. 평소
              토론에 익숙한 학생들은 주제나 사안에 대한 의견을 말로 표현하는 능력이 향상되어 글을 쓸 때는 많은 도움을
              얻을 수 있습니다. 평소 스터디 그룹을 만들어 자주 토론해보는 것이 좋습니다. 여럿이 의견을 나누는 과정에서
              자신과 남의 의견을 비교할 수 있어 논리력 향상에도 도움이 됩니다. 또한 다양한 의견을 듣고 비판하는 연습을
              통해 자신의 의견을 논리적으로 전개하는지, 견해에 오류는 없는지, 남의 의견에서 배울 것은 없는지 등을 자주
              고민해 볼 수 있습니다. 토론은 다양하고 폭넓은 사고와 배경지식의 확장에도 도움이 됩니다.
            </p>
            <p className="font-semibold mt-10">6. 많이 써보고 첨삭받기</p>
            <p className="p-4">
              논술은 비판적, 독창적 사고의 표협입니다. 자신의 견해를 글로 서술하는 것이 논술이라면 말로 표현하는 것이
              구술입니다. 따라서 쓰기와 말하기의 기술 즉, 표현력을 기르는 것이 필수입니다. 그리고 쓴 글에 대한 첨삭은
              반드시 필요한 과정입니다. 우물 안 개구리가 되지 않으려면, 교사, 부모 또는 선배 그도 아니면 친구의
              감평이라도 반드시 듣는 것이 중요합니다.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Essay;
