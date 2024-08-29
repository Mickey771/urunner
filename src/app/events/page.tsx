import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <section className="w-full max-w-max mx-auto mt-20 mb-40">
      <h1 className=" h-[38px] text-center text-black text-[40px] font-bold font-['Poppins'] leading-[37.50px]">
        Our Events
      </h1>

      <div className="w-full mt-10 flex gap-20 justify-center">
        <aside className="w-full max-w-[256px] pt-[30px]">
          <h2 className="text-[#202224] text-lg font-bold font-['Nunito Sans']">
            Other Events
          </h2>

          <div className="mt-[15px] flex flex-col gap-[40px]">
            {Array.from({ length: 4 }, (_, index) => (
              <div
                key={index}
                className={`${
                  index === 0 &&
                  "py-6 bg-primaryBlue text-white rounded-[14px] border-[0.3px] border-[#B9B9B9]"
                } px-6 text-[#202224] flex gap-3`}
              >
                <div className="w-[38px] h-fit">
                  <Image
                    src={"/eventImg.png"}
                    height={0}
                    width={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    alt="event img"
                    className="rounded-full"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <h3 className="opacity-90  text-sm font-bold font-['Nunito Sans'] leading-relaxed">
                    Fitness Conference
                  </h3>
                  <p className="opacity-60  text-xs font-semibold font-['Nunito Sans'] leading-relaxed">
                    11 Street, Los Angeles
                  </p>
                  <p className="opacity-60  text-xs font-semibold font-['Nunito Sans'] leading-relaxed">
                    Time: 11:00AM
                  </p>
                  <p className="opacity-60  text-xs font-semibold font-['Nunito Sans'] leading-relaxed">
                    Feb 2, 2023
                  </p>

                  <div className="flex items-center gap-2">
                    <Image
                      src={"/man1.png"}
                      width={30}
                      height={30}
                      alt="profile"
                      className="rounded-full"
                    />
                    <Image
                      src={"/man2.png"}
                      width={30}
                      height={30}
                      alt="profile"
                      className="rounded-full"
                    />
                    <Image
                      src={"/man3.png"}
                      width={30}
                      height={30}
                      alt="profile"
                      className="rounded-full"
                    />
                    <span className="h-6 w-6 flex items-center justify-center border border-primaryBlue rounded-full">
                      <p className=" text-[#007aff] text-[10px] font-bold font-['Nunito Sans']">
                        20+
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </aside>

        <article className="w-full max-w-[834px] py-[28px] px-6 border-[0.3px] border-[#B9B9B9] rounded-[14px]">
          <div className="flex items-center justify-between">
            <p className=" opacity-60 text-[#202224] text-base font-semibold font-['Nunito Sans']">
              Jan 1, 2024 11th Street Chicago
            </p>
            <h2 className=" text-right text-[#202224] text-[32px] font-bold font-['Nunito Sans']">
              Design Conference 2.0
            </h2>
          </div>
          <div className="w-full mt-9">
            <Image
              src={"/vrBg.png"}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              alt="vr image"
            />
          </div>
          <p className="h-[159px]">
            <span className="text-[#1b1b1b] text-lg font-normal font-['Poppins']">
              <br />
            </span>
            <span className="text-[#1b1b1b] text-base font-normal font-['Poppins']">
              The is also known as the Roseline Etuokwu Sigma Secondary School
              Quiz Competition is one of the philanthropic activities of the
              club to bring the club closer to the grassroots. It is the club’s
              believe that the secondary school students would grow to become
              University students. As such, introducing the club to them right
              from their secondary school days would guide them in manners to
              act and way of life to live as a student of higher institutions.{" "}
            </span>
          </p>

          <h3 className="h-8 text-[#202224] text-2xl font-bold font-['Nunito Sans'] mt-[28px]">
            Registered Attendees
          </h3>
          <div className="flex items-center gap-3 mt-[14px]">
            {Array.from({ length: 6 }, (_, index) => (
              <div key={index}>
                <Image
                  src={"/man3.png"}
                  alt="profile"
                  height={41}
                  width={41}
                  className="rounded-full"
                />
              </div>
            ))}
            <span className="w-10 h-10 inline-flex justify-center items-center border border-primaryBlue rounded-full bg-[#DFE9FF5E]">
              <p className=" text-[#007aff] text-base font-bold font-['Nunito Sans']">
                14+
              </p>
            </span>
          </div>

          <button className="w-[200px] h-12 mt-[60px] px-[30px] py-3 bg-[#007aff] rounded-[10px] shadow shadow-inner justify-center items-center gap-2.5 inline-flex">
            <p className="text-center text-white text-xl font-semibold font-['Urbanist'] leading-normal">
              Register Now
            </p>
          </button>
        </article>
      </div>
    </section>
  );
};

export default page;
