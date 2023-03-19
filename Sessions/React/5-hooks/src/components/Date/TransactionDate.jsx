import React from "react";
import "./TransactionDate.css";

const TransactionDate = ({date}) => {

  const formatedDate= date.toLocaleString('en-US', {
    year:'numeric',
    month:'long',
    day:'numeric',
  })

  let [month,day,year] =formatedDate.split(' ')
  day = day.slice(0,-1) 
  

  return (
    <>
      <time datetime="2014-09-20" class="icon">
        <em>{year}</em>
        <strong>{month}</strong>
        <span>{day}</span>
      </time>
    </>
  );
};

export default TransactionDate;