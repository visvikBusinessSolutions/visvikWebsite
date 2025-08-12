import { Link } from "react-router-dom";
import TechTabs from "./temp_2";
import ContactSection from "./temp_3";
import { Temp_4 } from "./temp_4";

const awsServices = [
  "AWS MediaLive",
  "AWS CloudWatch",
  "AWS Lambda",
  "Amazon Comprehend",
  "AWS Elemental MediaPackage",
  "Amazon Lex",
  "Amazon Transcribe",
  "Amazon EC2",
  "AWS Elemental MediaTailor",
  "Amazon CloudFront",
  "Amazon Translate",
  "AWS Kendra",
  "AWS Elemental MediaConvert",
  "Amazon QuickSight",
  "Amazon DynamoDB",
  "Amazon RDS",
  "Amazon IVS",
  "Amazon Pinpoint",
  "AWS WAF",
  "Amazon S3",
  "Amazon Polly",
  "Amazon EKS",
];

const Aws = () => {
  return (
    <div className="">
      <div className="bg-[#eef1f9] py-6 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold text-blue-900 leading-snug">
              Transform Your Ideas into Scalable AWS Solutions
            </h1>
            <h4 className="text-gray-700 text-base md:text-lg">
              We build and deploy custom AWS applications and cloud
              architectures — enabling businesses to transform ideas into
              powerful digital solutions
            </h4>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-semibold transition-all duration-300">
              contact Now →
            </button>
          </div>
          <div className="flex justify-center">
            <img
              src="./mobile-temp.png"
              alt="Mobile App Development Illustration"
              className="w-full max-w-md md:max-w-full object-contain"
            />
          </div>
        </div>
      </div>
      <div
        className="p-20 relative rounded-3xl my-2 text-white max-w-6xl mx-auto bg-cover bg-center bg-no-repeat shadow-lg"
        style={{
          backgroundImage: "url('./lines-bg.webp')",
        }}
      >
        <span className="absolute top-0 left-6 text-9xl text-left">“</span>
        <h3 className="md:text-4xl text-xl font-semibold mb-2">
          Build Scalable, High-Performance Applications on AWS
        </h3>
        <p className="mb-4">
          AWS Cloud Solutions by Visvik — Visvik is a leading cloud consulting
          and development company offering end-to-end solutions for businesses
          of all sizes. In today’s digital-first world, AWS-powered solutions
          are essential to improve scalability, enhance security, optimize
          costs, and stay competitive
        </p>
        <p className="mb-4">
          At Visvik, we combine cutting-edge AWS cloud technology with
          innovative architecture to deliver scalable, secure, and
          high-performing solutions. From concept to deployment, our team
          ensures every AWS-powered application is tailored to meet your
          business goals, enhance operational efficiency, and drive long-term
          growth in today’s competitive market.
        </p>

        <span className="absolute right-6 text-9xl text-right">”</span>
      </div>
      <div className="bg-white py-10">
        <h2 className="text-center text-2xl font-semibold mb-10">
          End-to-End Comprehensive{" "}
          <span className="text-blue-600">AWS Solutions</span> for Scalable and
          Secure Operations
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
          {awsServices.map((service, index) => (
            <div
              key={index}
              className="flex items-center justify-center border border-slate-300 rounded-lg p-3 shadow hover:shadow-md transition text-center"
            >
              {service}
            </div>
          ))}
        </div>
      </div>
      <ContactSection />
      <div className="md:py-12 py-6">
        <div className="mx-auto">
          <h2 className="text-center text-2xl md:text-4xl font-bold pb-5">
            Our Application Development Methodology
          </h2>
        </div>
        <div className=" flex justify-center items-center w-full">
          <img
            src="/pages_images/backend.webp"
            alt="Lifecycle"
            loading="lazy"
            className="max-w-full  h-auto object-contain"
          />
        </div>
      </div>

      <TechTabs />
      <Temp_4 />
    </div>
  );
};

export default Aws;
