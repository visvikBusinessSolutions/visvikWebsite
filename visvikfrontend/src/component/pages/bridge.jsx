import React, { useEffect, useState } from "react";
import Loader from "../loader";
import { Link } from "react-router-dom";
import axios from "axios";
const MobileAppServices = ({ pageKey }) => {
  const [content, setContent] = useState(null);

  const getPageContent = async (key) => {
    const url = `./static_page_contant/${key}.json`;
    if (!url) throw new Error(`URL not found for key: ${key}`);

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error(`Error fetching content for "${key}":`, error);
      throw error;
    }
  };

  useEffect(() => {
    getPageContent(pageKey)
      .then((data) => setContent(data))
      .catch((err) => console.error("Failed to load content", err));
  }, [pageKey]);

  if (!content) return <Loader />;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blue-800">{content.title}</h1>
        <p className="italic text-gray-600 mt-2">{content.subtitle}</p>
      </div>
      <section className="mb-10">
        <p>{content.introduction}</p>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">
          {content.servicesTitle}
        </h2>
        <ul className="list-disc list-inside space-y-2">
          {content.services.map((service, index) => (
            <li key={index}>
              <strong>{service.title}:</strong> {service.description}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">
          {content.whyChooseUsTitle}
        </h2>
        <ul className="list-disc list-inside space-y-2">
          {content.whyChooseUs.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </section>

      <section className="bg-gray-100 p-6 rounded-lg text-center">
        <h3 className="text-xl font-semibold mb-2">{content.cta.heading}</h3>
        <p className="mb-4">{content.cta.description}</p>
        <Link to="/contact">
          <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-6 rounded transition">
            {content.cta.button}
          </button>
        </Link>
      </section>
    </div>
  );
};

export default MobileAppServices;
