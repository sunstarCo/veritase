'use client';
import React, {useState} from 'react';

import {KEY_POINTS, PERIODS} from './roadmapData';

// 시안(Sigi-Learning v4) 의 아코디언. 크기는 DocArticle 과 같은 rem 스케일로 맞췄다.
const C = {
  blue: '#1a4bc4',
  navy: '#123c73',
  dark: '#1b2230',
  body: '#454b57',
  line: '#e6ebf3',
  headBg: '#f4f6f9',
  bodyBg: '#f4f6fa',
} as const;

function Items({items}: {items: {key: string; body: React.ReactNode}[]}) {
  return (
    <div className="flex flex-col gap-5 md:gap-6">
      {items.map(item => (
        <div key={item.key}>
          <div className="mb-1.5 text-base md:text-lg font-bold tracking-[-0.025em]" style={{color: C.dark}}>
            {item.key}
          </div>
          <p className="text-base md:text-lg leading-[1.95]" style={{color: C.body}}>
            {item.body}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function YearlyRoadmap() {
  // 첫 구간만 열어 둔다. 여러 개를 동시에 열 수 있다.
  const [open, setOpen] = useState<boolean[]>(() => PERIODS.map((_, i) => i === 0));
  const toggle = (i: number) => setOpen(prev => prev.map((o, j) => (j === i ? !o : o)));

  return (
    <section className="w-full">
      {/* Breadcrumb 이 바로 위에서 같은 밑줄 장치를 쓰므로 여기선 쓰지 않는다 */}
      <h2 className="mb-12 text-2xl md:text-4xl font-extrabold tracking-[-0.04em] md:mb-16" style={{color: C.dark}}>
        월별 학습 계획
      </h2>

      <div className="mb-14 md:mb-20">
        <h3 className="mb-2 text-xl md:text-2xl font-extrabold tracking-[-0.035em]" style={{color: C.blue}}>
          2028 수능 성공을 위한 3대 핵심 포인트
        </h3>
        <span aria-hidden className="mb-6 block h-[3px] w-[34px]" style={{background: C.blue}} />
        <Items items={KEY_POINTS} />
      </div>

      <div className="flex flex-col gap-3 md:gap-4">
        {PERIODS.map((period, i) => {
          const isOpen = open[i];
          return (
            <section key={period.range}>
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => toggle(i)}
                className="flex w-full items-center gap-4 rounded-md px-5 py-5 text-left transition-colors md:gap-6 md:px-7 md:py-6"
                style={{background: isOpen ? C.blue : C.headBg}}>
                <span
                  className="flex-none text-lg md:text-2xl font-extrabold tracking-[-0.035em] md:w-[152px] md:text-center"
                  style={{color: isOpen ? '#fff' : C.dark}}>
                  {period.range}
                </span>
                <span
                  className="flex-1 text-sm md:text-lg font-bold leading-[1.6] tracking-[-0.02em]"
                  style={{color: isOpen ? '#fff' : C.dark}}>
                  {period.summary}
                </span>
                {/* +/− 글리프는 폰트마다 광학 중심이 달라 원 안에서 치우친다. CSS 로 직접 그린다 */}
                <span
                  aria-hidden
                  className="relative grid h-8 w-8 flex-none place-items-center rounded-full transition-colors md:h-10 md:w-10"
                  style={{background: isOpen ? 'rgba(255,255,255,0.22)' : C.blue}}>
                  <span className="absolute h-[2px] w-[13px] rounded-full bg-white md:w-4" />
                  <span
                    className={`absolute h-[13px] w-[2px] rounded-full bg-white transition-transform duration-300 md:h-4 ${
                      isOpen ? 'scale-y-0' : 'scale-y-100'
                    }`}
                  />
                </span>
              </button>

              {/* grid-rows 0fr→1fr 는 내용 높이를 몰라도 애니메이션이 된다(max-height 처럼 값을 추정할 필요가 없다) */}
              <div
                className="grid transition-all duration-500 ease-out"
                style={{gridTemplateRows: isOpen ? '1fr' : '0fr', opacity: isOpen ? 1 : 0}}>
                <div className="overflow-hidden">
                  <div className="mt-2.5 rounded-md px-5 py-6 md:px-7 md:py-7" style={{background: C.bodyBg}}>
                    {period.lead && (
                      <p
                        className="mb-6 text-lg md:text-xl font-bold leading-[1.65] tracking-[-0.03em] md:mb-7"
                        style={{color: C.navy}}>
                        {period.lead}
                      </p>
                    )}

                    {period.blocks.map(block => (
                      <div key={block.month} className="mb-4 last:mb-0 md:mb-5">
                        <div className="mb-2.5 flex flex-wrap items-center gap-3">
                          <span
                            className="whitespace-nowrap rounded px-3.5 py-1.5 text-sm md:text-base font-extrabold tracking-[-0.025em] text-white"
                            style={{background: C.navy}}>
                            {block.month}
                          </span>
                          {block.note && (
                            <span className="text-sm md:text-base font-bold" style={{color: C.navy}}>
                              {block.note}
                            </span>
                          )}
                        </div>
                        <div
                          className="rounded-md border bg-white px-5 py-5 md:px-6 md:py-6"
                          style={{borderColor: C.line}}>
                          <Items items={block.items} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
}
