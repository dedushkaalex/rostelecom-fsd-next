import { useLang } from '../hooks/useLang';
import cn from 'classnames';

import './langSwitcher.css'

export const LangSwitcher = ({ className }: { className?: string }) => {
  const {
    currentLanguage,
    handleChangeLanguage,
    translations,
    handleSwitchToEn,
    handleSwitchToRu,
  } = useLang();

  const text = translations[currentLanguage].header;

  return (
    <div className={cn('lang__switcher', className)}>
      <button
        className={cn(
          'nav-menu__lang__btn',
          currentLanguage === 'ru' ? 'lang-active' : ''
        )}
        onClick={handleSwitchToRu}
      >
        RU
      </button>
      <button
        className={cn(
          'nav-menu__lang__btn',
          currentLanguage === 'en' ? 'lang-active' : ''
        )}
        onClick={handleSwitchToEn}
      >
        EN
      </button>
    </div>
  );
};
