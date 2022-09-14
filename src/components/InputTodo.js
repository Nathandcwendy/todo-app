import React from "react";

const InputTodo = ({ newTodo, setNewTodo, handleAdd }) => {
  return (
    <div className="flex flex-row justify-start items-center space-x-1 xs:space-x-3 md:space-x-4 lg:space-x-6 w-full px-2 py-2 lg:px-4 lg:py-4 bg-white dark:bg-dm-VDDesatBlue rounded-lg mb-8">
      <div className="w-auto relative grid place-content-center">
        <input
          id="new-todo"
          type="checkbox"
          className="appearance-none rounded-full h-5 w-5 lg:h-10 lg:w-10 border-2 dark:border-dm-VDGBlue dark:transparent"
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAdd();
        }}
        className="w-full flex items-center"
      >
        <input
          type="text"
          placeholder="Create a new todo..."
          className="flex-grow px-1 py-1.5 text-xs xs:text-base md:text-base lg:px-2 lg:py-3 lg:text-2xl w-full dark:bg-transparent dark:text-slate-200 focus:outline-none "
          onChange={(e) => setNewTodo(e.target.value)}
          value={newTodo}
        />
      </form>
    </div>
  );
};

export default InputTodo;
