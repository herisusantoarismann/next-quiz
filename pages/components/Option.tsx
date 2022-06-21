import React from "react";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

interface Props {
  question: Array<string>;
  handleInput: (args0: any) => void;
}

const Option = ({ question, handleInput }: Props) => {
  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name="answer"
        onChange={(e) => handleInput(e)}
      >
        {question !== undefined
          ? question.map((item: any) => {
              return (
                <FormControlLabel
                  value={item}
                  control={<Radio />}
                  label={item}
                  key={item}
                />
              );
            })
          : ""}
      </RadioGroup>
    </FormControl>
  );
};

export default Option;
