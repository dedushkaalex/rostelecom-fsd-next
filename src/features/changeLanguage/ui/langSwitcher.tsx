import { AllowedLangs } from '@/shared/constants/lang';
import { useLang } from '../hooks/useLang';

export const LangSwitcher = () => {
  const { currentLanguage, handleChangeLanguage, translations } = useLang();

  const text = translations[currentLanguage].header;

  return (
    <button
      className='header__burger'
      onClick={() => handleChangeLanguage(AllowedLangs.EN)}
    >
      {text.menu_button}
    </button>
  );
};
