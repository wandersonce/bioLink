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
  const partnersItems = allPartners;

  useEffect(() => {
    setPartners(partnersItems);
  }, [partnersItems]);

  return (
    <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap="20px">
      {partners &&
        partners
          .sort((a, b) => (a.datePosted > b.datePosted ? -1 : 1))
          .map((partnerItem) => {
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
                      sx={{ height: '300px' }}
                      title={partnerItem.name}
                      image={partnerItem.imgLink}
                    />
                  ) : (
                    ''
                  )}
                  <CardContent
                    sx={{
                      backgroundColor: '#5C8374',
                      textAlign: 'center',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flex: '1',
                    }}
                  >
                    <Typography
                      fontSize="18px"
                      sx={{ color: '#FFF', fontWeight: 'bold' }}
                    >
                      {partnerItem.name}
                    </Typography>
                    {partnerItem.coupon ? (
                      <Typography
                        variant="body2"
                        fontSize="12px"
                        sx={{ color: '#FFF' }}
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
                      fontSize="12px"
                      sx={{ color: '#FFF' }}
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
                      backgroundColor: '#5C8374',
                      borderTop: '1px solid #FFF',
                      padding: '10px',
                      gap: '10px',
                    }}
                    className="flex-col sm:flex-row"
                  >
                    <Button
                      href={partnerItem.link}
                      style={{
                        backgroundColor: '#183D3D',
                        color: '#FFF',
                        flex: '1',
                        textAlign: 'center',
                      }}
                      className="w-full"
                    >
                      CHECK WEBSITE
                    </Button>
                    {partnerItem.reelLink != '#' && (
                      <Button
                        href={partnerItem.reelLink}
                        style={{
                          backgroundColor: '#93B1A6',
                          color: '#FFFBF5',
                          flex: '1',
                          textAlign: 'center',
                          marginLeft: '0',
                        }}
                        className="w-full sm:w-1/2"
                      >
                        CHECK REEL
                      </Button>
                    )}
                  </CardActions>
                </Card>
              </Box>
            );
          })}
    </Box>
  );
}
