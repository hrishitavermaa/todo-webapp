import { useState } from "react";
import Input from "../components/input/input";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Button from "../components/button/button";
import { createUser } from "../actions/user.js";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setShowPass(!showPass);
  };

  const handleCheckboxInput = () => {
    setChecked(!checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    createUser(name, email, password);

    setName("");
    setEmail("");
    setPassword("");
    setShowPass(false);
    setChecked(false);
  };

  return (
    <div className="mt-[2rem] w-[100vw] grid place-items-center">
      <form onSubmit={handleSubmit}>
        <h1 className="text-3xl font-bold mb-3">
          Sign<span className="text-yellow-500">Up</span>
        </h1>
        <p className="mb-5 text-md text-slate-400">
          Please fill in the form to create an account.
        </p>
        <Input
          type="text"
          value={name}
          cb={setName}
          placeholder={"Enter your name"}
        />
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
          placeholder={"Create a password"}
          classname={"pr-5"}
          icon={
            showPass ? (
              <FaEye onClick={handleClick} className="text-yellow-500" />
            ) : (
              <FaEyeSlash onClick={handleClick} className="text-yellow-500" />
            )
          }
        />
        <div className="mb-5 flex items-center">
          <input
            checked={checked}
            onChange={handleCheckboxInput}
            type="checkbox"
            id="terms"
            className="mr-3 w-4 h-4 text-yellow-500"
            required
          />
          <label htmlFor="terms">
            All information provided by me is correct.
          </label>
        </div>
        <Button label="Signup" className="w-full py-3" />
      </form>
      <p className="text-sm mt-3">Already a user? <Link className="text-yellow-500 font-semibold" to="/signin">Continue to signin</Link></p>
    </div>
  );
}
