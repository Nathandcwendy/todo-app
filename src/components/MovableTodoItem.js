import React from "react";
import { HiCheck } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";

const MovableTodoItem = ({
  handleCheck,
  handleDelete,
  item,
  dragStart,
  dragEnter,
  dragOver,
  dragLeave,
}) => {
  const checkBoxStyles =
    "appearance-none relative z-10 border rounded-full h-6 w-6 lg:h-10 lg:w-10 hover:cursor-pointer dark:border-dm-VDGBlue dark:transparent";

  const checkboxDiv =
    "absolute bg-blue top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-transparent border-2 rounded-full h-6 w-6 lg:h-10 lg:w-10 hover:cursor-pointer dark:border-dm-VDGBlue dark:transparent z-10";

  const todoStyle =
    "flex-grow px-1 py-1.5 text-base xs:text-base md:text-lg lg:px-2 lg:py-2 lg:text-2xl hover:cursor-pointer dark:text-slate-300";

  return (
    <li
      id={`list-${item.id}`}
      className="relative flex flex-row justify-start items-center space-x-1 xs:space-x-3 md:space-x-4 lg:space-x-6 w-full px-2 py-2 lg:px-4 lg:py-4 bg-white dark:bg-dm-VDDesatBlue border-b-2 dark:border-slate-700 transition duration-[75ms] first:rounded-t-lg"
      draggable
      onDragStart={(e) => dragStart(e, item.id)}
      onDragEnter={(e) => dragEnter(e, item.id)}
      onDragOver={(e) => {
        dragOver(e, item.id);
      }}
      onDragLeave={(e) => dragLeave(e, item.id)}
      onDrop={(e) => e.preventDefault()}
    >
      <div className="w-auto relative grid place-content-center">
        <input
          aria-labelledby={`list-${item.id}`}
          id={`todo-${item.id}`}
          type="checkbox"
          onClick={() => handleCheck(item.id)}
          className={
            item.checked
              ? `${checkBoxStyles} bg-gradient-to-br from-grad-1 to-grad-2`
              : `${checkBoxStyles}`
          }
        />
        <label
          htmlFor={`todo-${item.id}`}
          className="absolute top-0 -left-[9999999px] hidden"
        >
          Checkbox
        </label>
        {item.checked ? (
          <HiCheck
            onClick={() => handleCheck(item.id)}
            className="absolute z-10 top-1/2 left-1/2 stroke-2 stroke-white text-base xs:xl md:text-base lg:text-2xl transform -translate-x-1/2 -translate-y-1/2 hover:cursor-pointer"
          />
        ) : null}
        <div
          onClick={() => handleCheck(item.id)}
          className={
            !item.checked ? `${checkboxDiv} checkbox-div` : `${checkboxDiv}`
          }
        ></div>
      </div>
      <p
        onDoubleClick={() => handleCheck(item.id)}
        className={
          item.checked ? `${todoStyle} line-through opacity-20` : `${todoStyle}`
        }
      >
        {item.todo}
      </p>
      <IoCloseOutline
        onClick={() => handleDelete(item.id)}
        className="text-xl xs:text-2xl md:text-2xl lg:text-4xl min-h-[18px] min-w-[18px] opacity-60 hover:cursor-pointer dark:text-slate-500"
      />
    </li>
  );
};

export default MovableTodoItem;
