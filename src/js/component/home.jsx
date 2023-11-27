import React from "react";
import SecondsCounter from "./SecondsCounter.js"
import MyComponent from "./MyComponent.jsx"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";





//create your first component
const Home = ({digito1, digito2, digito3, digito4, digito5, digito6}) => {
	return (
		<div className="container-fluid d-flex justify-content-center bg-black">
 			<MyComponent />
			<SecondsCounter seconds={digito6} />
			<SecondsCounter seconds={digito5} />
			<SecondsCounter seconds={digito4} />
			<SecondsCounter seconds={digito3} />
			<SecondsCounter seconds={digito2} />
			<SecondsCounter seconds={digito1} />
			
		</div>
	);
};

export default Home;
