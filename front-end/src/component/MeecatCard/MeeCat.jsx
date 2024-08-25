import React from "react";
import MeeCatCardImage from "../../assets/MeeCatCard-image.png";

const MeeCatCard = () => {
  return (
    <div className="w-[335px] h-[342px] rounded-[10px] bg-[#000] lg:w-[371px] lg:h-[370px]">
      <img
        src={MeeCatCardImage}
        alt="MeeCatCardImage"
        className="w-full h-[161px] object-cover rounded-t-[10px]"
      />
      <div className="p-[20px] flex flex-col gap-[20px] lg:gap-[30px]">
        <div className="flex flex-col gap-[6px]">
          <span className="text-[12px] font-[400] leading-[17px] lowercase text-[#a4a4a4] lg:text-[15px]">
            @Doruk Kumkumoğlu
          </span>
          <h4 className="text-[16px] font-[500] leading-[30px] text-[#fff] lg:text-[20px]">
            Enjin Roadmap Update September 2022
          </h4>
        </div>
        <div className="flex flex-row gap-[20px] items-center">
          <div className="w-[90px] h-[38px] rounded-[4px] bg-[#17e3a6] flex items-center justify-center cursor-pointer active:opacity-85">
            <button className="text-[17px] font-[400] leading-[17px] capitalize text-[#000]">News</button>
          </div>
          <span className="text-[12px] font-[400] leading-[17px] lowercase text-[#a4a4a4] lg:text-[15px]">September 15, 2022</span>
        </div>
      </div>
    </div>
  );
};

export default MeeCatCard;
