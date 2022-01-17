import { FaTrash } from "react-icons/fa";
import React, { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { axios } from 'axios';

// export function AddReviewForm({ onNewReview = f => f }) {
//     const [file, setFile] = useState(null);
//     const movieName = useRef();
//     const releaseDate = useRef();
//     const actors = useRef();
//     const poster = useRef();
//     const rating = useRef();
//     const navigate = useNavigate();

//     const submit = e => {
//         e.preventDefault();
//         const name = movieName.current.value;
//         const date = releaseDate.current.value;
//         const movieActors = actors.current.value.split(" ,");
//         const moviePoster = poster.current.value;
//         const movieRating = rating.current.value;
//         onNewReview(name, date, movieActors, moviePoster, movieRating);
//         movieName.current.value = "";
//         releaseDate.current.value = "";
//         actors.current.value = "";
//         poster.current.value = "";
//         rating.current.value = "";
//         navigate('/');
//     }

//     const onFileUpload = (e) => {
//         console.log(e.target.files)
//         setFile(e.target.value[0])
//     }

    // return(
    //     <>
    //         <form onSubmit={submit}>
    //             <label for="name">Movie Name:</label>
    //             <input ref={movieName} type="text" id="name" name="name" required/>
    //             <label for="date">Release Date:</label>
    //             <input ref={releaseDate} type="date" id="date" name="date" required/>
    //             <label for="actors">Actors (separate by commas):</label>
    //             <input ref={actors} type="text" id="actors" name="actors" required/>
    //             <label for="image">Poster:</label>
    //             <input ref={poster} type="file" id="poster" name="poster" accept=".png, .jfif, .jpg, .jpeg" required/>
    //             <label for="rating">Rating (out of 5):</label>
    //             <select ref={rating} id="rating" name="rating" required>
    //                 <option value="0">0</option>
    //                 <option value="1">1</option>
    //                 <option value="2">2</option>
    //                 <option value="3">3</option>
    //                 <option value="4">4</option>
    //                 <option value="5">5</option>
    //             </select>
    //             <button onClick={onFileUpload()} type="submit" value="Submit">Add Review</button>
    //         </form>
    //     </>
    // );
// }

export function AddReviewForm({ onNewReview = f => f }){
    const [name, setName] = useState("");
    const [date, setDate] = useState([]);
    const [actors, setActors] = useState("");
    const [poster, setPoster] = useState("");
    const [rating, setRating] = useState(0);

    const submit = e => {
        e.preventDefault();
        // const movieActors = actors.split(", ");
        onNewReview(name, date, actors, poster, rating);
        setName("");
        setDate(null);
        setActors([]);
        setPoster("");
        setRating(0);
    }

    return(
        <>
            <form onSubmit={submit}>
                <label htmlFor="name">Movie Name:</label>
                <input 
                    value={name} 
                    onChange = {event => setName(event.target.value)}
                    type="text" 
                    id="name" 
                    name="name" 
                    required
                />

                <label htmlFor="date">Release Date:</label>
                <input 
                    value={date}
                    onChange = {event => setDate(event.target.value)}
                    type="date" 
                    id="date" 
                    name="date" 
                    required
                />

                <label htmlFor="actors">Actors (separate by commas):</label>
                <input 
                    value={actors} 
                    onChange = {event => setActors((event.target.value).split(", "))}
                    type="text" 
                    id="actors" 
                    name="actors" 
                    required
                />

                <label htmlFor="image">Poster:</label>
                <input 
                    value={poster}
                    onChange = {event => setPoster(event.target.value)} 
                    type="file" 
                    id="poster" 
                    name="poster" 
                    accept=".png, .jfif, .jpg, .jpeg" 
                    required
                />

                <label htmlFor="rating">Rating (out of 5):</label>
                <select 
                    value={rating}
                    onChange = {event => setRating(event.target.value)} 
                    id="rating" 
                    name="rating" 
                    required
                >
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

                <button type="submit" value="Submit">Add Review</button>
            </form>
        </>
    );
} 

export function MovieList({ movies = [], onRemoveMovie = f => f }){
    if (!movies.length) return <div>No Movie Reviews Available</div>;

    return(
        <div>
            {
                movies.map((movie, i) => (
                    <Movie key={i} {...movie} onRemove={onRemoveMovie} />
                ))
            }
        </div>
    );
}

export function Movie({name, date, actors, poster, rating, onRemove = f => f}) {
    console.log(name, date, actors, poster, rating);
    return (
      <>
        <div>
            <h2>{name}</h2>
            <p>{date}</p>
            {actors.map( actor => {return <p>{actor}</p>})}
            <img src={poster} width="15%" height="15%"/>
            <p>{rating}</p>
            <button onClick={() => onRemove(name)}>
                <FaTrash />
            </button>
            {/* <p>{ JSON.stringify(props.title)}</p> */}
        </div>
      </>
    )
}