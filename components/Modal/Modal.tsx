import React from "react";
import MuiModal, { ModalProps as MuiModalProps } from "@mui/material/Modal";
import { StyledCloseButton, StyledModalContainer } from "./Modal.styled";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { CloseIcon } from "@/theme/icons";

interface ModalProps extends MuiModalProps {
  onClose: () => void;
  heading: string;
}

const Modal: React.FC<ModalProps> = ({
  children,
  heading,
  onClose,
  ...rest
}) => {
  return (
    <MuiModal onClose={onClose} {...rest}>
      <StyledModalContainer>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={3}
        >
          <Typography variant="h5" color="white">
            {heading}
          </Typography>
          <StyledCloseButton type="button" onClick={onClose}>
            <CloseIcon />
          </StyledCloseButton>
        </Stack>
        {children}
      </StyledModalContainer>
    </MuiModal>
  );
};

export default Modal;
