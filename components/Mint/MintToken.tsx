import React, { useEffect, useState } from "react";
import WalletConnection from "../WalletConnection/WalletConnection";
import {
  useAccount,
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
  useContractRead,
  useBalance,
} from "wagmi";
import Button from "../Button/Button";
import MintedTokenModal from "./MintedTokenModal";
import blockchainConfig from "@/lib/blockchain/blockchain-config";
import { Typography } from "@mui/material";
import alchemy from "@/lib/alchemy";
import { StyledMintToken } from "./MintToken.styled";
import Stack from "@mui/material/Stack";
import LinearProgress from "../Progress/Progress";
import pepetoshiNftAbi from "@/lib/blockchain/pepetoshi-nft.abi.json";

const MintToken = () => {
  const { isConnected, address } = useAccount();
  const [loadingWallet, setLoadingWallet] = useState(true);
  const [mintedCount, setMintedCount] = useState(0);
  const [maxSupply, setMaxSupply] = useState(0);
  const [pepetBalance, setPepetBalance] = useState(0);

  const [mintedToken, setMintedToken] = useState<null | {
    tokenId: number;
    imageUrl: string;
  }>(null);

  const [openModal, setOpenModal] = useState(false);

  const { data: balanceData, isLoading: balanceIsLoading } = useBalance({
    address,
    token: blockchainConfig.tokenContractAddress as `0x${string}`,
    chainId: 1,
  });

  const { config, error: prepareError } = usePrepareContractWrite({
    address: blockchainConfig.collectionContractAddress as `0x${string}`,
    abi: pepetoshiNftAbi,
    functionName: "mint",
    // @ts-ignore
    args: [1],
    enabled: true,
  });

  const { data: mintedData } = useContractRead({
    address: blockchainConfig.collectionContractAddress as `0x${string}`,
    abi: pepetoshiNftAbi,
    functionName: "minted",
  });

  const { data: maxSupplyData } = useContractRead({
    address: blockchainConfig.collectionContractAddress as `0x${string}`,
    abi: pepetoshiNftAbi,
    functionName: "maxSupply",
  });

  const { data, write, error, isError } = useContractWrite(config);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  const mint = () => {
    if (write) write();
  };

  const getTokenDetails = async (transactionHash: string) => {
    try {
      const txReceipt = await alchemy.core.getTransactionReceipt(
        transactionHash
      );

      if (txReceipt && txReceipt.logs[0].topics) {
        const tokenId = Number(txReceipt.logs[0].topics[3]);

        const tokenMetadata = await alchemy.nft.getNftMetadata(
          blockchainConfig.collectionContractAddress,
          tokenId
        );

        setMintedToken({
          tokenId,
          imageUrl: tokenMetadata.tokenUri?.gateway || "",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (data?.hash && !isLoading && isSuccess) getTokenDetails(data?.hash);
  }, [data, isLoading, isSuccess]);

  useEffect(() => {
    setLoadingWallet(false);
  }, [isConnected]);

  useEffect(() => {
    if (mintedData) setMintedCount(Number(mintedData));
  }, [mintedData]);

  useEffect(() => {
    if (balanceData) setPepetBalance(parseFloat(balanceData.formatted));
  }, [balanceData]);

  useEffect(() => {
    if (maxSupplyData) setMaxSupply(Number(maxSupplyData));
  }, []);

  useEffect(() => {
    if (mintedToken) setOpenModal(true);
  }, [mintedToken]);

  const hasEnoughTokens = pepetBalance >= 5000000;

  const progress = (mintedCount / maxSupply) * 100;

  return (
    <StyledMintToken>
      {!loadingWallet && (
        <>
          {!isConnected ? (
            <WalletConnection buttonColor="secondary" />
          ) : (
            <Button
              variant="contained"
              color="secondary"
              type="button"
              sx={{ width: 256, maxWidth: "100%" }}
              onClick={mint}
              disabled={isLoading || Boolean(prepareError) || !hasEnoughTokens}
            >
              {isLoading ? "Minting..." : "Mint"}
            </Button>
          )}
        </>
      )}
      {prepareError && (
        <Typography variant="body1" color="#5cb85c" mt={2}>
          You have already minted your maximum allocation. Thank you for
          participating.
        </Typography>
      )}
      {isError && (
        <Typography variant="body1" color="#f32013" mt={2}>
          Error: {error?.message}
        </Typography>
      )}
      {!hasEnoughTokens && !balanceIsLoading && (
        <Typography variant="body1" color="#f32013" mt={2}>
          You must have at least 5 million $PEPET tokens to mint
        </Typography>
      )}
      <MintedTokenModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        mintedToken={mintedToken}
      />
      <LinearProgress variant="determinate" value={progress} sx={{ mt: 3 }} />
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        spacing={2}
        sx={{ mt: 2 }}
      >
        <Typography
          variant="body1"
          color="rgba(9, 43, 6, 0.6)"
          fontWeight={600}
        >
          Globally minted
        </Typography>
        <Typography variant="body1" color="rgba(9, 43, 6, 1)" fontWeight={600}>
          {mintedCount}/{maxSupply}
        </Typography>
      </Stack>
    </StyledMintToken>
  );
};

export default MintToken;
