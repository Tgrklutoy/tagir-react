import useHelloWorld from "../../composambles/useHellloworld";
import "./Hero.css"
import { useEffect, useState } from "react"




export default function Hero () {
    const [counter1, setCounter1] = useState (0);
 const [counter2, setCounter2] = useState (0);

useHelloWorld 

useEffect
function add1 () {
    setCounter1 (counter1 + 1);
      setCounter2 ((counter1 + 1) * 2);
};

const [text, Settext] = useState ("")
const [reversedText, setreversedtext] = useState ("")
const [num1, Setnum1] = useState ("")
const [num2, Setnum2] = useState ("")
const [num3, Setnum3] = useState ("")
const [num4, Setnum4] = useState ("")
const [num5, Setnum5] = useState ("")
const [summary, Setsum] = useState ("")

const [data, dobleData, Setdata] = useHelloWorld ();


function effect () {
   setreversedtext(text.split("").reverse().join(""));
};
useEffect (effect, [text]);

function sum (){

  Setsum ( 
Number(num1) + Number(num2) + Number(num3) + Number(num4) + Number(num5));
};
useEffect (sum,[num1,num2,num3,num4,num5]);

    return(
        <div className="Hero">
        <p>Здесь вы можете просмотреть данный продукт </p>
        <h1>{counter1}</h1>
        <h1>{counter2}</h1>
        <button onClick={add1}>+</button>
        <br />
        <input value={text} onChange={(event) => {
            Settext (event.target.value);
        }}></input>
        <input value={reversedText}></input>
        <br /> 
        <input value={num1} type="number" onChange={(event) => {
            Setnum1 (event.target.value)
        }} /> 
            <input value={num2} type="number" onChange={(event) => {
            Setnum2 (event.target.value)
        }} />
            <input value={num3} type="number" onChange={(event) => {
            Setnum3 (event.target.value)
        }} /> 
            <input value={num4} type="number" onChange={(event) => {
            Setnum4 (event.target.value)
        }} /> 
            <input value={num5} type="number" onChange={(event) => {
            Setnum5 (event.target.value)
        }} /> 
        <br />
        <input value={summary}/>
        <br />
        <input type="number" value={data} onChange={(event) =>{
            Setdata (event.target.value)
        }} />
        <h1>{dobleData}</h1>
        </div>
    )
}

