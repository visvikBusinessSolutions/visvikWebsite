import { FaHome, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import ContactCard from "./ContactCard";
import INFO from "./contactinfo";
const Contact = () => {
  return (
    <>
      <div>
        <div className="">
          <div
            className="relative w-full h-[20vh] md:h-[75vh] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/contact-banner.png')" }}
          >
            <div className="absolute inset-0 bg-black/40"></div>

            {/* <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 space-y-4">
              <h2 className="text-orange-500 text-xl md:text-5xl font-bold animate-slideUp">
                CONTACT US
              </h2>

              <p className="text-white text-sm md:text-base max-w-2xl font-bold animate-slideUp">
                ...................................................
              </p>

              <p className="text-white text-sm md:text-base max-w-2xl animate-slideUp">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                vitae ullam nobis. Minus reprehenderit, vitae aliquam illo in
                pariatur omnis voluptatem optio, odio est culpa velit, impedit
                sed eius provident.
              </p>
            </div> */}
          </div>
          <div className="">
            <INFO></INFO>
          </div>
          <div className="w-full bg-white py-12 px-4 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-900 mb-6">
              Visit Our Office
            </h2>

            <div className="w-full h-[400px] rounded-lg overflow-hidden border border-gray-200 shadow-sm">
              <iframe
                title="Company Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.3880782864285!2d77.37955967475644!3d28.61812887567266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef3e209a9c5d%3A0xf67b922c1eb2c241!2sCrystaa%20Tower!5e0!3m2!1sen!2sin!4v1754289753702!5m2!1sen!2sin"
                width="100%"
                alt="location...."
                height="100%"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white text-gray-800 py-10 px-4 md:px-16">
            <ContactCard
              icon={<FaHome />}
              title="VISIT US"
              info="C 30 Sector 63, Noida, (201301)"
            />
            <ContactCard
              icon={<FaPhoneAlt />}
              title="CALL US"
              info="+91-7838826136 | +91-7982481190"
            />
            <ContactCard
              icon={<FaEnvelope />}
              title="CONTACT US"
              info="contact@visvik.in"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
