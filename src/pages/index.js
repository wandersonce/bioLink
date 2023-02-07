import Head from 'next/head';
import Header from '../components/Header';
import { createTheme, ThemeProvider, Button } from '@mui/material';
import CommercialSlider from '@/components/CommercialSlider';
import CoffeeIcon from '@mui/icons-material/Coffee';

export default function Home() {
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
          <CommercialSlider />
          <Button
            href="#"
            style={{
              backgroundColor: '#4B5563',
              color: '#FFFBF5',
              width: '100%',
              fontSize: '18px',
              fontWeight: 'bold',
              padding: '10px 20px',
            }}
            endIcon={<CoffeeIcon />}
          >
            Buy Me a Coffee
          </Button>
        </main>
      </ThemeProvider>
    </>
  );
}
