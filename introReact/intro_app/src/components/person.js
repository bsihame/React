// import react
import React from "react";
// write function component ES6
const Person = ({name, age}) => {
  return(
    <div className="person">
      
      <div>
      Name : {name}
      </div>
      <div>
      Age : {age}
      </div>
    </div>
  )
}

//We are exporting person.js file
export default Person