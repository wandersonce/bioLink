import { Avatar, Box, Button, Typography } from '@mui/material';
import SocialMediaButtons from './SocialMediaButtons';
import { useSpring, animated } from '@react-spring/web';
import Image from 'next/image';
import { Envelope } from 'phosphor-react';

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
        height="350px"
        borderRadius="0 0 10px 10px"
        sx={{
          backgroundImage: 'url("./setupJun24.jpg")',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      />
      <Box className="bg-grayDark absolute top-3 left-3 rounded-lg p-3">
        <Image
          className=" "
          width={100}
          height={100}
          src="/logo23.png"
          alt="bam logo"
        />
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        mt="-90px"
      >
        <animated.div
          style={{
            ...stylesAvatar,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Avatar
            alt="BamGames Picture"
            src="./profileImg.jpg"
            sx={{ width: '180px', height: '180px', border: '4px solid white' }}
          />
          <Typography
            variant="h1"
            fontSize="30px"
            mt="16px"
            className="font-bold"
          >
            Bam - Tech & Setup
          </Typography>
        </animated.div>
        <animated.div style={{ ...stylesIcons }}>
          <SocialMediaButtons />
        </animated.div>
        <animated.div style={{ ...styleEmail }}>
          <Button
            className="flex gap-2"
            variant="a"
            href="mailto:gamesbamce@gmail.com"
          >
            <Envelope size={20} />
            gamesbamce@gmail.com
          </Button>
        </animated.div>
      </Box>
    </>
  );
}
