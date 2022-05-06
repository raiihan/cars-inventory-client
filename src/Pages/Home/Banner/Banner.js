import React from 'react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import slide1 from "../../../Assets/slide-1.jpg"
import slide2 from "../../../Assets/slide-2.jpg"
import slide3 from "../../../Assets/slide_3.jpg"

const Banner = () => {
    return (

        <>
            <Swiper
                className='w-full '
                modules={[EffectFade, Navigation, Pagination, Autoplay]}
                effect="fade"
                navigation
                pagination
                autoplay={true}
                spaceBetween={0}
                slidesPerView={1}
            >
                <SwiperSlide >
                    <img src={slide1} alt="" />
                </SwiperSlide>
                <SwiperSlide >
                    <div className='relative'>
                        <img src={slide2} alt="" />
                        <div className='absolute hidden sm:block top-[390px] left-[850px]  text-4xl uppercase text-gray-600 font-medium'><p>2016 new</p>
                            <p>Mercedes-benz c-class</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className='relative'>
                        <img src={slide3} alt="" />
                        <div className='absolute hidden sm:block top-32 left-[450px]  text-4xl uppercase text-white font-medium'>
                            <p>Mercedes-benz amg gt 2017</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Banner;