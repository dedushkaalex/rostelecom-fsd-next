import { Header } from '@/widgets/header';

interface RootLayoutProps {
  children?: React.ReactNode;
}

export const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
