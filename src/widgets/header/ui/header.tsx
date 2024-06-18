import { LinkList, Logo } from '@/shared/ui';
import { AllowedLangs } from '@/shared/constants/lang';
import { useLang } from '@/features/changeLanguage';

import './header.css';

import { Menu, useMenu } from './menu';
import { addOverflowHiddenToBody } from '@/shared/lib/react-std';

export const Header = () => {
  const { currentLanguage, handleChangeLanguage, translations } = useLang();
  const menuModel = useMenu();

  const handleOpenModal = () => {
    addOverflowHiddenToBody();
    menuModel.handleOpenModal();
  };

  const text = translations[currentLanguage].header;

  return (
    <header className='header'>
      <div className='container header__container'>
        <button className='header__burger' onClick={handleOpenModal}>
          {text.menu_button}
        </button>
        <Menu />
        <div className='header__logo'>
          <Logo />
        </div>

        <LinkList />
      </div>
    </header>
  );
};
