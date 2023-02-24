import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useSession, getSession } from 'next-auth/react';
import Head from 'next/head';
import Sidebar from '@/components/Sidebar';
import { Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import NotLoggedUsers from '@/components/NotLoggedUsers';
import UserViewAccess from '@/components/UserViewAccess';

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isLogged, setIsLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  // check if logged in and redirect to home page if so
  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        setIsLogged(true);
      }
    });
  }, [router]);

  let sessionStatus;
  if (status == 'unauthenticated') {
    sessionStatus = <NotLoggedUsers />;
  } else if (status == 'loading') {
    sessionStatus = (
      <Box
        display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
        width="100vw"
        height="100vh"
      >
        <CircularProgress color="inherit" />
      </Box>
    );
  }

  if (session?.user.role === 'user') {
    sessionStatus = <UserViewAccess />;
  }

  return isLogged ? (
    <>
      <Head>
        <title>BamGames Dashboard</title>
      </Head>
      <Box display="flex" position="relative" width="100vw" height="100vh">
        <Sidebar session={session} />
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flex="1"
        >
          <h1>Hello {session?.user?.name || 'Unknown'}</h1>
        </Box>
      </Box>
    </>
  ) : (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      position="relative"
      width="100vw"
      height="100vh"
    >
      <>{sessionStatus}</>
    </Box>
  );
}
