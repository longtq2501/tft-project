import React from "react";
import "./Collection.scss";

import avatar from "../../assets/long.jpg";

const Collection = () => {
  return (
    <div className="collection relative h-[335px] w-[335px] hover:scale-[1.1] hover:transition hover:duration-300 hover:ease-in-out lg:h-[500px] lg:w-[500px] xl:h-[570px] xl:w-[570px]">
      <div
        className="collection__content absolute bottom-[20px] left-[20px] flex 
            w-[295px] flex-col gap-[30px] p-[20px] sm:pt-[25px] md:pt-[30px] lg:w-[456px] lg:pt-[41px] xl:w-[528px]"
      >
        <h3 className="w-[267px] text-[20px] font-[500] leading-[30px] lg:w-[428px] lg:text-[34px] lg:font-[600] lg:leading-[46px]">
          ALTERNATE MEDIUM SPACE
        </h3>

        <div className="flex flex-row gap-[30px] lg:justify-between">
          <div className="tql-collection-detailed-container">
            <span className="tql-collection-text">Arkwork:</span>
            <span className="tql-collection-detailed">12</span>
          </div>
          <div className="tql-collection-detailed-container">
            <span className="tql-collection-text">Total Sale</span>
            <span className="tql-collection-detailed">0.6 ETH</span>
          </div>
          <div className="tql-collection-detailed-container">
            <span className="tql-collection-text">Collected by (5)</span>
            <div className="flex flex-row items-center">
              <img
                src={avatar}
                alt="avatar"
                className="h-[24px] w-[24px] rounded-[50%] object-cover"
              />
              <img
                src={avatar}
                alt="avatar"
                className="h-[24px] w-[24px] rounded-[50%] object-cover"
              />
              <img
                src={avatar}
                alt="avatar"
                className="h-[24px] w-[24px] rounded-[50%] object-cover"
              />
              <img
                src={avatar}
                alt="avatar"
                className="h-[24px] w-[24px] rounded-[50%] object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute left-[30px] top-[97px] flex h-[40px] 
      w-[166px] flex-row items-center
      justify-between rounded-[33px] bg-[#d9d9d945] p-[10px] backdrop-blur-[4.5px] md:top-[90px] lg:top-[233px] xl:top-[303px]"
      >
        <img
          src={avatar}
          alt="avatar"
          className="h-[24px] w-[24px] rounded-[50%] object-cover"
        />
        <span>@alaxgender</span>
      </div>
    </div>
  );
};

export default Collection;
