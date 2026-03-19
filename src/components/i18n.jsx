import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector) // 自動偵測瀏覽器語言
  .use(initReactI18next)
  .init({
    lng: "en", // <--- 這裡強制指定預設為英文
    fallbackLng: "en", // <--- 如果偵測不到或翻譯缺失，預設也用英文
    resources: {
      en: {
        translation: {
          // Navbar
          "sign-up": "Sign up",
          "login": "Login",
          // Home / Search Box
          "Search": "Search",
          "Destination": "Destination",
          "Taipei": "Taipei",
          "Taichung": "Taichung",
          "Kaohsiung": "Kaohsiung",
          "Check-in / Check-out": "Check-in / Check-out",
          "Guests": "Guests",
          "TaipeiCity": "Taipei City",
          "NewTaipeiCity": "New Taipei City",
          "KeelungCity": "Keelung City",
          "TaoyuanCity": "Taoyuan City",
          "HsinchuCounty": "Hsinchu County",
          "HsinchuCity": "Hsinchu City",
          "MiaoliCounty": "Miaoli County",
          "TaichungCity": "Taichung City",
          "ChanghuaCounty": "Changhua County",
          "NantouCounty": "Nantou County",
          "YunlinCounty": "Yunlin County",
          "ChiayiCounty": "Chiayi County",
          "ChiayiCity": "Chiayi City",
          "TainanCity": "Tainan City",
          "KaohsiungCity": "Kaohsiung City",
          "PingtungCounty": "Pingtung County",
          "YilanCounty": "Yilan County",
          "HualienCounty": "Hualien County",
          "TaitungCounty": "Taitung County",
          "PenghuCounty": "Penghu County",
          "KinmenCounty": "Kinmen County",
          "LienchiangCounty": "Lienchiang County",
          "person_count": "{{count}} Person",
          "person_count_plural": "{{count}} People"
        }
      },
      zh: {
        translation: {
          // Navbar
          "sign-up": "註冊",
          "login": "登入",
          // Home / Search Box
          "Search": "搜尋",
          "Destination": "目的地",
          "Taipei": "台北",
          "Taichung": "台中",
          "Kaohsiung": "高雄",
          "Check-in / Check-out": "入住日期 / 退房日期",
          "Guests": "人數",
          "TaipeiCity": "台北市",
          "NewTaipeiCity": "新北市",
          "KeelungCity": "基隆市",
          "TaoyuanCity": "桃園市",
          "HsinchuCounty": "新竹縣",
          "HsinchuCity": "新竹市",
          "MiaoliCounty": "苗栗縣",
          "TaichungCity": "台中市",
          "ChanghuaCounty": "彰化縣",
          "NantouCounty": "南投縣",
          "YunlinCounty": "雲林縣",
          "ChiayiCounty": "嘉義縣",
          "ChiayiCity": "嘉義市",
          "TainanCity": "台南市",
          "KaohsiungCity": "高雄市",
          "PingtungCounty": "屏東縣",
          "YilanCounty": "宜蘭縣",
          "HualienCounty": "花蓮縣",
          "TaitungCounty": "台東縣",
          "PenghuCounty": "澎湖縣",
          "KinmenCounty": "金門縣",
          "LienchiangCounty": "連江縣",
          "person_count": "{{count}} 位"
        }
      }
    },
    fallbackLng: "en", // 如果偵測不到，預設用英文
    interpolation: { escapeValue: false }
  });

export default i18n;