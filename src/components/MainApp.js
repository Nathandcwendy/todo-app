import React from "react";
import InputTodo from "./InputTodo";
import TodosList from "./TodosList";
import Footer from "./Footer";
import TodosListBottom from "./TodosListBottom";
import FilterOptionsMob from "./FilterOptionsMob";

const MainApp = ({
  setFilter,
  filter,
  filteredResults,
  newTodo,
  setNewTodo,
  handleCheck,
  handleAdd,
  handleDelete,
  handleClearCompleted,
  todos,
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
          handleCheck={handleCheck}
          handleDelete={handleDelete}
          filter={filter}
          isLoading={isLoading}
        />
        <TodosListBottom
          setFilter={setFilter}
          filter={filter}
          handleClearCompleted={handleClearCompleted}
          todos={todos}
        />
        <FilterOptionsMob filter={filter} setFilter={setFilter} />
      </main>
      <Footer />
    </div>
  );
};

export default MainApp;
