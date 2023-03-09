import React from "react";

const Card = (props) => {
  return (
    <div>
      <div className="p-[30px] rounded-md shadow-xl mr-[15px] ml-[15px] bg-[#fff] m-2">
        <img className="w-[100%] mx-auto" src={props.img} alt={props.alt} />
        <p className="text-xl text-[#5A4BDA] font-semibold mb-9 ">
          {props.heading}
        </p>
        <p className="text-lg text-[#758283] mb-1">{props.teacherName}</p>
        <p className="text-lg font-semibold ">{props.price}</p>
      </div>
    </div>
  );
};

export default Card;
