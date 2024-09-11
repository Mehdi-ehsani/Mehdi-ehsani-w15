import { useState } from "react";
import Input from "./Input.jsx";
import data from "./cities.json";
function App() {
   const [value , setValue] = useState("");
   const [hint , setHint] = useState("");

	const changeHandler = (e) => {
     const searchedValue = e.target.value; 
     setValue(searchedValue);
     data.map(city => {
         console.log(city)
      })
   };

	return (
		<div>
			<Input value={value} changeHandler={changeHandler} hint={hint}/>
         <p>{hint}</p>
		</div>
	);
}

export default App;
