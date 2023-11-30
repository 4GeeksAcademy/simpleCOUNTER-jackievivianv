import React from "react";
import SecondsCounter from "./SecondsCounter.js"
import MyComponent from "./MyComponent.jsx"
import Boton from "./Boton.js"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";





//create your first component
const Home = ({digito1, digito2, digito3, digito4, digito5, digito6, stop, reset, startOver}) => {


	return (
		<div className="container-fluid d-flex justify-content-center bg-black">
 			<MyComponent />
			<SecondsCounter seconds={digito6} />
			<SecondsCounter seconds={digito5} />
			<SecondsCounter seconds={digito4} />
			<SecondsCounter seconds={digito3} />
			<SecondsCounter seconds={digito2} />
			<SecondsCounter seconds={digito1} />
			<Boton handlerStop={stop} />
			<button className="btn btn-success btn-lg m-3" onClick={reset}>
            Reset
        	</button>
			<button className="btn btn-warning btn-lg m-3" onClick={startOver}>
            Go Again
        	</button>
		</div>
	);
};

export default Home;
