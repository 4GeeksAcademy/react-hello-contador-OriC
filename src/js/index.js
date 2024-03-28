//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

// include your styles into the webpack bundle
import "../styles/index.css";


//import your own components
import Home from "./component/home.jsx";

function SimpleCounter (props){
    return (

<div>
    <div  className="bigCounter">

        <div className="calendary">
        <i className="far fa-clock"></i>
        </div>

        <div className="four">{props.digitFour}</div>
        <div className="three">{props.digitThree}</div>
        <div className="two">{props.digitTwo}</div>
        <div className="one">{props.digitOne}</div>
       
    </div>

</div>

    );

}



SimpleCounter.propTypes= {
    digitFour: PropTypes.number,
    digitThree: PropTypes.number,
    digitTwo: PropTypes.number,
    digitOne: PropTypes.number
};

let counter= 0;

setInterval(function(){
    const four= Math.floor(counter/10000);
    const three= Math.floor(counter/1000);
    const two= Math.floor(counter/100);
    const one= Math.floor(counter/10);
    console.log(four, three, two,one);

    counter ++;

    //render your react application
    ReactDOM.render(<SimpleCounter digitOne= {Math.floor(counter/10)} digitTwo={Math.floor(counter/100)} digitThree={Math.floor(counter/1000)} digitFour={Math.floor(counter/10000)} />,
document.querySelector("#app"));
      
},1000);




