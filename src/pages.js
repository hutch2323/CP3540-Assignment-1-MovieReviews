import react from "react";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa"

function NavigationBar(){
    return(
        <nav>
            <Link to="/">Home</Link>
            <Link to="/addReview">Add Review</Link>
        </nav>
    )
}

export function Home(){
    
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('./movies.json')
        .then((response) => response.json())
        .then(setMovies)
    }, []);

    return(
        <>
            <NavigationBar />
            <h1>Movie Reviews</h1>
            { movies.map( (movie, i) => { 
                return (
                <>
                    <Movie key={i} info={movie}></Movie>
                </>
                )
            })}
        </>
    );
}

function Movie(props) {
    console.log(props);
    return (
      <>
        <div id={props.key}>
            <h2>{props.info.name}</h2>
            <p>{props.info.date}</p>
            {props.info.actors.map( actor => {return <p>{actor}</p>})}
            <img src={"images/" + props.info.poster} width="15%" height="15%"/>
            <p>{props.info.rating}</p>
            <button onClick={() => onRemove(id)}>
                <FaTrash />
            </button>
            {/* <p>{ JSON.stringify(props.title)}</p> */}
        </div>
      </>
    )
}

export function AddReview(){
    return(
        <>
            <NavigationBar />
            <h2>Movie Review Form</h2>
            <form>
                <label for="name">Movie Name:</label>
                <input type="text" id="name" name="name"/>
                <label for="date">Release Date:</label>
                <input type="date" id="date" name="date"/>
                <label for="actors">Actors:</label>
                <input type="text" id="actors" name="actors"/>
                <label for="image">Actors:</label>
                <input type="text" id="actors" name="actors"/>
                <label for="image">Poster:</label>
                <input type="file" id="poster" name="poster"/>
                <label for="rating">Rating (out of 5):</label>
                <select id="rating" name="rating">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                </select>
                <input type="submit" value="Submit"></input>
            </form>
        </>
    );
}