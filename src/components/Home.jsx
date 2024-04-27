import React from "react";
import { Link } from "react-router-dom";
import '../styles/home.css'

class Home extends React.Component {
    render() {
        return (
            <>
                <h1>Mini-Projects</h1>
                <div className="navBttns main">
                    <Link to="/weatherapp"><button type='button' className="navBttn">Weather App</button></Link>
                    <Link to="/todoapp"><button type='button' className="navBttn">Todo App</button></Link>
                    <Link to="/memorygame"><button type='button' className="navBttn">Memory Game</button></Link>
                </div>
                <footer><p className="footer">made with ❤️ by <a href="https://github.com/Abayvm">abay</a></p></footer>
            </>
        );
    }
}

export default Home;
