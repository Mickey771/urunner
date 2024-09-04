"use client";
import { Arrowdown, Arrowup } from "@/assets/svgs";
import React, { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

interface AccordionItem {
  title: string;
  text: string;
}

interface AccordionItemProps extends AccordionItem {
  isOpen: boolean;
  onToggle: () => void;
}

const accordionData = [
  {
    title: "How do I connect to URunner?",
    text:
      "It's simple. Download the URunner App from the App store. Launch it and allow the permission to connect to your local fitness App. Health on Iphone or MyFitnessPal on Android.  Other fitness Apps coming soon.",
  },
  {
    title: "How do I earn URNCoins?",
    text:
      "URunner will connect to your fitness App and monitor the number of steps and calories for the day.  Using a complex fitness algorithm, URunner will determine your Activity Score and calculate the number of URNCoins, which will be transferred into your URunner wallet daily.",
  },
  {
    title: "What is the URNCoin worth?",
    text:
      "It depends on the global utilization of the URunner App and the total number of steps recorded and calories burned across the world.  The more the users, steps and calories, the higher the value. Our goal is to have a positive impact on Global Health and Fitness!",
  },
  {
    title: "Can I transfer my URNCoins to other users?",
    text:
      "Yes, you can transfer your URNCoins to other URunner users. Simply go to the 'Transfer' section in your URunner wallet, enter the recipient's URunner username or unique ID, specify the amount you want to send, and confirm the transaction. It's a great way to motivate friends and family or participate in fitness challenges!",
  },
  {
    title: "Are there any rewards I can redeem with my URNCoins?",
    text:
      "Absolutely! URunner has partnered with various brands to offer a range of rewards. You can redeem your URNCoins for discounts on fitness gear, healthy meal subscriptions, gym memberships, and more. Check the 'Rewards' section in the app to see the current offerings and their URNCoin prices.",
  },
  {
    title:
      "How does URunner ensure the accuracy of step counts and calorie burns?",
    text:
      "URunner uses advanced algorithms and machine learning to validate the data received from connected fitness apps. We also cross-reference the data with typical human activity patterns to detect any anomalies. If we suspect any unusual activity, we may request additional verification from the user to ensure the integrity of our system and fairness for all participants.",
  },
];

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  text,
  isOpen,
  onToggle,
}) => {
  return (
    <div className="w-full max-w-[1072px] mx-auto px-[20px] md:px-[40px] lg:px-[52px] py-[18px] md:py-[28px] rounded-[10px] md:rounded-[20px] lg:py-[35px] bg-[#F3F3F3]">
      <h2
        className="w-full flex gap-4 items-center mb-[18px] justify-between max-w-[896px] text-black text-base md:text-2xl lg:text-3xl font-extrabold font-['Inter'] cursor-pointer"
        onClick={onToggle}
      >
        {title}
        <button>{isOpen ? <Arrowup /> : <Arrowdown />}</button>
      </h2>
      {isOpen && (
        <p className="w-full text-black text-xs md:text-base lg:text-xl font-normal font-['Inter']">
          {text}
        </p>
      )}
    </div>
  );
};

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="w-full flex flex-col gap-[35px] max-w-max mx-auto mt-16 mb-[140px] px-6 lg:px-0">
      <h1 className="mb-10 h-[38px] text-center text-black text-[40px] font-bold font-['Poppins'] leading-[37.50px]">
        FAQs
      </h1>

      {accordionData.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          text={item.text}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}

      <p className="w-full max-w-[1072px] mx-auto   mt-[15px] text-left text-[#202020]/80 text-base md:text-xl lg:text-2xl font-semibold font-['Urbanist'] lg:leading-loose">
        You can find additional information and FAQs on the URunner app
      </p>
    </section>
  );
};

export default FAQAccordion;
