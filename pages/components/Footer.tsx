import React from "react";

import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <Typography
      variant="caption"
      color="text.secondary"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        padding: "1rem",
      }}
    >
      &copy; {new Date().getFullYear()}. All Right Reserved.
    </Typography>
  );
};

export default Footer;
