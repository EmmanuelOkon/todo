import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import ToggleButton from "./ToggleButton";
import Modal from "react-modal";

export const Todo = ({
  id,
  title,
  task,
  description,
  deleteTodo,
  toggleComplete,
  completed,
}) => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleToggle = () => {
    toggleComplete(id);
  };

  const handleDelete = () => {
    deleteTodo(id);
    setShowConfirmation(false);
  };

  return (
    <>
      <div
        className={`${
          completed ? " text-gray-300 " : "text-gray-700"
        } flex justify-between items-center py-[0.75rem] px-[12px] border-b border-gray-400 mb-[1rem]`}
      >
        <div className="flex justify-between items-center w-full">
          <div className="text-left">
            <p className="font-extrabold capitalize text-3xl">{title}</p>
            <li className="text-sm px-0 m-0">{description}</li>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon
              
              className="text-gray-700 mx-2 cursor-pointer"
              icon={faTrash}
              onClick={() => setShowConfirmation(true)}
            />
            <ToggleButton checked={completed} onChange={handleToggle} />
          </div>
        </div>
      </div>

      <Modal
        isOpen={showConfirmation}
        className="bg-slate-900 bg-opacity-60 flex items-center w-full h-full mx-auto text-center justify-center"
      >
        <div className="bg-slate-200 border border-black rounded-md px-5 py-10 ">
          <p className="pb-4 w-2/3 mx-auto ">
            Are you sure you want to delete
            <span className="font-bold text-lg px-1">
              {title.toUpperCase()}
            </span>
            ?
          </p>
          <div className="space-x-6">
            <button
              className="border border-red-600 hover:bg-gray-300 transition-all px-4 py-2 rounded-md text-grey-700 "
              onClick={() => setShowConfirmation(false)}
            >
              No
            </button>
            <button
              className="bg-red-600 hover:bg-red-700  transition-all px-4 py-2 rounded-md text-white "
              onClick={handleDelete}
            >
              Yes
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};
