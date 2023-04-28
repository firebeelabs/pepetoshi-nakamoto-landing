import React, { useEffect, useState } from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import Button from "../Button/Button";
import ConnectedWalletModal from "./ConnectedWalletModal";

const WalletConnection = () => {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();

  const getShortAddress = (address: string) =>
    address.slice(0, 6) + "..." + address.slice(-6);

  const [loading, setLoading] = useState(true);

  const [openModal, setOpenModal] = useState(false);

  const handleClick = () => {
    if (!isConnected) return connect();

    setOpenModal(true);
  };

  useEffect(() => {
    setLoading(false);
  }, [isConnected]);

  const shortAddress = getShortAddress(address || "");

  if (isConnected && !loading) {
    return (
      <>
        <Button
          variant="outlined"
          color="primary"
          type="button"
          onClick={handleClick}
        >
          {shortAddress}
        </Button>
        <ConnectedWalletModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          shortAddress={shortAddress}
          disconnect={disconnect}
        />
      </>
    );
  }

  return (
    <Button
      variant="outlined"
      color="primary"
      type="button"
      onClick={handleClick}
    >
      Connect Wallet
    </Button>
  );
};

export default WalletConnection;
