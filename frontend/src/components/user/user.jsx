import { useRecoilValueLoadable } from "recoil";
import { nameAtom } from "../../store/atoms/user";
import { IoMdArrowDropdown } from "react-icons/io";
import { Suspense, useState } from "react";
import { deleteUser, logoutUser } from "../../actions/user";
import Modal from "../modal/modal";

export default function User() {
  const [visible, setVisible] = useState(false);
  const userLoadable = useRecoilValueLoadable(nameAtom);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleClick = () => {
    setVisible(!visible);
  };

  return (
    <Suspense fallback={"Loading"}>
      {userLoadable.state === "hasValue" && (
        <div className="relative select-none">
          <div
            className="flex items-center gap-x-2 hover:cursor-pointer"
            onClick={handleClick}
          >
            <h1 className="font-semibold">{userLoadable.contents}</h1>
            <IoMdArrowDropdown className="w-5 h-5" />
          </div>
          <div
            className={`${
              visible ? "block" : "hidden"
            } absolute mt-2 right-0 bg-todo shadow-todo`}
          >
            <ul>
              <li
                className="py-3 px-14 text-sm hover:bg-gray-800 cursor-pointer"
                onClick={openModal}
              >
                Update
              </li>
              <li
                className="py-3 px-14 text-sm text-red-500 hover:bg-gray-800 hover:cursor-pointer"
                onClick={logoutUser}
              >
                Logout
              </li>
              <li
                className="py-3 px-14 text-sm text-red-500 hover:bg-red-800 hover:text-white hover:cursor-pointer"
                onClick={deleteUser}
              >
                Delete
              </li>
            </ul>
          </div>
          <div className="p-4">
            <Modal isOpen={isModalOpen} onClose={closeModal} />
          </div>
        </div>
      )}
    </Suspense>
  );
}
