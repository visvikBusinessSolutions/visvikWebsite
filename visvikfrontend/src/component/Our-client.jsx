import ClientSlider from "./slider/cleintsweeper";
const client = () => {
  return (
    <>
      <div className="bg-[#ffb86a] py-6 w-full">
        <h2 className="md:text-5xl text-xl text-center text-[#193cb8] font-extrabold">
          Our Clients
        </h2>
        <ClientSlider />
      </div>
    </>
  );
};

export default client;
