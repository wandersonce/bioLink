import { Grid, Item } from '@mui/material';
import { useState, useEffect } from 'react';

export default function RecentPartners({ allPartners }) {
  const [partners, setPartners] = useState([]);
  const partnersItems = allPartners.partners.data;

  useEffect(() => {
    setPartners(partnersItems);
  }, [partnersItems]);

  console.log(partnersItems);

  return (
    <Grid container spacing={{ xs: 2 }} columns={{ xs: 2, sm: 1, md: 2 }}>
      {partners.map((partnerItem) => {
        return <Grid key={partnerItem._id}>{partnerItem.name}</Grid>;
      })}
    </Grid>
  );
}
