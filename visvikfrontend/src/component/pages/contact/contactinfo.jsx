import { useForm } from "react-hook-form";

const INFO = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data: ", data);
    reset();
  };

  return (
    <div className="bg-[#15213c] md:py-12 md:px-12 py-6 px-6">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6 items-center">
        <div className="text-white space-y-4 md:px-6 md:py-6">
          <h2 className="text-xl md:text-3xl font-bold">
            TO GROW YOUR BUSINESS CONTACT US
          </h2>
          <p>
            Web analytics is pointless if you don't get actionable insights that
            you can integrate into your marketing strategy. Visvik Business
            Solution's analysts will be there to help you through the entire
            process. They will ensure you fully understand the data and offer
            suggestions for improving it. Visvik Business Solution is a leader
            in web analytics and can do it all for our clients. With our
            cutting-edge and state-of-the-art technology, we have been working
            hard to help our clients reach the heights of success. So, stop
            waiting and take action.
          </p>
        </div>

        <div className="shadow border border-white rounded-xl p-4 bg-white/10 md:px-6 md:py-6">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 md:px-6 md:py-6"
          >
            <input
              {...register("fullName", { required: true })}
              type="text"
              placeholder="FULL NAME*"
              className="w-full px-3 py-2 border-b-1 border-white focus:outline-none bg-transparent text-white placeholder-white"
            />
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="EMAIL*"
              className="w-full px-3 py-2 border-b-1 border-white focus:outline-none bg-transparent text-white placeholder-white"
            />
            <input
              {...register("phone", { required: true })}
              type="text"
              placeholder="PHONE NO*"
              className="w-full px-3 py-2 border-b-1 border-white focus:outline-none bg-transparent text-white placeholder-white"
            />
            <textarea
              {...register("message", { required: true })}
              placeholder="YOUR MESSAGE*"
              className="w-full px-3 py-2 border-b-1 border-white focus:outline-none bg-transparent text-white placeholder-white"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-500 py-2 rounded-full font-bold hover:bg-blue-600 text-white"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default INFO;
