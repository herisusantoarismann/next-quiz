import { NextPage } from "next";
import React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Header: NextPage = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: "#FFFFFF" }}>
      <Toolbar variant="dense">
        <Typography
          variant="body1"
          color="black"
          component="div"
          style={{ fontWeight: 700 }}
        >
          Quiz App
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
