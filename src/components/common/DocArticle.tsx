import React from 'react';

// 학습팁·입시전략 10개 시안의 공통 렌더러. 내용은 데이터로 주입한다.
// 크기는 rem 스케일. globals.css 가 루트 폰트를 11~16px 로 바꾼다.
const C = {
  blue: '#1a4bc4',
  dark: '#1b2230',
  body: '#3f4652',
  muted: '#7a8090',
  faint: '#9aa0ad',
  line: '#eceff5',
  headLine: '#e4e7ee',
  tblLine: '#dde2ec',
  labelBg: '#f2f5fc',
  figBg: '#f7f9fd',
  tblHead: '#f6f8fc',
} as const;

export function Em({children}: {children: React.ReactNode}) {
  return (
    <span className="font-bold" style={{color: C.blue}}>
      {children}
    </span>
  );
}

/** 본문 강조 — 형광펜 (.k-mark 등). 글자 아래 62% 지점부터 배경이 깔린다 */
export function Mark({children}: {children: React.ReactNode}) {
  return (
    <span className="font-bold" style={{color: C.dark, background: 'linear-gradient(transparent 62%, #dde5fa 62%)'}}>
      {children}
    </span>
  );
}

export function Lead({children}: {children: React.ReactNode}) {
  return (
    <strong className="font-bold" style={{color: C.dark}}>
      {children}
    </strong>
  );
}

export type ListItem = {bullet?: string; body: React.ReactNode};

export function BulletList({items, className = ''}: {items: ListItem[]; className?: string}) {
  return (
    <ul className={`flex flex-col gap-3 md:gap-4 ${className}`}>
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-base md:text-lg leading-[1.85]" style={{color: C.body}}>
          <span className="flex-none font-bold" style={{color: C.blue}}>
            {item.bullet ?? String(i + 1).padStart(2, '0')}
          </span>
          <span>{item.body}</span>
        </li>
      ))}
    </ul>
  );
}

type FigCard = {
  accent?: string;
  dashed?: boolean;
  label?: string;
  labelColor?: string;
  text?: React.ReactNode;
  big?: string;
  note?: string;
  strike?: boolean;
};

export type Figure =
  | {kind: 'bars'; caption: string; note?: string; items: {label: string; value: string; pct: number; color: string}[]}
  | {kind: 'stats'; caption: string; items: {value: string; note: string; small?: boolean}[]}
  | {kind: 'cards'; caption: string; items: FigCard[]};

export type DocSection = {
  heading: string;
  paragraphs?: React.ReactNode[];
  figure?: Figure;
  rows?: {label: string; body: React.ReactNode}[];
  table?: {
    headers: [string, string, string];
    widths?: [string, string];
    rows: [React.ReactNode, React.ReactNode, React.ReactNode][];
  };
  list?: ListItem[];
  tableNote?: React.ReactNode;
  footnote?: React.ReactNode;
};

export type DocContent = {
  title: string;
  lead: React.ReactNode;
  sections: DocSection[];
};

