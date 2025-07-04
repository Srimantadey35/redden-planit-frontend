import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const InvitationCardModal = ({ modalVal, setModalVal }) => {
  const [mainData, setmainData] = useState({});
  const cardImages = [
    {
      list: 1,
      path: "/images/create-your-card/card-1.png",
    },
    {
      list: 2,
      path: "/images/create-your-card/card-2.png",
    },
    {
      list: 3,
      path: "/images/create-your-card/card-3.png",
    },
    {
      list: 1,
      path: "/images/create-your-card/card-4.png",
    },
    {
      list: 2,
      path: "/images/create-your-card/card-5.png",
    },
    {
      list: 3,
      path: "/images/create-your-card/card-6.png",
    },
    {
      list: 1,
      path: "/images/create-your-card/card-7.png",
    },
    {
      list: 2,
      path: "/images/create-your-card/card-8.png",
    },
    {
      list: 3,
      path: "/images/create-your-card/card-9.png",
    },
    {
      list: 1,
      path: "/images/create-your-card/card-10.png",
    },
    {
      list: 2,
      path: "/images/create-your-card/card-11.png",
    },
    {
      list: 3,
      path: "/images/create-your-card/card-12.png",
    },
  ];

  console.log("inside click:", mainData);
  console.log(modalVal)

  return (
    <div className="fixed h-[calc(100%-60px)] 3xl:h-[calc(100%-99px)] w-screen bg-[#000000a9] left-0 top-[60px] 3xl:top-[99px] flex items-center">
      <div className="size-full overflow-hidden rounded-[17px] h-[calc(100%-70px)] max-w-[1450px] mx-auto flex items-center modalAnim">
        <div className="rounded-[17px] h-full max-w-[1024px] 3xl:max-w-[1200px] 4xl:max-w-[1450px] w-full overflow-y-auto overflow-x-hidden scrollable-element mx-auto">
          <div className="rounded-[17px] h-full max-w-[1024px] 3xl:max-w-[1200px] 4xl:max-w-[1450px] w-full overflow-y-auto scrollable-element mx-auto relative">
            <button
              onClick={() => setModalVal(false)}
              className="cursor-pointer absolute right-5 top-5 3xl:right-7 3xl:top-7"
            >
              <Image
                className="w-[18px] 3xl:w-[25px] 4xl:w-[30px]"
                width={30}
                height={30}
                src={"/images/cross.svg"}
                alt="cross icon"
              />
            </button>
            <div className="flex justify-center items-center">
              <div className="flex flex-col justify-center w-full bg-white py-[50px] 3xl:py-[72px]">
                <div className="flex items-center justify-evenly px-10 4xl:px-0 ">
                  <div>
                    <Image
                      className="rounded-2xl"
                      width={320}
                      height={450}
                      src={mainData?.path || modalVal?.path}
                      alt="card-1"
                    />
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#151515] text-[30px] 3xl:text-[35px] 4xl:text-[40px]">
                      Indian Traditional <br /> Wedding Invitation Card
                    </h3>
                    <p className="font-normal text-[#595959] text-[16px] 3xl:text-[18px] 4xl:text-[20px] mt-8 3xl:mt-10">
                      Size - 1080 x 1920 px
                    </p>

                    <div className="flex items-center justify-end mt-12 3xl:mt-16 space-x-4 4xl:space-x-8">
                      <Link href='/invitation-card' className="cursor-pointer font-semibold text-white text-[18px] 3xl:text-[20px] 4xl:text-[23px] bg-[#EA0056] hover:bg-[#d1004c] transition ease px-9 4xl:px-16 py-2.5 4xl:py-4 rounded-[10px]">
                        Customise this template
                      </Link>
                      <button className="cursor-pointer">
                        <Image
                          className="w-[26px] 4xl:w-[32px]"
                          width={32}
                          height={28}
                          src={"/images/create-your-card/like_icon.svg"}
                          alt="like icon"
                        />
                      </button>
                      <button className="cursor-pointer">
                        <Image
                          className="w-[20px] 4xl:w-[25px]"
                          width={25}
                          height={27}
                          src={"/images/create-your-card/share.svg"}
                          alt="share icon"
                        />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="px-[45px] pt-[72px]">
                  <h3 className="font-medium text-black text-[20px] 3xl:text-[26px] 4xl:text-[30px] border-l-[#ea0056] border-l-[6px] leading-[0.8] pl-2.5 mb-5">
                    More like this
                  </h3>

                  <div>
                    <div className="grid grid-cols-3 gap-[30px] 4xl:gap-[50px]">
                      {[1, 2, 3].map((listNumber) => (
                        <div
                          key={listNumber}
                          className="space-y-8 4xl:space-y-12"
                        >
                          {cardImages
                            .filter(
                              (item) =>
                                item.list === listNumber &&
                                item.path !== modalVal?.path
                            )
                            .map((item, index) => (
                              <div
                                className="cursor-pointer"
                                key={index}
                                onClick={() => setmainData(item)}
                              >
                                <Image
                                  className={`${
                                    mainData?.path === item.path
                                      ? "border-black border-[2px]"
                                      : ""
                                  } size-full rounded-2xl`}
                                  width={320}
                                  height={450}
                                  src={item.path}
                                  alt={`Card ${index + 1}`}
                                />
                              </div>
                            ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvitationCardModal;
