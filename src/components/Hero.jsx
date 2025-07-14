import React from "react";

const hero = ({
  title = "Become a React Dev",
  subtitle = "Find a React Job that fits your skill set !...",
}) => {
  return (
    <section className="bg-indigo-700 py-20 mb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <h1 className="flex flex-col items-center text-center">
          <p className="text-2xl font-extrabold text-white sm:text-5xl md:text-6xl">
            {title}
          </p>
          <p className="my-4 text-base sm:text-lg text-white animate-typing overflow-hidden text-center origin-center whitespace-nowrap pr-5 font-bold">
            {subtitle}
          </p>
        </h1>
      </div>
    </section>
  );
};

export default hero;
