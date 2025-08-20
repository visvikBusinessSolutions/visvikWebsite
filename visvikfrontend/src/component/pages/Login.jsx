import { useState } from "react";
import { useForm } from "react-hook-form";
import api from "../../api";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [usersData, setUsersData] = useState({
    email: "",
    password: "",
  });

  const [errorMsg, setErrorMsg] = useState("");

  const onSubmitSignIn = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/v1/auth/login", usersData);
      const data = res.data;
      console.log("Login Success:", data);
      localStorage.setItem("token", data.token);
      navigate("/admin");
      setErrorMsg("");
    } catch (err) {
      const msg = err.response?.data?.error || "Login failed";
      setErrorMsg(msg);
      console.log(msg);
    }
  };

  const [toggle, setToggle] = useState(false);
  const {
    register,
    formState: { errors },
  } = useForm();

  const handleSignIn = () => setToggle(false);
  // const handleSignUp = () => setToggle(true);

  return (
    <div
      className="bg-cover bg-center h-screen w-full flex justify-center items-center text-white"
      style={{ backgroundImage: "url('./21.png')" }}
    >
      <div className="bg-black/40 bg-opacity-30 p-8 rounded-lg w-full max-w-sm space-y-6">
        <div className="flex justify-center space-x-8">
          <button
            onClick={handleSignIn}
            className={`text-lg font-semibold border-b-4 pb-1 ${
              !toggle ? "border-blue-500" : "border-transparent"
            }`}
          >
            Sign In
          </button>
          {/* <button
            onClick={handleSignUp}
            className={`text-lg font-semibold border-b-4 pb-1 ${
              toggle ? "border-blue-500" : "border-transparent"
            }`}
          >
            Sign Up
          </button> */}
        </div>
        {!toggle ? (
          <form onSubmit={onSubmitSignIn} className="space-y-4">
            <div>
              <label className="block mb-1">EMAIL</label>
              <input
                {...register("signinUsername", { required: true })}
                type="text"
                name="email"
                onChange={(e) =>
                  setUsersData({ ...usersData, email: e.target.value })
                }
                placeholder="Enter your email"
                className="w-full px-3 py-2 rounded-full text-white font-bold bg-white/30 outline-none focus:ring-2 focus:ring-blue-400 focus:border-none"
              />
              {errors.signinUsername && (
                <p className="text-red-400 text-sm mt-1">
                  Username is required
                </p>
              )}
            </div>
            <div>
              <label className="block mb-1">PASSWORD</label>
              <input
                {...register("signinPassword", { required: true })}
                type="password"
                name="password"
                placeholder="Enter your password"
                onChange={(e) =>
                  setUsersData({ ...usersData, password: e.target.value })
                }
                className="w-full px-3 py-2 rounded-full text-white font-bold bg-white/30 outline-none focus:ring-2 focus:ring-blue-400 focus:border-none"
              />
              {errors.signinPassword && (
                <p className="text-red-400 text-sm mt-1">
                  Password is required
                </p>
              )}
            </div>

            <div className="flex items-center mb-2">
              <input type="checkbox" className="mr-2" />
              <label className="text-sm">Keep me Signed in</label>
            </div>

            {errorMsg && (
              <p className="text-red-400 text-sm mt-1">{errorMsg}</p>
            )}

            <button
              type="submit"
              className="w-full bg-blue-500 py-2 rounded-full font-bold hover:bg-blue-600"
            >
              Sign In
            </button>
          </form>
        ) : (
          <form onSubmit={onSubmitSignIn} className="space-y-4">
            <div>
              <label className="block mb-1">USERNAME</label>
              <input
                {...register("signupUsername", { required: true })}
                type="text"
                placeholder="Enter your username"
                className="w-full px-3 py-2 rounded-full text-white font-bold bg-white/30 outline-none focus:ring-2 focus:ring-blue-400 focus:border-none"
              />
              {errors.signupUsername && (
                <p className="text-red-400 text-sm mt-1">
                  Username is required
                </p>
              )}
            </div>
            <div>
              <label className="block mb-1">EMAIL</label>
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 rounded-full text-white font-bold bg-white/30 outline-none focus:ring-2 focus:ring-blue-400 focus:border-none"
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">Email is required</p>
              )}
            </div>
            <div>
              <label className="block mb-1">PASSWORD</label>
              <input
                {...register("signupPassword", { required: true })}
                type="password"
                placeholder="Create a password"
                className="w-full px-3 py-2 rounded-full text-white font-bold bg-white/30 outline-none focus:ring-2 focus:ring-blue-400 focus:border-none"
              />
              {errors.signupPassword && (
                <p className="text-red-400 text-sm mt-1">
                  Password is required
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 py-2 font-bold hover:bg-blue-600 rounded-full"
            >
              Sign Up
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
