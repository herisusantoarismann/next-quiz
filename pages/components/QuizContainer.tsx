import React, { FunctionComponent } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import QuizItem from "./QuizItem";

interface Props {
  title: string;
  data: object[];
}

const QuizContainer: FunctionComponent<Props> = ({ title, data }) => {
  return (
    <Box sx={{ margin: { xs: "1rem 0", md: "2rem 0" } }}>
      <Typography
        variant="subtitle1"
        color="black"
        component="div"
        style={{ fontWeight: "700" }}
      >
        {title}
      </Typography>
      <Grid container columns={4} spacing={{ xs: 2, sm: 4 }}>
        {data.map((item: any, index: number) => {
          return (
            <QuizItem
              icon={item.icon}
              name={item.name}
              query={item.query}
              key={index}
            />
          );
        })}
      </Grid>
    </Box>
  );
};

export default QuizContainer;
