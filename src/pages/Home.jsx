import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, Autoplay } from 'swiper/modules';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

// 引入樣式
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const destinationList = [
  'TaipeiCity', 'NewTaipeiCity', 'KeelungCity', 'TaoyuanCity', 
  'HsinchuCounty', 'HsinchuCity', 'MiaoliCounty', 'TaichungCity', 
  'ChanghuaCounty', 'NantouCounty', 'YunlinCounty', 'ChiayiCounty', 
  'ChiayiCity', 'TainanCity', 'KaohsiungCity', 'PingtungCounty', 
  'YilanCounty', 'HualienCounty', 'TaitungCounty', 'PenghuCounty', 
  'KinmenCounty', 'LienchiangCounty'
];

// 搜尋元件
const SearchDropdown = ({ label, items, value, onChange, icon }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // 點擊選項時的處理
  const handleSelect = (item) => {
    onChange(item); // 通知父元件值改變了
    setIsOpen(false);
  };

  // 點擊外部關閉
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="dropdown position-relative flex-md-fill" ref={dropdownRef}>
      <button
        type="button"
        className="btn bg-white d-flex align-items-center dropdown-toggle w-100 text-black-20 p-3 rounded-1"
        onClick={() => setIsOpen(!isOpen)}
      >
        {icon && <span className="material-symbols-outlined me-2">{icon}</span>}
        
        <span className="flex-grow-1 text-start">
          {value ? (typeof value === 'number' ? t('person_count', { count: value }) : t(value)) : t(label)}
        </span>
      </button>
      {isOpen && (
        <ul className="dropdown-menu show w-100" style={{ maxHeight: '200px', overflowY: 'auto' }}>
          {items.map((item, index) => (
            <li key={index}>
              <button type="button" className="dropdown-item" onClick={() => handleSelect(item)}>
                {typeof item === 'number' ? t('person_count', { count: item }) : t(item)}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};



const Home = () => {
  const { t } = useTranslation();

  const personOptions = Array.from({ length: 10 }, (_, i) => i + 1);

  // 統一管理搜尋狀態
  const [searchQuery, setSearchQuery] = useState({
    destination: '',
    startDate: null, // 初始值為空，讓使用者選
    endDate: null,
    category: ''
  });

  // 搜尋處理函式
  const handleSearch = () => {
    console.log('送出查詢條件：', searchQuery);
    // 這裡串接你的 API：axios.get('/api/search', { params: searchQuery })
  };

  return (
    <>
    <div className="position-relative">
       {/* 首頁主圖輪播 */}
      <div className="position-relative">
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
      <div 
        className="bg-black-0 w-75 p-4 mx-auto rounded-3 position-absolute start-50 translate-middle-x z-3"
        style={{ bottom: '-50px' }} // 這行讓框框「一半在內、一半在外」
      >
        <div className="d-flex flex-column flex-md-row gap-3">
          {/* 選單 1：目的地 */}
          <SearchDropdown 
            label="Destination" 
            icon="room"
            items={destinationList}
            value={searchQuery.destination}
            onChange={(val) => setSearchQuery({ ...searchQuery, destination: val })}
          />

          {/* 選單 2：日期選擇器 */}
          <div className="flex-md-fill position-relative d-flex align-items-center bg-white rounded-1 border-0">
            <span 
              className="material-symbols-outlined text-black-20 ms-3 position-absolute" 
              style={{ zIndex: 1, pointerEvents: 'none' }}
            >
              calendar_today
            </span>
            
            <DatePicker
              selectsRange={true}
              startDate={searchQuery.startDate}
              endDate={searchQuery.endDate}
              onChange={(update) => {
                const [start, end] = update;
                setSearchQuery({
                  ...searchQuery,
                  startDate: start,
                  endDate: end
                });
              }}
              isClearable={true}
              placeholderText={t('Check-in / Check-out')}
              className="btn bg-white w-100 text-black-20 p-3 ps-6 text-start border-0"
              dateFormat="yyyy/MM/dd"
              minDate={new Date()}
            />
          </div>

          {/* 選單 3：人數/房型 */}
          <SearchDropdown 
            label="Guests"
            icon="person"
            items={personOptions} 
            value={searchQuery.category}
            onChange={(val) => setSearchQuery({ ...searchQuery, category: val })}
          />

          <div className="text-center">
            <button 
              type="button" 
              className="btn btn-primary py-3 px-5 rounded-1 h-100"
              onClick={handleSearch}
            >
              {t('Search')}
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home
