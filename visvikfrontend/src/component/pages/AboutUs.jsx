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
          Visvik Business Solution LLP is a dynamic IT startup, founded with a
          vision to redefine the digital landscape through innovative technology
          solutions. Based in Noida, Uttar Pradesh, our team of passionate
          technologists and business strategists is dedicated to delivering
          excellence across all spectrums of IT projects.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            src="./21.png"
            alt="Visvik Team"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <div>
          <h2 className="text-3xl font-semibold text-blue-900 mb-6">
            Our Story
          </h2>
          <p className="mb-6 leading-relaxed text-gray-700 text-lg">
            Founded by a group of passionate technologists and innovators,
            Visvik was born out of a desire to bridge the gap between business
            challenges and technological solutions. Our journey is rooted in a
            deep understanding of industry needs, a relentless pursuit of
            excellence, and an unwavering commitment to our clients’ growth.
          </p>

          <h2 className="text-3xl font-semibold text-blue-900 mb-6">
            Our Mission
          </h2>
          <p className="mb-6 leading-relaxed text-gray-700 text-lg">
            Our mission is to empower organizations to unlock their full
            potential through world-class IT solutions. We strive to deliver
            transformative experiences and measurable results, ensuring that
            technology becomes a true enabler for your business.
          </p>

          <h2 className="text-3xl font-semibold text-blue-900 mb-6">
            Our Vision
          </h2>
          <p className="mb-6 leading-relaxed text-gray-700 text-lg">
            To be recognized globally as a leader in IT innovation, providing
            solutions that are not only robust and scalable but also
            future-ready and tailored to the unique needs of each client.
          </p>
        </div>
      </div>

      {/* Who We Are */}
      <div className="mt-16">
        <h2 className="text-3xl font-semibold text-blue-900 mb-6">
          Who We Are
        </h2>
        <p className="leading-relaxed text-gray-700 text-lg mb-6">
          At Visvik, we believe in the power of technology to transform
          businesses and empower growth. Our expert team brings together a
          diverse range of skills and deep industry experience, enabling us to
          tackle projects of any scale and complexity. From startups looking for
          digital acceleration to established enterprises seeking modernization,
          we are your trusted partner in the journey of digital transformation.
        </p>
      </div>

      {/* What Sets Us Apart */}
      <div className="mt-16">
        <h2 className="text-3xl font-semibold text-blue-900 mb-6">
          What Sets Us Apart
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-3 text-lg">
          <li>
            End-to-End Expertise: From ideation and strategy to deployment and
            support.
          </li>
          <li>
            Cutting-Edge Technologies: AI, ML, Cloud, Blockchain, IoT and more.
          </li>
          <li>
            Custom Solutions: Bespoke IT solutions tailored to your business
            needs.
          </li>
          <li>
            Agile Approach: Flexible methodology ensuring timely delivery.
          </li>
          <li>
            Client-Centric Philosophy: Collaboration and transparency at every
            step.
          </li>
          <li>
            Quality Assurance: Rigorous testing and adherence to the highest
            standards.
          </li>
          <li>
            Innovation Culture: Creativity and curiosity driving impactful
            solutions.
          </li>
        </ul>
      </div>

      {/* What We Do */}
      <div className="mt-16">
        <h2 className="text-3xl font-semibold text-blue-900 mb-6">
          What We Do
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-3 text-lg">
          <li>
            Custom Software Development: Tailored solutions for web, mobile, and
            desktop.
          </li>
          <li>
            Enterprise Application Integration: Seamless integration of complex
            systems.
          </li>
          <li>
            Cloud Services & DevOps: Migration, management, and optimization.
          </li>
          <li>UI/UX Design: Creating intuitive, impactful user experiences.</li>
          <li>
            IT Consulting: Strategic guidance to solve business challenges.
          </li>
          <li>
            Cybersecurity & Compliance: Robust frameworks for data protection.
          </li>
        </ul>
      </div>

      {/* Our Services */}
      <div className="mt-16">
        <h2 className="text-3xl font-semibold text-blue-900 mb-6">
          Our Services
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-3 text-lg">
          <li>
            Custom Software Development: Web, mobile, desktop & cross-platform.
          </li>
          <li>
            Enterprise Application Integration: Streamlining business
            operations.
          </li>
          <li>
            Cloud Solutions & DevOps: Migration, optimization, automation.
          </li>
          <li>UI/UX Design: Stunning and user-friendly experiences.</li>
          <li>
            IT Consulting & Advisory: Strategic insights and ROI maximization.
          </li>
          <li>
            Cybersecurity & Data Protection: Safeguarding data & compliance.
          </li>
          <li>Digital Transformation: Embracing innovation and efficiency.</li>
          <li>Maintenance & Support: 24/7 support for IT infrastructure.</li>
        </ul>
      </div>

      {/* Our Approach */}
      <div className="mt-16">
        <h2 className="text-3xl font-semibold text-blue-900 mb-6">
          Our Approach
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-3 text-lg">
          <li>
            Integrity: Transparency, honesty, and ethics in every interaction.
          </li>
          <li>Excellence: Delivering solutions that exceed expectations.</li>
          <li>Innovation: Embracing new ideas to stay ahead.</li>
          <li>Customer Success: Your success is our success.</li>
          <li>Teamwork: Collaboration and respect driving achievements.</li>
        </ul>
      </div>

      {/* Our Team */}
      <div className="mt-16">
        <h2 className="text-3xl font-semibold text-blue-900 mb-6">Our Team</h2>
        <p className="leading-relaxed text-gray-700 text-lg">
          At the heart of Visvik is a team of highly skilled
          professionals—engineers, designers, analysts, and strategists—who
          bring deep expertise and a passion for technology. Our collaborative
          work environment fosters innovation, continuous learning, and personal
          growth, ensuring our clients always receive the best solutions.
        </p>
      </div>

      {/* Our Clients */}
      <div className="mt-16">
        <h2 className="text-3xl font-semibold text-blue-900 mb-6">
          Our Clients
        </h2>
        <p className="leading-relaxed text-gray-700 text-lg">
          We proudly serve a diverse clientele, from ambitious startups to
          established enterprises, across industries like finance, healthcare,
          retail, education, and manufacturing. Our portfolio reflects
          adaptability, versatility, and commitment to delivering results.
        </p>
      </div>

      {/* Why Choose Us */}
      <div className="mt-16">
        <h2 className="text-3xl font-semibold text-blue-900 mb-6">
          Why Choose Visvik?
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-3 text-lg">
          <li>
            Expert Team: Certified, experienced, and passionate professionals.
          </li>
          <li>
            Versatile Solutions: Execution across domains, technologies, and
            scales.
          </li>
          <li>Proactive Support: Dedicated assistance at every stage.</li>
          <li>
            Proven Track Record: Multiple successful projects with measurable
            impact.
          </li>
          <li>Transparent Process: Clear communication and accountability.</li>
          <li>Competitive Pricing: Maximum value for your investment.</li>
        </ul>
      </div>

      {/* Contact */}
      <div className="mt-16 text-center">
        <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-2xl mx-auto">
          Ready to elevate your business with robust IT solutions? Let's connect
          and build the future together.
        </p>
        <p className="mb-2 font-semibold">
          C - 30, Sector 63, Noida, Uttar Pradesh - 201301
        </p>
        <p className="mb-6">
          Email:{" "}
          <a href="mailto:contact@visvik.in" className="text-blue-600">
            contact@visvik.in
          </a>
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
