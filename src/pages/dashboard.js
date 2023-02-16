import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useSession, signOut, signIn, getSession } from 'next-auth/react';
import Link from 'next/link';
import Head from 'next/head';
import Sidebar from '@/components/Sidebar';
import { Box } from '@mui/material';

export default function Dashboard() {
  const { data: session } = useSession();
  const router = useRouter();
  const [isLogged, setIsLogged] = useState(false);

  // check if logged in and redirect to home page if so
  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        setIsLogged(true);
        // router.replace('/dashboard');
      } else {
        router.replace('/login');
      }
    });
  }, [router]);

  return isLogged ? (
    <>
      <Head>
        <title>BamGames Dashboard</title>
      </Head>
      <Box display="flex" position="relative" width="100vw" height="100vh">
        <Sidebar session={session} />
        <Box flex="1">
          <h1>Hello {session?.user?.name || 'Unknown'}</h1>
          <button onClick={() => signOut()}>Sign Out</button>
        </Box>
      </Box>
    </>
  ) : (
    <>
      <h1>Hello, You are not logged!</h1>
      <Link href="/login">
        <button onClick={() => signIn()}>Sign In</button>
      </Link>
    </>
  );
}

// export async function getServerSideProps(context) {
//   const token = await hasToken(context.req);

//   if (!token) {
//     return {
//       redirect: {
//         destination: '/',
//         permanent: false,
//       },
//     };
//   }

//   return { props: {} };
// }
