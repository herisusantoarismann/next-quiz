import React from "react";

import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

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

interface Props {
  openModal: boolean;
  result: number;
}

const ModalComponent = ({ openModal, result }: Props) => {
  return (
    <Modal
      open={openModal}
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
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          You redirect after 3 seconds.
        </Typography>
      </Box>
    </Modal>
  );
};

export default ModalComponent;
