import React from "react";
import Modal from "../Modal/Modal";
import Typography from "@mui/material/Typography";
import Button from "../Button/Button";

interface ConnectedWalletModalProps {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  shortAddress: string;
  disconnect: () => void;
}

const ConnectedWalletModal: React.FC<ConnectedWalletModalProps> = ({
  openModal,
  setOpenModal,
  shortAddress,
  disconnect,
}) => {
  const handleDisconnect = () => {
    disconnect();
    setOpenModal(false);
  };

  return (
    <Modal
      open={openModal}
      onClose={() => setOpenModal(false)}
      heading="Connected wallet"
    >
      <div>
        <Typography variant="body1" color="rgba(255, 255, 255, 0.6)" mb={3}>
          Wallet address:{" "}
          <Typography variant="body1" color="primary.main" component="span">
            {shortAddress}
          </Typography>
        </Typography>
        <Button
          variant="contained"
          color="primary"
          type="button"
          onClick={handleDisconnect}
        >
          Disconnect wallet
        </Button>
      </div>
    </Modal>
  );
};

export default ConnectedWalletModal;
