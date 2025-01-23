import axios from "axios";
import { atom, selector } from "recoil";
import { fetchUser } from "../../actions/user";

export const userAtom = atom({
  key: "userAtom",
  default: selector({
    key: "userSelector",
    get: async () => {
      const response = await fetchUser();
      return response.user;
    },
  }),
});

export const nameAtom = atom({
  key: "nameAtom",
  default: selector({
    key: "nameSelector",
    get: async () => {
      const response = await fetchUser();
      return response.user.name;
    },
  }),
});
