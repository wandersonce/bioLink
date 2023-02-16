import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useSession, signIn, getSession } from 'next-auth/react';
import Link from 'next/link';
import Sidebar from '@/components/Sidebar';
import { Box } from '@mui/material';

export default function wishlist() {
  const { data: session } = useSession();
  const router = useRouter();
  const [isLogged, setIsLogged] = useState(false);

  // check if logged in and redirect to home page if so
  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        setIsLogged(true);
      } else {
        router.replace('/login');
      }
    });
  }, [router]);

  return isLogged ? (
    <Box display="flex" position="relative" width="100vw" height="100vh">
      <Sidebar session={session} />
      <Box flex="1">
        <h1>Hello {session?.user?.name || 'Unknown'}</h1>
      </Box>
    </Box>
  ) : (
    <>
      <h1>Hello, You are not logged!</h1>
      <Link href="/login">
        <button onClick={() => signIn()}>Sign In</button>
      </Link>
    </>
  );
}
