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
          // Home
          "SEARCH": "SEARCH",
          "Destination": "Destination",
        }
      },
      zh: {
        translation: {
          // Navbar
          "sign-up": "註冊",
          "login": "登入",
          // Home
          "SEARCH": "搜尋",
          "Destination": "位置",
        }
      }
    },
    fallbackLng: "en", // 如果偵測不到，預設用英文
    interpolation: { escapeValue: false }
  });

export default i18n;