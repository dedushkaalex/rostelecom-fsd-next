import { useUnit } from 'effector-react';

import { $lang, langChanged } from '../model';

import translationsJson from '/public/locales/translation.json';

export const useLang = () => {
  const model = useUnit({
    handleChangeLanguage: langChanged,
    currentLanguage: $lang,
  });

  const translations = translationsJson;

  return {
    ...model,
    translations,
  };
};
