import { useState } from "react";
import { FaParagraph } from "react-icons/fa";
// const content = {
//   "Backend & Cloud Services": [
//     { name: "Nodejs", icon: "/svg_file/nodejs.svg" },
//     { name: "Firebase", icon: "/svg_file/firebase.svg" },
//     { name: "Aws", icon: "/icon/aws.svg" },
//   ],
//   Language: [
//     { name: "Php", icon: "/svg_file/php.svg" },
//     { name: "Kotlin", icon: "/svg_file/kotlin.svg" },
//     { name: "Java", icon: "/svg_file/java.svg" },
//     { name: "JavaScript", icon: "/svg_file/javascript.svg" },
//   ],
//   Frameworks: [
//     { name: "React", icon: "/svg_file/react.svg" },
//     { name: "Flutter", icon: "/svg_file/flutter.svg" },
//     { name: "Laravel", icon: "/svg_file/laravel.svg" },
//   ],
//   Database: [
//     { name: "MySQL", icon: "/svg_file/mysql.svg" },
//     { name: "MongoDB", icon: "/svg_file/mongo.svg" },
//     { name: "PostgreSQL", icon: "/svg_file/postgresql.svg" },
//   ],
// };
// export default function TechTabs({ content, tittle, para }) {
//   const [activeTab, setActiveTab] = useState("Language");

//   return (
//     <div className="text-center md:py-12 px-4 py-6">
//       <h2 className="text-2xl md:text-3xl font-bold mb-2 ">{tittle}</h2>
//       <p className="text-gray-500 mb-6 text-sm md:text-base max-w-2xl mx-auto">
//         {para}
//       </p>

//       <div className="flex flex-wrap justify-center gap-3 mb-8">
//         {Object.keys(content).map((tab) => (
//           <button
//             key={tab}
//             className={`px-3 py-2 text-sm md:text-base border rounded-md transition-all duration-200 ${
//               activeTab === tab
//                 ? "border-blue-500 bg-blue-50 text-blue-600 shadow-sm"
//                 : "border-gray-300 hover:border-blue-400 hover:bg-gray-50"
//             }`}
//             onClick={() => setActiveTab(tab)}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       {/* Tab Content */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-4xl mx-auto">
//         {content[activeTab].map((item) => (
//           <div
//             key={item.name}
//             className="flex flex-col items-center bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-all duration-200"
//           >
//             <img
//               src={item.icon}
//               alt={item.name}
//               className="w-10 h-10 md:w-12 md:h-12 mb-2 object-contain"
//             />
//             <span className="text-sm md:text-base font-medium">
//               {item.name}
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// import { useState } from "react";

export default function TechTabs({ content, tittle, para }) {
  const firstTab = Object.keys(content)[0]; // pehla tab select by default
  const [activeTab, setActiveTab] = useState(firstTab);

  return (
    <div className="text-center md:py-12 px-4 py-6">
      <h2 className="text-2xl md:text-3xl font-bold mb-2">{tittle}</h2>
      <p className="text-gray-500 mb-6 text-sm md:text-base max-w-2xl mx-auto">
        {para}
      </p>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {Object.keys(content).map((tab) => (
          <button
            key={tab}
            className={`px-3 py-2 text-sm md:text-base border rounded-md transition-all duration-200 ${
              activeTab === tab
                ? "border-blue-500 bg-blue-50 text-blue-600 shadow-sm"
                : "border-gray-300 hover:border-blue-400 hover:bg-gray-50"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-4xl mx-auto">
        {content[activeTab].map((item) => (
          <div
            key={item.name}
            className="flex flex-col items-center bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-all duration-200"
          >
            <img
              src={item.icon}
              alt={item.name}
              className="w-10 h-10 md:w-12 md:h-12 mb-2 object-contain"
            />
            <span className="text-sm md:text-base font-medium">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
