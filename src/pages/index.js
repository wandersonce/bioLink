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
  Box,
} from '@mui/material';
import CommercialSlider from '../components/CommercialSlider';
import { Coin, ShoppingCart, TelegramLogo } from 'phosphor-react';
import { ExpandMore } from '@mui/icons-material';
import MyWhishlist from '../components/MyWhishlist';
import RecentPartners from '../components/RecentPartners';
import Footer from '../components/Footer';
import SetupParts from '../components/SetupParts';
import { useUtilitiesContext } from '@/context/utilities';

export default function Home(props) {
  const theme = createTheme({
    typography: {
      fontFamily: ['Poppins', 'sans-serif'].join(','),
    },
  });

  const { wishlistItems, partnersItems, setupItems } = useUtilitiesContext();

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
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <ThemeProvider theme={theme}>
        <div className="border bg-[#fff]/20 backdrop-blur-md shadow-md">
          <Header />

          <main className="max-w-[100vw] md:max-w-[780px] p-4 sm:max-w-[480px] ">
            <Button
              href="https://www.amazon.com/shop/bamtechsetup"
              style={{
                backgroundColor: '#dda15e',
                color: '#FFF',
                width: '100%',
                border: '1px solid #fff',
                fontSize: '18px',
                fontWeight: 'bold',
                padding: '10px 20px',
                marginTop: '30px',
              }}
              endIcon={<ShoppingCart size={28} />}
            >
              Amazon PC List
            </Button>
            <Box
              display="flex"
              gap="15px"
              justifyContent="center"
              alignItems="center"
            >
              <Button
                href="https://t.me/+xBP26gI_jQ05NGJh"
                style={{
                  backgroundColor: '#2FA2D8',
                  color: '#FFF',
                  width: '100%',
                  border: '1px solid #fff',
                  fontSize: '15px',
                  fontWeight: 'bold',
                  padding: '10px 20px',
                  marginTop: '30px',
                  textAlign: 'center',
                }}
                endIcon={<TelegramLogo size={28} />}
              >
                Be Part of our Telegram Group (EN)
              </Button>
              <Button
                href="https://t.me/+ur8ub4KNoqs0ZjMx"
                style={{
                  backgroundColor: '#2FA2D8',
                  color: '#FFF',
                  width: '100%',
                  border: '1px solid #fff',
                  fontSize: '15px',
                  fontWeight: 'bold',
                  padding: '10px 20px',
                  marginTop: '30px',
                  textAlign: 'center',
                }}
                endIcon={<TelegramLogo size={28} />}
              >
                Be Part of our Telegram Group (PT-BR)
              </Button>
            </Box>

            {/* PAYPAL DONATION*/}
            {/* <Button
              href="https://www.paypal.com/paypalme/wandersoncastro"
              style={{
                backgroundColor: '#183D3D',
                color: '#FFF',
                width: '100%',
                fontSize: '18px',
                fontWeight: 'bold',
                padding: '10px 20px',
                marginTop: '30px',
              }}
              endIcon={<Coin size={28} />}
            >
              Contribute to my Setup
            </Button> */}

            {/* COMMERCIAL SLIDER */}
            <CommercialSlider />

            {/* WISHLIST ACCORDION */}
            {/* <Accordion
              sx={{
                marginTop: '30px',
                borderRadius: '5px',
                border: '1px solid #fff',
                backgroundColor: '#183D3D',
                color: '#FFF',
              }}
            >
              <AccordionSummary
                sx={{ borderBottom: '1px solid #fff' }}
                expandIcon={<ExpandMore sx={{ color: '#FFF' }} />}
              >
                <Typography className="font-bold" variant="h5">
                  My Wishlist
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  maxHeight: '350px',
                  overflowX: 'hidden',
                  overflowY: 'scroll',
                  marginTop: '20px',
                }}
              >
                <MyWhishlist allPosts={wishlistItems} />
              </AccordionDetails>
            </Accordion> */}

            {/* PARTNERS ACCORDION */}
            <Accordion
              sx={{
                marginTop: '30px',
                borderRadius: '5px',
                border: '1px solid #fff',
                backgroundColor: '#183D3D',
                color: '#FFF',
              }}
            >
              <AccordionSummary
                sx={{ borderBottom: '1px solid #fff' }}
                expandIcon={<ExpandMore sx={{ color: '#FFF' }} />}
              >
                <Typography className="font-bold" variant="h5">
                  Recent Partners
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  maxHeight: '400px',
                  overflowX: 'hidden',
                  overflowY: 'scroll',
                  marginTop: '20px',
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
                border: '1px solid #fff',
                backgroundColor: '#183D3D',
                color: '#FFF',
              }}
            >
              <AccordionSummary
                sx={{ borderBottom: '1px solid #fff' }}
                expandIcon={<ExpandMore sx={{ color: '#FFF' }} />}
              >
                <Typography className="font-bold" variant="h5">
                  Setup Most Asked Parts
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  maxHeight: '350px',
                  overflowX: 'hidden',
                  overflowY: 'scroll',
                  marginTop: '20px',
                }}
              >
                <SetupParts allParts={setupItems} />
              </AccordionDetails>
            </Accordion>
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}
