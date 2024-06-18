import { useUnit } from 'effector-react';

import { $lang, langChanged, langSwitchedToEn, langSwitchedToRu } from '../model';

import translationsJson from '/public/locales/translation.json';

export const useLang = () => {
  const model = useUnit({
    handleChangeLanguage: langChanged,
    currentLanguage: $lang,
    handleSwitchToRu: langSwitchedToRu,
    handleSwitchToEn: langSwitchedToEn,
  });

  const translations = translationsJson;

  return {
    ...model,
    translations,
  };
};
