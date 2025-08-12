import Category from "./Catagory";
const ServicesGrid = () => {
  const data = [
    {
      title: "AI & Cloud",
      items: [
        { label: "AWS", icon: "./icon/aws.svg", href: "/aws" },
        {
          label: "Cybersecurity",
          icon: "./icon/cybersecuirty.svg",
          href: "/cybersercurity",
        },

        {
          label: "DevOps",
          icon: "./icon/devops-engineering.svg",
          href: "/devops",
        },
      ],
    },
    {
      title: "Design",
      items: [
        {
          label: "Mobile App Development",
          icon: "./icon/mobile-app-development.svg",
          href: "/mobile",
        },
        {
          label: "Native App Development",
          icon: "./icon/native.svg",
          href: "/app",
        },
        {
          label: "Software Development",
          icon: "./icon/software-development.svg",
          href: "/software",
        },
        {
          label: "Cross Platform Development",
          icon: "./icon/h-crossplatform.svg",
          href: "/cross_platform_development",
        },
        {
          label: "IOT Development",
          icon: "./icon/h-iot.svg",
          href: "/iot_development",
        },
        {
          label: "UI & UX Designing",
          icon: "./icon/h-uiux.svg",
          href: "/ui&ux",
        },
        {
          label: "Website Development",
          icon: "./icon/h-webdev.svg",
          href: "/website",
        },
      ],
    },
    {
      title: "Digital & IT Solutions",
      items: [
        {
          label: "Digital Transformation",
          icon: "./icon/h-digital-transformation.svg",
          href: "/digitaltransformation",
        },
        {
          label: "Managed IT Services",
          icon: "./icon/managed-services.svg",
          href: "/managed_it_services",
        },
        {
          label: "Streaming Services",
          icon: "./icon/streaming-services.svg",
          href: "/streaming_services",
        },
        {
          label: "Digital Marketing Services",
          icon: "./icon/digital-marketing-services.svg",
          href: "/digital_marketing-services",
        },
        {
          label: "Cloud Engineering",
          icon: "./icon/h-cloud-engeering.svg",
          href: "/cloud_engineering",
        },
      ],
    },
  ];

  return (
    <div className="absolute mega-menu left-1/2 md:pt-8 md:pr-20 p-4 z-50 transform -translate-x-1/2">
      <div className="bg-white shadow-md rounded">
        <div className="w-[750px] lg:w-[850px] mx-auto mt-3 bg-white p-8 rounded-xl">
          <div className="flex flex-col md:flex-row gap-10">
            {data.map((category, idx) => (
              <Category
                key={idx}
                title={category.title}
                items={category.items}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesGrid;
