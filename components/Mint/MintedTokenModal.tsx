import React from "react";
import Modal from "../Modal/Modal";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Button from "../Button/Button";

interface MintedTokenModalProps {
  mintedToken: {
    tokenId: number;
    imageUrl: string;
  } | null;
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const MintedTokenModal: React.FC<MintedTokenModalProps> = ({
  mintedToken,
  openModal,
  setOpenModal,
}) => {
  return (
    <Modal
      open={openModal}
      onClose={() => setOpenModal(false)}
      heading="Congratulations!"
    >
      <Box textAlign="center">
        <Box mx="auto" mb={1}>
          {mintedToken?.imageUrl && (
            <Image
              src={mintedToken?.imageUrl}
              alt="NFT"
              width={200}
              height={200}
              style={{ borderRadius: "16px" }}
            />
          )}
        </Box>
        <Typography variant="h5" color="white" mb={1}>
          PEPE RARE
        </Typography>
        {mintedToken?.tokenId && (
          <Typography variant="h5" color="white" mb={3}>
            #{mintedToken.tokenId}
          </Typography>
        )}
        <Button
          variant="outlined"
          color="primary"
          type="button"
          fullWidth
          onClick={() => setOpenModal(false)}
        >
          Mint more
        </Button>
      </Box>
    </Modal>
  );
};

export default MintedTokenModal;
