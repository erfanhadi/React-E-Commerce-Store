import React from "react";
import SectionTitle from "../Components/Common/SectionTitle";
import { LOREM_TEXT } from "../lib/constants.js";
import Accordion from "../Components/Common/Accordion";
import aboutUsData from "../Components/Templates/AboutUS/settings/data";
import { Link } from "react-router";
import { FaExternalLinkAlt } from "react-icons/fa";

const AboutUSPage = () => {
  return (
    <main id="about-us" className="container my-10">
      <SectionTitle text="ما کی هستیم؟" description={LOREM_TEXT} />
      <div className="w-full mt-10 gap-10 grid grid-cols-2">
        <Accordion options={aboutUsData} />
        <div>
          <img src="/assets/static/about-us.png" />
        </div>
      </div>
      <div className="my-14">
        <SectionTitle text="پاسخ خود را پیدا نکردید؟" />
        <p>
          شما می‌توانید
          <Link
            className="inline-block px-1 font-bold underline text-blue-500"
            to="/contact-us"
          >
            از طریق این صفحه
          </Link>
          با ما تماس بگیرید و سوال خود را از تیم فنی شاپینو بپرسید !
        </p>

        <Link
          to={"/contact-us"}
          className="flex-ic text-sm mt-4 max-w-max gap-2 px-4 py-2.5 rounded-md bg-blue-500 text-white"
        >
          <FaExternalLinkAlt />
          <span>تماس با ما</span>
        </Link>
      </div>
    </main>
  );
};

export default AboutUSPage;
