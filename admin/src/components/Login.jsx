import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { backendUrl } from "../App";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(backendUrl + "/api/user/admin", {
        email,
        password,
      });
      if (response.status === 200) {
        setToken(response.data);
      } else {
        console.log(response);
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(response.data.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center w-full bg-gray-50">
      <div className="bg-white shadow-md rounded-lg px-8 py-6 max-w-md">
        <h1 className="font-bold text-2xl">Admin Panel</h1>
        <form onSubmit={(e) => onSubmitHandler(e)}>
          <div className="flex flex-col gap-2 mt-4 min-w-72">
            <label
              htmlFor="email-input"
              className="text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              placeholder="admin@example.com"
              id="email-input"
              className="border border-gray-300 rounded-md outline-none w-full px-3 py-2"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>
          <div className="flex flex-col gap-2 mt-3">
            <label
              htmlFor="admin-password"
              className="text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              minLength={"8"}
              placeholder="Enter your password"
              id="admin-password"
              className="border border-gray-300 rounded-md outline-none w-full px-3 py-2"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
            <button
              className="bg-black text-white rounded-md py-2 mt-3 cursor-pointer"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
