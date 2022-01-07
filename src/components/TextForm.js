import React, { useState } from 'react'

export default function TextForm(props) {

    const convertToUpperCase = () => {
        setText(text.toUpperCase());
        props.showAlert("Converted to UPPER CASE", "success");
    }

    const convertToLowerCase = () => {
        setText(text.toLowerCase());
        props.showAlert("Converted to lower case", "success");
    }

    const clearText = () => {
        setText("");
        props.showAlert("Text Cleared", "danger");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const copyText = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied", "warning");
    }

    const removeExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed", "primary");
    }

    const [text, setText] = useState("");

    return (
        <>
            <div className="container" style={{ color: props.mode === "light" ? "black" : "white" }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" style={{ backgroundColor: props.mode === "light" ? "white" : "#c1c1c1", color: props.mode === "light" ? "black" : "white" }} onChange={handleOnChange} value={text} id="myBox" rows="5"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-1" onClick={convertToUpperCase}>Convert To UPPER CASE</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1" onClick={convertToLowerCase}>Convert To lower case</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1" onClick={clearText}>Clear Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1" onClick={copyText}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
            </div>

            <div className="container my-3" style={{ color: props.mode === "light" ? "black" : "white" }}>
                <h1>Text Summary</h1>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Words _&_ {text.length} Characters</p>
                <p>Estimate Time To Read: {(text.split(" ").filter((element) => { return element.length !== 0 }).length) * 0.008}  Minutes !</p>
            </div>
            <div className="container" style={{ color: props.mode === "light" ? "black" : "white" }}>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Enter Something To Preview Here"}</p>
            </div>
        </>
    )
}