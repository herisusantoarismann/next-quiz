import React from "react";
import type { NextPage } from "next";

import Box from "@mui/material/Box";

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
      }}
    >
      <Box
        sx={{
          width: { xs: "90%", sm: "80%", md: "70%" },
          margin: "auto",
        }}
      >
        <QuizContainer title={"Random Quiz"} data={randomQuiz} />
        <QuizContainer title={"Category"} data={categories} />
      </Box>
    </Box>
  );
};

export default Home;
