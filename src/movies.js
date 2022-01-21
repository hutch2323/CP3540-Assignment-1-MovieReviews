import React, { useState } from "react";
import { FaTrash, FaStar } from "react-icons/fa"; 

export function MovieList({ movies = [], onRemoveMovie = f => f }){
    if (!movies.length) return <div>No Movie Reviews Available</div>;

    return(
        <div className="mt-3" style={{display: "flex", flexWrap: "wrap", width: "100%", justifyContent: "center"}}>
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

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    let releaseDate = new Date(date);

    return (
    //   <>
    //     <div className="card" style={{width: "18rem", padding: "5px", margin: "10px", textAlign: "center"}}>
    //         <div className="card-header">
    //             <h2>{name}</h2>
    //         </div>
    //         <img className="p-3" src={poster} width="100%" height="100%" style={{margin: "auto"}}/>
    //         <p><b>Released:</b> {date}</p>
    //         {actors.map( actor => {return <p>{actor}</p>})}
    //         <div>
    //             {stars.map( star => {return <FaStar color="red"/>})}
    //             {greyStars.map( star => { return <FaStar color="grey"/>})}
    //         </div>
    //         <button onClick={() => onRemove(name)}>
    //             <FaTrash />
    //         </button>
    //         {/* <p>{ JSON.stringify(props.title)}</p> */}
    //     </div>
    //   </>
        <>
        <div className="m-auto text-center p-3">
            <div class="card border-dark m-auto" style={{maxWidth:"540px", backgroundColor:"#E6E6E6"}}>
                <div class="row g-0 h-100">
                    <div class="col-md-4">
                    <img className="p-3" src={poster} width="100%" height="100%" style={{margin: "auto"}}/>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body h-100 w-100"  style={{position:"relative", margin:"auto"}}>
                            <h5 class="card-title mb-0">{name}</h5>
                            <h7 class="card-title">
                                {monthNames[releaseDate.getMonth()] + " " + releaseDate.getFullYear()}
                            </h7>
                            <p id="actors" class="p-4 card-text mb-0"><b>Actors: </b>
                                {actors.map( (actor, i) => {
                                    if (i + 1 == actors.length){
                                        return <>{actor}</>
                                    } else {
                                        return <>{actor}, </>
                                    }
                                    
                            })}
                            </p>
                            <div class="card-text w-100 pb-4"  style={{margin:"auto"}}>
                                
                                {stars.map( star => {return <FaStar color="red"/>})}
                                {greyStars.map( star => { return <FaStar color="grey"/>})}   

                            </div>

                            <button onClick={() => onRemove(name)}>
                                <FaTrash/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}