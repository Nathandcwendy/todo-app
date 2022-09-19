import React from "react";

const FetchError = ({ fetchError }) => {
  return (
    <div
      role="log"
      className="flex flex-row justify-center items-center w-full px-2 xs:px-4"
    >
      {fetchError ? (
        <p className="text-red-600 dark:text-red-500 px-2 py-2 text-base md:text-xl lg:text-2xl">
          Offline Mode(Database is unavailable)
        </p>
      ) : (
        <a
          href="https://www.frontendmentor.io/profile/Nathandcwendy"
          target="_blank"
          rel="noreferrer"
          className="text-brightBlue dark:text-green-500 text-base pb-2 md:text-xl lg:text-2xl hover:cursor-pointer transition hover:scale-110"
        >
          Coded By Nate
        </a>
      )}
    </div>
  );
};

export default FetchError;
