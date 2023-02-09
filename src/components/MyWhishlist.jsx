import { ListItem, ImageList, ImageListItemBar } from '@mui/material';
import { useState, useEffect } from 'react';

export default function MyWhishlist({ allPosts }) {
  const [wishList, setWishList] = useState([]);
  const wishListItems = allPosts.posts.data;

  useEffect(() => {
    setWishList(wishListItems);
  }, [wishListItems]);

  return (
    <ImageList>
      {wishList.map((wishListItem) => {
        return (
          <ListItem key={wishListItem._id}>
            <a rel="noreferrer" target="_blank" href={wishListItem.link}>
              <img
                className="w-full h-full max-h-[150px] sm:max-h-full"
                alt={wishListItem.name}
                src={wishListItem.imgLink}
                loading="lazy"
              />
              <ImageListItemBar title={wishListItem.name} />
            </a>
          </ListItem>
        );
      })}
    </ImageList>
  );
}
