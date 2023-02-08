import Head from 'next/head';
import Header from '../components/Header';
import {
  createTheme,
  ThemeProvider,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import CommercialSlider from '@/components/CommercialSlider';
import CoffeeIcon from '@mui/icons-material/Coffee';
import { ExpandMore } from '@mui/icons-material';
import MyWhishlist from '@/components/myWhishlist';
import RecentPartners from '@/components/RecentPartners';

export default function Home(props) {
  const theme = createTheme({
    typography: {
      fontFamily: ['Croissant One', 'sans-serif'].join(','),
    },
  });

  return (
    <>
      <Head>
        <title>BamGames Links</title>
        <meta name="description" content="All Links for BamGames Setup!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Croissant+One&display=swap"
          rel="stylesheet"
        />
      </Head>

      <ThemeProvider theme={theme}>
        <Header />

        <main className="max-w-[100vw] md:max-w-[780px] p-4 sm:max-w-[480px]">
          {/* COMMERCIAL SLIDER */}
          <CommercialSlider />

          {/* BUY ME A COFFEE BUTTON */}
          <Button
            href="#"
            style={{
              backgroundColor: '#4B5563',
              color: '#FFFBF5',
              width: '100%',
              fontSize: '18px',
              fontWeight: 'bold',
              padding: '10px 20px',
              marginTop: '30px',
            }}
            endIcon={<CoffeeIcon />}
          >
            Buy Me a Coffee
          </Button>

          {/* WISHLIST ACCORDION */}
          <Accordion
            sx={{
              marginTop: '30px',
              borderRadius: '5px',
              backgroundColor: '#4B5563',
              color: '#FFFBF5',
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMore sx={{ color: '#FFFBF5' }} />}
            >
              <Typography variant="h5">My Wishlist</Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                maxHeight: '300px',
                overflowX: 'hidden',
                overflowY: 'scroll',
              }}
            >
              <MyWhishlist allPosts={props} />
            </AccordionDetails>
          </Accordion>

          {/* PARTNERS ACCORDION */}
          <Accordion
            sx={{
              marginTop: '30px',
              borderRadius: '5px',
              backgroundColor: '#4B5563',
              color: '#FFFBF5',
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMore sx={{ color: '#FFFBF5' }} />}
            >
              <Typography variant="h5">Recent Partners</Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                maxHeight: '300px',
                overflowX: 'hidden',
                overflowY: 'scroll',
              }}
            >
              <RecentPartners allPartners={props} />
            </AccordionDetails>
          </Accordion>
        </main>
      </ThemeProvider>
    </>
  );
}

export async function getServerSideProps(context) {
  try {
    // Getting Wishlist Items
    let wishListRes = await fetch('http://localhost:3000/api/wishlist');
    let wishlist = await wishListRes.json();

    // Getting Partner Items
    let partnersRes = await fetch('http://localhost:3000/api/partners');
    let partners = await partnersRes.json();

    return {
      props: {
        posts: JSON.parse(JSON.stringify(wishlist)),
        partners: JSON.parse(JSON.stringify(partners)),
      },
    };
  } catch (e) {
    console.error(e);
  }
}
