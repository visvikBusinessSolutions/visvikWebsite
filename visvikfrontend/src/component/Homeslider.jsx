import TypingText from "./typingtest";

const MyCarousel = () => {
  return (
    <div className="w-full relative">
      <div
        className="h-[60vh] md:h-[75vh] bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: "url('/4.png')" }}
      ></div>

      <div className="absolute inset-0 bg-black/40 bg-opacity-10"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-white md:text-6xl text-4xl font-extrabold mb-4 ">
          <TypingText
            text={"Emmpower Your Digital Future"}
            speed={300}
          ></TypingText>
          {/* Empower Your Digital Future */}
        </h1>
        <p className="text-white md:text-xl font-semibold animate-slideUp">
          Innovative solutions, crafted for success.
        </p>
      </div>
    </div>
  );
};

export default MyCarousel;
