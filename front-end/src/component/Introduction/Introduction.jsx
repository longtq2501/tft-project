import React from "react";
import "./Introduction.scss";
import imageIntroduction from "../../assets/image-introduction.svg";
import subImageIntroduction from "../../assets/subImage-introduction.svg";

const Introduction = () => {
  return (
    <div className="introduction mx-auto flex max-w-screen-xl flex-col gap-[40px] py-[40px] sm:flex sm:flex-col sm:gap-[40px] sm:py-[40px] md:flex md:flex-row md:gap-[56px] md:py-[60px] lg:py-[80px]">
      {/* text */}
      <div className="mx-[17.5px] sm:mx-[17.5px] sm:flex-1 md:ml-[17.5px] md:basis-1/2 lg:ml-[20px] xl:ml-0">
        <h1 className="introduction__title text-[48px] sm:text-[58px] md:text-[40px] lg:text-[56px]">
          Discover a universe of NFTs you can trade and collect
        </h1>
        <p className="introduction__description sm:text-[20px] md:text-[16px] lg:text-[20px]">
          Find and trade everything from rare digital art and branded
          crypto-collectibles, to digital fashion and gaming items you can use
          in multiple worlds.
        </p>
        <button className="introduction__button h-[54px] w-[166px] text-[16px] hover:opacity-90 sm:h-[54px] sm:w-[166px] sm:text-[16px] lg:h-[60px] lg:w-[186px] lg:text-[22px]">
          Explore Now
        </button>
      </div>

      {/* image */}
      <div className="mx-[17.5px] flex items-center justify-center sm:mx-[17.5px] sm:flex sm:flex-1 md:relative md:mr-[17.5px] md:basis-1/2 lg:mr-[20px] xl:mr-0">
        <img
          src={imageIntroduction}
          alt="image-introduction"
          className="z-20 sm:right-[95px]  sm:top-[11px] md:absolute md:right-0"
        />
        <img
          src={subImageIntroduction}
          alt="subImage-introduction"
          className="hidden sm:hidden md:absolute md:bottom-[50px] md:left-[-39px] md:block xl:bottom-0 xl:left-0"
        />
      </div>
    </div>
  );
};

export default Introduction;
