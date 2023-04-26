import { createSvgIcon, SvgIcon } from "@mui/material";
import { ComponentType, createElement } from "react";
import Uniswap from "./assets/uniswap.svg";
import Dextools from "./assets/dextools.svg";
import Etherscan from "./assets/etherscan.svg";
import Discord from "./assets/discord.svg";
import Telegram from "./assets/telegram.svg";
import Twitter from "./assets/twitter.svg";
import Reddit from "./assets/reddit.svg";
import Email from "./assets/email.svg";
import Menu from "./assets/menu.svg";
import Close from "./assets/close.svg";

const createMaterialIcon = (Icon: ComponentType): typeof SvgIcon => {
  return createSvgIcon(createElement(Icon), Icon.displayName || "SVGIcon");
};

export const CloseIcon = createMaterialIcon(Close);
export const MenuIcon = createMaterialIcon(Menu);
export const UniswapIcon = createMaterialIcon(Uniswap);
export const DextoolsIcon = createMaterialIcon(Dextools);
export const EtherscanIcon = createMaterialIcon(Etherscan);
export const DiscordIcon = createMaterialIcon(Discord);
export const TelegramIcon = createMaterialIcon(Telegram);
export const TwitterIcon = createMaterialIcon(Twitter);
export const RedditIcon = createMaterialIcon(Reddit);
export const EmailIcon = createMaterialIcon(Email);
