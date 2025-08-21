const Welcome = ({ userName = "VISVIK" }) => {
  return (
    <div
      className="bg-gradient-to-r from-blue-50 via-white to-blue-50 
                 p-6 sm:p-8 rounded-2xl mb-6 border border-gray-100
                 opacity-0 translate-y-5 animate-fadeIn"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {}
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
            WELCOME, <span className="text-blue-600">{userName}</span>!
          </h1>
        </div>
        <p className="text-sm sm:text-base text-gray-500 hidden sm:block">
          Welcome to your dashboard
        </p>
      </div>
    </div>
  );
};

export default Welcome;
