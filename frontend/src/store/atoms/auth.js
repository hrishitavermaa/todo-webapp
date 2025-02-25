import axios from "axios";
import { atom, selector } from "recoil";

export const authAtom = atom({
  key: "authAtom",
  default: selector({
    key: "authSelector",
    get: async () => {
      const reponse = await axios.get("https://todo-webapp-51i9.onrender.com/api/v1/auth/check");
      return reponse.data.authenticated;
    },
  }),
});
