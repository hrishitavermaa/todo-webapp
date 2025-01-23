import { Suspense, useState, useEffect } from "react";

import Button from "../button/button";
import Input from "../input/input";
import { useRecoilStateLoadable } from "recoil";
import { nameAtom } from "../../store/atoms/user";
import { updateUser } from "../../actions/user";

export default function Modal({ isOpen, onClose }) {
  const [name, setName] = useState("");
  const [userLoadable, setUser] = useRecoilStateLoadable(nameAtom);

  useEffect(() => {
    if (userLoadable.state === "hasValue" && isOpen) {
      setName(userLoadable.contents);
    }
  }, [userLoadable, isOpen]);

  const handleSubmit = async () => {
    if (name === userLoadable.contents) {
      onClose();
      return;
    }

    await updateUser(name);
    setUser(name);

    onClose();
  };

  if (!isOpen) return null;

  return (
    <Suspense fallback={"Loading..."}>
      {userLoadable.state === "hasValue" && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
          <div className="bg-dark p-6 rounded-lg shadow-lg w-[400px]">
            <h2 className="text-xl font-semibold mb-4">Update profile</h2>
            <label>Name</label>
            <Input
              type="text"
              value={name}
              placeholder="Name"
              cb={setName}
              classname="mt-2"
              required
            />
            <div className="flex justify-between gap-x-4 mt-4">
              <Button
                label="Cancel"
                className="w-[170px] bg-gray-600 hover:bg-gray-700"
                onClick={onClose}
              />
              <Button
                label="Submit"
                className="w-[170px] bg-yellow-500 hover:bg-yellow-600"
                onClick={handleSubmit}
              />
            </div>
          </div>
        </div>
      )}
    </Suspense>
  );
}
