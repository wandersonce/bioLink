import { ListItem, ImageList, ImageListItemBar } from '@mui/material';
import { useState, useEffect } from 'react';

export default function MyWhishlist({ allPosts }) {
  const [wishList, setWishList] = useState([]);
  const wishListItems = allPosts;

  useEffect(() => {
    setWishList(wishListItems);
  }, [wishListItems]);

  return (
    <ImageList>
      {wishList &&
        wishList.map((wishListItem) => {
          return (
            <ListItem key={wishListItem._id} sx={{ padding: '5px' }}>
              <a
                className="w-full h-full bg-beigeDark"
                rel="noreferrer"
                target="_blank"
                href={wishListItem.link}
              >
                <img
                  className="w-full h-full max-h-[150px] object-cover sm:max-h-full"
                  alt={wishListItem.name}
                  src={wishListItem.imgLink}
                  loading="lazy"
                />
                <ImageListItemBar
                  sx={{ margin: '0 5px', textAlign: 'center' }}
                  title={wishListItem.name}
                />
              </a>
            </ListItem>
          );
        })}
    </ImageList>
  );
}
