import React from 'react';

// 이미지로 넣었던 현행/개편안 비교표를 실제 표로 옮긴 것.
// globals.css 의 th,td{border:1px solid #484848} 와 table{border:2px solid black} 을
// 벗어나려고 table 에 border-0 을 주고 셀마다 테두리를 직접 지정한다.

const BLUE = '#2563eb';
const LINE = '#4a4a4a';

// 세로도 가운데. align-top 이면 rowSpan 이나 옆 칸 때문에 늘어난 셀에서 위로 붙는다
const cell = 'border align-middle text-center px-3 py-4 md:px-4 md:py-5';

/** 셀 맨 윗줄의 굵은 요약. 현행 열은 검정, 개편안 열만 파랑 */
function Lead({children, blue = false}: {children: React.ReactNode; blue?: boolean}) {
  return (
    <div className="text-2xl font-semibold" style={blue ? {color: BLUE} : undefined}>
      {children}
    </div>
  );
}

/** 요약 밑 괄호 설명 */
function Note({children}: {children: React.ReactNode}) {
  return <div className="mt-1.5 text-base">{children}</div>;
}

/** 테두리로 감싼 문구 */
function Box({children}: {children: React.ReactNode}) {
  return (
    <div className="flex justify-center">
      <span className="border px-3.5 py-1 text-2xl font-semibold" style={{borderColor: LINE}}>
        {children}
      </span>
    </div>
  );
}

/**
 * 원본 표식은 글자보다 훨씬 작은 마름모.
 * ◆ 글리프는 폰트마다 em 박스 안에서 크기와 높이가 달라 여백으로 맞추면 계속 어긋난다.
 * 정사각형을 45도 돌려 직접 그리고, mt 로 첫 줄 글자 가운데에 맞춘다
 * (줄높이 1.5em 기준 글자 중심 0.75em - 마름모 절반 0.15em).
 */
function Diamond() {
  return <span aria-hidden className="mt-[0.6em] h-[0.3em] w-[0.3em] flex-none rotate-45 bg-current" />;
}

/** 불릿 한 줄. 셀은 가운데 정렬이지만 현행 열의 목록만은 원본대로 왼쪽에 맞춘다 */
function Bullet({label, children}: {label: string; children?: React.ReactNode}) {
  return (
    <div className="mt-2.5 flex gap-1.5 text-base first:mt-0">
      <Diamond />
      <div>
        <span className="font-semibold">{label}</span>
        {children}
      </div>
    </div>
  );
}

/** 불릿 아래 딸려오는 과목 나열. 마름모 너비만큼 들여써 윗줄 글자와 왼쪽을 맞춘다 */
function List({children}: {children: React.ReactNode}) {
  return <div className="mt-1 pl-4 text-base">{children}</div>;
}

/** 개편안 열의 "사회 : 공통" 처럼 뒷말만 파란 줄 */
function BlueItem({label, children}: {label: string; children: React.ReactNode}) {
  return (
    <div className="flex justify-center gap-1.5 text-2xl">
      <Diamond />
      <div>
        <span className="font-semibold">{label}</span>
        <span className="font-semibold" style={{color: BLUE}}>
          {children}
        </span>
      </div>
    </div>
  );
}

// 탐구 안쪽 구분선. 탐구 셀은 rowSpan 이라 이 경계에 테두리가 없다
const dashBottom = {borderColor: LINE, borderBottomStyle: 'dashed'} as const;
const dashTop = {borderColor: LINE, borderTopStyle: 'dashed'} as const;

// 크기는 오른쪽 본문 블록에 맞춘다. 큰 글씨 = 그쪽 제목(text-2xl),
// 표 본문 = 그쪽 본문(상속값 text-base). rem 이라 브레이크포인트마다 같이 움직인다
// th 는 브라우저 기본이 bold(700) 라 지정하지 않으면 혼자 굵게 남는다
const th = `${cell} text-2xl font-semibold`;
const thSub = `${cell} text-xl font-semibold`;

