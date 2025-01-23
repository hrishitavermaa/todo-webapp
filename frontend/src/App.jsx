import { RecoilRoot } from "recoil";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer, Bounce } from "react-toastify";
import Todo from "./pages/todo";
import SignUp from "./pages/signup";
import PrivateRoute from "./components/route/privateRoute";
import RedirectRoute from "./components/route/redirectRoute";
import SignIn from "./pages/signin";
import Navbar from "./components/navbar/navbar";

export default function App() {
  return (
    <RecoilRoot>
      <div className="w-full h-full dark:bg-dark dark:text-white">
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<PrivateRoute element={<Todo />} />} />
            <Route
              path="/signup"
              element={<RedirectRoute element={<SignUp />} />}
            />
            <Route
              path="/signin"
              element={<RedirectRoute element={<SignIn />} />}
            />
          </Routes>
        </BrowserRouter>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition:Bounce
        />
      </div>
    </RecoilRoot>
  );
}
