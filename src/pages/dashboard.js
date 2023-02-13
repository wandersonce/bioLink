import { useSession, signOut, signIn, signUp } from 'next-auth/react';
import Link from 'next/link';

export default function Dashboard() {
  const { data: session } = useSession();

  return (
    <>
      <h1>Hello {session?.user?.email || 'Unknown'}</h1>
      <Link href="/login">
        <button onClick={() => signIn()}>Sign In</button>
      </Link>
      <button onClick={() => signOut()}>Sign Out</button>
    </>
  );
}
