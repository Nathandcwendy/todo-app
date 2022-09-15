import React from "react";

const FetchError = ({ fetchError }) => {
  return (
    <div className="flex flex-row justify-center items-center w-full px-2 xs:px-4 mb-10 ">
      {fetchError ? (
        <p className="text-red-600 dark:text-red-500 px-2 py-2 text-sm xs:text-base md:text-xl lg:text-2xl">
          Offline Mode(Database is unavailable)
        </p>
      ) : (
        <p className="text-brightBlue dark:text-green-500 xs:px-2 py-2 text-sm xs:text-base md:text-xl lg:text-2xl">
          Online Mode
        </p>
      )}
    </div>
  );
};

export default FetchError;
