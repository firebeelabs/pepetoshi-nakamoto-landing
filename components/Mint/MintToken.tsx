import React, { useEffect, useState } from "react";
import WalletConnection from "../WalletConnection/WalletConnection";
import { useAccount } from "wagmi";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

const MintToken = () => {
  const { isConnected } = useAccount();

  const [loading, setLoading] = useState(false);

  const [loadingWallet, setLoadingWallet] = useState(true);

  const [mintedToken, setMintedToken] = useState<any>(null);

  const [openModal, setOpenModal] = useState(false);

  const mint = () => {
    setLoading(true);

    setTimeout(async () => {
      setMintedToken({
        tokenId: "4442",
      });
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    setLoadingWallet(false);
  }, [isConnected]);

  useEffect(() => {
    if (mintedToken) setOpenModal(true);
  }, [mintedToken]);

  return (
    <div>
      {!loadingWallet && (
        <>
          {!isConnected ? (
            <WalletConnection />
          ) : (
            <Button
              variant="contained"
              color="primary"
              type="button"
              sx={{ width: 256, maxWidth: "100%" }}
              onClick={mint}
            >
              {loading ? "Minting..." : "Mint"}
            </Button>
          )}
        </>
      )}

      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        heading="Congratulations!"
      >
        <Box textAlign="center">
          <Box mx="auto" mb={1}>
            <Image
              src="/images/pepet-token-1.png"
              alt="NFT"
              width={200}
              height={200}
              style={{ borderRadius: "16px" }}
            />
          </Box>
          <Typography variant="h5" color="white" mb={1}>
            CYBERPEPET
          </Typography>
          {mintedToken?.tokenId && (
            <Typography variant="h5" color="white" mb={3}>
              #{mintedToken?.tokenId}
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
    </div>
  );
};

export default MintToken;
