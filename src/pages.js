import React from "react";
import { Link } from "react-router-dom";
import { MovieList } from "./movies";
import { AddReviewForm } from "./addReviewForm";

function NavigationBar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-item nav-link active" to="/">Home</Link>
                    <Link className="nav-item nav-link active" to="/addReview">Add Review</Link>
                </div>
            </div>
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