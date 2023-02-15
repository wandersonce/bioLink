import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useSession, signOut, signIn } from 'next-auth/react';
import Link from 'next/link';
import { getSession } from 'next-auth/react';

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
      <h1>Hello {session?.user?.email || 'Unknown'}</h1>

      <button onClick={() => signOut()}>Sign Out</button>
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
