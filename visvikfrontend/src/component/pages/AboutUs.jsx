import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 text-gray-800">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">
          About Us
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          We are dedicated to transforming your business with innovative digital
          solutions and exceptional services.
        </p>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            src="./25.png"
            alt="Team working"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-3xl font-semibold text-blue-900 mb-6">
            Our Mission
          </h2>
          <p className="mb-6 leading-relaxed text-gray-700 text-lg">
            At VISVIK BUSINESS SOLUTION, our mission is to empower businesses
            through cutting-edge technology and strategic innovation. We believe
            in building lasting partnerships by delivering solutions that drive
            growth and efficiency.
          </p>

          <h2 className="text-3xl font-semibold text-blue-900 mb-6">
            What We Do
          </h2>
          <p className="mb-6 leading-relaxed text-gray-700 text-lg">
            We offer a comprehensive suite of services including AI & Cloud
            solutions, custom software development, cybersecurity, and digital
            marketing. Our experts are committed to understanding your unique
            needs and delivering tailored strategies.
          </p>

          <h2 className="text-3xl font-semibold text-blue-900 mb-6">
            Our Values
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-3 text-lg">
            <li>Customer Centricity: Your success is our top priority.</li>
            <li>Innovation: Staying ahead with the latest technologies.</li>
            <li>Integrity: Transparency and honesty in all we do.</li>
            <li>Excellence: Delivering quality and exceeding expectations.</li>
            <li>Collaboration: Working together to achieve your goals.</li>
          </ul>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-2xl mx-auto">
          Ready to transform your business? Let’s build the future together.
        </p>
        <Link to="/contact">
          <button className="bg-blue-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-800 transition">
            Contact Us
          </button>
        </Link>
      </div>
    </section>
  );
};

export default AboutUs;
