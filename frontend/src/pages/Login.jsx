import { useState } from "react";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
  };

  return (
    <form className="flex flex-col items-center gap-4 w-[90%] sm:max-w-96 m-auto mt-14 text-gray-700" onSubmit={onSubmitHandler}>
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      {currentState === "Sign Up" && (
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Name"
        />
      )}
      <input
        type="email"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Email"
      />
      <input
        type="password"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Password"
      />
      <div className="w-full flex justify-between text-sm">
        <p className="cursor-pointer">Forgot Password?</p>
        {currentState === "Login" ? (
          <p
            className="cursor-pointer"
            onClick={() => setCurrentState("Sign Up")}
          >
            Create account
          </p>
        ) : (
          <p
            className="cursor-pointer"
            onClick={() => setCurrentState("Login")}
          >
            Login Here
          </p>
        )}
      </div>
      <button className="bg-black text-white font-light px-6 py-2 mt-4 cursor-pointer">
        {currentState}
      </button>
    </form>
  );
};

export default Login;
