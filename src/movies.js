import React, { useState } from "react";
import { FaTrash, FaStar } from "react-icons/fa"; 

export function MovieList({ movies = [], onRemoveMovie = f => f }){
    if (!movies.length) return <div>No Movie Reviews Available</div>;

    return(
        <div style={{display: "flex", flexWrap: "wrap", width: "100%", justifyContent: "center"}}>
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

    let stars = [];
    for(let i = 0; i < rating; i++){
        stars.push(i);
    }

    let greyStars = []
    for(let i = 0; i < ( 5  - rating ); i++){
        greyStars.push(i)
    }

    return (
      <>
        <div className="card" style={{width: "18rem", padding: "5px", margin: "10px", textAlign: "center"}}>
            <div className="card-header">
                <h2>{name}</h2>
            </div>
            <img className="p-3" src={poster} width="100%" height="100%" style={{margin: "auto"}}/>
            <p><b>Released:</b> {date}</p>
            {actors.map( actor => {return <p>{actor}</p>})}
            <div>
                {stars.map( star => {return <FaStar color="red"/>})}
                {greyStars.map( star => { return <FaStar color="grey"/>})}
            </div>
            <button onClick={() => onRemove(name)}>
                <FaTrash />
            </button>
            {/* <p>{ JSON.stringify(props.title)}</p> */}
        </div>
      </>
    )
}