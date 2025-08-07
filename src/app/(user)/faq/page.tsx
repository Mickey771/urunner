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
    title: "Why are my calories showing up as zero?",
    text:
      "The Apple watch is required to capture the calories on all iPhones. If the calories are showing up as zero, the Apple watch is not connected to the Apple health kit. For android phones, URunner needs to connect to Google Health Connect. For android phones, check if Health Connect is running with appropriate permissions to allow Apps to connect.",
  },
  {
    title: "Can other Fitness Apps be connected to the URunner App?",
    text:
      "Yes, URunner can sync to Fitbit directly and to Garmin, Strava, and Oura ring through the Apple Health Kit. Follow the instructions to change the source of the step and calories.",
  },
  {
    title: "What is the Activity Score ®?",
    text:
      "The URunner Activity Score ® is an objective index of your daily activity. The Activity Score ® is based on the number of steps and calories for the day. It is updated each time the App is refreshed and used to determine the number of virtual URunner coins deposited into your wallet. Depending on the level of activity, the Activity Score ® can range between 0 and 40. A minimum of 500 steps is required to display the score. The approximate ranges are: Score 0 – 2 (1 – 2 miles, 200 – 450 calories), Score 2 – 8 (2 – 4 miles, 450 – 800 calories), Score 8 – 10 (4 – 5 miles, 800 – 900 calories), Score over 10 (Over 5 miles, 1000+ calories). The Activity Score ® increases exponentially with a combination of higher calories and higher steps. Marathon runners can easily attain scores between 20 and 40. A healthy goal is to maintain a score between 3 and 6.",
  },
  {
    title: "Why is my Activity Score ® zero?",
    text:
      "The steps and calories data sets are used to calculate the Activity Score ®. A minimum of 500 steps are required to display the Activity Score ®. The number of steps and calories may be insufficient for the Activity Score ® to register.",
  },
  {
    title: "What are virtual URunner coins and how are they generated?",
    text:
      "Virtual URunner coins are URunner tokens within the URunner App. These coins are generated based on an algorithm that uses the highest daily Activity Score ®. The number of coins generated increases exponentially with higher Activity Scores ® and can range from 0.20 to well over 13 coins depending on the level of activity. Coins can also be earned by posts, likes and comments on Feeds and by completing challenges. The coins are deposited into the virtual URunner wallet at the end of the day. Regular check-ins into the URunner App are required to receive the virtual coins. Check-in must be at least once in two days. URunner will send a general reminder once in 24 hours and another reminder at 9 pm, local time.",
  },
  {
    title: "What are real URunner coins (URN)?",
    text:
      "Real URunner (rURN) coins are URunner tokens on the Solana blockchain. The virtual URunner coins can be converted to real URunner coins (URN) and transferred to your personal digital wallet. The Phantom wallet is the recommended digital wallet for Solana and can be downloaded directly from the App store (IOS and Android).",
  },
  {
    title:
      "How many real URunner coins (URN) are generated when virtual URunner coins are converted?",
    text:
      "The Global URunner roadmap for coin conversion: For the first 20,000 virtual coins - 5,000 real URN coins per virtual coin (100,000,000 real URN converted). For the next 5,000 virtual coins - 2,500 real URN coins per virtual coin (12,500,000 real URN). Then each virtual coin - 1,000 real URN coins until 1 billion real URN coins. The conversion factor will remain at 1,000 real URN coins until 1,000,000 virtual URN coins have been generated or converted into 1 billion real URN coins. The conversion factor will change over time.",
  },
  {
    title:
      "Is there a fee to convert virtual URunner coins to real URunner (URN) coins?",
    text:
      "Yes, there will be a fee to convert virtual URunner coins to real URunner (URN) coins. The fee will be displayed at the time of conversion.",
  },
  {
    title: "When will the URunner coin (URN) be listed on an exchange?",
    text:
      "The process to list the URunner (URN) coin on the exchange is in progress. URunner aims to build a strong community around the App and URN coin.",
  },
  {
    title: "What is the URunner Community?",
    text:
      "The URunner Community is the URunner Global Social Network and includes local and global URunner events, marathons, community activities, feeds, the URunner marketplace and more. URunner Community activities and marathons will allow virtual URunner coins to be doubled or tripled on the day of the event. Check the community tab for more details.",
  },
  {
    title: "What is the Phantom wallet?",
    text:
      "The Phantom wallet is the recommended digital wallet for Solana and can be downloaded from the App store (IOS and Android). Once installed, copy the wallet address from the top of your Phantom wallet and paste it into the wallet address on the URunner account page. Click update. Once the wallet is connected to the URunner App, the virtual URunner coins can be converted to the real URunner coin (URN) and transferred to the Phantom wallet through the URunner wallet tab. A small fee will be applied to cover gas fees and transfer costs.",
  },
  {
    title: "What can I do with the virtual URunner coins?",
    text:
      "Virtual URunner coins can be used in the Shops section (in production). We will be gradually adding partner vendors to the URunner Shops. Virtual URunner coins can also be used to buy URunner merch.",
  },
  {
    title:
      "I don't have an Apple watch. Can I still use the URunner App and generate the virtual URunner coins?",
    text:
      "Yes, you can still use the URunner App. You will be able to generate virtual URunner coins based on your steps data alone. However, the Activity Score ® will be much lower and the number of coins generated will be significantly less than those with combined steps and calorie data. It is ideal to have both steps and calories set up to optimize the URunner App.",
  },
  {
    title: "Can the virtual URunner coins be transferred to another user?",
    text:
      "No, the virtual URunner coins cannot be transferred to another user.",
  },
  {
    title: "Do I lose my data and coins if I log out?",
    text: "No.",
  },
  {
    title:
      "Can manually entered steps and calories data be used by the URunner App?",
    text:
      "No, manually entered steps and calories data is not permitted and will not be imported by the URunner App.",
  },
  {
    title:
      "Is there a limit to the number of virtual URunner coins that can be converted to the real URunner (URN) coins?",
    text:
      "Yes, 250 virtual coins can be converted to the real URunner (URN) coin in each transaction.",
  },
  {
    title:
      "What happens when the real URunner coin(URN) is listed on an exchange?",
    text:
      "Once the URunner coin (URN) is listed on an exchange, it will have a market value and market cap. It will be traded openly. Maintaining the supply and demand and price balance is crucial to establish a fair market value for the URunner coin (URN). Hence, at some point, the supply of the real URunner (URN) coin will have to be limited. A certain number of real URunner (URN) coins will be burned for every virtual URunner coin that is used in the Community marketplace and shop.",
  },
  {
    title: "Can I buy more real URunner (URN) coins?",
    text:
      "No, not at this time. Virtual URunner coins must be converted to the real URunner (URN) coins through the wallet.",
  },
  {
    title: "Which exchange will the URunner (URN) coin be listed on?",
    text:
      "A few potential exchanges are being explored. We are unable to disclose the names currently. We need to build the Global URunner Community first around the URunner App and the URunner (URN) coin.",
  },
  {
    title: "How do I delete my account?",
    text:
      "Go to the account page and scroll to the bottom. Click delete account.",
  },
  {
    title: "Does the URunner App track heart rate and or blood pressure?",
    text:
      "No, the URunner App does not track your heart rate or blood pressure.",
  },
  {
    title:
      "Can I obtain Dollars or Euros for my virtual URunner coin or the real URunner (URN) coin?",
    text:
      "No, not until the real URunner (URN) coin is listed on the exchange.",
  },
  {
    title: "Is the leaderboard updated daily?",
    text:
      "Yes, the leaderboard is based on your average Activity Score for the past 7 days. The 7 day average Activity Score is calculated at the end of each day. The leaderboard readjusts daily based on this number. The 7 day average Activity Score is also displayed on the main page along with the global ranking for the day.",
  },
  {
    title: "How long do I have to complete a challenge once I join?",
    text:
      "Each challenge is displayed in the Community page under Challenges. Each challenge has a specific time duration to achieve the goal. The Challenge parameters are tracked by the URunner App.",
  },
  {
    title: "Can I earn more coins on Feeds?",
    text:
      "Yes, absolutely. In fact, we encourage you to be active and engage as much as possible on the feeds section and earn more coins. Activity Coins: Every Post - 5 coins earned, Every Comment - 3 coins earned, Every Like - 1 coin earned.",
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

      {accordionData.slice(0, 5).map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          text={item.text}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}

      <p className="w-full max-w-[1072px] mx-auto   mt-[15px] text-left text-[#202020]/80 text-base md:text-xl lg:text-2xl font-semibold font-['Urbanist'] lg:leading-loose">
        You can find additional information and FAQs on the URunner App
      </p>
      <a
        target="_blank"
        href="/faq.pdf"
        className="w-full max-w-[1072px] mx-auto text-primaryBlue  mt-[15px] text-left text-[#202020]/80 text-base md:text-xl lg:text-2xl font-semibold font-['Urbanist'] lg:leading-loose"
      >
        Click here to download complete FAQs
      </a>
    </section>
  );
};

export default FAQAccordion;
