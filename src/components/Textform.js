 import React ,{useState}from "react";


export default function Textform(props) {
  const onchangeing = (event)=>{
    // console.log("you are chaging ");
    setText(event.target.value)
  }
  const [text,setText] = useState(""); // they are called array destructuring and we cannot uppdate the state directly so  we have to use the funtion to update
  // text = "new text " wrong way  to update the state 
  // setText("set the new text") the right way to update the state

  const handleUpCase = ()=>{
    // console.log("you clicked on convert to updates" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase","success"); // means whenever the handleUpCase will call then atlast the showAlert functionwill call too.
  }

  const handleLowCase = ()=>{
    // console.log("you clicked on convert to updates" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase","success");

  }
  const handleClearClick = ()=>{
    let newText = "";
    setText(newText);
    props.showAlert("All things are cleared","success");

  }
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    msg.rate = '1';
    msg.lang = 'en-US';
    msg.volume = .5;

    msg.onend = function(){
      alert("speech is finished");
    }
    window.speechSynthesis.speak(msg);
  }

  function copyToClipboard(){
    let copyText = document.getElementById("myBox");
    copyText.select();
    // copyText.setSelectionRange(0,9999);
    navigator.clipboard.writeText(copyText.value);
    props.showAlert("Copied To Your Clipboard","success");
    // here showAlert is a function which is called and this funciton is written inside the app.js go there now  
   

  }

  function removeExtraSpaces(){
    let newText = text.split(/[ ]+/); // logic is like with the use of split it will remove all the spaces even if one space is there then that too and make an array of it 
    setText(newText.join(" "));
    props.showAlert(" Extra Spaces gets Removed","success");

  }
  

 
    return (
      <>
    <div className="container" style={{backgroundColor:props.mode ==="dark"?"#091240":"white" , color:props.mode ==="dark"?"white":"black"}}>
      <h1>{props.heading} </h1>
      <div className="mb-3">
        <textarea className="form-control" value = {text} onChange={onchangeing} style={{backgroundColor:props.mode ==="dark"?"#091240":"white" , color:props.mode ==="dark"?"white":"black"}} id="myBox" rows="8" placeholder="start typing"></textarea> 
        {/* first bracket in style represent the js file and second inside one bracket represent the object  */}
        {/* text is my state variable so if user wants to change the text then he/she can do with the help of onchange fun. onchange fun will fire the event and then that event will target the value and value will be set into the textarea  */}
        <button className="btn btn-primary my-3" onClick={handleUpCase}>Convert to UpperCase</button>
        <button className="btn btn-primary my-3 mx-3" onClick={handleLowCase}>Convert to LowerCase</button>
        <button className="btn btn-primary my-3 " onClick={handleClearClick}>Clear</button>
        <button className="btn btn-primary my-3 mx-3 " onClick={speak}>speak</button>
        <button className="btn btn-primary my-3  " onClick={copyToClipboard}>copyToClipboard</button>
        <button className="btn btn-primary my-3  mx-3" onClick={removeExtraSpaces}>removeExtraSpaces</button>

      </div> 
    </div>
    <div className="container" style={{backgroundColor:props.mode ==="dark"?"#091240":"white" , color:props.mode ==="dark"?"white":"black"}}>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{.008 * text.split(" ").length } minutes to read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  );
}
