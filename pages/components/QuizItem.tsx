import React, { FunctionComponent } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface Props {
  icon: String;
  name: String;
}

const QuizItem: FunctionComponent<Props> = ({ icon, name }) => {
  return (
    <Grid item xs={2} sm={1}>
      <Card style={{ textAlign: "center" }}>
        <CardContent>
          <Typography component="h2">{icon}</Typography>
          <Typography variant="body2" color="text.secondary">
            {name}
          </Typography>
          <Typography
            variant="caption"
            color="#0668FE"
            style={{ cursor: "pointer" }}
          >
            Take a quiz <ArrowForwardIosIcon style={{ fontSize: "0.6em" }} />
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default QuizItem;
