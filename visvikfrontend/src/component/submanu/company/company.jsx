import React from "react";
import { Link } from "react-router-dom";

const companyData = [
  {
    title: "About Us",
    color: "text-blue-900",
    items: [
      "Discover our success, mission, and values driving innovative digital solutions.",
    ],
    link: "/about",
  },
  {
    title: "Work Culture",
    color: "text-blue-900",
    items: [
      "Experience a collaborative, growth-focused work environment with a diverse culture.",
    ],
    link: "/workculture",
  },
  {
    title: "Careers",
    color: "text-blue-900",
    items: [
      "Explore exciting opportunities to innovate, learn, and lead in technology.",
    ],
    link: "/careers",
  },
  {
    title: "Our Partners",
    color: "text-blue-900",
    items: [
      "Collaborating with trusted partners to bring impactful projects to life.",
    ],
    link: "/ourpartners",
  },
  {
    title: "Event / Webinar",
    color: "text-blue-900",
    items: [
      "Explore our global events and webinars to understand our impact better.",
    ],
    link: "/event",
  },
];

const ServiceCategory = ({ title, color, items, link }) => (
  <div className="">
    <Link to={link}>
      <h4 className={`text-md font-semibold mb-2 ${color}`}>{title}</h4>
    </Link>
    {items.map((item, idx) => (
      <p key={idx} className="text-sm text-gray-600 mb-2">
        {item}
      </p>
    ))}
  </div>
);

const CompanyInfoMenu = () => {
  return (
    <div className="absolute mega-menu left-1/2 md:pt-8 md:pr-20 p-4 z-50 transform -translate-x-1/2">
      <div className=" bg-white shadow-md rounded">
        <div className="mari">
          <div className="w-[750px] lg:w-[850px] mx-auto mt-3 bg-white p-8 rounded-xl">
            <div className="flex flex-col md:flex-row gap-10 ">
              {companyData.map((category, idx) => (
                <ServiceCategory
                  key={idx}
                  title={category.title}
                  color={category.color}
                  items={category.items}
                  link={category.link}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfoMenu;