export default function SatComparisonTable() {
  return (
    <div className="w-full md:w-[772px] md:max-w-[60%] md:flex-none">
      {/* 좁은 화면에서 표가 찌그러지는 대신 가로로 넘긴다 */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[680px] border-0 border-collapse break-keep">
          <caption className="sr-only">현행(~2027 수능)과 개편안(2028 수능~)의 영역별 출제 과목 비교</caption>
          <thead>
            <tr className="bg-[#e8e8e8]">
              <th className={th} style={{borderColor: LINE}} colSpan={2} scope="col">
                영역
              </th>
              <th className={th} style={{borderColor: LINE}} scope="col">
                현행 (~2027 수능)
              </th>
              <th className={th} style={{borderColor: LINE}} scope="col">
                개편안 (2028 수능~)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className={th} style={{borderColor: LINE}} colSpan={2} scope="row">
                국어
              </th>
              <td className={cell} style={{borderColor: LINE}}>
                <Lead>공통 + 2과목 중 택 1</Lead>
                <div className="mt-3.5 text-left">
                  <Bullet label="공통 : ">독서, 문학</Bullet>
                  <Bullet label="선택 : ">화법과 작문, 언어와 매체</Bullet>
                </div>
              </td>
              <td className={cell} style={{borderColor: LINE}}>
                <Lead blue>공통</Lead>
                <Note>(화법과 언어, 독서와 작문, 문학)</Note>
              </td>
            </tr>

            <tr>
              <th className={th} style={{borderColor: LINE}} colSpan={2} scope="row">
                수학
              </th>
              <td className={cell} style={{borderColor: LINE}}>
                <Lead>공통 + 3과목 중 택 1</Lead>
                <div className="mt-3.5 text-left">
                  <Bullet label="공통 : ">수학Ⅰ, 수학Ⅱ</Bullet>
                  <Bullet label="선택 : ">확률과 통계, 미적분, 기하</Bullet>
                </div>
              </td>
              <td className={cell} style={{borderColor: LINE}}>
                <Lead blue>공통</Lead>
                <Note>(대수, 미적분Ⅰ, 확률과 통계)</Note>
              </td>
            </tr>

            <tr>
              <th className={th} style={{borderColor: LINE}} colSpan={2} scope="row">
                영어
              </th>
              <td className={cell} style={{borderColor: LINE}}>
                <Lead>공통</Lead>
                <Note>(영어Ⅰ, 영어Ⅱ)</Note>
              </td>
              <td className={cell} style={{borderColor: LINE}}>
                <Lead blue>공통</Lead>
                <Note>(영어Ⅰ, 영어Ⅱ)</Note>
              </td>
            </tr>

            <tr>
              <th className={th} style={{borderColor: LINE}} colSpan={2} scope="row">
                한국사
              </th>
              <td className={cell} style={{borderColor: LINE}}>
                <Lead>공통</Lead>
                <Note>(한국사)</Note>
              </td>
              <td className={cell} style={{borderColor: LINE}}>
                <Lead blue>공통</Lead>
                <Note>(한국사)</Note>
              </td>
            </tr>

            <tr>
              {/* 탐구는 사회·과학 / 직업 두 줄을 묶는다 */}
              <th className={th} style={{borderColor: LINE}} rowSpan={2} scope="rowgroup">
                탐
                <br />구
              </th>
              <th className={thSub} style={dashBottom} scope="row">
                사회
                <br />·<br />
                과학
              </th>
              <td className={cell} style={dashBottom}>
                <Box>17과목 중 최대 택 2</Box>
                <div className="mt-3.5 text-left">
                  <Bullet label="사회 : 9과목" />
                  <List>한국지리, 세계지리, 세계사, 동아시아사, 경제, 정치와 법, 사회·문화, 생활과 윤리, 윤리와 사상</List>
                  <Bullet label="과학 : 8과목" />
                  <List>물리학Ⅰ, 화학Ⅰ, 생명과학Ⅰ, 지구과학Ⅰ, 물리학Ⅱ, 화학Ⅱ, 생명과학Ⅱ, 지구과학Ⅱ</List>
                </div>
              </td>
              <td className={cell} style={dashBottom}>
                <BlueItem label="사회 : ">공통</BlueItem>
                <Note>(통합사회)</Note>
                <div className="mt-6">
                  <BlueItem label="과학 : ">공통</BlueItem>
                  <Note>(통합과학)</Note>
                </div>
              </td>
            </tr>

            <tr>
              <th className={thSub} style={dashTop} scope="row">
                직업
              </th>
              <td className={cell} style={dashTop}>
                <div className="text-left">
                  <div className="flex items-center gap-2 text-2xl">
                    <span>1과목 :</span>
                    <span className="border px-3.5 py-1 font-semibold" style={{borderColor: LINE}}>
                      5과목 중 택 1
                    </span>
                  </div>
                  <div className="mt-2.5 text-2xl">2과목 : 공통 + [ 1과목 ]</div>
                </div>
                <div className="mt-3.5 text-left">
                  <Bullet label="공통 : ">성공적인 직업생활</Bullet>
                  <Bullet label="선택 : ">농업 기초 기술, 공업 일반, 상업 경제, 수산·해운 산업 기초, 인간 발달</Bullet>
                </div>
              </td>
              <td className={cell} style={dashTop}>
                <BlueItem label="직업 : ">공통</BlueItem>
                <Note>(성공적인 직업생활)</Note>
              </td>
            </tr>

            {/* 음영은 절대평가 영역 표시. 원본에서 음영이 들어간 행은 여기뿐이다 */}
            <tr className="bg-[#ededed]">
              <th className={th} style={{borderColor: LINE}} colSpan={2} scope="row">
                제2외국어
                <br />
                /한문
              </th>
              <td className={cell} style={{borderColor: LINE}}>
                <Box>9과목 중 택 1</Box>
                <div className="mt-3.5 text-left">
                  <Bullet label="제2외국어/한문 : 9과목" />
                  <List>독일어Ⅰ, 프랑스어Ⅰ, 스페인어Ⅰ, 중국어Ⅰ, 일본어Ⅰ, 러시아어Ⅰ, 아랍어Ⅰ, 베트남어Ⅰ, 한문Ⅰ</List>
                </div>
              </td>
              <td className={cell} style={{borderColor: LINE}}>
                <Box>9과목 중 택 1</Box>
                <div className="mt-3.5 text-left">
                  <Bullet label="제2외국어/한문 : 9과목" />
                  <List>독일어, 프랑스어, 스페인어, 중국어, 일본어, 러시아어, 아랍어, 베트남어, 한문</List>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mt-3 text-base">※ 음영표기는 “절대평가” 적용 영역</p>
    </div>
  );
}
