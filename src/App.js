import React from 'react';
import Nav from './Components/Nav'
import {Route} from "react-router-dom";
import Home from "./Components/Home";

function App(props) {
    return (
        <div>
            <Nav />
            <main>
                <Route path='/' exact component={Home}/>
            </main>
        </div>
    );
}

export default App;