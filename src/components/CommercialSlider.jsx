import { Box, Button, Typography } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

export default function CommercialSlider() {
  return (
    <Box mt="40px">
      <Carousel infiniteLoop swipeable showThumbs={false}>
        <div>
          <Button
            href="https://discord.com/invite/SGJEuWk"
            style={{ width: '100%' }}
          >
            <div
              style={{
                backgroundImage: 'url("./discordBanner.png")',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                width: '100%',
              }}
              className="bg-baseGray rounded-lg min-h-[300px] h-full flex flex-col justify-center items-center text-beigeDark"
            >
              {/* <Typography
                variant="h5"
                fontSize="32px"
                fontWeight="bold"
                textAlign="center"
                sx={{ padding: '0 24px 0 24px', color: '#FFF' }}
              >
                Promote your Brand
                <br /> Here!
              </Typography>
              <Typography sx={{ color: '#FFF' }} variant="span">
                Send me an email, and know how.
              </Typography> */}
            </div>
          </Button>
        </div>
        <div>
          <div
            style={{
              backgroundImage: 'url("./background2.jpg")',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
            className="bg-baseGrayDark rounded-lg min-h-[300px] h-full flex flex-col justify-center items-center text-beigeDark"
          >
            <Typography
              variant="h5"
              fontSize="32px"
              fontWeight="bold"
              textAlign="center"
              sx={{ padding: '0 24px 0 24px', color: '#FFF' }}
            >
              Rent this space,
              <br /> Show your Product!
            </Typography>
            <Typography sx={{ color: '#FFF' }} variant="span">
              Send me an email, and know how.
            </Typography>
          </div>
        </div>
      </Carousel>
    </Box>
  );
}
