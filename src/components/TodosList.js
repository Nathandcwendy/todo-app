import React from "react";
import Loading from "./Loading";
import TodoItems from "./TodoItems";
import { useRef, useEffect } from "react";

const TodosList = ({
  filteredResults,
  handleCheck,
  handleDelete,
  filter,
  isLoading,
}) => {
  const ref = useRef(null);

  useEffect(() => {
    // const handleFocus = (e) => {
    //   console.log("focused");
    //   console.log(e);
    //   e.target.classList.remove("no-scrollbar");
    // };
    const element = ref.current;
    let scroll;
    element.addEventListener(
      "scroll",
      function (e) {
        window.clearTimeout(scroll);
        e.target.classList.remove("no-scrollbar");
        e.target.classList.add("scrollbar");
        scroll = setTimeout(function () {
          e.target.classList.add("no-scrollbar");
          e.target.classList.remove("scrollbar");
        }, 500);
      },
      false
    );
    // element.addEventListener("mouse", handleFocus, false);

    return () => {
      element.addEventListener(
        "scroll",
        function (e) {
          window.clearTimeout(scroll);
          e.target.classList.remove("no-scrollbar");
          scroll = setTimeout(function () {
            e.target.classList.add("no-scrollbar");
          }, 500);
        },
        false
      );
      // element.removeEventListener("touchstart", handleFocus, false);
    };
  }, []);

  return (
    <ul
      ref={ref}
      className="max-h-h-4 overflow-auto no-scrollbar rounded-t-lg dark:bg-dm-VDDesatBlue"
    >
      {isLoading ? (
        <Loading />
      ) : !isLoading && filteredResults.length ? (
        <TodoItems
          filteredResults={filteredResults}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <li className="flex flex-row justify-center items-center w-full px-4 py-4 bg-white dark:bg-dm-VDDesatBlue text-slate-400 dark:text-slate-200 border-b-2 dark:border-dm-VDDesatBlue">
          {filter === "completed" ? (
            <p className="px-1 py-1.5 text-xs xs:text-base md:text-base lg:px-2 lg:py-3 lg:text-2xl">
              No Tasks Have Been Completed
            </p>
          ) : filter === "active" ? (
            <p className="px-1 py-1.5 text-xs xs:text-base md:text-base lg:px-2 lg:py-3 lg:text-2xl">
              No Task Is Active
            </p>
          ) : (
            <p className="px-1 py-1.5 text-xs xs:text-base md:text-base lg:px-2 lg:py-3 lg:text-2xl">
              No Tasks To Do
            </p>
          )}
        </li>
      )}
    </ul>
  );
};

export default TodosList;
