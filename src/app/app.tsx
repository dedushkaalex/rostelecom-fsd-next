import type { AppProps } from 'next/app';
import { RootLayout } from './layouts';

export function App({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}
