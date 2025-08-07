import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const services = [
  {
    id: 1,
    url: "./svg_file/php.svg",
    name: "php",
  },
  {
    id: 2,
    url: "./svg_file/laravel.svg",
    name: "laravel",
  },
  {
    id: 3,
    url: "./svg_file/nodejs.svg",
    name: "nodejs",
  },
  {
    id: 4,
    name: "React",
    url: "./svg_file/react.svg",
  },
  {
    id: 5,
    name: "wordpress",
    url: "./svg_file/wordpress.svg",
  },
];
const Tech = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };
  return (
    <section>
      <div className="px-2 md:px-12 relative bg-[url(./3.png)] bg-no-repeat bg-center bg-cover bg-fixed overflow-hidden md:py-8 py-4">
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="relative md:mx-6 mx-3 my-2 text-white z-10">
          <h3 className="md:text-4xl text-2xl font-bold">
            We Deal With Tech...
          </h3>
          <p className="text-[18px] my-2 leading-8 ">
            Below are some of the languages and frameworks we love and use
            extensively. The choice of technology for a project depends on its
            scale and scope. Based on an extensive discussion and understanding
            of your requirement, we choose the tech stack that best suits you
          </p>
        </div>
        <div className="relative z-10">
          <Slider {...settings}>
            {services.map((service) => (
              <div key={service.id} className="px-2 md:px-8 text-center">
                <div className="rounded-xl p-6 h-full flex flex-col justify-center items-center ">
                  <img
                    src={service.url}
                    alt="url not found"
                    className="w-30 h-30 object-contain mb-4 rounded-2xl"
                  />
                </div>
                <span className="text-white  md:text-2xl text-xl ">
                  {service.name}
                </span>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Tech;
