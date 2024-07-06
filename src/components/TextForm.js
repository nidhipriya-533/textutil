import React, {useState} from 'react'
// hooks(useState) bina class bnaye class ka features provide krta h

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked: " + text);
        //ye use hoga uppercase me change krne ke liye
        let newText = text.toUpperCase();
        setText(newText)
        //iss uppercase wala alert show karega
        props.showAlert("Converted to uppercase!","success");
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("converted to lowercase!","success")
    }
    const handleClearClick = ()=>{
        let newText = '';
        setText(newText)
        props.showAlert("Text cleared!","success")
    }
    //handler
    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value);
       
    }
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!","success");
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Remove extraspaces!","success")
    }
    //to form state    text is a value and settext is a function
    const [text, setText] = useState('');
    // text = "new text";  //wrong way to change the state
    // setText("new text");  //correct way to change the state
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}} >
            <h1>{props.heading}</h1>
            <div className="mb-3">  
            {/* yha pr onchange add kiye kyuki issi ke wajah se hm textarea me likh paaynge */}
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            {/* button bnane ke liye ar mx-2 use hua h dono button ke bith space ya margin le liye */}
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

        </div>
        {/* my-3 use krte h margin ke liye */}
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}} > 
            <h2>Your text summary</h2>
            {/* {text.split(" ").length}---> iss se pta chlega ki kitna word h ar kitna character{text.length} */}
            <p>{text.split(" ").length} words and {text.length} characters</p>
            {/* iss se time pta chlega ki kitne time me padh shkte h */}
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>

        </div>
        </>
    )
}
