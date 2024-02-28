import React from 'react';

function BannerLayout({children, className}: {children: React.ReactNode; className?: string}) {
  return (
    <div
      className={`${className} w-full relative h-[calc(100vh-90px)] sm:h-[calc(100vh-99px)] md:h-[calc(100vh-122px)] lg:h-[calc(100vh-87.29px)] xl:h-[calc(100vh-123.3px)]`}>
      {children}
    </div>
  );
}

export default BannerLayout;
