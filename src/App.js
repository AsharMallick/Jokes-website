import React, { Component } from 'react'
// import "./App.css"
class App extends Component {
    state = {
        joke: "",
        id:0
    }
    componentDidMount() {
        this.fetchData()
    }
    fetchData = async () => {
        const data = await fetch("https://icanhazdadjoke.com/", {
            headers: {
                Accept: "application/json"
            }
        })
        const jokeobj = await data.json()
        console.log(jokeobj)
        this.setState({
            joke: jokeobj.joke,
            id:jokeobj.id
        })
    }
    render() {
        return (
            // <div>
            //     <div className="card" style={{width:"18rem"}}>
            //         <div className="card-body">
            //            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            //         </div>
            //     </div>
            // </div>
            <div className='h-100' style={{height:"100vh"}}>
            <div className="d-flex justify-content-center align-items-center" style={{position:"relative", top:"300px"}}>
            <div className="card" style={{width: "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">{this.state.joke}</h5>
                    <p className="card-text">joke id: {this.state.id}</p>
                    <button className="btn btn-success text-align-center" style={{ margin:'auto', display:"inherit", width:'100%'}} onClick={this.fetchData}>New Joke</button>
                </div>
                </div>
                </div>
            </div>
        )
    }
}

export default App