import React from "react";
import Loading from "./Loading";
import TodoItems from "./TodoItems";
// import { useRef, useEffect } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
// import { HiCheck } from "react-icons/hi";
// import { IoCloseOutline } from "react-icons/io5";

const TodosList = ({
  filteredResults,
  setFilteredResults,
  handleCheck,
  handleDelete,
  filter,
  isLoading,
  todos,
  setTodos,
}) => {
  const handleDragEnd = (result, todos, setTodos) => {
    if (!result.destination) return;
    const { source, destination } = result;
    const sourceIndex = todos.findIndex(
      (todo) => todo.id === filteredResults[source.index].id
    );
    const destinationIndex = todos.findIndex(
      (todo) => todo.id === filteredResults[destination.index].id
    );
    const copiedTodos = [...todos];
    const [removedTodo] = copiedTodos.splice(sourceIndex, 1);
    copiedTodos.splice(destinationIndex, 0, removedTodo);

    setTodos(copiedTodos);
  };
  // const checkBoxStyles =
  //   "appearance-none border rounded-full h-5 w-5 lg:h-10 lg:w-10 hover:cursor-pointer dark:border-dm-VDGBlue dark:transparent";
  // const todoStyle =
  //   "flex-grow px-1 py-1.5 text-xs xs:text-base md:text-base lg:px-2 lg:py-3 lg:text-2xl hover:cursor-pointer dark:text-slate-300";

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

  return (
    <DragDropContext
      onDragEnd={(result) => handleDragEnd(result, todos, setTodos)}
    >
      <Droppable droppableId={`listId`} index={0}>
        {(provided, snapshot) => (
          <ul
            {...provided.droppableProps}
            ref={provided.innerRef}
            // ref={ref}
            className="max-h-h-4 overflow-auto no-scrollbar rounded-t-lg dark:bg-dm-VDDesatBlue"
          >
            {isLoading ? (
              <Loading />
            ) : !isLoading && filteredResults.length ? (
              // <>
              //   {filteredResults.map((item, index) => (
              //     <Draggable
              //       key={item.id}
              //       draggableId={item.id.toString()}
              //       index={index}
              //     >
              //       {(provided, snapshot) => (
              //         <li
              //           ref={provided.innerRef}
              //           {...provided.draggableProps}
              //           {...provided.dragHandleProps}
              //           className="flex flex-row justify-start items-center space-x-1 xs:space-x-3 md:space-x-4 lg:space-x-6 w-full px-2 py-2 lg:px-4 lg:py-4 bg-white dark:bg-dm-VDDesatBlue border-b-2 dark:border-slate-700"
              //         >
              //           <div className="w-auto relative grid place-content-center">
              //             <input
              //               id="new-todo"
              //               type="checkbox"
              //               onClick={() => handleCheck(item.id)}
              //               className={
              //                 item.checked
              //                   ? `${checkBoxStyles} bg-gradient-to-br from-grad-1 to-grad-2`
              //                   : `${checkBoxStyles}`
              //               }
              //             />
              //             {item.checked ? (
              //               <HiCheck
              //                 onClick={() => handleCheck(item.id)}
              //                 className="absolute top-1/2 left-1/2 stroke-2 stroke-white text-base xs:xl md:text-base lg:text-2xl transform -translate-x-1/2 -translate-y-1/2 hover:cursor-pointer"
              //               />
              //             ) : null}
              //           </div>
              //           <p
              //             onDoubleClick={() => handleCheck(item.id)}
              //             className={
              //               item.checked
              //                 ? `${todoStyle} line-through opacity-20`
              //                 : `${todoStyle}`
              //             }
              //           >
              //             {item.todo}
              //           </p>
              //           <IoCloseOutline
              //             onClick={() => handleDelete(item.id)}
              //             className="text-xl xs:text-2xl md:text-2xl lg:text-4xl min-h-[18px] min-w-[18px] opacity-60 hover:cursor-pointer dark:text-slate-500"
              //           />
              //         </li>
              //       )}
              //     </Draggable>
              //   ))}
              // </>
              <TodoItems
                filteredResults={filteredResults}
                setFilteredResults={setFilteredResults}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
                todos={todos}
                setTodos={setTodos}
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
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TodosList;
