import React from "react";
import FilterOptions from "./FilterOptions";

const TodosListBottom = ({
  setFilter,
  filter,
  handleClearCompleted,
  todos,
}) => {
  const activeCount = todos.filter(
    (todoItem) => todoItem.checked === false
  ).length;

  return (
    <div className="flex justify-between items-center px-4 py-4 text-base md:text-lg lg:text-xl rounded-b-lg text-slate-500 bg-white dark:bg-dm-VDDesatBlue">
      <p>{activeCount} items left</p>
      <FilterOptions filter={filter} setFilter={setFilter} />
      {/* <div className="hidden space-x-2 xs:flex">
        <p
          className={
            filter === "all"
              ? `${filterStyleHov} text-brightBlue`
              : `${filterStyle}`
          }
          onClick={() => setFilter("all")}
        >
          All
        </p>
        <p
          className={
            filter === "active"
              ? `${filterStyleHov} text-brightBlue`
              : `${filterStyle}`
          }
          onClick={() => setFilter("active")}
        >
          Active
        </p>
        <p
          className={
            filter === "completed"
              ? `${filterStyleHov} text-brightBlue`
              : `${filterStyle}`
          }
          onClick={() => setFilter("completed")}
        >
          Completed
        </p>
      </div> */}
      <p
        className="hover:cursor-pointer hover:font-medium hover:text-slate-800 dark:hover:text-slate-200"
        onClick={handleClearCompleted}
      >
        Clear Completed
      </p>
    </div>
  );
};

export default TodosListBottom;
