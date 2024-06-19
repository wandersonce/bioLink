import { Box, Button, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      mt="60px"
      borderTop="1px solid #6B728E"
      padding="10px"
    >
      <Typography fontSize="12px">Developed by:</Typography>
      <Button
        style={{ fontSize: '12px' }}
        variant="a"
        href="https://wanderson-dev.vercel.app/"
      >
        Wanderson Castro
      </Button>
    </Box>
  );
}
