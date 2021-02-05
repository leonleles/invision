import React, { ReactComponentElement } from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';
import imgPeoples from '../../images/peoples.png';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function Grid(props: any) {
  const slides = [];

  for (let i = 0; i < 4; i++) {

    slides.push((
      <SwiperSlide>
        <div className="slide">
          <img src={imgPeoples} alt="Invision" />

          <article>
            <strong>Marcenas mattis egestas</strong>
            <p>Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.</p>
          </article>
        </div>
      </SwiperSlide>
    ));
  }

  return (<div id="component-grid">
    <div className="wrapper left">
      <div className="slider-wrapper">
        <Swiper
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          {slides}
        </Swiper>
      </div>
    </div>
    <div className="wrapper right">
      <div className='content'>
        <h1>Invision</h1>
        <h2>{props.title}</h2>

        <div className="sub-content">
          {props.children}
        </div>
      </div>
    </div>
  </div>);
}

export default Grid;