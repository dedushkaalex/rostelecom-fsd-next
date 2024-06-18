import Image from 'next/image';
import Link from 'next/link';

import cn from 'classnames';

import SearchImage from '/public/assets/icons/search.svg';
import HeartImage from '/public/assets/icons/heart.svg';
import CompareAddImage from '/public/assets/icons/compare-add.svg';
import CartImage from '/public/assets/icons/cart.svg';
import ProfileImage from '/public/assets/icons/profile.svg';

export const LinkList = () => {
  return (
    <ul className='header__links'>
      <li className='header__links__item'>
        <button className='header__links__item__btn header__links__item__btn--search' />
      </li>
      <li className='header__links__item'>
        <Link
          href='/favorites'
          className='header__links__item__btn header__links__item__btn--favorites'
        />
      </li>
      <li className='header__links__item'>
        <Link
          className='header__links__item__btn header__links__item__btn--compare'
          href='/comparison'
        />
      </li>
      <li className='header__links__item'>
        <Link
          className='header__links__item__btn header__links__item__btn--cart'
          href='/cart'
        />
      </li>
      <li className='header__links__item header__links__item--profile'>
        <Link
          className='header__links__item__btn header__links__item__btn--profile '
          href='/profile'
        />
      </li>
    </ul>
  );
};
