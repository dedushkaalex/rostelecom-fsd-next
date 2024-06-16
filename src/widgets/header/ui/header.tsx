import { LinkList, Logo } from '@/shared/ui';
import { AllowedLangs } from '@/shared/constants/lang';
import { useLang } from '@/features/changeLanguage';
import { HEADER_LIST_NAVIGATE } from '@/shared/constants/routes';

export const Header = () => {
  const { currentLanguage, handleChangeLanguage, translations } = useLang();

  const text = translations[currentLanguage].header;

  return (
    <header className='header'>
      <div className='container header__container row align-items-center'>
        <button
          className='header__burger'
          onClick={() => handleChangeLanguage(AllowedLangs.EN)}
        >
          {text.menu_button}
        </button>

        <div className='header__logo'>
          <Logo />
        </div>

        <nav>
          <LinkList options={HEADER_LIST_NAVIGATE} />
        </nav>
      </div>
    </header>
  );
};
