import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import itJSON from "./locale/it.json";
import enJSON from "./locale/en.json";
import ptJSON from "./locale/pt.json";
import LanguageDetector from "i18next-browser-languagedetector";


import enParole from './locale/parole/en.json'
import ptParole from './locale/parole/pt.json'

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
   detection: options,
    // fallbackLng: 'en',
    whitelist: ['it', 'en', 'pt'],
    debug: false,
    resources: {
      en: { translation: { ...enJSON, ...enParole } },
      it: { translation: { ...itJSON } },
      pt: { translation: { ...ptJSON, ...ptParole } },
    },
   //   lng: "it",
  });
