import React from "react";

const FilterOptions = ({ setFilter, filter }) => {
  const filterStyle =
    "hover:font-bold hover:cursor-pointer hover:text-black dark:hover:text-white";
  const filterStyleHov = "hover:font-bold hover:cursor-pointer";
  return (
    <div className="hidden space-x-2 xs:flex">
      <p
        className={
          filter === "all"
            ? `${filterStyleHov} text-brightBlue`
            : `${filterStyle}`
        }
        onClick={() => setFilter("all")}
      >
        All
      </p>
      <p
        className={
          filter === "active"
            ? `${filterStyleHov} text-brightBlue`
            : `${filterStyle}`
        }
        onClick={() => setFilter("active")}
      >
        Active
      </p>
      <p
        className={
          filter === "completed"
            ? `${filterStyleHov} text-brightBlue`
            : `${filterStyle}`
        }
        onClick={() => setFilter("completed")}
      >
        Completed
      </p>
    </div>
  );
};

export default FilterOptions;
