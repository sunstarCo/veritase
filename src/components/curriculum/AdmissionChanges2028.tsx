import React from 'react';

// 크기는 rem 스케일. globals.css 가 루트 폰트를 11~16px 로 바꾸므로 px 로 두면 이 블록만 따로 논다.
// 색상은 데이터에서 오므로 인라인 스타일. Tailwind JIT 는 리터럴 클래스만 읽는다.

type Grade = {label: string; pct: number; opacity: number};

const GRADES: Grade[] = [
  {label: '1등급', pct: 10, opacity: 0.5},
  {label: '2등급', pct: 24, opacity: 0.65},
  {label: '3등급', pct: 32, opacity: 0.8},
  {label: '4등급', pct: 24, opacity: 0.65},
  {label: '5등급', pct: 10, opacity: 0.5},
];

type Card = {eyebrow: string; stat?: string; title: string; body: string; chart?: boolean};

// title 은 일부 구간을 강조해야 해서 문자열이 아닌 노드를 받는다.
type Section = {
  no: string;
  accent: string;
  title: React.ReactNode;
  desc: string;
  cards: Card[];
};

// 세 섹션 모두 같은 파랑을 쓴다
const ACCENT = '#2563eb';

/**
 * 글자 위 방점. CSS text-emphasis 는 점을 그릴 자리를 줄 높이에 더해버려
 * 제목 박스가 커지고 옆의 숫자 배지 정렬이 틀어진다.
 * 그래서 absolute 로 띄워 레이아웃에 영향을 주지 않게 한다.
 */
function EmphasisDots({children}: {children: string}) {
  return (
    <span className="relative inline-block">
      {children}
      {/* top 은 점 크기와 함께 움직여야 글자와의 간격이 유지된다 (top + 크기 ≈ -0.02em) */}
      <span aria-hidden className="pointer-events-none absolute inset-x-0 -top-[0.2em] flex justify-around">
        {Array.from(children).map((_, i) => (
          <span key={i} className="h-[0.18em] w-[0.18em] rounded-full bg-current" />
        ))}
      </span>
    </span>
  );
}

const SECTIONS: Section[] = [
  {
    no: '1',
    accent: ACCENT,
    title: '수능·내신, 근본부터 바뀐다',
    desc: '대입의 표준이 되는 수능과 내신 산출 방식이 완전히 바뀝니다.',
    cards: [
      {
        eyebrow: '통합형·융합형 수능',
        title: '선택과목 전면 폐지',
        body: '국어, 수학, 탐구영역의 선택과목이 전면 폐지됩니다. 특히 탐구영역은 문이과 구분 없이 "통합사회"와 "통합과학"을 공통으로 응시해야 합니다. (기대를 모았던 "심화수학"은 신설되지 않습니다.)',
      },
      {
        eyebrow: '고교내신 5등급제 개편',
        title: '9등급 상대평가 → 5등급제',
        body: '기존의 9등급 상대평가 체제에서 5등급제로 개편되어 내신등급 확보에 대한 부담이 이전보다 완화됩니다. 성적 표기 시 절대평가가 병기되지만, 사회·과학 융합 선택 과목(9개 과목)은 절대평가만 적용됩니다.',
        chart: true,
      },
    ],
  },
  {
    no: '2',
    accent: ACCENT,
    title: '수시는 늘고, 정시는 줄어든다',
    desc: '전체적인 모집 기조가 "수시확대", "정시축소"로 움직이고 있습니다.',
    cards: [
      {
        eyebrow: '전국 수시 비중',
        stat: '80.8%',
        title: '전국대학 평균 수시모집 비율',
        body: '학령인구 감소 여파 등으로 인해 전국대학의 평균 수시모집 비율이 늘어났습니다.',
      },
      {
        eyebrow: '상위권대학 정시 비율',
        // → 와 뒤 숫자 사이는 줄바꿈 없는 공백. 좁아지면 "41.5%" / "→ 36.8%" 로 끊긴다
        stat: '41.5% → 36.8%',
        title: '서연고 정시 비율 대폭 하락',
        body: '서울대, 연세대, 고려대 등 최상위 대학을 중심으로 정시 수능 위주의 선발인원이 눈에 띄게 감소했습니다.',
      },
      {
        eyebrow: '권역별 양극화',
        title: '수도권 ↑학종 · 비수도권 ↑교과',
        body: '수도권 대학은 선발 다양성을 위해 "학생부 종합전형(학종)"을 늘린 반면, 비수도권 대학은 신입생 충원의 안정성을 위해 "학생부 교과전형"을 확대하는 추세입니다.',
      },
    ],
  },
  {
    no: '3',
    accent: ACCENT,
    title: (
      <>
        평가 방식이 다각화된다 —{' '}
        <span style={{color: ACCENT}}>
          가장 핵심 <EmphasisDots>포인트</EmphasisDots>
        </span>
      </>
    ),
    desc: '내신이 5등급제로 바뀌면서 대학들이 변별력을 확보하기 위해 새로운 평가요소를 도입하고 있습니다.',
    cards: [
      {
        eyebrow: '정시(수능)',
        title: '"학생부 정성평가" 확대',
        body: '수능성적 100%로만 뽑던 정시전형이 무너지고 있습니다. 2028학년도에는 연대에 이어 서강대, 성균관대, 중앙대, 경희대, 건국대 등 주요 상위권 대다수가 정시전형에 내건 (학생부 교과 및 서류 정성평가)을 반영합니다. 사실상, 정시 전형 지원자도 내신 관리가 필수인 시대가 되었습니다.',
      },
      {
        eyebrow: '학생부 종합전형',
        title: '"세특" 및 면접 강화',
        body: '고교학점제 전면 시행으로 한 학기 단원 과목이 늘어나면서 학생부의 "세부능력 및 특기사항(세특)" 기록의 분량과 중요성이 더욱더 커졌습니다. 대학별로 학종에서 면접 비중을 높이거나(30→40%등) 서류형/면접형 트랙을 명확히 분리하는 움직임이 두드러집니다.',
      },
      {
        eyebrow: '논술전형',
        title: '전형의 내실화',
        body: '수도권 대학을 중심으로 논술 전형의 규모가 유지되거나 소폭 확대되는 가운데, 논술 100%로 바꾸는 대학(시립대, 세종대 등)이 있는 반면 출결이나 내신을 정성적으로 결합하는 대학도 있어 대학별 요강 확인이 중요해졌습니다.',
      },
    ],
  },
];

