import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, Autoplay } from 'swiper/modules';

// 引入樣式
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Home = () => {
  return (
    <>
    {/* 首頁主圖輪播 */}
    <div className="positive-relative">
      <Swiper
        modules={[Navigation, A11y, Autoplay]}
        spaceBetween={0} // 如果要做全螢幕輪播，通常設為 0
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next-aloha',
          prevEl: '.swiper-button-prev-aloha',
        }}
        direction="horizontal"
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        style={{height: '320px'}}
      >
        <SwiperSlide>
          <img 
          src={`${import.meta.env.BASE_URL}index-banner.jpg`}
          alt="index-banner" />
        </SwiperSlide>
        <SwiperSlide>
          <img 
          src={`${import.meta.env.BASE_URL}index-banner.jpg`}
          alt="index-banner" />
        </SwiperSlide>
        <SwiperSlide>
          <img 
          src={`${import.meta.env.BASE_URL}index-banner.jpg`}
          alt="index-banner" />
        </SwiperSlide>
        {/* 遮罩層 */}
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50 z-1"></div>
        {/* 文字 */}
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center z-2">
          <h1 className="display-5 fw-normal text-white">Discover your ideal hotel</h1>
        </div>
      </Swiper>

      <div className="swiper-button-prev-aloha">
        <span className="material-symbols-outlined display-5">chevron_left</span>
      </div>
      <div className="swiper-button-next-aloha">
        <span className="material-symbols-outlined display-5">chevron_right</span>
      </div>
    </div>
    </>
  )
}

export default Home
