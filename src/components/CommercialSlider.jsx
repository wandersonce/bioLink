import { Box, Typography } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

export default function CommercialSlider() {
  return (
    <Box mt="40px">
      <Carousel infiniteLoop swipeable>
        <div style={{ padding: 20 }}>
          <div className="bg-baseGray rounded-lg min-h-[200px] h-full flex flex-col justify-center items-center text-beigeDark">
            <Typography
              variant="h5"
              fontSize="32px"
              fontWeight="bold"
              textAlign="center"
              sx={{ padding: '0 24px 0 24px' }}
            >
              Rent this space,
              <br /> Show your Product!
            </Typography>
            <Typography variant="span">
              Send me an email, and know how.
            </Typography>
          </div>
        </div>
        <div style={{ padding: 20 }}>
          <div className="bg-baseGrayDark rounded-lg min-h-[200px] h-full flex flex-col justify-center items-center text-beigeDark">
            <Typography
              variant="h5"
              fontSize="32px"
              fontWeight="bold"
              textAlign="center"
              sx={{ padding: '0 24px 0 24px' }}
            >
              Rent this space,
              <br /> Show your Product!
            </Typography>
            <Typography variant="span">
              Send me an email, and know how.
            </Typography>
          </div>
        </div>
        <div style={{ padding: 20 }}>
          <div className="bg-grayLight rounded-lg min-h-[200px] h-full flex flex-col justify-center items-center text-beigeDark">
            <Typography
              variant="h5"
              fontSize="32px"
              fontWeight="bold"
              textAlign="center"
              sx={{ padding: '0 24px 0 24px' }}
            >
              Rent this space,
              <br /> Show your Product!
            </Typography>
            <Typography variant="span">
              Send me an email, and know how.
            </Typography>
          </div>
        </div>
      </Carousel>
    </Box>
  );
}
