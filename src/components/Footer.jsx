import React from 'react';
import { Box, Stack, Typography,Link } from '@mui/material';
import Logo from '../assets/images/Logo.png';

const Footer = () => {
  return(
  <Box mt="70px" bgcolor="white">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '200px', height: '200px' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="2px" textAlign="center" pb="4px">HAMROGYM</Typography>
  </Box>
  )
}

export default Footer;