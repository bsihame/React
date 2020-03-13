// import react
import React from "react";
// write function component ES6
const Person = ({name}, {age}) => {
  
  return(
    <div className="person">
      
      
      Name : {name}
      
      Age : {age}
    </div>
  )
}

//export person.js file
export default Person