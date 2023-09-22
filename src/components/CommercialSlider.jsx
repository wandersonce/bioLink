import { Box, Typography } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

export default function CommercialSlider() {
  return (
    <Box mt="40px">
      <Carousel infiniteLoop swipeable showThumbs={false}>
        <div>
          <div
            style={{
              backgroundImage: 'url("./background1.webp")',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
            className="bg-baseGray rounded-lg min-h-[200px] h-full flex flex-col justify-center items-center text-beigeDark"
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
        <div>
          <div
            style={{
              backgroundImage: 'url("./background2.jpg")',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
            className="bg-baseGrayDark rounded-lg min-h-[200px] h-full flex flex-col justify-center items-center text-beigeDark"
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
        <div>
          <div
            style={{
              backgroundImage: 'url("./background3.jpg")',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
            className="bg-grayLight rounded-lg min-h-[200px] h-full flex flex-col justify-center items-center text-beigeDark"
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
