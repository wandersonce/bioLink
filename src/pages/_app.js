import { SessionProvider } from 'next-auth/react';
import { ProSidebarProvider } from 'react-pro-sidebar';
import '@/styles/globals.css';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <ProSidebarProvider>
        <Component {...pageProps} />
      </ProSidebarProvider>
    </SessionProvider>
  );
}
