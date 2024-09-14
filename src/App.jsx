import { useEffect, useState } from "react";
import Input from "./Input.jsx";
import data from "./cities.json";
function App() {
   const [value , setValue] = useState("");
   const [hint , setHint] = useState("");
   const [showHint, setShowHint] = useState(false)
   
   useEffect(() => {
     !showHint && setHint("")
   },[value])
   
	const changeHandler = (e) => {
     const searchedValue = e.target.value; 
     setValue(searchedValue);
     setShowHint(false)
     data.filter(city => {
      if(city.startsWith(searchedValue)) {
         setShowHint(true)
         setHint(city)
      }
     })
     !searchedValue.length && setHint("")
   };

	return (
		<div>
			<Input value={value} changeHandler={changeHandler} hint={hint}/>
         <p>{hint}</p>
		</div>
	);
}

export default App;
