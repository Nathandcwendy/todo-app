import Header from "./components/Header";
import MainApp from "./components/MainApp";
import { useEffect, useState } from "react";
import FetchError from "./components/FetchError";

function App() {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) || false
  );
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todoList")) || [
      {
        id: 1,
        todo: "Complete online JavaScript course",
        checked: true,
      },
      {
        id: 2,
        todo: "Jog around the park 3x",
        checked: false,
      },
      {
        id: 3,
        todo: "10 minutes meditation",
        checked: false,
      },
      {
        id: 4,
        todo: "Read for 1 hour",
        checked: false,
      },
      {
        id: 5,
        todo: "Pick up groceries",
        checked: false,
      },
      {
        id: 6,
        todo: "Complete Todo App on Frontend Mentor",
        checked: false,
      },
    ]
  );
  const [newTodo, setNewTodo] = useState("");
  const [filter, setFilter] = useState("all");
  const [filteredResults, setFilteredResults] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (filter === "all") {
      const result = todos.filter((todoItem) =>
        todoItem.todo?.toLowerCase().includes("")
      );
      setFilteredResults(result);
    } else if (filter === "completed") {
      const result = todos.filter((todoItem) => todoItem.checked === true);
      setFilteredResults(result);
    } else if (filter === "active") {
      const result = todos.filter((todoItem) => todoItem.checked === false);
      setFilteredResults(result);
    } else {
      const result = todos.filter((todoItem) =>
        todoItem.todo.toLowerCase().includes("")
      );
      setFilteredResults(result);
    }
  }, [todos, filter]);

  useEffect(() => {
    let element = document.querySelector("html");
    theme === true
      ? element.classList.add("dark")
      : element.classList.remove("dark");
  }, [theme]);

  const updateLocalStorage = (items) => {
    localStorage.setItem("todoList", JSON.stringify(items));
  };

  const handleClearCompleted = () => {
    // const todosDelete = todos.filter((todoItem) => todoItem.checked === true);
    const newTodos = todos.filter((todoItem) => todoItem.checked !== true);
    setTodos(newTodos);
    updateLocalStorage(newTodos);

    // todosDelete.forEach(async (todoItem) => {
    //   const optionsObj = {
    //     method: "DELETE",
    //   };

    //   const reqUrl = `${API_URL}/${todoItem.id}`;

    //   try {
    //     const response = await fetch(reqUrl, optionsObj);
    //     if (response.ok) setFetchError(null);
    //     if (!response.ok) throw new Error("Could not Update Database");
    //   } catch (err) {
    //     setFetchError(err.message);
    //   }
    // });
  };

  const handleAdd = async () => {
    if (newTodo.toLowerCase().trim() !== "") {
      const sortedTodos = todos;
      sortedTodos.sort((a, b) => a.id - b.id);
      const newId = todos.length
        ? sortedTodos[sortedTodos.length - 1].id + 1
        : 1;
      const newTodoItem = {
        id: newId,
        todo: newTodo,
        checked: false,
      };
      const newTodos = [...todos, newTodoItem];
      setTodos(newTodos);
      setNewTodo("");
      updateLocalStorage(newTodos);
      // const optionsObj = {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(newTodoItem),
      // };

      // const reqUrl = `${API_URL}`;

      // try {
      //   const response = await fetch(reqUrl, optionsObj);
      //   if (response.ok) setFetchError(null);
      //   if (!response.ok) throw new Error("Could not Update Database");
      // } catch (err) {
      //   setFetchError(err.message);
      // }
    } else return;
  };

  const handleCheck = async (id) => {
    const newTodos = todos.map((todoItem) =>
      todoItem.id === id
        ? { ...todoItem, checked: !todoItem.checked }
        : todoItem
    );
    setTodos(newTodos);
    updateLocalStorage(newTodos);
    // const todoUpdate = newTodos.filter((todoItem) => todoItem.id === id);
    // const optionsObj = {
    //   method: "PATCH",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ checked: todoUpdate[0].checked }),
    // };

    // const reqUrl = `${API_URL}/${id}`;

    // try {
    //   const response = await fetch(reqUrl, optionsObj);
    //   if (response.ok) setFetchError(null);
    //   if (!response.ok) throw new Error("Could not Update Database");
    // } catch (err) {
    //   setFetchError(err.message);
    // }
  };

  const handleDelete = async (id) => {
    const newTodos = todos.filter((todoItem) => todoItem.id !== id);
    setTodos(newTodos);
    updateLocalStorage(newTodos);
    // const optionsObj = {
    //   method: "DELETE",
    // };

    // const reqUrl = `${API_URL}/${id}`;

    // try {
    //   const response = await fetch(reqUrl, optionsObj);
    //   if (response.ok) setFetchError(null);
    //   if (!response.ok) throw new Error("Could not Update Database");
    // } catch (err) {
    //   setFetchError(`${err.message}`);
    // }
  };

  const handleUpdateTheme = async () => {
    const newTheme = !theme;
    setTheme(newTheme);
    localStorage.setItem("theme", JSON.stringify(newTheme));
    // const reqUrl = THEME_URL;
    // const optionsObj = {
    //   method: "PATCH",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ dark: newTheme }),
    // };

    // try {
    //   const response = await fetch(reqUrl, optionsObj);
    //   if (response.ok) setFetchError(null);
    //   if (!response.ok) throw new Error("Could not Update Database");
    // } catch (err) {
    //   setFetchError(err.message);
    // }
  };

  return (
    <div className="flex flex-col font-body py-3 xs:py-6 lg:py-9 justify-start tall:justify-center items-center w-screen min-h-screen h-auto overflow-auto bg-lm-VLG bg-lm-Mob-BgImg md:bg-lm-BgImg bg-no-repeat bg-40% dark:bg-dm-Mob-BgImg dark:bg-black md:dark:bg-dm-BgImg overflow-x-hidden">
      <div className="relative w-11/12 xs:w-5/6 md:w-2/3 xl:w-1/2 antialiased select-none h-auto">
        <Header theme={theme} handleUpdateTheme={handleUpdateTheme} />
        <MainApp
          filteredResults={filteredResults}
          setFilteredResults={setFilteredResults}
          setFilter={setFilter}
          filter={filter}
          newTodo={newTodo}
          setNewTodo={setNewTodo}
          handleCheck={handleCheck}
          handleAdd={handleAdd}
          handleDelete={handleDelete}
          handleClearCompleted={handleClearCompleted}
          todos={todos}
          setTodos={setTodos}
          isLoading={isLoading}
        />
        <FetchError fetchError={fetchError} />
      </div>
    </div>
  );
}

export default App;
