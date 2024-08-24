import React from "react";
import "./Introduction.scss";
import imageIntroduction from "../../assets/image-introduction.svg";
import subImageIntroduction from "../../assets/subImage-introduction.svg";

const Introduction = () => {
  return (
    <div className="introduction max-w-screen-xl lg:py-[80px] mx-auto md:py-[60px] md:flex md:flex-row md:gap-[56px] sm:flex sm:gap-[40px] sm:flex-col sm:py-[40px] py-[40px] flex flex-col gap-[40px]">
      {/* text */}
      <div className="md:basis-1/2 sm:flex-1 lg:ml-[20px] xl:ml-0 md:ml-[17.5px] sm:mx-[17.5px] mx-[17.5px]">
        <h1 className="introduction__title lg:text-[56px] md:text-[40px] sm:text-[58px] text-[48px]">
          Discover a universe of NFTs you can trade and collect
        </h1>
        <p className="introduction__description lg:text-[20px] md:text-[16px] sm:text-[20px]">
          Find and trade everything from rare digital art and branded
          crypto-collectibles, to digital fashion and gaming items you can use
          in multiple worlds.
        </p>
        <button className="introduction__button hover:opacity-90 lg:w-[186px] lg:h-[60px] lg:text-[22px] sm:text-[16px] sm:w-[166px] sm:h-[54px] text-[16px] w-[166px] h-[54px]">
          Explore Now
        </button>
      </div>

      {/* image */}
      <div className="md:basis-1/2 sm:flex-1 md:relative lg:mr-[20px] xl:mr-0 md:mr-[17.5px] sm:mx-[17.5px] mx-[17.5px] sm:flex flex items-center justify-center">
        <img
          src={imageIntroduction}
          alt="image-introduction"
          className="md:absolute md:right-0  sm:top-[11px] sm:right-[95px] z-20"
        />
        <img
          src={subImageIntroduction}
          alt="subImage-introduction"
          className="md:absolute sm:hidden hidden md:block xl:left-0 xl:bottom-0 md:bottom-[50px] md:left-[-39px]"
        />
      </div>
    </div>
  );
};

export default Introduction;
