import { useRecoilValueLoadable } from "recoil";
import { authAtom } from "../../store/atoms/auth";
import User from "../user/user";

export default function Navbar() {
  const isAutheticated = useRecoilValueLoadable(authAtom);

  return (
    <nav className="flex items-center justify-between py-7 px-10 mb-[2rem]">
      <div className="flex items-center">
        <img src="logo.png" className="w-8 h-8 mr-3" />
        <h1 className="text-2xl font-bold">
          Focus<span className="text-yellow-500">Flow</span>
        </h1>
      </div>
      {isAutheticated.state === "hasValue" && isAutheticated.contents && (
        <User />
      )}
    </nav>
  );
}
