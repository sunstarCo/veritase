import React from 'react';

import IntroBanner from '@/components/IntroBanner';

export default function Page() {
  return (
    <div>
      <IntroBanner />
      <article>
        <title>
          <div className="w-66 h-7 bg-blue-4" />
        </title>
      </article>
    </div>
  );
}
