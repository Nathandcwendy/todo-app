import React from "react";
import Loading from "./Loading";
import TodoItems from "./TodoItems";

const TodosList = ({
  filteredResults,
  handleCheck,
  handleDelete,
  filter,
  isLoading,
  todos,
  setTodos,
}) => {
  let dragSource = {};
  let dropTarget = {};
  let dropTargetElement;

  const dragStart = (e, id) => {
    dragSource = todos.find((todoItem) => todoItem.id === id);
  };

  const dragEnter = (e, id) => {
    e.preventDefault();
    dropTarget = todos.find((todoItem) => todoItem.id === id);
  };

  const dragOver = (e, id) => {
    e.preventDefault();
    e.currentTarget.classList.add("overTarget");
    dropTargetElement = e.currentTarget;
  };

  const dragLeave = (e, id) => {
    e.preventDefault();
    e.currentTarget.classList.remove("overTarget");
  };

  const handleDrop = () => {
    const sourceIndex = todos.findIndex((todo) => todo.id === dragSource.id);
    const destinationIndex = todos.findIndex(
      (todo) => todo.id === dropTarget.id
    );
    if (destinationIndex === sourceIndex) {
      dropTargetElement.classList.remove("overTarget");
      return;
    }
    dropTargetElement.classList.remove("overTarget");
    const copiedTodos = [...todos];
    const removedTodo = copiedTodos.splice(sourceIndex, 1);
    copiedTodos.splice(destinationIndex, 0, removedTodo[0]);
    setTodos(copiedTodos);
  };

  return (
    <ul
      onDrop={handleDrop}
      className="relative max-h-h-5 overflow-y-auto overflow-x-hidden
      rounded-t-lg dark:bg-dm-VDDesatBlue scrollbar"
    >
      {isLoading ? (
        <Loading />
      ) : !isLoading && filteredResults.length ? (
        <TodoItems
          filteredResults={filteredResults}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
          dragStart={dragStart}
          dragEnter={dragEnter}
          dragOver={dragOver}
          dragLeave={dragLeave}
        />
      ) : (
        <li className="flex flex-row justify-center items-center w-full px-4 py-4 bg-white dark:bg-dm-VDDesatBlue text-slate-400 dark:text-slate-200 border-b-2 dark:border-dm-VDDesatBlue">
          {filter === "completed" ? (
            <p className="px-1 py-1.5 text-base md:text-xl lg:px-2 lg:py-3 lg:text-2xl">
              No Tasks Have Been Completed
            </p>
          ) : filter === "active" ? (
            <p className="px-1 py-1.5 text-base md:text-xl lg:px-2 lg:py-3 lg:text-2xl">
              No Task Is Active
            </p>
          ) : (
            <p className="px-1 py-1.5 text-base md:text-xl lg:px-2 lg:py-3 lg:text-2xl">
              No Tasks To Do
            </p>
          )}
        </li>
      )}
    </ul>
  );
};

export default TodosList;
