import React from 'react';
import './App.css';
import MovieList from "./MovieList";
import {MovieProvider} from "./MovieContext";
import Nav from "./Nav";
import AddMovie from "./AddMovie";

function App() {
    return (
        <MovieProvider>
            <div className="App">
                <Nav/>
                <AddMovie/>
                <MovieList/>
            </div>
        </MovieProvider>
    );
}

export default App;
