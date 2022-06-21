import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

import Button from "@mui/material/Button";

import StepperContainer from "./components/StepperContainer";
import ModalComponent from "./components/Modal";
import Option from "./components/Option";

interface Quiz {
  question: string;
  incorrectAnswers: Array<string>;
  correctAnswer: Array<string>;
}

interface Props {
  data: Quiz[];
}

const Category = ({ data }: Props) => {
  const [activeStep, setActiveStep] = useState(0);
  const [result, setResult] = useState<any>(0);
  const [answer, setAnswer] = useState();
  const [question, setQuestion] = useState<any[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const router = useRouter();

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
    setTimeout(() => {
      setOpenModal(false);
      router.push("/");
    }, 3000);
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
      }}
    >
      <Box
        sx={{
          width: { xs: "90%", sm: "80%", md: "70%" },
          margin: "2rem auto",
        }}
      >
        <StepperContainer steps={data.length} activeStep={activeStep} />
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
          <Option question={question} handleInput={handleInput} />
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
      <ModalComponent openModal={openModal} result={result} />
    </Box>
  );
};

export async function getServerSideProps(context: any) {
  const { category } = context.query;
  let link;
  if (category === "random") {
    link = "https://the-trivia-api.com/api/questions?limit=5";
  } else {
    link = `https://the-trivia-api.com/api/questions?categories=${category}&limit=5`;
  }
  const res = await fetch(link);
  const data = await res.json();

  return { props: { data } };
}

export default Category;
