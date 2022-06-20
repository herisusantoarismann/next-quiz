import React, { FunctionComponent } from "react";
import Link from "next/link";

import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface Props {
  icon: string;
  name: string;
  query: string;
}

const QuizItem: FunctionComponent<Props> = ({ icon, name, query }) => {
  return (
    <Grid item xs={2} sm={1}>
      <Card style={{ textAlign: "center" }}>
        <CardContent>
          <Typography component="h2">{icon}</Typography>
          <Typography variant="body2" color="text.secondary">
            {name}
          </Typography>
          {query !== undefined ? (
            <Link href={query !== null ? query : "/"} passHref>
              <a>
                <Typography
                  variant="caption"
                  color="#0668FE"
                  style={{ cursor: "pointer" }}
                >
                  Take a quiz{" "}
                  <ArrowForwardIosIcon style={{ fontSize: "0.6em" }} />
                </Typography>
              </a>
            </Link>
          ) : (
            ""
          )}
        </CardContent>
      </Card>
    </Grid>
  );
};

export default QuizItem;
