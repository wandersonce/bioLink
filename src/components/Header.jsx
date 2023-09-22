import { Avatar, Box, Button, Typography } from '@mui/material';
import SocialMediaButtons from './SocialMediaButtons';
import { useSpring, animated } from '@react-spring/web';

export default function Header() {
  const stylesAvatar = useSpring({
    loop: false,
    from: { opacity: '0' },
    to: { opacity: '1' },
    config: { duration: '300' },
  });

  const stylesIcons = useSpring({
    loop: false,
    from: { opacity: '0' },
    to: { opacity: '1' },
    config: { duration: '500' },
  });

  const styleEmail = useSpring({
    loop: false,
    from: { opacity: '0' },
    to: { opacity: '1' },
    config: { duration: '600' },
  });
  return (
    <>
      <Box
        className="bg-darkPurple"
        height="300px"
        borderRadius="0 0 10px 10px"
        sx={{
          backgroundImage: 'url("./bgSep23.jpg")',
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
        <animated.div style={{ ...stylesAvatar }}>
          <Avatar
            alt="BamGames Picture"
            src="./profileImg.jpg"
            sx={{ width: '180px', height: '180px', border: '4px solid white' }}
          />
          <Typography variant="h1" fontSize="30px" mt="16px">
            BamGames
          </Typography>
        </animated.div>
        <animated.div style={{ ...stylesIcons }}>
          <SocialMediaButtons />
        </animated.div>
        <animated.div style={{ ...styleEmail }}>
          <Button variant="a" href="mailto:gamesbamce@gmail.com">
            gamesbamce@gmail.com
          </Button>
        </animated.div>
      </Box>
    </>
  );
}
