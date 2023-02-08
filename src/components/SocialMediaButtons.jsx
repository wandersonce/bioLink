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
      <IconButton
        href="https://www.instagram.com/bamgamesofc/"
        className="text-beigeLight hover:text-lightPurple"
      >
        <InstagramLogo size={28} />
      </IconButton>
      <IconButton
        href="https://www.tiktok.com/@bamgames1"
        className="text-beigeLight hover:text-lightPurple"
      >
        <TiktokLogo size={28} />
      </IconButton>
      <IconButton
        href="https://www.facebook.com/bamgamesofc"
        className="text-beigeLight hover:text-lightPurple"
      >
        <FacebookLogo size={28} />
      </IconButton>
      <IconButton
        href="https://www.reddit.com/user/bamgamesce"
        className="text-beigeLight hover:text-lightPurple"
      >
        <RedditLogo size={28} />
      </IconButton>
      <IconButton
        href="https://www.twitch.tv/bamgames"
        className="text-beigeLight hover:text-lightPurple"
      >
        <TwitchLogo size={28} />
      </IconButton>
      <IconButton
        href="https://www.youtube.com/bamgamesoficial"
        className="text-beigeLight hover:text-lightPurple"
      >
        <YoutubeLogo size={28} />
      </IconButton>
      <IconButton
        href="https://discord.com/invite/SGJEuWk"
        className="text-beigeLight hover:text-lightPurple"
      >
        <DiscordLogo size={28} />
      </IconButton>
    </Box>
  );
}
