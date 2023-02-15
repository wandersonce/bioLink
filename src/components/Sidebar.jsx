import { useState } from 'react';
import Link from 'next/link';
import {
  Sidebar as ProSidebar,
  Menu,
  MenuItem,
  useProSidebar,
} from 'react-pro-sidebar';
// import 'react-pro-sidebar/dist/css/styles.css';
import { Box, IconButton, Typography } from '@mui/material';

import { MenuOutlined } from '@mui/icons-material';

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
export default function Sidebar() {
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
      <ProSidebar collapseSidebar={isCollapsed}>
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
                <Typography variant="h3" color="#6B728E">
                  ADMINS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlined />
                </IconButton>
              </Box>
            )}
          </MenuItem>
        </Menu>
      </ProSidebar>
    </Box>
  );
}
