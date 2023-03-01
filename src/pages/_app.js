import { SessionProvider } from 'next-auth/react';
import { ProSidebarProvider } from 'react-pro-sidebar';
import UtilitiesFunc from '@/context/utilities';
import '@/styles/globals.css';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <ProSidebarProvider>
        <UtilitiesFunc>
          <Component {...pageProps} />
        </UtilitiesFunc>
      </ProSidebarProvider>
    </SessionProvider>
  );
}
