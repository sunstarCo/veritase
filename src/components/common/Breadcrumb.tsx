import React from 'react';

interface Props {
  title: string;
  sub_text: string;
  sub_titles?: string[];
  curParams?: string;
}

function Breadcrumb({title, sub_text, sub_titles = [], curParams = '***'}: Props) {
  const sub_len = sub_titles.length;
  const sub_width = 'w-[' + 100 / sub_len + '%]';
  return (
    <div className="w-full">
      <div className="flex items-center gap-8">
        <h3 className="text-3xl font-bold">{title}</h3>
        <p className="text-sub-5">{sub_text}</p>
      </div>
      {sub_len === 0 || (
        <div className="w-full flex mt-8">
          {sub_titles?.map(sub_title => {
            return (
              <p
                key={sub_title}
                className={`${sub_width} border-b-[7px] pb-5 text-center ${
                  sub_title.includes(curParams) ? 'border-blue-4' : 'border-sub-4'
                }`}>
                {sub_title}
              </p>
            );
          })}
        </div>
      )}

      {sub_len === 0 && (
        <div className="w-full h-[7px] bg-sub-4 relative mt-5">
          <div className="absolute left-0 top-0 h-full bg-blue-4 w-1/3" />
        </div>
      )}
    </div>
  );
}

export default Breadcrumb;
