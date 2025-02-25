import axios from "axios";
import { toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const createUser = async (name, email, password) => {
  try {
    const userPayload = { name: name, email: email, password: password };
    await axios.post("https://todo-webapp-51i9.onrender.com//api/v1/user/signup", userPayload);
    window.location.reload();
  } catch (err) {
    toast.error(err.response.data.message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  }
};

export const signUser = async (email, password) => {
  try {
    const userPayload = { email: email, password: password };
    await axios.post("https://todo-webapp-51i9.onrender.com//api/v1/user/signin", userPayload);
    window.location.reload();
  } catch (err) {
    toast.error(err.response.data.message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  }
};

export const updateUser = async (name) => {
  try {
    const userPayload = { name: name };
    const response = await axios.put("https://todo-webapp-51i9.onrender.com//api/v1/user/me", userPayload);
  } catch (error) {
    console.log(error);
  }
};

export const fetchUser = async () => {
  try {
    const response = await axios.get("https://todo-webapp-51i9.onrender.com//api/v1/user/me");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const logoutUser = async () => {
  try {
    await axios.get("https://todo-webapp-51i9.onrender.com/api/v1/user/logout");
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async () => {
  try {
    await axios.delete("https://todo-webapp-51i9.onrender.com//api/v1/user/me");
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
};
