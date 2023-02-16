import { useState } from 'react';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import {
  Sidebar as ProSidebar,
  Menu,
  MenuItem,
  useProSidebar,
} from 'react-pro-sidebar';
// import 'react-pro-sidebar/dist/css/styles.css';
import { Box, IconButton, Typography } from '@mui/material';

import {
  MenuOutlined,
  HomeOutlined,
  Redeem,
  Handshake,
  Devices,
  Logout,
} from '@mui/icons-material';

const Item = ({ title, to, icon, selected, setSelected }) => {
  return (
    <MenuItem
      active={selected === title}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link href={to} />
    </MenuItem>
  );
};
export default function Sidebar({ session }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState('Dashboard');
  const { collapseSidebar } = useProSidebar();

  function changeCollapseState() {
    setIsCollapsed(!isCollapsed);
    collapseSidebar();
  }

  return (
    <Box
      sx={{
        '& .ps-sidebar-root': {
          border: 'none !important',
          height: '100%',
        },
        '& .ps-sidebar-container': {
          background: `#374151 !important`,
        },
        '& .ps-icon-wrapper': {
          backgroundColor: 'transparent !important',
        },
        '& .ps-inner-item': {
          padding: '5px 35px 5px 20px !important',
        },
        '& ps-menu-button:hover': {
          backgroundColor: 'transparent !important',
        },
        '& .ps-inner-item:hover': {
          color: '#868dfb !important',
        },
        '& .ps-menu-item.active': {
          color: '#6870fa !important',
        },
      }}
    >
      <ProSidebar collapseSidebar={isCollapsed} display="flex">
        <Menu iconShape="square">
          <MenuItem
            onClick={() => changeCollapseState()}
            icon={isCollapsed ? <MenuOutlined /> : undefined}
            style={{
              margin: '10px 0 20px 0',
              color: '#FFFBF5',
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography fontSize="1.5rem" variant="h3" color="#6B728E">
                  ADMIN
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlined sx={{ fill: '#6B728E' }} />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {/* USER */}
          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="Profile User"
                  width="100px"
                  height="100px"
                  src={session?.user.imgUrl}
                  style={{ borderRadius: '50%' }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color="#F7EFE5"
                  fontWeight="bold"
                  fontSize="1.5rem"
                  sx={{ m: '10px 0 0 0' }}
                >
                  {session?.user.name}
                </Typography>
                <Typography
                  fontSize="1.2rem"
                  variant="h5"
                  color="#E5B8F4"
                  textTransform="uppercase"
                >
                  {session?.user.role}
                </Typography>
              </Box>
            </Box>
          )}

          {/* MENU ITEMS */}
          <Box paddingLeft={isCollapsed ? undefined : '10%'}>
            <Item
              title="Dashboard"
              to="/dashboard"
              icon={<HomeOutlined />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color="#6B728E"
              sx={{ m: '15px 0 5px 20px' }}
            >
              Data
            </Typography>
            <Item
              title="Wishlist Items"
              to="/wishList"
              icon={<Redeem />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Partners List"
              to="/partners"
              icon={<Handshake />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Setup Parts"
              to="/pcparts"
              icon={<Devices />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
        <button
          onClick={() => signOut()}
          className="flex gap-2 absolute bottom-4 left-8"
        >
          {!isCollapsed ? (
            <>
              <Logout />
              Sign Out
            </>
          ) : (
            <Logout />
          )}
        </button>
      </ProSidebar>
    </Box>
  );
}
