import React from "react";
import type { NextPage } from "next";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Header from "./components/Header";
import QuizContainer from "./components/QuizContainer";

import { categories, randomQuiz } from "../utils/categories";

const Home: NextPage = () => {
  return (
    <Box
      sx={{ flexGrow: 1 }}
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        background: "#EBECEF",
        minHeight: "100vh",
      }}
    >
      <Header />
      <Box
        sx={{
          width: { xs: "90%", sm: "80%", md: "70%" },
          margin: "auto",
        }}
      >
        <QuizContainer title={"Random Quiz"} data={randomQuiz} />
        <QuizContainer title={"Category"} data={categories} />
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
