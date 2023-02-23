import Head from 'next/head';
import Sidebar from '@/components/Sidebar';
import { Box, Typography } from '@mui/material';
import { useSession, getSession } from 'next-auth/react';
import { useEffect } from 'react';

export default function UserViewAccess() {
  const { data: session, status } = useSession();
  useEffect(() => {
    getSession().then((session) => {
      if (session) {
      }
    });
  }, []);

  return (
    <>
      <Head>
        <title>BamGames Wishlist</title>
      </Head>

      <Box display="flex" position="relative" width="100vw" height="100vh">
        <Sidebar session={session} />
      </Box>
    </>
  );
}
