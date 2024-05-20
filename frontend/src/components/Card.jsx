import React from "react";

const Card = ({name}) => {
  return (
    <div class=" mx-auto p-9 bg-white w-[200px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
      <img
        class="rounded-xl"
        src={"/Images/folderpng.png"}
        alt=""
      />
      <div class="flex justify-between items-center">
        <div>
          <h1 class="mt-5 text-xl md:text-2xl font-semibold">{name}</h1>
         
        </div>
        <div>
        </div>
      </div>
    </div>
  );
};

export default Card;
