import React from "react";
import Header from "../../component/Header/header.jsx";
import Introduction from "../../component/Introduction/Introduction.jsx";
import BlockBrand from "../../component/BlockBrand/BlockBrand.jsx";
import Card from "../../component/Card/Card.jsx";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Introduction />
      <BlockBrand />
      <div
        className="my-[30px] mx-[50px] flex flex-col items-center gap-[40px]
       sm:mx-[70px] md:flex md:flex-col md:items-center lg:mx-[20px]"
      >
        <div className="flex flex-col items-center">
          <p className="text-[14px] font-[400] leading-[30px] text-[#17E3A6]">
            Enjin Marketplace
          </p>
          <h3 className="text-[#D9D9D9] font-[500] text-[20px] leading-[30px]">
            Find your treasure
          </h3>
        </div>
        <div className="flex flex-col items-center gap-[40px] md:flex md:flex-row md:items-center md:justify-between md:gap-[60px] lg:gap-[80px]">
          <div className="tql-home-text-container md:basis-1/3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              className="mb-[10px]"
            >
              <path
                d="M25 0C11.2105 0 0 11.2105 0 25C0 38.7895 11.2105 50 25 50C38.7895 50 50 38.7895 50 25C50 11.2105 38.7895 0 25 0ZM25 45.9474C13.4211 45.9474 4.05263 36.5789 4.05263 25C4.05263 13.4211 13.4211 4.05263 25 4.05263C36.5789 4.05263 45.9474 13.4211 45.9474 25C45.9474 36.5789 36.5789 45.9474 25 45.9474Z"
                fill="#17E3A6"
              />
              <path
                d="M32.8422 12.4211L20.1053 18.4211C19.3685 18.7897 18.737 19.3682 18.4209 20.1055L12.4209 32.8423C11.7895 34.2106 12.0523 35.7896 13.1052 36.8422C13.7896 37.5265 14.6843 37.8948 15.5789 37.8948C16.1054 37.8948 16.6315 37.7894 17.1051 37.5262L29.8419 31.5262C30.5787 31.1576 31.2102 30.579 31.5263 29.8418L37.5263 17.1049C38.1578 15.7366 37.8949 14.1576 36.842 13.105C35.7894 12.0525 34.2104 11.7896 32.8421 12.4211L32.8422 12.4211ZM28.0526 27.9474L22.0526 21.9474L33.3684 16.6317L28.0526 27.9474Z"
                fill="#17E3A6"
              />
            </svg>
            <span className="tql-home-text-subtitle">Discover</span>
            <p className="tql-home-text-description">
              Find pioneering blockchain projects featuring scarce digital
              assets.
            </p>
          </div>
          <div className="tql-home-text-container md:basis-1/3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="49"
              height="50"
              viewBox="0 0 49 50"
              fill="none"
              className="mb-[10px]"
            >
              <path
                d="M39.6248 0.87207C37.1845 0.87207 34.8447 1.81512 33.1193 3.49376C31.3938 5.17241 30.4246 7.44889 30.4246 9.82305C30.4246 12.1967 31.3939 14.4737 33.1193 16.1518C34.8447 17.8304 37.1845 18.7735 39.6248 18.7735C42.0645 18.7735 44.4043 17.8304 46.1298 16.1518C47.8552 14.4737 48.8245 12.1967 48.8245 9.82305C48.8222 7.44944 47.8524 5.1741 46.1275 3.49599C44.4026 1.81787 42.0639 0.874294 39.6247 0.87207H39.6248ZM39.6248 14.1034V14.1039C38.4574 14.1039 37.3385 13.6528 36.5132 12.8498C35.6885 12.0474 35.2247 10.9584 35.2247 9.82312C35.2247 8.68788 35.6885 7.59878 36.5132 6.79586C37.3386 5.99344 38.4574 5.54228 39.6248 5.54228C40.7916 5.54228 41.9105 5.99344 42.7358 6.79586C43.5611 7.59883 44.0243 8.68788 44.0243 9.82312C44.0243 10.9584 43.5611 12.0475 42.7358 12.8498C41.9105 13.6528 40.7916 14.1039 39.6248 14.1039V14.1034Z"
                fill="#17E3A6"
              />
              <path
                d="M44.0247 33.5618C44.0247 34.5939 43.6033 35.5836 42.8533 36.3133C42.1034 37.043 41.0855 37.4534 40.0246 37.4534H31.417L36.1212 32.8766L32.7295 29.5768L23.9293 38.1386L23.9288 38.1381C23.4795 38.5762 23.2273 39.1696 23.2273 39.788C23.2273 40.4069 23.4795 41.0003 23.9288 41.4384L32.729 50.0003L36.1207 46.7004L31.417 42.1231H40.0247C42.3589 42.1231 44.5972 41.2213 46.2473 39.6154C47.898 38.0099 48.8249 35.8323 48.8249 33.5618V22.665H44.0246L44.0247 33.5618Z"
                fill="#17E3A6"
              />
              <path
                d="M10.025 31.2267C7.58528 31.2267 5.24544 32.1697 3.52002 33.8484C1.7946 35.5265 0.825317 37.8035 0.825317 40.1771C0.825317 42.5513 1.79463 44.8277 3.52002 46.5064C5.24541 48.1851 7.58528 49.1281 10.025 49.1281C12.4653 49.1281 14.8051 48.185 16.5305 46.5064C18.2559 44.8278 19.2252 42.5513 19.2252 40.1771C19.223 37.8041 18.2531 35.5287 16.5282 33.8505C14.8034 32.1724 12.4647 31.2288 10.025 31.2266V31.2267ZM10.025 44.458C8.85813 44.458 7.73928 44.0069 6.914 43.2044C6.08867 42.4015 5.6255 41.3124 5.6255 40.1772C5.6255 39.0419 6.08867 37.9529 6.914 37.1505C7.73932 36.3475 8.85813 35.8964 10.025 35.8964C11.1924 35.8964 12.3113 36.3475 13.1365 37.1505C13.9613 37.9529 14.425 39.0419 14.425 40.1772C14.425 41.3124 13.9613 42.4015 13.1365 43.2044C12.3112 44.0069 11.1924 44.458 10.025 44.458Z"
                fill="#17E3A6"
              />
              <path
                d="M0.82498 25.7786H5.62524V16.4383C5.62524 15.4062 6.04655 14.4165 6.79655 13.6868C7.54654 12.9571 8.56439 12.5467 9.62525 12.5467H17.8172L13.6252 16.2673L16.8249 19.7229L25.6252 11.9397C26.1101 11.5097 26.393 10.9055 26.4081 10.2676C26.4232 9.6297 26.1692 9.01292 25.705 8.56182L16.9047 0L13.513 3.2998L18.2329 7.87717H9.62519C7.29092 7.87717 5.05264 8.77895 3.40251 10.3849C1.7518 11.9903 0.824951 14.168 0.824951 16.4384L0.82498 25.7786Z"
                fill="#17E3A6"
              />
            </svg>
            <span className="tql-home-text-subtitle">Trade</span>
            <p className="tql-home-text-description">
              Use the Enjin Wallet to easily list and purchase gaming items.
            </p>
          </div>
          <div className="tql-home-text-container md:basis-1/3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              className="mb-[10px]"
            >
              <path
                d="M48.494 9.13893H35.4671C35.9892 8.56276 36.399 7.91928 36.6658 7.21401C37.5092 4.98812 36.7807 2.58052 34.7173 0.774627C34.1387 0.267858 33.439 0 32.6927 0C29.8626 0 26.8234 4.26233 25.0005 7.33751C23.1769 4.26242 20.1385 0 17.3084 0C16.5628 0 15.8623 0.267858 15.2834 0.774627C13.221 2.58124 12.4926 4.98812 13.3355 7.21366C13.6027 7.91922 14.0128 8.56268 14.535 9.1392L1.5063 9.13885C0.674539 9.13885 0 9.81023 0 10.6389V18.4239C0 19.2522 0.674163 19.924 1.5063 19.924H4.89634V48.4999C4.89634 49.3282 5.5705 50 6.40264 50H43.597C44.4288 50 45.1033 49.3286 45.1033 48.4999V19.9249H48.4937C49.3255 19.9249 50 19.2535 50 18.4248V10.6398C50 9.81115 49.3255 9.13903 48.4937 9.13903L48.494 9.13893ZM27.4851 12.1391V16.9243H22.5155V12.1391H27.4851ZM32.6865 2.99713C32.6865 2.99713 32.7005 3.00411 32.7282 3.02817C33.8443 4.00505 34.2415 5.1163 33.8471 6.1563C33.2846 7.64068 31.0846 9.13827 27.4367 9.1397C29.4371 5.7388 31.7286 2.99987 32.6865 2.9971L32.6865 2.99713ZM17.2721 3.02782C17.2913 3.01108 17.3043 3.00236 17.3078 3.00062C18.2709 3.00097 20.5627 5.73955 22.5628 9.13974C18.9146 9.13834 16.7152 7.64036 16.1528 6.15634C15.6488 4.82259 16.4834 3.7191 17.272 3.02785L17.2721 3.02782ZM3.01242 12.1394H19.5027V16.9246L6.40228 16.9243H3.01224L3.01242 12.1394ZM7.9084 19.9251H19.5026L19.503 47.0001H7.90875L7.9084 19.9251ZM22.515 47.0001V19.9251H27.4846V47.0001H22.515ZM42.0903 47.0001H30.4961V19.9251H42.0903V47.0001ZM46.987 16.9251H30.4968V12.1399H46.987V16.9251Z"
                fill="#17E3A6"
              />
            </svg>
            <span className="tql-home-text-subtitle">Collect</span>
            <p className="tql-home-text-description">
              Grow your inventory with rare and unique digital treasures.
            </p>
          </div>
        </div>
      </div>

      <div className="pt-[30px] mx-[17.5px] flex flex-col gap-[20px] items-center">
        <p className="w-[218px] text-center text-[20px] font-[500] leading-[30px]">
          Latest artworks with most valued bids
        </p>

        <div className="flex flex-row items-center justify-between w-full pt-[13px]">
          <div className="flex flex-row items-center justify-between gap-[16px]">
            <span className="tql-home-filter-text">NFTs</span>
            <span className="tql-home-filter-text">Description</span>
          </div>
          <div className="flex flex-row items-center justify-between gap-[16px]">
            <span className="tql-home-filter-text">Short by:</span>
            <span className="tql-home-filter-text">Curated order</span>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none"
              >
                <path
                  d="M17.2969 12.2344L13.5 16.4531L9.70312 12.2344"
                  stroke="white"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* separate */}
        <div className="bg-[#3C3C3C] h-[1px] w-full"></div>
        <div className=" grid  grid-cols-1 gap-[20px] sm:gap-[30px] md:grid-cols-2 md:gap-[76px] lg:grid-cols-3 lg:gap-[80px]">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Home;