function FigureBlock({figure}: {figure: Figure}) {
  return (
    <figure className="mt-7 rounded-xl px-5 py-5 md:px-7 md:py-6" style={{background: C.figBg}}>
      <figcaption className="mb-4 text-base md:text-lg font-bold" style={{color: C.body}}>
        {figure.kind === 'bars' && figure.note ? (
          <>
            {figure.caption}{' '}
            <span className="font-medium" style={{color: C.faint}}>
              {figure.note}
            </span>
          </>
        ) : (
          figure.caption
        )}
      </figcaption>

      {figure.kind === 'bars' && (
        <>
          <div className="mb-1.5 flex gap-1.5 text-sm md:text-base" style={{color: C.muted}}>
            {figure.items.map(it => (
              <div key={it.label} className="text-center" style={{width: `${it.pct}%`}}>
                {it.label}
              </div>
            ))}
          </div>
          <div className="flex h-10 gap-1.5 md:h-12">
            {figure.items.map(it => (
              <div
                key={it.label}
                className="flex items-center justify-center rounded-md text-sm md:text-base font-bold text-white"
                style={{width: `${it.pct}%`, background: it.color}}>
                {it.value}
              </div>
            ))}
          </div>
        </>
      )}

      {figure.kind === 'stats' && (
        <div className="flex flex-wrap gap-4 md:gap-5">
          {figure.items.map(it => (
            <div key={it.note} className="flex-1 basis-[150px]">
              <div
                className={`font-extrabold tracking-[-0.03em] ${
                  it.small ? 'text-lg md:text-xl' : 'text-2xl md:text-[2rem]'
                }`}
                style={{color: it.small ? C.dark : C.blue}}>
                {it.value}
              </div>
              <div className="text-sm md:text-base" style={{color: C.muted}}>
                {it.note}
              </div>
            </div>
          ))}
        </div>
      )}

      {figure.kind === 'cards' && (
        <div className="flex flex-wrap gap-3 md:gap-4">
          {figure.items.map((it, i) => (
            <div
              key={i}
              className="flex-1 basis-[220px] rounded-md bg-white px-4 py-4 md:px-5"
              style={it.dashed ? {border: '1px dashed #c8cedb'} : {borderLeft: `4px solid ${it.accent ?? C.blue}`}}>
              {it.label && (
                <div className="mb-1.5 text-sm md:text-base font-bold" style={{color: it.labelColor ?? C.blue}}>
                  {it.label}
                </div>
              )}
              {it.big && (
                <div className="text-lg md:text-xl font-bold" style={{color: C.dark}}>
                  {it.big}
                </div>
              )}
              {it.text && (
                <div
                  className="whitespace-pre-line text-base md:text-lg leading-relaxed"
                  style={{
                    color: it.strike ? C.faint : C.body,
                    textDecoration: it.strike ? 'line-through' : undefined,
                  }}>
                  {it.text}
                </div>
              )}
              {it.note && (
                <div className="mt-1.5 text-sm md:text-base" style={{color: C.muted}}>
                  {it.note}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </figure>
  );
}

export default function DocArticle({content}: {content: DocContent}) {
  return (
    <article>
      <header className="mb-10 border-b pb-7 md:mb-14 md:pb-9" style={{borderColor: C.headLine}}>
        <h2
          className="mb-4 text-2xl md:text-4xl font-extrabold leading-[1.35] tracking-[-0.035em]"
          style={{color: C.dark}}>
          {content.title}
        </h2>
        <p className="text-base md:text-xl leading-[1.85]" style={{color: C.body}}>
          {content.lead}
        </p>
      </header>

      {content.sections.map(section => (
        <section key={section.heading} className="mb-12 last:mb-0 md:mb-16">
          <h3
            className="mb-4 text-xl md:text-[1.75rem] font-bold leading-tight tracking-[-0.03em] md:mb-5"
            style={{color: C.blue}}>
            {section.heading}
          </h3>

          {section.paragraphs?.map((p, i) => (
            <p key={i} className="mb-4 text-base md:text-lg leading-[1.85] last:mb-0" style={{color: C.body}}>
              {p}
            </p>
          ))}

          {section.figure && <FigureBlock figure={section.figure} />}

          {section.rows && (
            <div className="mt-5 md:mt-7">
              {section.rows.map(row => (
                <div
                  key={row.label}
                  className="flex items-start gap-4 border-b py-5 last:border-b-0 md:gap-7 md:py-7"
                  style={{borderColor: C.line}}>
                  <div
                    className="w-[76px] flex-none whitespace-pre-line rounded-md px-2 py-2.5 text-center text-base md:text-lg font-bold leading-snug md:w-[104px] md:py-3"
                    style={{background: C.labelBg, color: C.blue}}>
                    {row.label}
                  </div>
                  <div className="min-w-0 flex-1 text-base md:text-lg leading-[1.85]" style={{color: C.body}}>
                    {row.body}
                  </div>
                </div>
              ))}
            </div>
          )}

          {section.table && (
            // globals.css 가 th/td 에 1px #484848, table 에 2px black 을 전역으로 걸어
            // 사방에 진한 선이 덧그려지므로 border-0 으로 끊고 시안 선만 다시 지정한다.
            <div className="mt-5 overflow-x-auto md:mt-7">
              <table
                className="w-full min-w-[600px] border-collapse border-0 text-base md:text-lg"
                style={{borderTop: `2px solid ${C.blue}`}}>
                <thead>
                  <tr>
                    {section.table.headers.map((h, i) => (
                      <th
                        key={h}
                        className="border-0 px-4 py-3 text-left font-bold md:px-5 md:py-4"
                        style={{
                          background: C.tblHead,
                          borderBottom: `1px solid ${C.tblLine}`,
                          color: '#262b33',
                          width: section.table?.widths?.[i],
                        }}>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {section.table.rows.map((cells, ri) => (
                    <tr key={ri}>
                      <td
                        className="whitespace-pre-line border-0 px-4 py-4 align-top font-bold md:px-5 md:py-5"
                        style={{borderBottom: `1px solid ${C.line}`, color: C.blue}}>
                        {cells[0]}
                      </td>
                      <td
                        className="border-0 px-4 py-4 align-top font-semibold md:px-5 md:py-5"
                        style={{borderBottom: `1px solid ${C.line}`, color: C.dark}}>
                        {cells[1]}
                      </td>
                      <td
                        className="border-0 px-4 py-4 align-top leading-[1.8] md:px-5 md:py-5"
                        style={{borderBottom: `1px solid ${C.line}`, color: C.body}}>
                        {cells[2]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {section.tableNote && (
            <p className="mt-4 text-base md:text-lg leading-[1.85] md:mt-5" style={{color: C.body}}>
              {section.tableNote}
            </p>
          )}

          {section.list && <BulletList items={section.list} className="mt-1" />}

          {section.footnote && (
            <p
              className="mt-5 rounded-xl px-5 py-4 text-base md:text-lg leading-[1.85] md:mt-7 md:px-7 md:py-5"
              style={{background: C.figBg, color: C.body}}>
              {section.footnote}
            </p>
          )}
        </section>
      ))}
    </article>
  );
}
