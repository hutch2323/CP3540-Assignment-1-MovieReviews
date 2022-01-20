import React from "react";
import { Link } from "react-router-dom";
import { MovieList } from "./movies";
import { AddReviewForm } from "./addReviewForm";
import bootstrap from "bootstrap";
import './App.css';

function NavigationBar(){
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div id="navContainer" class="container-fluid">
                    <img id="logo" src="images/movieReviews.png" height="100px" width="600px"/>
                        <div className="navbar-nav" style={{width:"100%", position:"relative",float:"right"}}>
                            <ul class="navbar-nav w-100 nav-fill mx-auto order-0">
                                <li id="firstLink" class="nav-item fs-5" >
                                    <Link className="nav-item nav-link active" to="/">Home</Link>
                                </li>
                                <li class="nav-item fs-5">
                                    <Link className="nav-item nav-link active" to="/addReview">Add Review</Link>
                                </li>	
                            </ul>
                        </div>
                    </div>
            </nav>

        </>
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