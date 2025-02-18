import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Banner from './Banner'
import { Autoplay } from 'swiper/modules'

export default function BannerSwiper() {
    return (
        <div className='w-full -ml-16 mb-44'>
            <Swiper
                spaceBetween={12}
                slidesPerView='auto'
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}>
                <SwiperSlide>
                    <Banner />
                </SwiperSlide>
                <SwiperSlide>
                    <Banner />
                </SwiperSlide>
                <SwiperSlide>
                    <Banner />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
