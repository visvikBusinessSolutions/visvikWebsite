import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaBullhorn,
  FaProjectDiagram,
  FaCogs,
  FaLaptopCode,
  FaMobileAlt,
  FaDigitalOcean,
  FaCode,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Digital Marketing Service",
    icon: <FaBullhorn size={60} />,
    bgColor: "bg-blue-500",
    textColor: "text-white",
  },
  {
    id: 2,
    title: "CRM Development",
    icon: <FaProjectDiagram size={60} />,
    bgColor: "bg-orange-300",
    textColor: "text-black",
  },
  {
    id: 3,
    title: "ERP Development",
    icon: <FaCogs size={60} />,
    bgColor: "bg-blue-500",
    textColor: "text-white",
  },
  {
    id: 4,
    title: "Web Development",
    icon: <FaLaptopCode size={60} />,
    bgColor: "bg-orange-300",
    textColor: "text-black",
  },
  {
    id: 5,
    title: "Mobile Development",
    icon: <FaMobileAlt size={60} />,
    bgColor: "bg-blue-500",
    textColor: "text-black",
  },
  {
    id: 6,
    title: "Digital Services",
    icon: <FaDigitalOcean size={60} />,
    bgColor: "bg-orange-300",
    textColor: "text-black",
  },
  {
    id: 7,
    title: "Software Development",
    icon: <FaCode size={60} />,
    bgColor: "bg-blue-500",
    textColor: "text-black",
  },
];

const ServiceSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    pauseOnHover: false,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="px-2 md:px-8">
      <Slider {...settings}>
        {services.map((service) => (
          <div key={service.id} className="px-2">
            <div
              className={`rounded-xl p-6 h-64 flex flex-col justify-center items-center ${service.bgColor}`}
            >
              <div className="mb-4 text-center text-white">{service.icon}</div>
              <h3
                className={`text-lg font-semibold text-center ${service.textColor}`}
              >
                {service.title}
              </h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ServiceSlider;
