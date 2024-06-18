import { useMenu } from '../hooks/useMenu';
import cn from 'classnames';

import './menu.css';
import { removeOverflowHiddenFromBody } from '@/shared/lib/react-std';
import { LangSwitcher } from '@/features/changeLanguage';

export const Menu = () => {
  const menuModel = useMenu();

  const handleCloseModal = () => {
    removeOverflowHiddenFromBody();
    menuModel.handleCloseModal();
  };

  return (
    <nav className={cn(`nav-menu`, menuModel.isOpen ? 'open' : 'close')}>
      <button
        onClick={handleCloseModal}
        className={cn('nav-menu__close', {
          open: menuModel.isOpen,
        })}
      />
      <LangSwitcher
        className={cn('nav-menu__lang', {
          open: menuModel.isOpen,
        })}
      />
      <h1>Menu</h1>
    </nav>
  );
};
