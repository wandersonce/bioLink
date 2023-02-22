import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useSession, signIn, getSession } from 'next-auth/react';
import Link from 'next/link';
import Head from 'next/head';
import Sidebar from '@/components/Sidebar';
import { Box, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import dayjs from 'dayjs';
import HandlePartners from '@/components/HandlePartners';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Partners() {
  const { data: session } = useSession();
  const router = useRouter();
  const [isLogged, setIsLogged] = useState(false);
  const [partners, setPartners] = useState([]);
  const [selectionModel, setSelectionModel] = useState([]);
  const [selectedRow, setSelectedRow] = useState([]);

  const matches = useMediaQuery('(max-width:640px)');

  const columns = [
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'link', headerName: 'Link', flex: 1 },
    { field: 'imgLink', headerName: 'Image Link', flex: 1 },
    { field: 'descountCoupon', headerName: 'Value Discount' },
    { field: 'coupon', headerName: 'Coupon' },
    {
      field: 'datePosted',
      headerName: 'Posted Date',
      valueFormatter: (params) => dayjs(params.value).format('MM-DD-YYYY'),
    },
    { field: 'reelLink', headerName: 'Reel Link', flex: 1 },
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

    const getPartners = async () => {
      try {
        //Getting wishlist values
        const resPartners = await fetch('/api/partners');
        const jsonPartners = await resPartners.json();
        setPartners(jsonPartners.data);
      } catch (err) {
        console.log(err);
      }
    };
    getPartners();
  }, []);

  const updateList = (fetchList) => {
    setPartners(fetchList.data);
  };

  return isLogged ? (
    <>
      <Head>
        <title>BamGames Partners</title>
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
            Partners Posts
          </Typography>
          <Box
            {...(matches ? { margin: '20px' } : { margin: '40px' })}
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
            <HandlePartners updateList={updateList} selectedRow={selectedRow} />

            <DataGrid
              getRowId={(row) => row._id}
              rows={partners}
              columns={columns}
              sx={{ overflowX: 'scroll' }}
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
    <>
      <Head>
        <title>BamGames Partners</title>
      </Head>
      <h1>Hello, You are not logged!</h1>
      <Link href="/login">
        <button onClick={() => signIn()}>Sign In</button>
      </Link>
    </>
  );
}
