import React from 'react';

import {Carousel} from 'antd';
import Image from 'next/image';

const teacher_reviews = [
  '/teacher/reviews/pc/review_pc_1.svg',
  '/teacher/reviews/pc/review_pc_2.svg',
  '/teacher/reviews/pc/review_pc_3.svg',
  '/teacher/reviews/pc/review_pc_4.svg',
  '/teacher/reviews/pc/review_pc_5.svg',
  '/teacher/reviews/pc/review_pc_6.svg',
  '/teacher/reviews/pc/review_pc_7.svg',
  '/teacher/reviews/pc/review_pc_8.svg',
];

function ReviewCarousel() {
  return (
    <Carousel autoplay autoplaySpeed={6000}>
      {teacher_reviews.map((img, i) => (
        <div key={i}>
          <Image src={img} alt="" width={0} height={0} sizes="100" className="w-full" />
        </div>
      ))}
    </Carousel>
  );
}

export default ReviewCarousel;
