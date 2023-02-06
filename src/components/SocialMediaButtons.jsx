import { Box, IconButton } from '@mui/material';

import {
  TiktokLogo,
  InstagramLogo,
  FacebookLogo,
  RedditLogo,
  TwitchLogo,
  YoutubeLogo,
  DiscordLogo,
} from 'phosphor-react';

export default function SocialMediaButtons() {
  return (
    <Box
      mt="10px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="row"
    >
      <IconButton href="#" className="text-beigeLight">
        <InstagramLogo size={28} />
      </IconButton>
      <IconButton href="#" className="text-beigeLight">
        <TiktokLogo size={28} />
      </IconButton>
      <IconButton href="#" className="text-beigeLight">
        <FacebookLogo size={28} />
      </IconButton>
      <IconButton href="#" className="text-beigeLight">
        <RedditLogo size={28} />
      </IconButton>
      <IconButton href="#" className="text-beigeLight">
        <TwitchLogo size={28} />
      </IconButton>
      <IconButton href="#" className="text-beigeLight">
        <YoutubeLogo size={28} />
      </IconButton>
      <IconButton href="#" className="text-beigeLight">
        <DiscordLogo size={28} />
      </IconButton>
    </Box>
  );
}
