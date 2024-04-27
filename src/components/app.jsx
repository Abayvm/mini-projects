import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from './Home';
import Weatherapp from './Weatherapp';
import Todo from './Todo';
import Memorygame from "./Memorygame";

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/weatherapp" element={<Weatherapp />} />
                        <Route path="/todoapp" element={<Todo />} />
                        <Route path="/memorygame" element={<Memorygame />} />
                    </Routes>
                </div>
            </Router>
        );
    }
}

export default App;
