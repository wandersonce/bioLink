import { Box } from '@mui/material';
import Link from 'next/link';

export default function NotLoggedUsers() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
    >
      <h1 className="text-xl">Hello, You are not logged!</h1>
      <Link href="/login">
        <button
          className="text-lg font-bold text-lightPurple"
          onClick={() => signIn()}
        >
          Sign In
        </button>
      </Link>
    </Box>
  );
}
