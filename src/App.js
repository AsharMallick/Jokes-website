import React, { useState } from 'react'
import { AiOutlineCopy } from 'react-icons/ai'
import LoadingBar from 'react-top-loading-bar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
    const [joke, setJoke] = useState()
    const [id, setId] = useState()
    const [progress, setProgress] = useState(0)

    //Function for copy to clipboard
    function CopyToClipboard(id) {
        var r = document.createRange();
        r.selectNode(document.getElementById(id));
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(r);
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
        toast.success('Copied to clipboard successfully', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }
    // setProgress(progress+50)
    const fetchData = async () => {
        const data = await fetch("https://icanhazdadjoke.com/", {
            headers: {
                Accept: "application/json"
            }
        })
        setProgress(50)
        const jokeobj = await data.json()
        setProgress(100)
        // console.log(jokeobj)
        setJoke(jokeobj.joke)
        setId(jokeobj.id)
    }
    let styles = { position: "relative", top: "300px", flexDirection: 'column' }
    console.log("Script ends")
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            {/* Same as */}
            <ToastContainer />
            <LoadingBar
                color='rgb(167 0 253)'
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
            />
            {/* <div><h1>Welcome to Jokes App</h1></div> */}
            <div className='h-100' style={{ height: "100vh" }}>
                <div className="d-flex justify-content-center align-items-center" style={styles}>
                    <div className="card" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h5 className="card-title" id='a'>{joke && joke}</h5>
                            <hr />
                            <span title='copy to clipboard' style={{ position: 'absolute', right: '10px', top: '0px', cursor: 'pointer' }} onClick={() => { CopyToClipboard('a') }}>{joke && <AiOutlineCopy />}</span>
                            <p className="card-text">{joke && "Joke Id: "}{id}</p>
                            <button className="btn btn-success text-align-center" style={{ margin: 'auto', display: "inherit", width: '100%', background: 'rgb(167 0 253)', borderColor: 'rgb(167 0 253)' }} onClick={fetchData}>New Joke</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App