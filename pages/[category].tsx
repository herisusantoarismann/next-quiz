import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

import Header from "./components/Header";

interface Quiz {
  question: string;
  incorrectAnswers: Array<string>;
  correctAnswer: Array<string>;
}

interface Props {
  data: Quiz[];
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "90%", sm: "50%" },
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Category = ({ data }: Props) => {
  const [activeStep, setActiveStep] = useState(0);
  const [result, setResult] = useState<any>(0);
  const [answer, setAnswer] = useState();
  const [question, setQuestion] = useState<any[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const shuffleOption = (correct: string[], incorrect: Array<string>) => {
    let array = [correct, ...incorrect];
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  const handleInput = (e: any) => {
    setAnswer(e.target.value);
  };

  const checkAnswer = () => {
    return answer === data[activeStep].correctAnswer;
  };

  const handleNext = () => {
    if (answer !== undefined) {
      if (checkAnswer()) setResult(result + 1);
      setActiveStep(activeStep + 1);
    } else {
      alert("Choose First!");
    }
  };

  const handleResult = () => {
    if (checkAnswer()) setResult(result + 1);
    setOpenModal(true);
  };

  useEffect(() => {
    const newQuestion = shuffleOption(
      data[activeStep].correctAnswer,
      data[activeStep].incorrectAnswers
    );
    setQuestion(newQuestion);
  }, [activeStep]);

  return (
    <Box
      sx={{ flexGrow: 1 }}
      style={{
        display: "flex",
        flexDirection: "column",
        background: "#EBECEF",
        minHeight: "100vh",
      }}
    >
      <Header />
      <Box
        sx={{
          width: { xs: "90%", sm: "80%", md: "70%" },
          margin: "2rem auto",
        }}
      >
        <Stepper
          activeStep={activeStep}
          sx={{ width: { sm: "75%", lg: "50%" }, margin: "0 auto" }}
        >
          {data.map((label: any, index: number) => {
            return (
              <Step key={index}>
                <StepLabel></StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <Card
          sx={{
            padding: { xs: "1rem" },
            margin: { xs: "1rem auto" },
            width: { md: "75%" },
          }}
        >
          <Grid sx={{ margin: { xs: "1rem 0" } }}>
            <Typography>{data[activeStep].question}</Typography>
          </Grid>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="answer"
              onChange={(e) => handleInput(e)}
            >
              {question.map((item: any) => {
                return (
                  <FormControlLabel
                    value={item}
                    control={<Radio />}
                    label={item}
                    key={item}
                  />
                );
              })}
            </RadioGroup>
          </FormControl>
          <Box
            style={{
              display: "flex",
              justifyContent: "flex-end",
              margin: "1rem 0",
            }}
          >
            {activeStep === data.length - 1 ? (
              <Button
                variant="contained"
                size="small"
                onClick={() => handleResult()}
              >
                Submit
              </Button>
            ) : (
              <Button
                variant="contained"
                size="small"
                onClick={() => handleNext()}
              >
                Next
              </Button>
            )}
          </Box>
        </Card>
      </Box>
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            style={{ textAlign: "center" }}
          >
            Result
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            You managed to answer {result} questions correctly
          </Typography>
        </Box>
      </Modal>
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

export async function getServerSideProps(context: any) {
  const { category } = context.query;
  const res = await fetch(
    `https://the-trivia-api.com/api/questions?categories=${category}&limit=5`
  );
  const data = await res.json();

  return { props: { data } };
}

export default Category;
