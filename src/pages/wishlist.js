import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useSession, signIn, getSession } from 'next-auth/react';
import Link from 'next/link';
import Sidebar from '@/components/Sidebar';
import { Box, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

export default function wishlist() {
  const { data: session } = useSession();
  const router = useRouter();
  const [isLogged, setIsLogged] = useState(false);
  const [wishlist, setWishlist] = useState([]);

  const columns = [
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'link', headerName: 'Link', flex: 1 },
    { field: 'imgLink', headerName: 'Image Link', flex: 1 },
  ];

  // check if logged in and redirect to home page if so
  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        setIsLogged(true);
      } else {
        router.replace('/login');
      }
    });

    const getWishList = async () => {
      try {
        //Getting wishlist values
        const resWishlist = await fetch('/api/wishlist');
        const jsonWishlist = await resWishlist.json();
        setWishlist(jsonWishlist.data);
        console.log(jsonWishlist);
      } catch (err) {
        console.log(err);
      }
    };
    getWishList();
  }, []);

  return isLogged ? (
    <Box display="flex" position="relative" width="100vw" height="100vh">
      <Sidebar session={session} />
      <Box flex="1">
        <Typography m="40px 40px 0 40px" variant="h2">
          TEST
        </Typography>
        <Box
          m="40px"
          height="60vh"
          sx={{
            '& .MuiDataGrid-root': {
              border: 'none',
            },
            '& .MuiDataGrid-cell': {
              borderBottom: 'none',
            },
            '& .name-column--cell': {
              color: '#FFFBF5',
            },
            '& .MuiDataGrid-columnHeaders': {
              backgroundColor: '#404258',
              borderBottom: 'none',
            },
            '& .MuiDataGrid-virtualScroller': {
              backgroundColor: '#374151',
            },
            '& .MuiDataGrid-cellContent': {
              color: '#FFFBF5 !important',
            },
            '& .MuiDataGrid-footerContainer': {
              borderTop: 'none',
              backgroundColor: '#404258',
            },
            '& .MuiCheckbox-root': {
              color: '#FFFBF5 !important',
            },
            '& .MuiDataGrid-columnHeaderTitle': {
              color: '#FFFBF5 !important',
              fontWeight: 'bold',
              fontSize: '18px',
            },
            '& .MuiTablePagination-root': {
              color: '#FFFBF5 !important',
            },
          }}
        >
          <DataGrid
            getRowId={(row) => row._id}
            rows={wishlist}
            columns={columns}
            checkboxSelection
          />
        </Box>
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
