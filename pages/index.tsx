import React from "react";
import type { NextPage } from "next";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import ImagesearchRollerIcon from "@mui/icons-material/ImagesearchRoller";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { categories } from "../utils/categories";

const Home: NextPage = () => {
  return (
    <Box
      sx={{ flexGrow: 1 }}
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        background: "#EBECEF",
      }}
    >
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
      <Box style={{ margin: "1rem" }}>
        <Box>
          <Typography
            variant="subtitle1"
            color="black"
            component="div"
            style={{ fontWeight: "700" }}
          >
            Random Quiz
          </Typography>
          <Box
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
              padding: "0.5rem 0",
            }}
          >
            <Card style={{ textAlign: "center" }}>
              <CardContent>
                <Typography component="div">
                  <ImagesearchRollerIcon style={{ fontSize: "2em" }} />
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Movies
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Take a quiz{" "}
                  <ArrowForwardIosIcon style={{ fontSize: "0.6em" }} />
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>
        <Box style={{ marginTop: "1rem" }}>
          <Typography
            variant="body1"
            color="black"
            component="div"
            style={{ fontWeight: "700" }}
          >
            Category
          </Typography>
          <Box
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
              padding: "0.5rem 0",
            }}
          >
            {categories.map((category) => {
              return (
                <Card style={{ textAlign: "center" }}>
                  <CardContent>
                    <Typography component="div">{category.icon}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {category.name}
                    </Typography>
                    <Typography variant="caption" color="#0668FE">
                      Take a quiz{" "}
                      <ArrowForwardIosIcon style={{ fontSize: "0.6em" }} />
                    </Typography>
                  </CardContent>
                </Card>
              );
            })}
          </Box>
        </Box>
      </Box>
      <Typography
        variant="caption"
        color="text.secondary"
        style={{ textAlign: "center", padding: "1rem" }}
      >
        &copy; {new Date().getFullYear()}. All Right Reserved.
      </Typography>
    </Box>
  );
};

export default Home;
