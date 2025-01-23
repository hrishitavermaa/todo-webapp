import { useRecoilValueLoadable } from "recoil";
import { authAtom } from "../../store/atoms/auth";
import { Navigate } from "react-router-dom";
import { Suspense } from "react";

export default function RedirectRoute({ element }) {
  const authLoadable = useRecoilValueLoadable(authAtom);

  return (
    <Suspense fallback={"Loading..."}>
      {authLoadable.state === "hasValue" &&
        (authLoadable.contents ? <Navigate to="/" /> : element)}
    </Suspense>
  );
}
