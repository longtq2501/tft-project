import React from "react";
import "./BlockBrand.scss";
import brandFinder from "../../assets/BlockBrand/brand-finder.svg";
import brandBancor from "../../assets/BlockBrand/brand-bancor.svg";
import brandBeInCrypto from "../../assets/BlockBrand/brand-beincrypto.svg";
import brandCoinGecko from "../../assets/BlockBrand/brand-coingecko.svg";
import brandCrypto from "../../assets/BlockBrand/brand-crypto.svg";
import brandOkCoin from "../../assets/BlockBrand/brand-okcoin.svg";
import brandBlockChain from "../../assets/BlockBrand/brand-blockchain.svg";

const BlockBrand = () => {
  return (
    <div className="brand w-full px-[17.5px] py-[27px]
     flex flex-col items-center gap-[20px] md:px-[85px] md:py-[35px]
      lg:px-[130px] lg:py-[40px] xl:py-[60px]">
      <div className="xl:w-[1280px] w-full flex flex-col xl:gap-[20px] gap-[10px]">
        <div className="flex flex-row items-center justify-between">
          <img src={brandFinder} alt="brandFinder" className="tql-brand-img" />
          <img src={brandCrypto} alt="brandCrypto" className="tql-brand-img" />
          <img src={brandBancor} alt="brandBancor" className="tql-brand-img" />
          <img
            src={brandCoinGecko}
            alt="brandCoinGecko"
            className="tql-brand-img"
          />
        </div>
        <div className="flex flex-row items-center justify-around">
          <img
            src={brandBlockChain}
            alt="brandBlockChain"
            className="tql-brand-img"
          />
          <img src={brandOkCoin} alt="brandOkCoin" className="tql-brand-img" />
          <img
            src={brandBeInCrypto}
            alt="brandBeInCrypto"
            className="tql-brand-img"
          />
        </div>
      </div>
    </div>
  );
};

export default BlockBrand;
