import React, {createContext, useState} from "react";

export const MovieContext = createContext();

export const MovieProvider = props => {

    const [movies, setMovies] = useState([
        {
            name: 'Harry Potter',
            price: '$10',
            id: 2356
        },
        {
            name: 'Game Of Thrones',
            price: '$20',
            id: 23564
        },
        {
            name: 'Inception',
            price: '$18',
            id: 13648
        }
    ]);

    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
}
