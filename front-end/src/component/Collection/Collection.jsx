import React from "react";
import "./Collection.scss";

import avatar from "../../assets/long.jpg";

const Collection = () => {
  return (
    <div className="collection relative w-[335px] h-[335px] lg:w-[500px] lg:h-[500px] xl:w-[570px] xl:h-[570px]">
      <div
        className="collection__content absolute bottom-[20px] left-[20px] w-[295px] 
            flex flex-col gap-[30px] p-[14px] lg:w-[456px] lg:pt-[41px]"
      >
        <h3 className="text-[20px] font-[500] leading-[30px] w-[267px] lg:text-[34px] lg:font-[600] lg:leading-[46px] lg:w-[428px]">
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
                className="w-[24px] h-[24px] rounded-[50%] object-cover"
              />
              <img
                src={avatar}
                alt="avatar"
                className="w-[24px] h-[24px] rounded-[50%] object-cover"
              />
              <img
                src={avatar}
                alt="avatar"
                className="w-[24px] h-[24px] rounded-[50%] object-cover"
              />
              <img
                src={avatar}
                alt="avatar"
                className="w-[24px] h-[24px] rounded-[50%] object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute left-[30px] top-[119px] w-[166px] h-[40px] rounded-[33px] 
      backdrop-blur-[4.5px] bg-[#d9d9d945] p-[10px]
      flex flex-row justify-between items-center">
        <img
          src={avatar}
          alt="avatar"
          className="w-[24px] h-[24px] rounded-[50%] object-cover"
        />
        <span>@alaxgender</span>
      </div>
    </div>
  );
};

export default Collection;
