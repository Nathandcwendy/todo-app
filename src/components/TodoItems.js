import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { HiCheck } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";

const TodoItems = ({ filteredResults, handleCheck, handleDelete }) => {
  const checkBoxStyles =
    "appearance-none border rounded-full h-5 w-5 lg:h-10 lg:w-10 hover:cursor-pointer dark:border-dm-VDGBlue dark:transparent";
  const todoStyle =
    "flex-grow px-1 py-1.5 text-xs xs:text-base md:text-base lg:px-2 lg:py-3 lg:text-2xl hover:cursor-pointer dark:text-slate-300";
  return (
    <>
      {filteredResults.map((item, index) => (
        <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
          {(provided) => (
            <li
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              className="flex flex-row justify-start items-center space-x-1 xs:space-x-3 md:space-x-4 lg:space-x-6 w-full px-2 py-2 lg:px-4 lg:py-4 bg-white dark:bg-dm-VDDesatBlue border-b-2 dark:border-slate-700"
            >
              <div className="w-auto relative grid place-content-center">
                <input
                  id="new-todo"
                  type="checkbox"
                  onClick={() => handleCheck(item.id)}
                  className={
                    item.checked
                      ? `${checkBoxStyles} bg-gradient-to-br from-grad-1 to-grad-2`
                      : `${checkBoxStyles}`
                  }
                />
                {item.checked ? (
                  <HiCheck
                    onClick={() => handleCheck(item.id)}
                    className="absolute top-1/2 left-1/2 stroke-2 stroke-white text-base xs:xl md:text-base lg:text-2xl transform -translate-x-1/2 -translate-y-1/2 hover:cursor-pointer"
                  />
                ) : null}
              </div>
              <p
                onDoubleClick={() => handleCheck(item.id)}
                className={
                  item.checked
                    ? `${todoStyle} line-through opacity-20`
                    : `${todoStyle}`
                }
              >
                {item.todo}
              </p>
              <IoCloseOutline
                onClick={() => handleDelete(item.id)}
                className="text-xl xs:text-2xl md:text-2xl lg:text-4xl min-h-[18px] min-w-[18px] opacity-60 hover:cursor-pointer dark:text-slate-500"
              />
            </li>
          )}
        </Draggable>
      ))}
    </>
  );
};

export default TodoItems;
