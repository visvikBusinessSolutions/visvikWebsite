import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const services = [
  {
    id: 1,
    url: "https://appzglobaltech.com/assets/Group-8673.jpg",
  },
  {
    id: 2,
    url: "https://appzglobaltech.com/assets/Group-8673.jpg",
  },
  {
    id: 3,
    url: "https://appzglobaltech.com/assets/Group-8673.jpg",
  },
  {
    id: 4,
    url: "https://appzglobaltech.com/assets/Group-8673.jpg",
  },
  {
    id: 5,
    url: "https://appzglobaltech.com/assets/Group-8671.jpg",
  },
];

const ClientSlider = () => {
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
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <div className="px-4">
      <Slider {...settings}>
        {services.map((service) => (
          <div key={service.id} className="px-2">
            <div
              className={`rounded-xl p-6 h-32 flex flex-col justify-center items-center`}
            >
              <img
                src={service.url}
                alt={`url not found`}
                className="w-30 h-20 object-contain mb-4 rounded-2xl"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ClientSlider;
