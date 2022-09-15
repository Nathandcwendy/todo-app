import React from "react";
import InputTodo from "./InputTodo";
import TodosList from "./TodosList";
import DragAndDropInfo from "./DragAndDropInfo";
import TodosListBottom from "./TodosListBottom";
import FilterOptionsMob from "./FilterOptionsMob";

const MainApp = ({
  setFilter,
  filter,
  filteredResults,
  setFilteredResults,
  newTodo,
  setNewTodo,
  handleCheck,
  handleAdd,
  handleDelete,
  handleClearCompleted,
  todos,
  setTodos,
  isLoading,
}) => {
  return (
    <div className="relative pb-10">
      <main className="flex flex-col shadow-3xl rounded-lg overflow-hidden mb-10 bg-transparent">
        <InputTodo
          newTodo={newTodo}
          setNewTodo={setNewTodo}
          handleAdd={handleAdd}
        />
        <TodosList
          filteredResults={filteredResults}
          setFilteredResults={setFilteredResults}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
          filter={filter}
          isLoading={isLoading}
          todos={todos}
          setTodos={setTodos}
        />
        <TodosListBottom
          setFilter={setFilter}
          filter={filter}
          handleClearCompleted={handleClearCompleted}
          todos={todos}
        />
        <FilterOptionsMob filter={filter} setFilter={setFilter} />
      </main>
      <DragAndDropInfo />
    </div>
  );
};

export default MainApp;
