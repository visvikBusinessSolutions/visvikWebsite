import { Link } from "react-router-dom";
import ContactPage from "./contact_details";
import Card from "./temp_1";
// import TechTabs from "./temp_2";
import ContactSection from "./temp_3";
import { Temp_4 } from "./temp_4";

const tittle =
  "The Advanced Cybersecurity Solutions we Offer for Today’s Digital Threats";
const paragraph =
  "We offer a range of cybersecurity services, combining advanced technology, expert strategies, and proactive risk management for comprehensive digital security.";
const cybersecurityServices = [
  {
    title: "Network Security",
    description:
      "We deliver network security solutions to protect your digital infrastructure through firewalls, VPNs, and intrusion detection. Our solutions effectively block unauthorized access, data breaches, and cyber threats across your network environment.",
  },
  {
    title: "Endpoint Security",
    description:
      "We ensure device protection with antivirus, anti-malware solutions, mobile device management (MDM), and endpoint detection and response (EDR) to safeguard all endpoints from evolving cyber threats.",
  },
  {
    title: "Identity and Access Management (IAM)",
    description:
      "We provide identity and access management services through identity management solutions, multi-factor authentication (MFA), role-based access controls, and privileged access management (PAM) to ensure secure and streamlined access across your systems.",
  },
  {
    title: "Cloud Security",
    description:
      "Our cloud security solutions, including cloud access security brokers (CASB), cloud security posture management (CSPM), data loss prevention (DLP), and encryption, ensure your cloud environments are secure, compliant, and protected from unauthorized access.",
  },
];
const Cyber = () => {
  return (
    <div className="">
      <div className="bg-[#eef1f9] py-6 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold text-blue-900 leading-snug">
              Transform Your Vision into Robust Cybersecurity Solutions
            </h1>
            <h4 className="text-gray-700 text-base md:text-lg">
              We design and implement custom cybersecurity solutions — helping
              businesses protect their digital assets, ensure compliance, and
              stay resilient against evolving threats..
            </h4>
            <Link to="/contact">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-semibold transition-all duration-300">
                contact Now →
              </button>
            </Link>
          </div>
          <div className="flex justify-center">
            <img
              src="./pages_images/cyber-banner.webp"
              alt="Mobile App Development Illustration"
              className="w-full max-w-md md:max-w-full object-contain"
            />
          </div>
        </div>
      </div>
      <div
        className="md:p-20 p-10 relative rounded-3xl my-2 text-white max-w-6xl mx-auto bg-cover bg-center bg-no-repeat shadow-lg"
        style={{
          backgroundImage: "url('./lines-bg.webp')",
        }}
      >
        <span className="absolute top-0 left-6 text-9xl text-left">“</span>
        <h3 className="md:text-4xl text-xl font-semibold mb-2">
          Build Scalable, Robust Cybersecurity Solutions to Safeguard Your
          Digital Infrastructure & Beyond
        </h3>
        <p className="mb-4">
          Cybersecurity Services by Visvik — Visvik is a leading cybersecurity
          solutions provider offering end-to-end protection for networks,
          applications, and cloud infrastructure. In today’s digital-first
          world, robust security is essential for businesses to protect
          sensitive data, prevent breaches, and stay compliant with evolving
          regulations
        </p>
        <p className="mb-4">
          At Visvik, we combine cutting-edge security technologies with
          strategic expertise to deliver robust, scalable, and proactive
          cybersecurity solutions. From risk assessment to incident response,
          our team ensures every system is fortified to protect your business
          assets, maintain compliance, and foster long-term resilience in
          today’s ever-evolving threat landscape.
        </p>

        <span className="absolute right-6 text-9xl text-right">”</span>
      </div>
      <Card
        data={cybersecurityServices}
        tittle={tittle}
        paragraph={paragraph}
      />
      <ContactSection
        tittle="Want to Protect Your Digital Assets? Contact Us for Customized Solutions"
        paragraph="We excel in providing customized cybersecurity solutions that can protect your digital future."
      />
      <div className="md:py-12 py-6">
        <div className="mx-auto">
          <h2 className="text-center text-2xl md:text-4xl font-bold pb-5">
            Our Application Development Methodology
          </h2>
        </div>
        <div className=" flex justify-center items-center w-full">
          <img
            src="/pages_images/cybersecurity-methodology.webp"
            alt="Lifecycle"
            loading="lazy"
            className="max-w-full  h-auto object-contain"
          />
        </div>
      </div>

      <Temp_4 />
      <ContactPage />
    </div>
  );
};
export default Cyber;
