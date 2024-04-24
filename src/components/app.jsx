import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from './Home';
import Weatherapp from './Weatherapp';
import Todo from './Todo';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/weatherapp" element={<Weatherapp />} />
                        <Route path="/todoapp" element={<Todo />} />
                    </Routes>
                </div>
            </Router>
        );
    }
}

export default App;
