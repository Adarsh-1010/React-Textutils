import React,{useState} from 'react'

export default function TextForm(props) {

    const[text,setText] = useState("Enter text here");
    const handleupclick=()=>{
        // console.log("uppercase was clicked"+text);
        let newText=text.toUpperCase();
        setText(newText);
    }

    const handleloclick=()=>{
      // console.log("uppercase was clicked"+text);
      let newText=text.toLowerCase();
      setText(newText);
  }

  const handleclear=()=>{
    // console.log("uppercase was clicked"+text);
    let newText='';
    setText(newText);
}

    const handleonchange=(event)=>{
        // console.log("onchange");
        setText(event.target.value);
    }
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
  <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleonchange}id="myBox" rows="10"></textarea>
  </div>
  <button class="btn btn-primary mx-1" onClick={handleupclick}>Convert to uppercase</button> 
  <button class="btn btn-primary mx-5" onClick={handleloclick}>Convert to lowercase</button> 
  <button class="btn btn-primary mx-4" onClick={handleclear}>ClearText</button> 

    </div>
    <div className='container my-3'>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
