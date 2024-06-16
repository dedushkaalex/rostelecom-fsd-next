import Image from 'next/image';

import SearchImage from '/public/assets/icons/search.svg';
import HeartImage from '/public/assets/icons/heart.svg';
import CompareAddImage from '/public/assets/icons/compare-add.svg';
import CartImage from '/public/assets/icons/cart.svg';
import ProfileImage from '/public/assets/icons/profile.svg';

export const ROUTES = {
  HOME: '/',
  SIGN_UP: '/sign-up',
  SIGN_IN: '/sign-in',
} as const;

export const HEADER_LIST_NAVIGATE: {
  url: string;
  Component: JSX.Element;
}[] = [
  {
    url: ROUTES.HOME,
    Component: (
      <Image src={SearchImage} width={18} height={18} alt='search icon' />
    ),
  },
  {
    url: ROUTES.HOME,
    Component: (
      <Image src={HeartImage} width={18} height={18} alt='heart icon' />
    ),
  },
  {
    url: ROUTES.HOME,
    Component: (
      <Image
        src={CompareAddImage}
        width={18}
        height={18}
        alt='compare-add icon'
      />
    ),
  },
  {
    url: ROUTES.HOME,
    Component: <Image src={CartImage} width={18} height={18} alt='cart icon' />,
  },
  {
    url: ROUTES.HOME,
    Component: (
      <Image src={ProfileImage} width={18} height={18} alt='profile icon' />
    ),
  },
];
