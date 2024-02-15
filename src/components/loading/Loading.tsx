'use client';
import {useEffect, useReducer} from 'react';

import {classNames} from '@/utils/common';

interface ILodingActionType {
  type: string;
}
const Loading = ({lodingText}: {lodingText: string}) => {
  const reducer = (state: number, action: ILodingActionType): number => {
    if (action.type === 'increment') {
      return state < 5 ? state + 1 : 0;
    } else {
      return state;
    }
  };

  const [step, setStep] = useReducer(reducer, 0);
  useEffect(() => {
    const timer = setInterval(() => {
      setStep({type: 'increment'});
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-[90vh] w-full flex flex-col justify-center items-center">
      <div className="flex flex-col gap-[1px]">
        <div className="flex flex-row gap-[1px] justify-start">
          <Box step={step} idx={5} />
          <Box step={step} idx={0} />
          <Box step={step} idx={1} />
        </div>
        <div className="flex flex-row gap-[1px] justify-start">
          <Box step={step} idx={2} />
          <Box step={step} idx={3} />
        </div>
        <div className="flex flex-row gap-[1px] justify-start">
          <Box step={step} idx={4} />
        </div>
      </div>
      <h2 className={classNames('text-folder-400 text-text_14', /** monitor */ 'monitor:text-text_16')}>
        {lodingText}
        {'.'.repeat(step)}
      </h2>
    </div>
  );
};

const Box = ({step, idx}: {step: number; idx: number}) => {
  return (
    <div
      className={classNames(
        'rounded-[1px] w-[8px] h-[8px]',
        step == idx ? 'bg-folder-primary' : 'bg-folder-600',
      )}></div>
  );
};

export default Loading;
