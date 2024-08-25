import React from "react";
import CatCardImage from "../../assets/CatCard-image.png";
import test from "../../assets/long.jpg";

const CatCard = () => {
  return (
    <div className="w-[270px] relative">
      <img
        src={CatCardImage}
        alt="CatCardImage"
        className="w-full h-[264px] object-cover"
      />
      <div className="bg-[#212127] border-[#fff] border-[1px] p-[20px] flex flex-col gap-[20px]">
        <div>
          <p className="text-[11px] font-[500] leading-[11px] text-[#d3d3d3]">
            Digital Fashion World
          </p>
          <h3 className="text-[18px] font-[600] leading-[18px] text-[#fff] mt-[8px]">
            THE 33 MASK
          </h3>
        </div>
        <div className="flex flex-row justify-between items-center">
          <span className="text-[13px] font-[500] leading-[11px] text-[#d3d3d3]">
            Sold out
          </span>
          <p className="text-[13px] font-[500] leading-[11px] text-[#d3d3d3]">
            Traded 2 hours ago
          </p>
        </div>
      </div>

      <div className="absolute top-[10px] left-[10px] w-[80px] h-[32px] rounded-[18px] bg-[#d9d9d940] py-[6px] px-[10px] flex flex-row items-center">
        <img src={test} alt="test" className="w-[20px] h-[20px] rounded-[50%] border-[1px] border-[#212127]"/>
        <img src={test} alt="test" className="w-[20px] h-[20px] rounded-[50%] border-[1px] border-[#212127]"/>
        <img src={test} alt="test" className="w-[20px] h-[20px] rounded-[50%] border-[1px] border-[#212127]"/>
      </div>

      <div className="absolute top-[10px] right-[16px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M26.2554 26.2537C28.4033 24.1058 25.5541 17.7742 19.8915 12.1116C14.2288 6.44899 7.8972 3.59975 5.74932 5.74763C3.60143 7.89552 6.45068 14.2272 12.1133 19.8898C17.7759 25.5524 24.1075 28.4016 26.2554 26.2537Z"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M19.8915 19.8884C25.5541 14.2258 28.4033 7.89416 26.2554 5.74627C24.1075 3.59839 17.7759 6.44763 12.1133 12.1102C6.45068 17.7728 3.60143 24.1045 5.74932 26.2524C7.8972 28.4003 14.2288 25.551 19.8915 19.8884Z"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16 17.5C16.8284 17.5 17.5 16.8284 17.5 16C17.5 15.1716 16.8284 14.5 16 14.5C15.1716 14.5 14.5 15.1716 14.5 16C14.5 16.8284 15.1716 17.5 16 17.5Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};

export default CatCard;
