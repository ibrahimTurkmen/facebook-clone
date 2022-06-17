import React from "react";

function HeaderIcon({ Icon, active }) {
  return (
    <div
      className={`cursor-pointer text-gray-500
     hover:text-blue-500 md:px-10 md:py-2 sm:h14
     md:hover:bg-gray-100 rounded-xl active:border-b-2 active:border-blue-500 ${
       active && "text-blue-500"
     }`}
    >
      <Icon className="h-5 text-center sm:h-7 " />
    </div>
  );
}

export default HeaderIcon;
