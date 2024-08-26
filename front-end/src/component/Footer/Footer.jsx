import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#212127]">
      <div className="max-w-screen-xl py-[40px] lg:pt-[80px] xl:mx-auto">
        <div className="order-1 mx-[20px] flex flex-row flex-wrap justify-between gap-[40px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="107"
            height="42"
            viewBox="0 0 107 42"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M49.3993 0.090413C48.0536 0.597308 47.6375 1.39069 47.2752 4.13832C47.0105 6.14293 46.7968 6.69254 46.3408 6.53982C46.0155 6.43063 43.3426 6.28517 40.401 6.21627C35.2355 6.09538 35.0267 6.12278 34.2938 7.01892C33.5658 7.909 33.2979 7.94688 27.7327 7.94688C22.5526 7.94688 21.9309 7.87395 21.9309 7.26471C21.9313 6.09538 20.2966 5.32779 17.8053 5.32779C15.7171 5.32779 15.3852 5.45028 14.4317 6.57206C13.8499 7.25625 12.9 8.61616 12.3211 9.59409C11.7421 10.5716 11.2096 11.3718 11.1383 11.3718C11.0667 11.3718 10.423 10.4197 9.70761 9.25642C7.50171 5.66908 7.04041 5.32779 4.39805 5.32779C2.71451 5.32779 1.80576 5.54054 1.11036 6.0974L0.149097 6.86741L0.0289891 18.6892C-0.0369682 25.1914 0.0135177 30.924 0.140954 31.428C0.609169 33.2759 1.77564 33.9363 4.57271 33.9363C6.5779 33.9363 7.40684 33.7473 8.23701 33.101C9.22352 32.3334 9.30983 32.026 9.30983 29.282V26.2978L10.2764 26.7334C10.9775 27.0497 11.4799 27.0437 12.1085 26.7109C12.9554 26.262 12.9741 26.3176 12.9741 29.259C12.9741 32.059 13.0511 32.3262 14.0938 33.1393C15.053 33.8872 15.6242 33.9919 18.0822 33.8698C20.9244 33.7288 20.9562 33.7385 21.5429 34.94L22.1349 36.1525L27.6948 36.2645C33.0561 36.3721 33.2812 36.3435 34.0056 35.4586C34.7221 34.5826 34.9729 34.5468 39.5085 34.6753C43.367 34.7845 44.5388 34.6793 45.7411 34.1144C48.0321 33.0386 48.3651 33.7127 47.7642 38.2091C47.5911 39.5029 47.6628 40.5864 47.9567 41.1304L48.4241 41.9951H67.9031C90.1776 41.9951 88.5307 42.2908 88.4541 38.3046C88.4297 37.0103 88.5213 35.9522 88.6577 35.9534C88.7945 35.955 89.2077 36.4801 89.5754 37.1203C89.9435 37.7606 91.1343 38.8018 92.2218 39.4344C93.9856 40.4603 94.5808 40.5848 97.7252 40.5848C100.996 40.5848 101.379 40.4961 103.018 39.3582C103.99 38.6833 105.243 37.3234 105.803 36.3362C106.679 34.7909 106.821 34.035 106.821 30.9143C106.821 28.7783 106.595 26.7592 106.272 26.0017C105.797 24.8872 105.811 24.5926 106.374 23.7964C107.197 22.6343 107.21 19.7924 106.405 17.1105C105.577 14.3504 103.303 12.3905 100.187 11.7502C98.0155 11.3042 96.2298 11.4702 92.7743 12.4404C91.8049 12.7128 91.7903 12.6931 92.469 12.0202C93.1847 11.311 93.3622 9.76251 93.2096 5.5627C93.0707 1.75253 92.6221 1.5704 83.8542 1.77026C77.2235 1.92176 76.8957 2.08455 76.8957 5.22705C76.8957 7.39083 76.3664 7.17002 75.6722 4.71653C75.386 3.70395 74.7704 2.61159 74.3046 2.28843C73.091 1.4471 68.0367 1.4886 67.0774 2.34767C66.6801 2.70346 65.854 4.5199 65.2408 6.38429C64.6276 8.24908 64.0072 9.63519 63.8614 9.46515C63.4636 8.99935 62.7357 6.18766 62.4254 3.91751C61.9132 0.16818 60.6332 -0.738428 57.6964 0.569505C55.7421 1.43985 53.9161 1.38868 51.6528 0.400272C50.7762 0.0174815 49.909 -0.101788 49.3993 0.090413ZM51.9887 2.34203C53.0709 3.09229 56.3728 2.95932 58.4668 2.08132C59.3104 1.72755 59.9219 1.66872 60.1666 1.91733C60.6609 2.41979 61.5615 8.11208 61.5989 10.9689L61.6278 13.1851H59.0074H56.3867L56.0235 11.7748C55.5194 9.8161 54.9877 9.38093 54.2719 10.3407C53.4288 11.471 53.4503 19.3746 54.2992 20.4617C54.9038 21.2357 54.916 21.2357 55.5207 20.4617C55.8566 20.0314 56.1314 19.2674 56.1314 18.7633C56.1314 17.619 57.2323 17.013 59.312 17.013C61.5566 17.013 62.0028 17.6967 61.6901 20.6579C61.2512 24.8134 59.2847 27.2137 55.9087 27.7146C52.1682 28.2698 49.3496 26.326 48.1432 22.3595C47.3631 19.7944 47.3912 10.9109 48.1876 8.31315C48.521 7.22522 48.7959 5.75772 48.7983 5.05178C48.8089 2.03861 50.0409 0.991783 51.9887 2.34203ZM73.5282 3.81678C73.9838 4.3958 79.3386 25.0415 79.3386 26.2197C79.3386 27.1907 78.5809 27.4909 76.1498 27.4833C73.8132 27.4756 73.4093 27.2302 73.0527 25.6032C72.6981 23.9842 71.9518 23.3665 70.5487 23.5317C69.434 23.6626 69.2259 23.8947 68.2614 26.079C67.7651 27.2032 67.5579 27.2963 65.2999 27.4116C63.4832 27.5038 62.7572 27.3797 62.4165 26.9184C62.0651 26.4429 62.605 23.7956 64.784 15.3114C66.3364 9.2665 67.7956 4.094 68.0261 3.81678C68.2728 3.52021 69.4091 3.3131 70.7886 3.3131C72.1802 3.3131 73.2925 3.5178 73.5282 3.81678ZM91.4682 6.62565C91.5973 10.0123 91.7243 9.83263 88.9065 10.2533C88.1296 10.3689 88.0828 10.7626 87.8886 18.8314L87.685 27.2879H85.0386H82.3922L82.1886 18.8314C81.9944 10.7626 81.9476 10.3689 81.1707 10.2533C78.4197 9.8427 78.5243 9.97929 78.5243 6.7977C78.5243 5.17669 78.6509 3.72491 78.806 3.57179C78.9607 3.41827 81.8466 3.34292 85.2185 3.40376L91.3493 3.51457L91.4682 6.62565ZM7.95119 9.7601C8.88355 11.2006 10.0085 12.8301 10.4515 13.3813L11.2568 14.3834L13.6423 10.653L16.0277 6.92221L18.0634 7.03181L20.0991 7.14101L20.2074 18.7984C20.2913 27.8564 20.2005 30.5283 19.8003 30.7797C19.0043 31.2794 15.6389 31.1742 15.0913 30.6322C14.7668 30.3111 14.6027 28.5603 14.6027 25.4178C14.6027 22.8157 14.4582 20.5983 14.2811 20.4903C14.1044 20.3819 13.4464 21.0967 12.8186 22.0783C12.1912 23.0598 11.4201 23.8629 11.1053 23.8629C10.7906 23.8629 10.017 23.0429 9.38719 22.0412C8.75693 21.0391 8.11527 20.344 7.96137 20.4968C7.80747 20.6491 7.68126 22.8829 7.68126 25.4613C7.68126 28.5696 7.51677 30.3115 7.19269 30.6322C6.68172 31.1379 3.734 31.2922 2.62535 30.8712C2.0586 30.656 1.98124 29.2348 1.98124 19.0518C1.98124 12.6854 2.11194 7.34771 2.27154 7.18976C2.43114 7.03181 3.39281 6.95606 4.40904 7.02174C6.19681 7.13698 6.31081 7.22562 7.95119 9.7601ZM45.3421 10.9689V13.9909L44.1206 14.1013C41.5267 14.3363 41.0084 14.5824 41.1424 15.5161C41.2421 16.2107 41.5862 16.4384 42.692 16.5419C44.4826 16.7104 44.7175 17.0927 44.7252 19.8537C44.7322 22.4417 44.2823 23.057 42.3821 23.057C41.1925 23.057 41.0276 23.1775 41.1403 23.9636C41.2511 24.7328 41.5797 24.9009 43.3063 25.0717L45.3421 25.2732L45.4634 28.0293C45.5375 29.7143 45.3995 31.0062 45.108 31.3535C44.7517 31.7786 43.5193 31.9216 40.2173 31.9216C36.2697 31.9216 35.7583 31.8394 35.3813 31.1424C34.7413 29.9585 34.8141 8.85671 35.4607 8.21685C35.8129 7.86831 37.3498 7.75468 40.6518 7.83406L45.3421 7.94688V10.9689ZM32.6917 9.99017C33.4759 10.7662 33.565 14.5397 32.8224 15.5068C32.515 15.9069 31.5875 16.2168 30.4813 16.2889C28.9655 16.388 28.6492 16.5468 28.6492 17.2088C28.6492 17.7 28.9639 18.0566 29.4635 18.1311C32.2699 18.5514 32.1555 18.3983 32.0256 21.5581L31.9063 24.4673L30.4145 24.5902C27.7555 24.8094 27.9407 26.7604 30.6311 26.8692C32.741 26.9542 33.3313 27.6565 33.3313 30.0806C33.3313 33.4335 33.0817 33.5805 27.6264 33.4468L22.9492 33.3319L22.8409 21.897C22.7643 13.7971 22.8677 10.3012 23.1963 9.90959C23.9039 9.06584 31.8253 9.13313 32.6917 9.99017ZM101.892 14.1235C103.573 15.0837 104.615 16.6334 105.02 18.7778C105.549 21.5827 105.316 21.8482 102.321 21.8482C99.9099 21.8482 99.7051 21.7757 99.206 20.745C98.5456 19.3814 97.4508 19.1175 96.8747 20.1829C96.1801 21.4674 96.7713 22.1685 98.9352 22.6279C101.743 23.2238 103.147 24.0253 104.083 25.5657C105.654 28.1497 105.558 32.8222 103.889 35.0919C102.757 36.6308 99.8635 37.9657 97.66 37.9657C95.2314 37.9657 92.4124 36.549 91.4132 34.8268C90.9625 34.0491 90.6222 32.6332 90.59 31.4018L90.535 29.3025H93.1762C95.6687 29.3025 95.8479 29.3658 96.3649 30.4344C97.1283 32.0107 98.6779 31.8201 98.6779 30.1495C98.6779 29.058 98.5102 28.9367 96.106 28.2851C94.5825 27.8725 93.065 27.1436 92.3831 26.4973C89.3763 23.6465 89.847 16.9928 93.2315 14.4962C95.3923 12.9026 99.4486 12.7281 101.892 14.1235ZM69.9958 15.7034C69.3611 17.9651 69.4417 18.2218 70.7886 18.2218C71.4603 18.2218 72.01 18.1206 72.01 17.9973C72.01 17.1572 71.0353 14.1924 70.7592 14.1924C70.5724 14.1924 70.2287 14.8726 69.9958 15.7034ZM86.3936 30.3333C86.8923 31.038 86.8996 31.4284 86.4408 32.9374C86.063 34.1793 86.0161 35.1089 86.284 36.034C86.8549 38.0036 86.7523 39.459 86.0231 39.7358C85.6688 39.8704 77.4466 39.9804 67.7517 39.9804C47.7153 39.9804 48.7906 40.1661 49.5951 36.8475C49.9302 35.4651 49.9452 34.39 49.6476 33.1119C49.1081 30.795 49.1029 30.8764 49.8496 30.137C50.4118 29.581 52.6377 29.504 68.1482 29.504C85.5109 29.504 85.8166 29.5177 86.3936 30.3333ZM53.6885 34.7422C53.6885 36.9809 53.8147 37.5628 54.2992 37.5628C54.7117 37.5628 54.9099 37.1542 54.9099 36.3048C54.9099 35.2318 54.9999 35.1206 55.5207 35.5481C55.9425 35.8946 56.1314 35.9099 56.1314 35.5972C56.1314 35.3486 56.3101 35.1451 56.5283 35.1451C56.7523 35.1451 56.8186 35.6722 56.681 36.3539C56.4709 37.3935 56.5577 37.5628 57.3019 37.5628C58.0946 37.5628 58.1671 37.3452 58.1671 34.9674C58.1671 32.0353 57.6207 31.3213 56.4856 32.7702C55.8435 33.5898 55.6697 33.6442 55.3265 33.1304C55.1041 32.798 54.9197 32.3898 54.916 32.2238C54.9128 32.0578 54.6351 31.9216 54.2992 31.9216C53.8147 31.9216 53.6885 32.5035 53.6885 34.7422ZM58.8458 32.1904C58.6964 32.3379 58.5742 33.6071 58.5742 35.011V37.5628H59.7957C61.0456 37.5628 61.5171 36.6521 60.5082 36.1859C60.101 35.9981 60.101 35.9039 60.5082 35.7161C60.7883 35.5868 61.0171 35.239 61.0171 34.9437C61.0171 34.6483 60.7883 34.3006 60.5082 34.1712C60.101 33.9835 60.101 33.8892 60.5082 33.7014C60.7883 33.5721 61.0171 33.1188 61.0171 32.6941C61.0171 32.1533 60.7321 31.9216 60.0672 31.9216C59.5445 31.9216 58.9948 32.0425 58.8458 32.1904ZM61.8314 34.7422V37.5628H63.0528C63.8671 37.5628 64.2743 37.3613 64.2743 36.9583C64.2743 36.6259 63.9994 36.3539 63.6635 36.3539C62.9246 36.3539 62.8509 35.6879 63.5618 35.432C63.9453 35.2938 63.9599 35.0629 63.6204 34.4936C63.2706 33.9073 63.3073 33.6394 63.7845 33.2944C64.6049 32.7005 64.0609 31.9216 62.8252 31.9216C61.866 31.9216 61.8314 32.0204 61.8314 34.7422ZM64.6814 32.7275C64.6814 33.1707 64.8646 33.5334 65.0885 33.5334C65.3125 33.5334 65.4957 34.44 65.4957 35.5481C65.4957 37.294 65.6044 37.5628 66.31 37.5628C67.0111 37.5628 67.1243 37.294 67.1243 35.6287C67.1243 34.5649 67.3282 33.4927 67.5774 33.2461C68.2968 32.5341 67.6051 31.9216 66.0824 31.9216C64.953 31.9216 64.6814 32.0776 64.6814 32.7275ZM68.8343 32.4052C68.112 33.12 68.2178 36.5727 68.9853 37.3327C69.7426 38.0817 69.7968 38.0882 70.8154 37.5486C71.429 37.2235 71.6028 36.6968 71.6028 35.1641C71.6028 34.0818 71.4917 32.9096 71.3557 32.5591C71.0646 31.808 69.5321 31.7145 68.8343 32.4052ZM72.4171 34.7422C72.4171 36.9809 72.5433 37.5628 73.0278 37.5628C73.3906 37.5628 73.6386 37.1929 73.6386 36.6509C73.6386 36.092 73.9928 35.5851 74.5546 35.3414C75.6002 34.8877 75.9719 33.3666 75.2484 32.5039C74.9801 32.1835 74.233 31.9216 73.5889 31.9216H72.4171V34.7422ZM76.4548 32.088C76.3615 32.1795 76.3465 33.4488 76.4214 34.9086C76.522 36.8645 76.7096 37.5628 77.1339 37.5628C77.5756 37.5628 77.71 36.9052 77.71 34.7422C77.71 32.6602 77.5679 31.9216 77.1673 31.9216C76.8684 31.9216 76.548 31.9966 76.4548 32.088ZM79.3671 33.4294C78.4294 36.8745 78.3822 37.5628 79.0841 37.5628C79.4481 37.5628 79.7457 37.3814 79.7457 37.1598C79.7457 36.9382 80.0205 36.7569 80.3564 36.7569C80.6923 36.7569 80.9671 36.9382 80.9671 37.1598C80.9671 37.3814 81.3336 37.5628 81.7814 37.5628C82.2293 37.5628 82.5892 37.5176 82.5815 37.462C82.5737 37.4064 82.2346 36.1827 81.8279 34.7422C80.9346 31.5787 80.0055 31.0827 79.3671 33.4294ZM70.3814 34.9674C70.3814 35.8209 70.2165 36.3008 69.9743 36.1525C69.7503 36.0155 69.5671 35.3704 69.5671 34.7184C69.5671 34.0665 69.7503 33.5334 69.9743 33.5334C70.1982 33.5334 70.3814 34.1789 70.3814 34.9674ZM74.4529 33.9363C74.4529 34.1579 74.2696 34.3393 74.0457 34.3393C73.8218 34.3393 73.6386 34.1579 73.6386 33.9363C73.6386 33.7147 73.8218 33.5334 74.0457 33.5334C74.2696 33.5334 74.4529 33.7147 74.4529 33.9363ZM80.7636 35.1451C80.902 35.3667 80.821 35.5481 80.584 35.5481C80.3471 35.5481 80.1529 35.3667 80.1529 35.1451C80.1529 34.9235 80.2335 34.7422 80.3324 34.7422C80.4314 34.7422 80.6252 34.9235 80.7636 35.1451Z"
              fill="white"
            />
          </svg>
          <div className="order-3 mx-auto flex flex-row items-center gap-[44px] sm:order-2">
            <a
              href="#"
              className="text-[16px] font-[400] leading-[18px] text-[#fdfdfd] lg:text-[18px]"
            >
              Explore
            </a>
            <a
              href="#"
              className="text-[16px] font-[400] leading-[18px] text-[#fdfdfd] lg:text-[18px]"
            >
              Community
            </a>
            <a
              href="#"
              className="text-[16px] font-[400] leading-[18px] text-[#fdfdfd] lg:text-[18px]"
            >
              Drops
            </a>
          </div>
          <div className="order-2 flex flex-row items-center gap-[12px] sm:order-3">
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M16.5 6H13.5C12.9477 6 12.5 6.44772 12.5 7V10H16.5C16.6137 9.99748 16.7216 10.0504 16.7892 10.1419C16.8568 10.2334 16.8758 10.352 16.84 10.46L16.1 12.66C16.0318 12.8619 15.8431 12.9984 15.63 13H12.5V20.5C12.5 20.7761 12.2761 21 12 21H9.5C9.22386 21 9 20.7761 9 20.5V13H7.5C7.22386 13 7 12.7761 7 12.5V10.5C7 10.2239 7.22386 10 7.5 10H9V7C9 4.79086 10.7909 3 13 3H16.5C16.7761 3 17 3.22386 17 3.5V5.5C17 5.77614 16.7761 6 16.5 6Z"
                  fill="white"
                />
              </svg>
            </a>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3ZM19.25 16C19.2445 17.7926 17.7926 19.2445 16 19.25H8C6.20735 19.2445 4.75549 17.7926 4.75 16V8C4.75549 6.20735 6.20735 4.75549 8 4.75H16C17.7926 4.75549 19.2445 6.20735 19.25 8V16ZM16.75 8.25C17.3023 8.25 17.75 7.80228 17.75 7.25C17.75 6.69772 17.3023 6.25 16.75 6.25C16.1977 6.25 15.75 6.69772 15.75 7.25C15.75 7.80228 16.1977 8.25 16.75 8.25ZM12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5027 10.8057 16.0294 9.65957 15.1849 8.81508C14.3404 7.97059 13.1943 7.49734 12 7.5ZM9.25 12C9.25 13.5188 10.4812 14.75 12 14.75C13.5188 14.75 14.75 13.5188 14.75 12C14.75 10.4812 13.5188 9.25 12 9.25C10.4812 9.25 9.25 10.4812 9.25 12Z"
                  fill="white"
                />
              </svg>
            </a>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M20.9728 6.7174C20.5084 7.33692 19.947 7.87733 19.3103 8.31776C19.3103 8.47959 19.3103 8.64142 19.3103 8.81225C19.3154 11.7511 18.1415 14.5691 16.0518 16.6345C13.962 18.6999 11.1312 19.8399 8.19405 19.7989C6.49599 19.8046 4.81967 19.4169 3.29642 18.6661C3.21428 18.6302 3.16131 18.549 3.16162 18.4593V18.3604C3.16162 18.2313 3.26623 18.1267 3.39527 18.1267C5.06442 18.0716 6.67402 17.4929 7.99634 16.4724C6.48553 16.4419 5.12619 15.5469 4.5006 14.1707C4.46901 14.0956 4.47884 14.0093 4.52657 13.9432C4.57429 13.8771 4.653 13.8407 4.73425 13.8471C5.19342 13.8932 5.65718 13.8505 6.1002 13.7212C4.43239 13.375 3.17921 11.9904 2.99986 10.2957C2.99349 10.2144 3.02992 10.1357 3.096 10.0879C3.16207 10.0402 3.24824 10.0303 3.32338 10.062C3.77094 10.2595 4.25409 10.3635 4.74324 10.3676C3.28184 9.40846 2.65061 7.58405 3.20655 5.92622C3.26394 5.76513 3.40181 5.64612 3.5695 5.61294C3.73718 5.57975 3.90996 5.63728 4.02432 5.76439C5.99639 7.86325 8.70604 9.11396 11.5819 9.25279C11.5083 8.95885 11.4721 8.65676 11.4741 8.35372C11.501 6.76472 12.4842 5.34921 13.9634 4.76987C15.4425 4.19054 17.1249 4.56203 18.223 5.71044C18.9714 5.56785 19.695 5.31645 20.3707 4.96421C20.4202 4.93331 20.483 4.93331 20.5325 4.96421C20.5634 5.01373 20.5634 5.07652 20.5325 5.12604C20.2052 5.87552 19.6523 6.50412 18.9509 6.92419C19.5651 6.85296 20.1685 6.70807 20.7482 6.49264C20.797 6.45942 20.8611 6.45942 20.9099 6.49264C20.9508 6.51134 20.9814 6.54711 20.9935 6.59042C21.0056 6.63373 20.998 6.68018 20.9728 6.7174Z"
                  fill="white"
                />
              </svg>
            </a>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3ZM8 18C8.27614 18 8.5 17.7761 8.5 17.5V10.5C8.5 10.2239 8.27614 10 8 10H6.5C6.22386 10 6 10.2239 6 10.5V17.5C6 17.7761 6.22386 18 6.5 18H8ZM7.25 9C6.42157 9 5.75 8.32843 5.75 7.5C5.75 6.67157 6.42157 6 7.25 6C8.07843 6 8.75 6.67157 8.75 7.5C8.75 8.32843 8.07843 9 7.25 9ZM17.5 18C17.7761 18 18 17.7761 18 17.5V12.9C18.0325 11.3108 16.8576 9.95452 15.28 9.76C14.177 9.65925 13.1083 10.1744 12.5 11.1V10.5C12.5 10.2239 12.2761 10 12 10H10.5C10.2239 10 10 10.2239 10 10.5V17.5C10 17.7761 10.2239 18 10.5 18H12C12.2761 18 12.5 17.7761 12.5 17.5V13.75C12.5 12.9216 13.1716 12.25 14 12.25C14.8284 12.25 15.5 12.9216 15.5 13.75V17.5C15.5 17.7761 15.7239 18 16 18H17.5Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </div>
        {/* separate */}
        <div className="my-[20px] h-[1px] bg-[#595959] lg:my-[40px]"></div>

        <div className="mx-[40px] flex flex-col items-center justify-center gap-[32px] lg:flex-row xl:mx-auto">
          <p className="text-[14px] font-[500] leading-[150%]">
            ©2022, All right reserved.
          </p>
          <div className="flex w-full flex-row items-center justify-between lg:w-[395px] lg:gap-[24px]">
            <a href="#" className="tql-footer-text">
              Privacy Policy
            </a>
            <a href="#" className="tql-footer-text">
              Terms of Service
            </a>
            <a href="#" className="tql-footer-text">
              Cookies Settings
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
