import Image from 'next/image';
import Link from 'next/link';

// import { ROUTES } from '@/shared/constants/routes';

import RostelecomImage from '/public/assets/images/rostelecom.svg';

export const Logo = (): JSX.Element => {
  return (
    <Link href={'d'}>
      <Image
        src={RostelecomImage}
        alt='rostelecom logo'
        width={197}
        height={50}
      />
    </Link>
  );
};
