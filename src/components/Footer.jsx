import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo.png";

export const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="40px" alignItems="center" px="40px" pt="20px">
        <img src={Logo} alt="" className={{ width: "200px", height: "40px" }} />
        <Typography variant="h5" pb="40px" mt="20px">
          Made with love by Whyte
        </Typography>
      </Stack>
    </Box>
  );
};
