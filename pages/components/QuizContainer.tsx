import { NextPage } from "next";
import React, { FunctionComponent } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface Props {
  title: String;
  data: Object[];
}

const QuizContainer: FunctionComponent<Props> = ({ title, data }) => {
  return (
    <Box>
      <Typography
        variant="subtitle1"
        color="black"
        component="div"
        style={{ fontWeight: "700" }}
      >
        {title}
      </Typography>
      <Box
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          padding: "0.5rem 0",
        }}
      >
        {data.map((item: any) => {
          return (
            <Card style={{ textAlign: "center" }}>
              <CardContent>
                <Typography component="div">{item.icon}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.name}
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
  );
};

export default QuizContainer;
