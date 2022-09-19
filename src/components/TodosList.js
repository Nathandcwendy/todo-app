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
  // let dragSourceElement;

  const dragStart = (e, id) => {
    // console.log("dragStart", id);
    dragSource = todos.find((todoItem) => todoItem.id === id);
    // e.currentTarget.classList.add("lg:dragItem");
    // dragSourceElement = e.currentTarget;
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
      // dragSourceElement.classList.remove("lg:dragItem");
      return;
    }
    dropTargetElement.classList.remove("overTarget");
    // dragSourceElement.classList.remove("lg:dragItem");
    const copiedTodos = [...todos];
    const removedTodo = copiedTodos.splice(sourceIndex, 1);
    copiedTodos.splice(destinationIndex, 0, removedTodo[0]);
    setTodos(copiedTodos);
    console.log(todos.length);
  };

  return (
    <ul
      onDrop={handleDrop}
      className="relative max-h-h-5 overflow-y-auto overflow-x-hidden
      rounded-t-lg dark:bg-dm-VDDesatBlue scrollbar"
      // className="max-h-h-4 overflow-auto rounded-t-lg dark:bg-dm-VDDesatBlue"
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

// const ref = useRef(null);

// useEffect(() => {
//   const element = ref.current;
//   let scroll;
//   const handleScrollBar = (e) => {
//     element.addEventListener(
//       "scroll",
//       function (e) {
//         window.clearTimeout(scroll);
//         e.target.classList.remove("no-scrollbar");
//         e.target.classList.add("scrollbar");
//         scroll = setTimeout(function () {
//           e.target.classList.add("no-scrollbar");
//           e.target.classList.remove("scrollbar");
//         }, 500);
//       },
//       false
//     );
//   };
//   handleScrollBar();

//   return () => {
//     element.removeEventListener(
//       "scroll",
//       function (e) {
//         window.clearTimeout(scroll);
//         e.target.classList.remove("no-scrollbar");
//         e.target.classList.add("scrollbar");
//         scroll = setTimeout(function () {
//           e.target.classList.add("no-scrollbar");
//           e.target.classList.remove("scrollbar");
//         }, 500);
//       },
//       false
//     );
//   };
// }, []);
