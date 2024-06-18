import { AllowedLangs, LANGUAGE_STORAGE_KEY } from '@/shared/constants/lang';
import { createDomain, sample } from 'effector';

/* Domain */
const lang = createDomain();

/* Events */
export const langChanged = lang.createEvent<AllowedLangs>();

export const langSwitchedToRu = lang.createEvent();
export const langSwitchedToEn = lang.createEvent();

//TODO: FIX ME
export const $lang = lang
  .createStore<AllowedLangs>(
    // (localStorage.getItem(LANGUAGE_STORAGE_KEY) as AllowedLangs) ??
      AllowedLangs.RU
  )
  .on(langChanged, (_, newLang) => {
    return newLang;
  });

// localStorage.setItem(LANGUAGE_STORAGE_KEY, newLang);

/* sample */

/**
 * Смена на русский
 */
sample({
  clock: langSwitchedToRu,
  fn: () => {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, AllowedLangs.RU);

    return AllowedLangs.RU;
  },

  target: langChanged,
});

/**
 * Смена на англ
 */

sample({
  clock: langSwitchedToEn,
  fn: () => {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, AllowedLangs.EN);

    return AllowedLangs.EN;
  },
  target: langChanged,
});
