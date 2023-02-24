import { useEffect, useState } from 'react';
import { useSession, getSession } from 'next-auth/react';
import Head from 'next/head';
import Sidebar from '@/components/Sidebar';
import { Box, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import HandleWishList from '@/components/HandleWishList';
import CircularProgress from '@mui/material/CircularProgress';
import NotLoggedUsers from '@/components/NotLoggedUsers';
import UserViewAccess from '@/components/UserViewAccess';
import { useUtilitiesContext } from '@/context/utilities';

export default function Wishlist() {
  const { data: session, status } = useSession();
  const [isLogged, setIsLogged] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [selectionModel, setSelectionModel] = useState([]);
  const [selectedRow, setSelectedRow] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  const { wishlistItems } = useUtilitiesContext();

  // console.log(wishlistItems);

  const matches = useMediaQuery('(max-width:640px)');

  const columns = [
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'link', headerName: 'Link', flex: 1 },
    { field: 'imgLink', headerName: 'Image Link', flex: 1 },
  ];

  // check if logged in and redirect to home page if so
  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        session.user.role === 'admin' && setIsAdmin(true);
        setIsLogged(true);
      }
    });

    const getWishList = async () => {
      try {
        //Getting wishlist values
        // const resWishlist = await fetch('/api/wishlist');
        // const jsonWishlist = await resWishlist.json();

        setWishlist(wishlistItems);
      } catch (err) {
        console.log(err);
      }
    };
    getWishList();
  }, []);

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

  const updateList = (fetchList) => {
    setWishlist(fetchList.data);
  };

  return isLogged && isAdmin ? (
    <>
      <Head>
        <title>BamGames Wishlist</title>
      </Head>
      <Box display="flex" position="relative" width="100vw" height="100vh">
        <Sidebar session={session} />
        <Box flex="1">
          <Typography
            {...(matches
              ? { margin: '40px 20px 0 20px', fontSize: '2rem' }
              : { margin: '40px 40px 0 40px' })}
            variant="h3"
          >
            Wishlist Items
          </Typography>
          <Box
            {...(matches ? { margin: '20px' } : { margin: '40px' })}
            height="60vh"
            sx={{
              '& .MuiDataGrid-root': {
                border: 'none',
              },
              '& .MuiDataGrid-cell': {
                ...(matches && {
                  maxWidth: '100% !important',
                }),
                borderBottom: 'none',
              },
              '& .name-column--cell': {
                color: '#FFFBF5',
              },
              '& .MuiDataGrid-columnHeader': {
                backgroundColor: '#404258',
                borderBottom: 'none',
                ...(matches && {
                  maxWidth: '100% !important',
                  width: '100% !important',
                }),
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
            <HandleWishList updateList={updateList} selectedRow={selectedRow} />

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
                  setSelectedRow(result);
                  setSelectionModel(result);
                } else {
                  setSelectionModel(selection);
                  setSelectedRow(selection);
                }
              }}
            />
          </Box>
        </Box>
      </Box>
    </>
  ) : (
    <>{sessionStatus}</>
  );
}
