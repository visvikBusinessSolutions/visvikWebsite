export const Temp_4 = () => {
  return (
    <div
      className="md:py-10 py-6 min-h-[60vh] bg-cover bg-center"
      style={{ backgroundImage: 'url("./banner-bg.webp")' }}
    >
      <div className="max-w-[90%] mx-auto px-3">
        <div className="text-center">
          <p className="text-[28px] leading-[38px] sm:text-[34px] sm:leading-[45px] md:max-w-[75%] mx-auto font-medium text-gray-800">
            Why Choose Visvik for Your Development Needs?
          </p>
        </div>

        <p className="text-[16px] sm:text-[18px] leading-[26px] text-slate-700 py-4 text-center sm:max-w-[75%] mx-auto">
          We deliver scalable, cost-effective services with seamless
          performance, exceptional user experience, and end-to-end support.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 py-8">
          <div className="flex items-start gap-5">
            <img
              src="/svg_file/transparency.svg"
              alt="Transparency"
              className="h-[70px] w-[70px]"
            />
            <div>
              <p className="text-lg font-semibold text-slate-800">
                100% Transparency
              </p>
              <p className="text-sm text-slate-600 py-2 leading-[23px]">
                We maintain 100% transparency and precision in every aspect with
                our clients, from strategy roadmapping to final deployment.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-5">
            <img
              src="/svg_file/customer-centric.svg"
              alt="Customer-Centric"
              className="h-[70px] w-[70px]"
            />
            <div>
              <p className="text-lg font-semibold text-slate-800">
                Customer-Centric
              </p>
              <p className="text-sm text-slate-600 py-2 leading-[23px]">
                We adopt a customer-centric approach tailored to each client’s
                specific needs, ensuring maximum efficiency.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-5">
            <img
              src="/svg_file/motivation-and-growth.svg"
              alt="Motivation & Growth"
              className="h-[70px] w-[70px]"
            />
            <div>
              <p className="text-lg font-semibold text-slate-800">
                Motivation & Growth
              </p>
              <p className="text-sm text-slate-600 py-2 leading-[23px]">
                We provide complete support, empowering clients to achieve
                substantial growth and maximize ROI.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-5">
            <img
              src="/svg_file/flexible-engagement.svg"
              alt="Flexible Engagements"
              className="h-[70px] w-[70px]"
            />
            <div>
              <p className="text-lg font-semibold text-slate-800">
                Flexible Engagements
              </p>
              <p className="text-sm text-slate-600 py-2 leading-[23px]">
                We offer flexible engagement models tailored to meet the unique
                needs of every client.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-5">
            <img
              src="/svg_file/work-efficiency.svg"
              alt="Work Efficiency"
              className="h-[70px] w-[70px]"
            />
            <div>
              <p className="text-lg font-semibold text-slate-800">
                Work Efficiency
              </p>
              <p className="text-sm text-slate-600 py-2 leading-[23px]">
                Our team works with high efficiency to deliver exactly what you
                expect.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-5">
            <img
              src="/svg_file/frontent-support-maitenance.svg"
              alt="24x7 Support"
              className="h-[70px] w-[70px]"
            />
            <div>
              <p className="text-lg font-semibold text-slate-800">
                24×7 Support
              </p>
              <p className="text-sm text-slate-600 py-2 leading-[23px]">
                We provide 24×7 support and maintenance services globally,
                ensuring assistance is always available.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
