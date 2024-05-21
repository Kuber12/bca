import React from "react";

const Container = ({ children,className }) => {
  return (
    <div className={`${className}  w-full rounded-2xl shadow-2xl bg-[#ebf0f3] flex justify-center gap-10 px-5 py-5 items-center flex-wrap `}>
      {children}
    </div>
  );
};

export default Container;
