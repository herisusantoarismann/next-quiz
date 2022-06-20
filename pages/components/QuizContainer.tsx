import { NextPage } from "next";
import React, { FunctionComponent } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { AnyMxRecord } from "dns";
import { Grid } from "@mui/material";

interface Props {
  title: String;
  data: Object[];
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
            <Grid item xs={2} sm={1} key={index}>
              <Card style={{ textAlign: "center" }}>
                <CardContent>
                  <Typography component="h2">{item.icon}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.name}
                  </Typography>
                  <Typography
                    variant="caption"
                    color="#0668FE"
                    style={{ cursor: "pointer" }}
                  >
                    Take a quiz{" "}
                    <ArrowForwardIosIcon style={{ fontSize: "0.6em" }} />
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default QuizContainer;
