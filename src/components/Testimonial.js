

import React, { useState } from "react";
import Card from "./Card";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import reviews from "../Data";


function Testimonial() {
         const [index , setIndex] = useState(0);
         function leftShiftHandler (){
             if((index - 1 ) <0){
                setIndex(reviews.length -1);
             }
             else{
                setIndex(index - 1);
             }
         };
         function surpriceShiftHandler (){
            let random =  Math.floor(Math.random() * reviews.length);
                setIndex(random); 
         };
         function rightShiftHandler (){
            if((index +1) >= reviews.length){
                setIndex(0);
             }
             else{
                setIndex(index + 1);
             }
         };

  return (
    <div className=" bg-white flex flex-col w-[85vw] md:w-[700px] justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md">
      <Card review={reviews[index]} />
      <div className="flex text-3xl mt-5 gap-3 text-violet-400 font-bold mx-auto text-center">
        <button
          className="cursor-pointer hover:text-violet-500"
          onClick={leftShiftHandler}
        >
          <FiChevronLeft />
        </button>
        <button
          className="cursor-pointer hover:text-violet-500"
          onClick={rightShiftHandler}
        >
          <FiChevronRight />
        </button>
      </div>

      <div className="mt-6">
        <button
          className="bg-pink-500 hover:bg-pink-900 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg"
          onClick={surpriceShiftHandler}
        >
          Surprice Me
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
