import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import itJSON from './locale/it.json'
import enJSON from './locale/en.json'

i18n.use(initReactI18next).init({
 resources: {
    en: {...enJSON},
    it: {...itJSON}
 }, 
 lng: "en",     
});