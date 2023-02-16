import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useSession, signIn, getSession } from 'next-auth/react';
import Link from 'next/link';
import Head from 'next/head';
import Sidebar from '@/components/Sidebar';
import { Box, Typography, Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';

export default function setup() {
  const { data: session } = useSession();
  const router = useRouter();
  const [isLogged, setIsLogged] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [selectionModel, setSelectionModel] = useState([]);

  const columns = [
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'productLink', headerName: 'Product Link', flex: 1 },
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
        const resWishlist = await fetch('/api/setupParts');
        const jsonWishlist = await resWishlist.json();
        setWishlist(jsonWishlist.data);
      } catch (err) {
        console.log(err);
      }
    };
    getWishList();
  }, []);

  return isLogged ? (
    <>
      <Head>
        <title>BamGames Setup Parts</title>
      </Head>
      <Box display="flex" position="relative" width="100vw" height="100vh">
        <Sidebar session={session} />
        <Box flex="1">
          <Typography m="40px 40px 0 40px" variant="h3">
            Wishlist Items
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
            <Box
              display="flex"
              flexDirection="row"
              gap="15px"
              marginBottom="20px"
            >
              <Button
                sx={{
                  backgroundColor: '#810CA8',
                  border: 'none',
                  fontWeight: 'bold',
                  color: '#FFFBF5',
                  ':hover': {
                    backgroundColor: '#2D033B',
                    border: 'none',
                  },
                }}
                variant="outlined"
                startIcon={<EditIcon />}
              >
                EDIT
              </Button>

              <Button
                sx={{
                  backgroundColor: '#9f2525',
                  border: 'none',
                  fontWeight: 'bold',
                  color: '#FFFBF5',
                  ':hover': {
                    backgroundColor: '#5e1616',
                    border: 'none',
                  },
                }}
                variant="outlined"
                startIcon={<DeleteForeverIcon />}
              >
                Delete
              </Button>
            </Box>
            <DataGrid
              getRowId={(row) => row._id}
              rows={wishlist}
              columns={columns}
              checkboxSelection
              selectionModel={selectionModel}
              hideFooterSelectedRowCount
              onSelectionModelChange={(selection) => {
                if (selection.length > 1) {
                  const selectionSet = new Set(selectionModel);
                  const result = selection.filter((s) => !selectionSet.has(s));

                  setSelectionModel(result);
                } else {
                  setSelectionModel(selection);
                }
              }}
            />
          </Box>
        </Box>
      </Box>
    </>
  ) : (
    <>
      <Head>
        <title>BamGames Setup Parts</title>
      </Head>
      <h1>Hello, You are not logged!</h1>
      <Link href="/login">
        <button onClick={() => signIn()}>Sign In</button>
      </Link>
    </>
  );
}
