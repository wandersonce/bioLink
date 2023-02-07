import { Box, Typography } from '@mui/material';
import { useState, useEffect } from 'react';

export default function MyWhishlist({ allPosts }) {
  const [wishList, setWishList] = useState([]);
  const wishListItems = allPosts.posts.data;

  useEffect(() => {
    setWishList(wishListItems);
  }, [wishListItems]);

  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(12, 1fr)"
      gridAutoRows="140px"
      gap="20px"
    >
      {wishList.map((wishListItem) => {
        return (
          <Box
            gridColumn="span 6"
            display="flex"
            alignItems="center"
            justifyContent="center"
            key={wishListItem.id}
          >
            <Typography> {wishListItem.name} </Typography>
          </Box>
        );
      })}
    </Box>
  );
}
