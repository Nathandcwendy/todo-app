import React from "react";

const FilterOptionsMob = ({ setFilter, filter }) => {
  const filterStyle =
    "hover:font-bold hover:cursor-pointer hover:text-black dark:hover:text-white";
  const filterStyleHov = "hover:font-bold hover:cursor-pointer";
  return (
    <div className="flex space-x-4 xs:hidden text-sm text-slate-500 flex-row justify-center items-center w-full px-4 py-4 bg-white dark:bg-dm-VDDesatBlue rounded-lg mt-4">
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

export default FilterOptionsMob;
