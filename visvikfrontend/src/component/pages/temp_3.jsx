import { Link } from "react-router-dom";
export default function ContactSection() {
  return (
    <div className="bg-[#f5f8fc] py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 grid-cols-1 items-center gap-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            Take Your Brand to New Heights with Powerful Digital Marketing{" "}
            <span className="text-blue-700">Let’s Make It Happen!</span>
          </h2>
          <p className="text-gray-500 mt-4">
            Our team will craft powerful strategies to grow your online
            presence, engage your audience, and drive measurable results for
            your business.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow text-center border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-700">
            Get in Touch Today
          </h3>
          <a
            href="tel:+91-120-5058591"
            className="block text-xl font-bold text-blue-600 mt-1"
          >
            +91-120-5058591
          </a>
          <Link to="/contact">
            <button className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition">
              Contact Us →
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
