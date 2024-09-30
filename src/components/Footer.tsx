import {
  Appstoresmall,
  Bluecurvesmall,
  Fb,
  In,
  Ln,
  Mail,
  Playstoresmall,
  Tw,
  URunner,
  Whitecurvesmall,
} from "@/assets/svgs";
import Link from "next/link";
import React, { FormEvent, useState } from "react";
import { FaYoutube } from "react-icons/fa";
import { setIsLoading, setModal } from "../../redux/reducers/userSlice";
import { useDispatch } from "react-redux";
import axios from "axios";

const Footer = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;

    dispatch(setIsLoading(true));
    setError("");

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/users/newsletter/`,
        { email }
      );

      if (response.status === 200) {
        setEmail(""); // Clear form
        dispatch(
          setModal({ message: "You have subscribed successfully", open: true })
        );
      } else {
        setError(response.data.message);
        throw new Error();
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error.response?.data?.message);
        console.log("There was an error: ", error.response?.data?.message);
      } else {
        setError("An unexpected error occurred");
        console.log("There was an unexpected error: ", error);
      }
    } finally {
      dispatch(setIsLoading(false));
    }
  };

  return (
    <footer className="w-full md:my-6 max-w-max mx-auto flex flex-wrap lg:flex-nowrap lg:gap-[18px]">
      <div className="bg-[#161313] w-full lg:max-w-[504px] lg:rounded-[20px] px-5 lg:px-10 py-[55px]">
        <h1 className="text-white text-[40px] font-semibold font-['Inter'] leading-[48px]">
          Get Our Mobile Application
        </h1>
        <p className="lg:w-[329px] mt-3 text-[#e3dada] text-base font-normal font-['Inter'] leading-normal">
          Join 1000+ individuals, innovators, and creators who have embraced
          fitness, progress, and wealth.
        </p>
        <div className="flex flex-wrap mt-[37px] gap-[15px]">
          <a
            href="https://play.google.com/store/apps/details?id=com.app.urunner"
            target="_blank"
            className="relative w-fit "
          >
            <Bluecurvesmall />
            <span className="inline-flex h-full absolute top-0 w-fit left-0 justify-center items-center pl-[9px]">
              <Playstoresmall />
            </span>
            <p className="text-white text-xl font-bold font-['Urbanist'] eading-loose absolute top-0 right-0 h-full w-fit inline-flex items-center justify-center pr-[15px]">
              Google Play
            </p>
          </a>
          <a
            href="https://apps.apple.com/us/app/urunner/id1617568183"
            target="_blank"
            className="relative w-fit "
          >
            <Whitecurvesmall />
            <span className="inline-flex h-full absolute top-0 w-fit left-0 justify-center items-center pl-[9px]">
              <Appstoresmall />
            </span>
            <p className="text-[#212020] text-xl font-bold font-['Urbanist'] eading-loose absolute top-0 right-0 h-full w-fit inline-flex items-center justify-center pr-[15px]">
              App Store
            </p>
          </a>
        </div>
      </div>

      <div className="p-[24px] md:p-[36px] bg-[#007AFF14] w-full lg:max-w-[788px] lg:rounded-[20px] flex flex-col gap-10">
        <div className="flex gap-10  flex-wrap flex-col-reverse  sm:flex-row-reverse lg:flex-row justify-between">
          <div className="flex flex-col gap-3 md:gap-6">
            <p className="text-[#8c8484] text-sm font-medium font-['Inter'] leading-tight">
              Product
            </p>
            <Link
              href={"/faq"}
              className="w-[118px] text-[#3e3737] text-sm font-medium font-['Inter'] leading-tight"
            >
              FAQs
            </Link>
            <Link
              href={"/privacy-policy"}
              className="w-[118px] text-[#3e3737] text-sm font-medium font-['Inter'] leading-tight"
            >
              Privacy Policy
            </Link>
          </div>
          <div className="flex flex-col gap-3 md:gap-6">
            <p className="text-[#8c8484] text-sm font-medium font-['Inter'] leading-tight">
              Contact Us
            </p>
            <a
              href="mailto:info@urunner.io"
              className="text-[#007aff] text-sm font-medium font-['Inter'] leading-tight"
            >
              info@urunner.io
            </a>
          </div>
          <span>
            <URunner />
          </span>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-wrap lg:flex-nowrap gap-4 items-center"
        >
          <h2 className="text-[#202020] mr-2 w-full lg:max-w-[240px] text-[28px] font-bold font-['Urbanist'] leading-[33.60px]">
            Join our newsletter
          </h2>
          <label className="bg-white border border-[#D0D5DD] p-2 md:p-3 lg:p-4 flex gap-2 w-full max-w-[200px] sm:max-w-[220px] md:max-w-[319px] rounded-[6px] placeholder:text-[#98a1b2] text-sm">
            <span>
              <Mail />
            </span>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="focus:outline-none"
            />
          </label>
          <button
            type="submit"
            disabled={!email}
            className=" px-2 md:px-4 lg:px-6 py-2 md:py-3 lg:py-4 bg-[#007aff] text-white hover:bg-white hover:text-primaryBlue border border-primaryBlue disabled:opacity-50 rounded-lg flex-col justify-center items-center gap-2.5 inline-flex"
          >
            <span className="text-center  text-sm md:text-base font-semibold font-['Inter'] leading-normal">
              Subscribe
            </span>
          </button>
        </form>

        <div className="flex gap-4 items-center">
          <p className="text-[#344054] text-xs md:text-sm font-semibold font-['Inter'] leading-tight">
            Follow Us
          </p>
          <div className="flex gap-2">
            <a
              target="_blank"
              href=" https://www.facebook.com/profile.php?id=61560962371672
"
            >
              <Fb />
            </a>
            <a
              target="_blank"
              href="https://x.com/urunnerapp?s=21
"
            >
              <Tw />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/urunnerapp?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr 
"
            >
              <In />
            </a>
            <a
              target="_blank"
              href=" https://youtube.com/@urunnerapp?si=d0WhOiTXyRj79p1J"
              className="bg-primaryBlue p-1 rounded-full"
            >
              <FaYoutube color="white" size={16} />
            </a>
          </div>
        </div>

        <div className="flex flex-wrap md:flex-nowrap items-center w-full max-w-[630px] justify-between gap-3">
          <div className="flex items-center gap-4">
            <Link
              href={"/privacy-policy"}
              className="text-[#504949] text-xs md:text-sm font-semibold font-['Inter'] leading-tight"
            >
              Privacy Policy
            </Link>
            <span className="inline-flex w-1.5 h-1.5 bg-[#e3dada] rounded-full" />
            <Link
              href={"/events"}
              className="text-[#504949] text-xs md:text-sm font-semibold font-['Inter'] leading-tight"
            >
              Events
            </Link>
          </div>
          <p className="w-[193px] lg:text-right text-[#504949] text-sm md:text-base font-normal font-['Inter'] leading-normal">
            © 2024 URunner Inc
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
