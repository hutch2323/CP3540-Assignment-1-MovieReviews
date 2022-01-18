import { FaTrash } from "react-icons/fa";
import React, { Component, useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';

export function AddReviewForm({ onNewReview = f => f }){
    const [name, setName] = useState("");
    const [date, setDate] = useState([]);
    const [actors, setActors] = useState("");
    const [poster, setPoster] = useState("");
    const [rating, setRating] = useState(0);
    const navigate = useNavigate();

    const submit = evt => {
        evt.preventDefault();
        onNewReview(name, date, actors.split(", "), poster, rating);
        setName("");
        setDate(null);
        setActors([]);
        setPoster("");
        setRating(0);
        navigate('/');
    }

    const onFileChange = evt => {
        let file = evt.target.files[0];
        setPoster(URL.createObjectURL(file));
    }

    return(
        <>
            <form onSubmit={submit}>
                <label htmlFor="name">Movie Name:</label>
                <input 
                    value={name} 
                    onChange = {evt => setName(evt.target.value)}
                    type="text" 
                    id="name" 
                    name="name" 
                    required
                />

                <label htmlFor="date">Release Date:</label>
                <input 
                    value={date}
                    onChange = {evt => setDate(evt.target.value)}
                    type="date" 
                    id="date" 
                    name="date" 
                    required
                />

                <label htmlFor="actors">Actors (separate by commas):</label>
                <input 
                    value={actors} 
                    onChange = {evt => setActors(evt.target.value)}
                    type="text" 
                    id="actors" 
                    name="actors" 
                    required
                />

                <label htmlFor="image">Poster:</label>
                <input 
                    // value={poster}
                    onChange = {evt => onFileChange(evt)} 
                    type="file" 
                    id="poster" 
                    name="poster" 
                    accept=".png, .jfif, .jpg, .jpeg" 
                    required
                />

                <label htmlFor="rating">Rating (out of 5):</label>
                <select 
                    value={rating}
                    onChange = {evt => setRating(evt.target.value)} 
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