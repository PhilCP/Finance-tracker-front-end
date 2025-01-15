import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';

i18n
  .use(initReactI18next)
  .use(HttpApi)
  .init({
    fallbackLng: 'en',
    lng: 'en', // Start language
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: 'https://libretranslate.com/translate', // LibreTranslate API URL
      requestOptions: {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: (options) => {
          const { lng } = options;
          return JSON.stringify({
            q: '{{text}}', // Placeholder for text translation
            source: 'en',
            target: lng, // Target language dynamically set
            format: 'text',
          });
        },
      },
    },
    react: {
      useSuspense: true, // Suspense for translations
    },
  });

export default i18n;
