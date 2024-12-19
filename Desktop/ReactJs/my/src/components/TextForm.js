import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case!", "success");
    }
    const handleLoClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case!", "success");

    }
    const handleClearClick=()=>{
      setText("");
      props.showAlert("Text cleared!", "success");

  }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const countWords = () => {
      let len;
      len = text.split(" ");
      if (len[len.length - 1] === "") {
        return len.length - 1;
      }
      return len.length;
    }
    const handleSpeakClick = () => {
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      msg.lang = "en-US";
      window.speechSynthesis.speak(msg);
    };
    

  const[text,setText]=useState('');
  return (
    <>
      <div className='container' style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h1 className='my-3'>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? 'rgb(216 232 255)' : 'white'}} id="mytext" rows="11"></textarea>
        </div>
        <button className='btn btn-primary mx-1' onClick={handleUpClick}>Change to Uppercase</button>
        <button className='btn btn-primary mx-1' onClick={handleLoClick}>Change to Lowercase</button>
        <button className='btn btn-primary mx-1' onClick={handleClearClick}>Clear Text</button>
        <button className='btn btn-primary mx-1' onClick={handleSpeakClick}>Text to Speak</button>

    </div>
    <div className='container my-3' style={{color: props.mode === 'dark' ? 'white' : 'black'}} >
        <h2>Your text summary</h2>
        <p> <b>{countWords()}</b> words and <b> {text.length}</b> characters </p>
        <p>{0.008*countWords()} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview here"}</p>
    </div>
    </>
  )
}
