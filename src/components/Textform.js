import React ,{useState}from "react";


export default function Textform(props) {

  const handleUpCase = ()=>{
    // console.log("you clicked on convert to updates" + text);
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleLowCase = ()=>{
    // console.log("you clicked on convert to updates" + text);
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleClearClick = ()=>{
    let newText = "";
    setText(newText);
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
  

  const onchangeing = (event)=>{
    // console.log("you are chaging ");
    setText(event.target.value)
  }
  const [text,setText] = useState(""); // they are called array destructuring and we cannot uppdate the state directly so  we have to use the funtion to update
  // text = "new text " wrong way  to update the state 
  // setText("set the new text") the right way to update the state
    return (
      <>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value = {text} onChange={onchangeing} id="myBox" rows="8" placeholder="start typing"></textarea> 
        {/* text is my state variable so if user wants to change the text then he/she can do with the help of onchange fun. onchange fun will fire the event and then that event will target the value and value will be set into the textarea  */}
        <button className="btn btn-primary my-3" onClick={handleUpCase}>Convert to UpperCase</button>
        <button className="btn btn-primary my-3 mx-3" onClick={handleLowCase}>Convert to LowerCase</button>
        <button className="btn btn-primary my-3 " onClick={handleClearClick}>Clear</button>
        <button className="btn btn-primary my-3 mx-3 " onClick={speak}>speak</button>

      </div> 
    </div>
    <div className="container">
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{.008 * text.split(" ").length } minutes to read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  );
}
