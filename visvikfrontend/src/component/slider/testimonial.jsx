import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const services = [
  { title: "UI/UX Design" },
  { title: "Web Development" },
  { title: "Mobile Apps" },
  { title: "DevOps" },
  { title: "Cloud Services" },
];

// const LatestPosts = ({ services }) => {
const LatestPosts = () => {
  const settings = {
    infinite: true,
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 0, // continuous effect
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <section
      className="container overflow-hidden rounded-xl z-10 my-5 md:my-12"
      style={{ backgroundColor: "#051c38" }}
    >
      <h2 className="text-white text-center text-2xl md:text-4xl font-bold py-2 md:py-6">
        Latest Post
      </h2>

      <Slider {...settings}>
        {services.map((item, index) => (
          <div key={index} className="text-center px-2">
            <div className="bg-transparent py-6">
              <h2 className="text-white text-lg md:text-xl font-semibold">
                {item.title}
              </h2>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default LatestPosts;
