import React from "react";
import MovableTodoItem from "./MovableTodoItem";

const TodoItems = ({
  filteredResults,
  handleCheck,
  handleDelete,
  dragStart,
  dragEnter,
  dragOver,
  dragLeave,
}) => {
  return (
    <>
      {filteredResults.map((item) => (
        <MovableTodoItem
          key={item.id}
          item={item}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
          dragStart={dragStart}
          dragEnter={dragEnter}
          dragOver={dragOver}
          dragLeave={dragLeave}
        />
      ))}
    </>
  );
};

export default TodoItems;
