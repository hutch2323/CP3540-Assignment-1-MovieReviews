import React from "react";
import { FaTrash } from "react-icons/fa"; 

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
    return (
      <>
        <div className="card" style={{width: "18rem", padding: "5px", margin: "10px", textAlign: "center"}}>
            <div className="card-header">
                <h2>{name}</h2>
            </div>
            <img src={poster} width="100%" height="100%" style={{margin: "auto"}}/>
            <p>Released: {date}</p>
            {actors.map( actor => {return <p>{actor}</p>})}
            <p>{rating}</p>
            <button onClick={() => onRemove(name)}>
                <FaTrash />
            </button>
            {/* <p>{ JSON.stringify(props.title)}</p> */}
        </div>
      </>
    )
}