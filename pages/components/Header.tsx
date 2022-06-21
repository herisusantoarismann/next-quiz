import { NextPage } from "next";
import Link from "next/link";
import React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Header: NextPage = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: "#FFFFFF" }}>
      <Toolbar variant="dense">
        <Link href={"/"}>
          <a>
            <Typography
              variant="body1"
              color="black"
              component="div"
              sx={{
                fontSize: { xs: "1em", md: "1.5em" },
                padding: { xs: "1rem 0.2rem" },
              }}
              style={{ fontWeight: 700 }}
            >
              Quiz App
            </Typography>
          </a>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
