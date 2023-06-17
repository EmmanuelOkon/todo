import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isEmptyForm, setIsEmptyForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description) {
      addTodo(title, description);
      setTitle("");
      setDescription("");
      setIsEmptyForm(false);
    } else {
      setIsEmptyForm(true);
      if (title && !description) {
        setErrorMessage("Please fill in the description");
      } else {
        setErrorMessage("Please fill in all fields");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col   w-[420px] ">
        <p className="text-left text-white mb-1">Title</p>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="outline-none text-[28px] border rounded-md  border-[#f97316] py-[0.5rem] px-[10px] placeholder:text-[20px] placeholder:tracking-normal text-gray-800 bg-white placeholder:text-gray-500"
          placeholder="Create a task"
        />
        <p className="text-left text-white mt-4 mb-1">Description</p>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="outline-none border border-[#f97316] rounded-md py-[0.5rem] px-[8px] placeholder:text-[14px] placeholder:tracking-normal text-gray-800 bg-white placeholder:text-gray-500 "
          placeholder="Add task description . . ."
        />
        {isEmptyForm && <p className="text-red-600 pt-4">{errorMessage}</p>}
      </div>

      <button
        type="submit"
        className="outline-none bg-[#f97316] hover:bg-opacity-80 text-white border-none px-[16px] py-[8px] cursor-pointer rounded-md my-5 "
      >
        Add Task
      </button>
    </form>
  );
};
