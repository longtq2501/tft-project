import React from "react";
import Long from "../../assets/long.jpg";

const Comment = () => {
  return (
    <div className="w-[335px] border-[2px] border-[#e3ff7166] py-[20px] px-[16px] bg-[#212127] flex flex-col gap-[20px] lg:w-[370px] lg:max-w-[100%] xl:w-[417px]">
      <div className="flex flex-row gap-[10px]">
        <img
          src={Long}
          alt="Long"
          className="w-[34px] h-[34px] rounded-[50%] object-cover"
        />
        <div className="flex flex-col">
          <span className="text-[16px] font-[500] leading-[24px] text-[#fff]">
            Philip Colbert
          </span>
          <span className="text-[13px] font-[400] leading-[18px] text-[#848484]">
            The Lobstars
          </span>
        </div>
      </div>
      <p className="text-[14px] font-[400] leading-[20px] text-[#fff]">
        "We are strong believers in the potential of NFTs and are confident the
        Enjin team will play a key role in developing the infrastructure
        required to meet that potential."
      </p>
    </div>
  );
};

export default Comment;
