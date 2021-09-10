import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

import { useState } from 'react';
function Hi(props) {
  return <div className="info"><h4>{props.name}</h4> <h5>{props.date}</h5>  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores consectetur perferendis quae vitae unde
    repellat ad quibusdam a molestiae! Nemo rerum perspiciatis molestias excepturi voluptas, maxime porro
    sint obcaecati velit?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium veniam
    molestias, perferendis non, quos aliquid repellat nisi, ut sint accusantium ipsam numquam tempora!
    Asperiores, minima saepe qui sapiente mollitia facilis!</p> </div>;
}

function Room() {
  const [isLit, setLit] = useState(true);
  const brightness = isLit ? "lit" : "dark";
  const[dtemp,settemp]=useState(72);
  return (
    <div className={`room ${brightness}`}>
      <div className={`box ${brightness}`}>
        <p className="txt">The Room is {isLit ? "lit" : "dark"}</p>
        <br />
        <button className="txt" onClick={() => setLit(!isLit)}>
          {isLit ? <ion-icon name="flash-off-outline"></ion-icon> : <ion-icon name="flash-outline"></ion-icon>}
        </button>
      </div>
      <div className={`box2 ${brightness}`}>
      <p>The Present Temp is {dtemp}</p>
      <button className="btnn" onClick={() => settemp(dtemp+1)} ><ion-icon name="add-circle-outline"></ion-icon></button>
      <button className="btnn" onClick={() => settemp(dtemp-1)} ><ion-icon name="remove-circle-outline"></ion-icon></button>
    </div>
    </div>
    

  );
}
function Temp(){
  const[dtemp,settemp]=useState(72);
  return(
    <div className="box">
      <p>The Present Temp is {dtemp}</p>
      <button className="btnn" onClick={() => settemp(dtemp+1)} ><ion-icon name="add-circle-outline"></ion-icon></button>
      <button className="btnn" onClick={() => settemp(dtemp-1)} ><ion-icon name="remove-circle-outline"></ion-icon></button>
    </div>
  )
}

// ReactDOM.render(<Hi name="Sajeel Ahmed Siddiqui" date="28-Sep" />, document.querySelector('#root'));
ReactDOM.render(<Room />, document.querySelector('#root'));
// ReactDOM.render(<Temp />, document.querySelector('#root'));
