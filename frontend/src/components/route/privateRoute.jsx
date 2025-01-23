import { Navigate, useLocation } from "react-router-dom";
import { useRecoilValueLoadable } from "recoil";
import { authAtom } from "../../store/atoms/auth";
import { Suspense } from "react";

const PrivateRoute = ({ element }) => {
  const location = useLocation();
  const authLoadable = useRecoilValueLoadable(authAtom);

  return (
    <Suspense fallback={"Loading..."}>
      {authLoadable.state === "hasValue" &&
        (authLoadable.contents ? (
          element
        ) : (
          <Navigate to="/signin" />
        ))}
    </Suspense>
  );
};

export default PrivateRoute;
