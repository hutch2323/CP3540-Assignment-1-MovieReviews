import react from "react";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Movies, MovieList, AddReviewForm } from "./movies";
import { v4 } from "uuid";


function NavigationBar(){
    return(
        <nav>
            <Link to="/">Home</Link>
            <Link to="/addReview">Add Review</Link>
        </nav>
    )
}

export function Home({movies, setMovies}){

    return(
        <>
            <NavigationBar />
            <h1>Movie Reviews</h1>

            <MovieList 
                movies={movies} 
                onRemoveMovie = {
                    movieName => {
                        const newMovies = movies.filter(movie => movie.name !== movieName);
                        setMovies(newMovies);
                    }
                } 
            />
        </>
    );
}

export function AddReview({movies, setMovies}){
    return(
        <>
            <NavigationBar />
            <h2>Movie Review Form</h2>
            <AddReviewForm
                onNewReview={(name, date, actors, poster, rating) => {
                    const newReviews = [
                    ...movies,
                        {
                            // id: v4(),
                            name,
                            date,
                            actors,
                            poster,
                            rating
                        }
                    ];
                    setMovies(newReviews);
                }}
            />
        </>
    );
}