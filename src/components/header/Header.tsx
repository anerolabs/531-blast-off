import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

type HeaderProps = {
  onLogoClickRoute: string;
};

type NavItem = {
  route: string;
  key: string;
};

const navItems = [
  { route: 'my/workout', key: 'Workout' },
  { route: 'my/programs', key: 'Programs' },
];

export default function Header(props: HeaderProps) {
  const { onLogoClickRoute } = props;
  const navigate = useNavigate();
  return (
    <Box
      p={2}
      sx={{
        border: '1px solid #333',
        borderRadius: '3px',
      }}
    >
      <Link to={onLogoClickRoute}>
        <Typography variant="h4">
          5/3/1... Blast Off! Workout Tracker
        </Typography>
      </Link>

      <Stack direction={'row'} spacing={3}>
        {navItems.map((item) => (
          <Link key={item.key} to={item.route}>
            <Typography>{item.key}</Typography>
          </Link>
        ))}
      </Stack>
    </Box>
  );
}
