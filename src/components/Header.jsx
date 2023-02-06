import { Avatar, Box, Typography } from '@mui/material';

export default function Header() {
  return (
    <>
      <Box
        className="bg-darkPurple"
        height="300px"
        borderRadius="0 0 10px 10px"
        sx={{
          backgroundImage: 'url("./headerBg.jpg")',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        mt="-90px"
      >
        <Avatar
          alt="BamGames Picture"
          src="./profileImg.jpg"
          sx={{ width: '180px', height: '180px', border: '4px solid white' }}
        />
        <Typography variant="h1" fontSize="30px" mt="16px">
          BamGames
        </Typography>
      </Box>
    </>
  );
}
