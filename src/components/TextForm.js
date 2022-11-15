import React, {useState, useEffect} from 'react'
import './cssFiles/TextForm.css'

export function TextForm(props) {

    const [text, setText]= useState('');   //variable name, function = defaultvalue
    const [modifiedText, setModifiedText]= useState('');
    const [showOutput, setShowOutput]= useState(true);

    const onChangeHandler= (event) =>{
        setText(event.target.value);
    }

    const handleUppercaseClick= () =>{
        setModifiedText(text.toUpperCase());
    }

    const handleUndoClick= (event) =>{
        setModifiedText(text);
    }

    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

  return (
    <div className='container'>
        <label htmlFor="inputBox">{props.heading}</label>
        <div className="mb-3">
            <textarea aria-live="polite" onChange={onChangeHandler} value={text} id="inputBox" rows="6"></textarea>
            <button id="uppercaseButton" aria-label="Click to convert to uppercase" onClick={handleUppercaseClick}>Uppercase</button>
            <button id="undoButton" aria-label="Click to undo change" onClick={handleUndoClick}>Undo</button>
            <textarea aria-label="Result: " tabIndex={0} id="outputBox" disabled={true} value={modifiedText} rows="6"></textarea>
        </div>
        <div className="container my-3">
            <p tabIndex={0}>{text.split(" ").length-1} words</p>
            <p aria-hidden="true" tabIndex={0}>{text.length} characters</p>
            <div>
                <p tabIndex={0}><span id='date-time'>{date.toLocaleDateString()}</span></p> 
                <p><span id='date-time'>{date.toLocaleTimeString()}</span></p>
            </div>
        </div> 
        
    </div>
  )
}
