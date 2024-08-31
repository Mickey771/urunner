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
    title: "What is UX design?",
    text:
      "UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.",
  },
  {
    title: "What are the key principles of UX design?",
    text:
      "The key principles of UX design include user-centered design, accessibility, usability, consistency, hierarchy, feedback, and simplicity. These principles guide designers in creating products that meet user needs and expectations.",
  },
  {
    title: "What is the difference between UX and UI design?",
    text:
      "While UX (User Experience) design focuses on the overall feel of the product and how users interact with it, UI (User Interface) design is more concerned with the visual elements and layout of the product. UX design deals with the entire user journey, while UI design focuses on the look and feel of the interface.",
  },
  {
    title: "What is a wireframe?",
    text:
      "A wireframe is a basic visual representation of a webpage or app's layout. It's a low-fidelity sketch that outlines the structure and layout of key elements without detailed design elements. Wireframes help designers and stakeholders visualize the basic structure of a product before investing time in detailed designs.",
  },
  {
    title: "What is user testing?",
    text:
      "User testing is the process of evaluating a product by testing it with representative users. It involves observing users as they attempt to complete tasks using the product. This helps identify usability issues, gather user feedback, and validate design decisions to improve the overall user experience.",
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
    </section>
  );
};

export default FAQAccordion;