function GradeChart() {
  return (
    <div className="mt-6 flex gap-1">
      {GRADES.map(grade => (
        <div key={grade.label} className="flex min-w-0 flex-col items-center gap-1.5" style={{flex: grade.pct}}>
          {/* 10% 막대가 좁아 라벨만은 고정 px 로 둔다 */}
          <div className="whitespace-nowrap text-[10px] md:text-sm font-medium text-[#94a3b8]">{grade.label}</div>
          <div
            className="flex h-8 md:h-11 w-full items-center justify-center rounded-md text-[10px] md:text-base font-extrabold text-white"
            style={{background: '#2563eb', opacity: grade.opacity}}>
            {grade.pct}%
          </div>
        </div>
      ))}
    </div>
  );
}

export default function AdmissionChanges2028() {
  return (
    // 폭은 페이지 래퍼가 정한다. 여기서 또 제한하면 기준이 둘이 된다
    <section className="w-full pt-20 md:pt-24">
      <h2 className="text-center text-2xl md:text-4xl font-black tracking-[-0.01em] text-[#0f172a]">
        2028학년도 대입, 3가지 변화
      </h2>
      <p className="mt-3 md:mt-4 text-center text-sm md:text-lg text-[#64748b]">
        고교학점제 전면 시행 · 제도와 전형 모두 역대급 변화
      </p>

      <div className="mt-12 md:mt-16 flex flex-col gap-12 md:gap-16">
        {SECTIONS.map(section => (
          <div key={section.no}>
            {/* 고정 px. Tailwind w-/gap- 은 rem 이라 루트 폰트에 따라 흔들려 아래 들여쓰기 계산과 어긋난다 */}
            <div className="flex items-center gap-[12px] md:gap-[16px]">
              <span
                className="grid flex-none place-items-center rounded-full font-bold text-white w-[44px] h-[44px] text-[21px] md:w-[56px] md:h-[56px] md:text-[30px]"
                style={{background: section.accent}}>
                {section.no}
              </span>
              <h3 className="text-xl md:text-[1.75rem] font-extrabold leading-tight text-[#0f172a]">{section.title}</h3>
            </div>
            {/* 배지 너비 + gap (44+12 / 56+16). 배지 크기를 바꾸면 이 값도 바꿔야 한다 */}
            <div className="pl-[56px] md:pl-[72px]">
              <p className="mt-1 md:mt-1.5 text-sm md:text-base text-[#64748b]">{section.desc}</p>
              <div className="mt-5 md:mt-7 divide-y divide-[#e8ecf2]">
                {section.cards.map(card => (
                  <div key={card.title} className="grid gap-2 py-5 md:grid-cols-[190px_1fr] md:gap-8 md:py-7">
                    <div>
                      <div className="text-base md:text-xl font-bold leading-snug" style={{color: section.accent}}>
                        {card.eyebrow}
                      </div>
                      {card.stat && (
                        <div
                          className="mt-1 md:mt-2 text-2xl md:text-[2rem] font-bold leading-tight"
                          style={{color: section.accent}}>
                          {card.stat}
                        </div>
                      )}
                    </div>
                    <div>
                      <div className="text-lg md:text-[1.375rem] font-bold text-[#0f172a]">{card.title}</div>
                      <p className="mt-2 md:mt-3 text-base md:text-lg leading-[1.8] text-[#475569]">{card.body}</p>
                      {card.chart && <GradeChart />}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-12 md:mt-16 rounded-xl md:rounded-2xl border border-[rgba(15,23,42,0.06)] bg-white px-5 py-4 md:px-8 md:py-6 text-sm md:text-base leading-[1.8] text-[#64748b]">
        본 자료는 2026년 7월 기준 공개 정보를 정리한 것으로, 세부 전형 계획은 대학별 모집요강 확정 시 변경될 수
        있습니다.
      </p>
    </section>
  );
}
