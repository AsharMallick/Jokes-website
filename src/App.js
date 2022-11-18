import React, { useState } from 'react'
import axios from 'axios';
const App = () => {
    function copyDivToClipboard() {
        var range = document.createRange();
        range.selectNode(document.getElementById("a"));
        window.getSelection().addRange(range); // to select text
        document.execCommand("copy");
        window.getSelection().removeAllRanges();// to deselect
    }
    const [joke, setJoke] = useState()
    const [id, setId] = useState()
    const fetchData = async () => {
        const data = await fetch("https://icanhazdadjoke.com/", {
            headers: {
                Accept: "application/json"
            }
        })
        const jokeobj = await data.json()
        // console.log(jokeobj)
        setJoke(jokeobj.joke)
        setId(jokeobj.id)
    }
    return (
        <div className='h-100' style={{ height: "100vh" }}>
            <div className="d-flex justify-content-center align-items-center" style={{ position: "relative", top: "300px" }}>
                <div className="card" style={{ width: "18rem" }}>
                    <div className="card-body">
                        <h5 className="card-title" id='a'>{joke}</h5>
                        <p className="card-text">joke id: {id}</p>
                        <button className="btn btn-primary" onClick={copyDivToClipboard}>Copy</button>
                        <button className="btn btn-success text-align-center" style={{ margin: 'auto', display: "inherit", width: '100%' }} onClick={fetchData}>Click for a joke</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App