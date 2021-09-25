import ETH from "../../public/static/cryptocurrency/ETH.svg";
import AVAX from "../../public/static/cryptocurrency/AVAX.svg";
import MATIC from "../../public/static/cryptocurrency/MATIC.svg";
import BNB from "../../public/static/cryptocurrency/BNB.svg";

import DEFAULT from "../../public/static/cryptocurrency//DEFAULT.png";

export const getCryptocurrencyLogo = (symbol) => {
  switch (symbol) {
    case "ETH":
      return ETH;
    case "BNB":
    case "BSC":
      return BNB;
    case "AVAX":
    case "AVALANCHE":
      return AVAX;
    case "MATIC":
      return MATIC;

    default:
      return DEFAULT;
  }
};
