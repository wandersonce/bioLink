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
          <ListItem key={setupPartItem._id}>
            <a
              rel="noreferrer"
              target="_blank"
              href={setupPartItem.productLink}
            >
              <img
                className="w-full h-fit "
                alt={setupPartItem.name}
                src={setupPartItem.imgLink}
                loading="lazy"
              />
              <ImageListItemBar title={setupPartItem.name} />
            </a>
          </ListItem>
        );
      })}
    </ImageList>
  );
}
