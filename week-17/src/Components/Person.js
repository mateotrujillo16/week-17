import React from 'react';

const BasicInfo = (props) => {
  return (
    <div className = 'info'>
        <p>Name: {props.name}</p>
        <p>Number: {props.number}</p>
        <p>DOB: {props.date}</p>
      </div>
  )
}

export default BasicInfo