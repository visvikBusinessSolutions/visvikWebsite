const Desing_Page = () => {
  return (
    <div className="">
      <div className="bg-[#eef1f9] py-6 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold text-blue-900 leading-snug">
              Transform Your Ideas into Powerful Mobile Apps
            </h1>
            <h4 className="text-gray-700 text-base md:text-lg">
              We design and develop custom mobile applications for Android, iOS,
              and cross-platform — helping businesses turn ideas into innovative
              digital solutions.
            </h4>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-semibold transition-all duration-300">
              contact Now →
            </button>
          </div>
          <div className="flex justify-center">
            <img
              src="./mobile-app-development-banner.png"
              alt="Mobile App Development Illustration"
              className="w-full max-w-md md:max-w-full object-contain"
            />
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
        <section className="bg-gray-100 p-6 rounded-lg text-center">
          <h3 className="text-xl font-semibold mb-2">
            Build Scalable, Engaging Mobile Apps for Android, iOS & Beyond
          </h3>
          <p className="mb-4">
            Custom Mobile App Development Services by Visvik Visvik is a leading
            mobile app development company offering end-to-end solutions for
            Android, iOS, and cross-platform applications. In today’s
            digital-first world, mobile apps are essential for businesses to
            improve customer engagement, increase sales, and stay competitive.
          </p>
          {/* <Link to="/contact">
        </Link> */}
        </section>
      </div>
    </div>
  );
};
export default Desing_Page;
