import React from "react";

const Clock = () => {
  const date = new Date();
  console.log(date);
  return (
    <div className="flex justify-around">
      <div className="flex items-center font-bold">
        <p>{date.getDate()}-</p>
        <p>{date.getMonth() + 1}-</p>
        <p>{date.getFullYear()}</p>
      </div>
      <div className="flex items-center font-bold">
        <p>{date.getHours()}</p>
        <p className="mx-1">:</p>
        <p>{date.getMinutes() }</p>
      </div>
    </div>
  );
};

export default Clock;
