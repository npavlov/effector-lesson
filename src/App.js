import './App.css';
import {Header} from "./components/header";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Lesson1} from "./lesson1/lesson1";
import {Lesson2} from "./lesson2/lesson2";
import {Lesson3} from "./lesson3/lesson3";
import {Lesson4} from "./lesson4/lesson4";
import {Lesson5} from "./lesson5/lesson5";
import {Lesson6} from "./lesson6/lesson6";
import {Lesson7} from "./lesson7/lesson7";
import {Lesson8} from "./lesson8/lesson8";

function App() {
    return (
        <Router>
            <div className="App">
                <div>
                    <Header/>
                    <div className="Lesson">
                        <Route path="/">
                            <h1>Choose lesson</h1>
                        </Route>
                        <Route path="/lesson1">
                            <Lesson1/>
                        </Route>
                        <Route path="/lesson2">
                            <Lesson2/>
                        </Route>
                        <Route path="/lesson3">
                            <Lesson3/>
                        </Route>
                        <Route path="/lesson4">
                            <Lesson4/>
                        </Route>
                        <Route path="/lesson5">
                            <Lesson5/>
                        </Route>
                        <Route path="/lesson6">
                            <Lesson6/>
                        </Route>
                        <Route path="/lesson7">
                            <Lesson7/>
                        </Route>
                        <Route path="/lesson8">
                            <Lesson8/>
                        </Route>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
