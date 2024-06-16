/* eslint-disable @typescript-eslint/no-unused-vars */
import { ROUTES } from '../../constants/routes';
import Link from 'next/link';

// eslint-disable-next-line @typescript-eslint/ban-types
type ChildComponent = React.FC<{}>;

interface LinkListProps {
  options: {
    url: string;
    Component: React.ReactNode;
  }[];
  className?: string;
}

export const LinkList = ({ className, options }: LinkListProps) => {
  return (
    <ul className={className}>
      {options.map(({ Component, url }, index) => (
        <li key={index}>
          <Link href={url}>{Component}</Link>
        </li>
      ))}
    </ul>
  );
};
