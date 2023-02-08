import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  CardActions,
  Button,
} from '@mui/material';
import { useState, useEffect } from 'react';
import dayjs from 'dayjs';

export default function RecentPartners({ allPartners }) {
  const [partners, setPartners] = useState([]);
  const partnersItems = allPartners.partners.data;

  useEffect(() => {
    setPartners(partnersItems);
  }, [partnersItems]);

  console.log(partnersItems);

  return (
    <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap="20px">
      {partners.map((partnerItem) => {
        return (
          <Box
            key={partnerItem._id}
            gridColumn="span 6"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Card
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
              }}
            >
              {partnerItem.imgLink ? (
                <CardMedia
                  sx={{ height: '150px' }}
                  title={partnerItem.name}
                  image={partnerItem.imgLink}
                />
              ) : (
                ''
              )}
              <CardContent
                sx={{
                  backgroundColor: '#20262E',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flex: '1',
                }}
              >
                <Typography fontSize="18px" sx={{ color: '#FFFBF5' }}>
                  {partnerItem.name}
                </Typography>
                {partnerItem.coupon ? (
                  <Typography
                    variant="body2"
                    fontSize="12px"
                    sx={{ color: '#F7EFE5' }}
                    mt="5px"
                  >
                    COUPON FOR {partnerItem.descountCoupon}% OFF: {<br />}
                    {partnerItem.coupon}
                  </Typography>
                ) : (
                  ''
                )}
                <Typography
                  variant="body2"
                  fontSize="10px"
                  sx={{ color: '#6B728E' }}
                  mt="5px"
                >
                  Reel Posted on:
                  <br />
                  {dayjs(partnerItem.datePosted).format('MM-DD-YYYY')}
                </Typography>
              </CardContent>
              <CardActions
                display="flex"
                sx={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#20262E',
                  borderTop: '1px solid #6B728E',
                  padding: '10px',
                  gap: '10px',
                }}
                className="flex-col sm:flex-row"
              >
                <Button
                  href={partnerItem.link}
                  style={{
                    backgroundColor: '#404258',
                    color: '#FFFBF5',
                    flex: '1',
                  }}
                  className="w-full"
                >
                  CHECK WEBSITE
                </Button>
                <Button
                  href={partnerItem.reelLink}
                  style={{
                    backgroundColor: '#4B5563',
                    color: '#FFFBF5',
                    flex: '1',
                  }}
                  className="w-full sm:w-1/2"
                >
                  CHECK REEL
                </Button>
              </CardActions>
            </Card>
          </Box>
        );
      })}
    </Box>
  );
}