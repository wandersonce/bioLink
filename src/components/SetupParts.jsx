import { useState, useEffect } from 'react';
import { ListItem, ImageList, ImageListItemBar } from '@mui/material';

export default function SetupParts({ allParts }) {
  const [setupParts, setSetupParts] = useState([]);
  const setupPartItems = allParts.setupParts.data;

  useEffect(() => {
    setSetupParts(setupPartItems);
  }, [setupPartItems]);

  return (
    <ImageList>
      {setupParts.map((setupPartItem) => {
        return (
          <ListItem key={setupPartItem._id} sx={{ padding: '5px' }}>
            <a
              className="w-full"
              rel="noreferrer"
              target="_blank"
              href={setupPartItem.productLink}
            >
              <img
                className="w-full h-full max-h-[150px] object-cover sm:max-h-full"
                alt={setupPartItem.name}
                src={setupPartItem.imgLink}
                loading="lazy"
              />
              <ImageListItemBar
                sx={{ margin: '0 5px', textAlign: 'center' }}
                title={setupPartItem.name}
              />
            </a>
          </ListItem>
        );
      })}
    </ImageList>
  );
}
