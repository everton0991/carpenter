import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// import * as Localization from 'expo-localization';

const resources = {
  'pt-BR': { translation: { title: 'Portuguese' } },
  'en-US': { translation: { title: 'English' } },
};

const initI18n = async () => {
  // const savedLanguage = Localization.getLocales();

  i18n.use(initReactI18next).init({
    resources,
    lng: 'en-US',
    fallbackLng: 'en-US',
    interpolation: {
      escapeValue: false,
    },
  });
};

initI18n();

export default i18n;
