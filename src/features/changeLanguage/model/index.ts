import { AllowedLangs } from '@/shared/constants/lang';
import { createDomain } from 'effector';

const lang = createDomain();

export const langChanged = lang.createEvent<AllowedLangs>();

export const $lang = lang
  .createStore<AllowedLangs>(AllowedLangs.RU)
  .on(langChanged, (_, newLang) => {
    return newLang;
  });
