import { useRef } from "react";
import Slider from "react-slick";

const baseUrl = "https://your-base-url.com";
const data = [
  {
    id: 1,
    client_name: "John Doe",
    client_role: "CEO, Company",
    testimonial:
      "They don’t just deliver projects—they deliver peace of mind. Truly outstanding service!",
    media_path: "./4.png",
  },
  {
    id: 2,
    client_name: "Jane Smith",
    client_role: "CTO, CompanyY",
    testimonial:
      "From confusion to clarity—the team guided me every step of the way. Couldn’t be happier!",
    media_path: "./4.png",
  },
];
const pageData = {
  testimonial_title: "What Our Clients Say",
  testimonial_description: "Here's what clients think about working with us.",
};
export default function TestimonialsSection() {
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  if (!data.length) {
    return <p className="text-center py-10">No testimonials available.</p>;
  }

  return (
    <section className="  pt-20 pb-10">
      <div className="px-4 md:px-20 lg:px-32 mx-auto">
        <h2 className="text-2xl text-center font-bold mb-2">
          {pageData.testimonial_title || "Client Testimonials"}
        </h2>
        <hr className="border-t-2 w-20 mx-auto border-gray-400 mb-8" />

        {pageData.testimonial_description && (
          <div className="text-center mb-8">
            {pageData.testimonial_description || "Client Testimonials"}
          </div>
        )}

        <div className="relative">
          {data.length > 1 ? (
            <>
              <Slider {...settings} ref={sliderRef}>
                {data.map((item, index) => (
                  <div
                    key={item.id || item.client_name || index}
                    className="rounded-xl lg:py-10 lg:px-20 relative bg-[#dfecff] "
                  >
                    <div>
                      <img
                        src={`${item.media_path}`}
                        alt={item.client_name}
                        width={100}
                        height={100}
                        loading="lazy"
                        className="mx-auto h-28 w-28 object-cover object-center translate-y-10 lg:translate-y-0 rounded-full border-2 border-blue-900 z-10 mb-10 md:mb-0 overflow-hidden"
                      />
                    </div>

                    <div className="p-20 relative border-2 border-blue-300 rounded-3xl my-2 bg-white shadow">
                      <span className="absolute top-0 left-6 text-9xl text-left opacity-40">
                        “
                      </span>
                      <span>{item.testimonial}</span>
                      <span className="absolute right-6 text-9xl text-right opacity-40">
                        ”
                      </span>
                    </div>
                  </div>
                ))}
              </Slider>
            </>
          ) : (
            <div className="bg-transparent rounded-sm lg:py-10 lg:px-20 relative">
              <div>
                <img
                  src={`${baseUrl}/${data[0].media_path}`}
                  alt={data[0].client_name}
                  width={100}
                  height={100}
                  className="mx-auto w-auto hover:scale-110 transition-all duration-700 ease-in-out max-h-[100px] z-10"
                />
              </div>

              <div className="p-20 relative">
                <span className="absolute top-0 left-6 text-9xl text-left opacity-40">
                  “
                </span>
                <span
                  dangerouslySetInnerHTML={{ __html: data[0].testimonial }}
                />
                <span className="absolute right-6 text-9xl text-right opacity-40">
                  ”
                </span>
              </div>

              <div className="text-center mb-10 lg:mb-0">
                <p className="font-bold text-lg">{data[0].client_name}</p>
                <p>{data[0].client_role}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
