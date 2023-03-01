import { useEffect, useState } from 'react';
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
import CommercialSlider from '../components/CommercialSlider';
import CoffeeIcon from '@mui/icons-material/Coffee';
import { ExpandMore } from '@mui/icons-material';
import MyWhishlist from '../components/MyWhishlist';
import RecentPartners from '../components/RecentPartners';
import Footer from '../components/Footer';
import SetupParts from '../components/SetupParts';
import { useUtilitiesContext } from '@/context/utilities';

export default function Home(props) {
  // const [wishlist, setWishlist] = useState([]);
  // const [partners, setPartners] = useState([]);
  const [setupParts, setSetupParts] = useState([]);
  const theme = createTheme({
    typography: {
      fontFamily: ['Croissant One', 'sans-serif'].join(','),
    },
  });

  const { wishlistItems, partnersItems, setupItems } = useUtilitiesContext();

  useEffect(() => {
    const values = async () => {
      try {
        // //Getting wishlist values
        // const resWishlist = await fetch('/api/wishlist');
        // const jsonWishlist = await resWishlist.json();
        // setWishlist(jsonWishlist);

        //Getting Partners values
        // const resPartners = await fetch('/api/partners');
        // const jsonPartners = await resPartners.json();
        // setPartners(jsonPartners);

        //Getting Setup Parts values
        const resSetupParts = await fetch('/api/setupParts');
        const jsonSetupParts = await resSetupParts.json();
        setSetupParts(jsonSetupParts);
      } catch (err) {
        console.log(err);
      }
    };

    values();
  }, []);

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
            href="https://www.buymeacoffee.com/bamgames"
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
                maxHeight: '350px',
                overflowX: 'hidden',
                overflowY: 'scroll',
              }}
            >
              <MyWhishlist allPosts={wishlistItems} />
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
                maxHeight: '400px',
                overflowX: 'hidden',
                overflowY: 'scroll',
              }}
            >
              <RecentPartners allPartners={partnersItems} />
            </AccordionDetails>
          </Accordion>

          {/* SETUP PARTS ACCORDION */}
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
              <Typography variant="h5">Setup Most Asked Parts</Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                maxHeight: '350px',
                overflowX: 'hidden',
                overflowY: 'scroll',
              }}
            >
              <SetupParts allParts={setupParts} />
            </AccordionDetails>
          </Accordion>
        </main>
        <Footer />
      </ThemeProvider>
    </>
  );
}
