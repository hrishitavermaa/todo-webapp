import { useState } from "react";
import Input from "../components/input/input";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Button from "../components/button/button";
import { signUser } from "../actions/user.js";
import { Link } from "react-router-dom";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  const handleClick = () => {
    setShowPass(!showPass);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    signUser(email, password);

    setEmail("");
    setPassword("");
    setShowPass(false);
  };

  return (
    <div className="mt-[2rem] w-[100vw] grid place-items-center">
      <form onSubmit={handleSubmit}>
        <h1 className="text-3xl font-bold mb-3">
          Sign<span className="text-yellow-500">In</span>
        </h1>
        <p className="mb-5 text-md text-slate-400">
          Please fill in the form to sign into your account.
        </p>
        <Input
          type="email"
          value={email}
          cb={setEmail}
          placeholder={"Enter your email"}
        />
        <Input
          type={showPass ? "text" : "password"}
          value={password}
          cb={setPassword}
          placeholder={"Enter your password"}
          classname={"pr-5"}
          icon={
            showPass ? (
              <FaEye onClick={handleClick} className="text-yellow-500" />
            ) : (
              <FaEyeSlash onClick={handleClick} className="text-yellow-500" />
            )
          }
        />
        <Button label="Signup" className="w-full py-3" />
      </form>
      <p className="text-sm mt-3">New user? <Link className="text-yellow-500 font-semibold" to="/signup">Create an account</Link></p>
    </div>
  );
}
