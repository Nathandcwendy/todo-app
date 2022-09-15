import Header from "./components/Header";
import MainApp from "./components/MainApp";
import { useEffect, useState } from "react";
import FetchError from "./components/FetchError";
function App() {
  const API_URL = "http://localhost:3500/todos";
  const THEME_URL = "http://localhost:3500/theme/1";

  const [theme, setTheme] = useState(false);
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [filter, setFilter] = useState("all");
  const [filteredResults, setFilteredResults] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchTodos = async () => {
      try {
        const response = await fetch(API_URL);
        if (response.ok) setFetchError(null);
        if (!response.ok)
          throw new Error("Could not receive data from database");
        const data = await response.json();
        setTodos(data);
      } catch (err) {
        setFetchError(err.message);
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    const fetchTheme = async () => {
      try {
        const response = await fetch(THEME_URL);
        if (response.ok) setFetchError(null);
        if (!response.ok)
          throw new Error("Could not receive data from database");
        const data = await response.json();
        setTheme(data.dark);
      } catch (err) {
        setFetchError(err.message);
        console.log(err);
      }
    };
    setTimeout(() => {
      fetchTheme();
    }, 500);
    setTimeout(() => {
      fetchTodos();
    }, 1000);
  }, []);

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

  const handleClearCompleted = () => {
    const todosDelete = todos.filter((todoItem) => todoItem.checked === true);
    const newTodos = todos.filter((todoItem) => todoItem.checked !== true);
    setTodos(newTodos);

    todosDelete.forEach(async (todoItem) => {
      const optionsObj = {
        method: "DELETE",
      };

      const reqUrl = `${API_URL}/${todoItem.id}`;

      try {
        const response = await fetch(reqUrl, optionsObj);
        if (response.ok) setFetchError(null);
        if (!response.ok) throw new Error("Could not Update Database");
      } catch (err) {
        setFetchError(err.message);
      }
    });
  };

  const handleAdd = async () => {
    const newId = todos.length ? todos[todos.length - 1].id + 1 : 1;
    const newTodoItem = {
      id: newId,
      todo: newTodo,
      checked: false,
    };
    const newTodos = [...todos, newTodoItem];
    setTodos(newTodos);
    setNewTodo("");
    const optionsObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodoItem),
    };

    const reqUrl = `${API_URL}`;

    try {
      const response = await fetch(reqUrl, optionsObj);
      if (response.ok) setFetchError(null);
      if (!response.ok) throw new Error("Could not Update Database");
    } catch (err) {
      setFetchError(err.message);
    }
  };

  const handleCheck = async (id) => {
    const newTodos = todos.map((todoItem) =>
      todoItem.id === id
        ? { ...todoItem, checked: !todoItem.checked }
        : todoItem
    );
    setTodos(newTodos);
    const todoUpdate = newTodos.filter((todoItem) => todoItem.id === id);
    const optionsObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ checked: todoUpdate[0].checked }),
    };

    const reqUrl = `${API_URL}/${id}`;

    try {
      const response = await fetch(reqUrl, optionsObj);
      if (response.ok) setFetchError(null);
      if (!response.ok) throw new Error("Could not Update Database");
    } catch (err) {
      setFetchError(err.message);
    }
  };

  const handleDelete = async (id) => {
    const newTodos = todos.filter((todoItem) => todoItem.id !== id);
    setTodos(newTodos);
    const optionsObj = {
      method: "DELETE",
    };

    const reqUrl = `${API_URL}/${id}`;

    try {
      const response = await fetch(reqUrl, optionsObj);
      if (response.ok) setFetchError(null);
      if (!response.ok) throw new Error("Could not Update Database");
    } catch (err) {
      setFetchError(`${err.message}`);
    }
  };

  const handleUpdateTheme = async () => {
    const newTheme = !theme;
    setTheme(newTheme);
    const reqUrl = THEME_URL;
    const optionsObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ dark: newTheme }),
    };

    try {
      const response = await fetch(reqUrl, optionsObj);
      if (response.ok) setFetchError(null);
      if (!response.ok) throw new Error("Could not Update Database");
    } catch (err) {
      setFetchError(err.message);
    }
  };

  return (
    <div className="flex flex-col font-body py-3 xs:py-6 lg:py-9 xl:py-12 justify-start items-center max-h-screen w-screen h-screen overflow-auto bg-lm-VLG bg-lm-Mob-BgImg md:bg-lm-BgImg bg-no-repeat bg-40% dark:bg-dm-Mob-BgImg dark:bg-black md:dark:bg-dm-BgImg">
      <div className="relative max-w-[800px] w-11/12 xs:w-5/6 md:w-2/3 h-5/6 lg:h-4/5 antialiased">
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

// {/* <body>

// Todo

// <!-- Add dynamic number --> items left

// All
// Active
// Completed

// Clear Completed

// Drag and drop to reorder list

// <div class="attribution">
//   Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
//   Coded by <a href="#">Your Name Here</a>.
// </div>
// </body> */}
