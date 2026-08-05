'use client';
import React from 'react';

/** 한 줄 안의 조각. br 은 반응형 줄바꿈용이라 className 을 그대로 받는다 */
export type Piece = {text: string; className?: string} | {br: string};

export type TypeLine = {pieces: Piece[]; className?: string};

type Props = {
  lines: TypeLine[];
  /** 배경 이미지가 뜬 뒤에 시작한다. false 면 감춰둔 채 대기 */
  start?: boolean;
  /** 글자 간격(ms) */
  step?: number;
  /** 첫 글자까지의 지연(ms) */
  delay?: number;
};

/**
 * 글자가 하나씩 찍히는 애니메이션.
 *
 * 글자마다 span 을 두면 break-keep 이 무력해져 어절 한가운데서 줄이 바뀐다.
 * 그래서 어절을 inline-block 으로 한 번 더 감싸 그 안에서는 끊기지 않게 한다.
 * 지연은 줄이 바뀌어도 이어지므로 여러 줄이 한 문장처럼 흐른다.
 *
 * 화면낭독기에는 글자 단위로 읽히면 안 되므로 원문을 sr-only 로 따로 두고
 * 애니메이션 쪽은 aria-hidden 으로 감춘다.
 */
export default function TypeIn({lines, start = true, step = 45, delay = 0}: Props) {
  let index = 0;

  return (
    <>
      {lines.map((line, li) => (
        <p key={li} className={`${line.className ?? ''} ${start ? '' : 'opacity-0'}`}>
          <span className="sr-only">{line.pieces.map(p => ('br' in p ? ' ' : p.text)).join('')}</span>
          <span aria-hidden>
            {line.pieces.map((piece, pi) => {
              if ('br' in piece) return <br key={pi} className={piece.br} />;

              const words = piece.text.split(' ');
              return (
                <span key={pi} className={piece.className}>
                  {words.map((word, wi) => {
                    const chars = Array.from(word).map(char => ({char, i: index++}));
                    const spaced = wi < words.length - 1;
                    // 공백도 한 박자 쉬어야 실제로 치는 속도처럼 보인다
                    if (spaced) index++;

                    return (
                      <React.Fragment key={wi}>
                        <span className="inline-block">
                          {chars.map(({char, i}) => (
                            <span
                              key={i}
                              className={`inline-block ${start ? 'animate-typeIn motion-reduce:animate-none' : ''}`}
                              style={{animationDelay: `${delay + i * step}ms`}}>
                              {char}
                            </span>
                          ))}
                        </span>
                        {/* 줄바꿈은 어절 사이에서만 일어나게 둔다 */}
                        {spaced && ' '}
                      </React.Fragment>
                    );
                  })}
                </span>
              );
            })}
          </span>
        </p>
      ))}
    </>
  );
}
