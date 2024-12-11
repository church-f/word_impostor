import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import itJSON from "./locale/it.json";
import enJSON from "./locale/en.json";
import ptJSON from "./locale/pt.json";
import LanguageDetector from "i18next-browser-languagedetector";
import XHR from "i18next-http-backend"

const options = {
  order: [
    "querystring",
    "cookie",
    "localStorage",
    "sessionStorage",
    "navigator",
    "htmlTag",
    "path",
    "subdomain",
  ],
  lookupQuerystring: "lng",
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
   // detection: options,
   //  ns: ['common'],
   //  defaultNS: 'common',
    fallbackLng: 'en',
   //  supportedLngs: ['it', 'en', 'pt'],
   //  interpolation: {
   //    escapeValue: false,
   //  },
    debug: true,
    resources: {
      en: { translation: { ...enJSON } },
      it: { translation: { ...itJSON } },
      pt: { translation: { ...ptJSON } },
    },
   //   lng: "it",
  });
