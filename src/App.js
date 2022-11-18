import React, { Component} from 'react'
import "./App.css"
class App extends Component {
    
    state = {
        joke: ""
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
        console.log(jokeobj.joke)
        this.setState({
            joke: jokeobj.joke
        } )
    }
    render() {
        return (
            <>
                <header><h1 style={{ textAlign: 'center' }}>Welcome to dad jokes app</h1></header>
                    <div className="app">
                        <div className="card">
                        <h1 className="heading">{this.state.joke? this.state.joke:"Internel server error"}</h1>
                            <button className="button" onClick={this.fetchData}>
                                <span>New joke</span>
                            </button>
                        </div>
                    </div>
            </>
        )
    }
}

export default App