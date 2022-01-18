import React, { useState } from "react";
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
            <form className="pt-3" onSubmit={submit}>
                <div className="mb-3">
                    <label className="form-label" htmlFor="name">Movie Name:</label>
                    <input 
                        // className="form-control"
                        value={name} 
                        onChange = {evt => setName(evt.target.value)}
                        type="text" 
                        id="name" 
                        name="name" 
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="date">Release Date:</label>
                    <input 
                        value={date}
                        onChange = {evt => setDate(evt.target.value)}
                        type="date" 
                        id="date" 
                        name="date" 
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="actors">Actors (separate by commas):</label>
                    <input 
                        value={actors} 
                        onChange = {evt => setActors(evt.target.value)}
                        type="text" 
                        id="actors" 
                        name="actors" 
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="image">Poster:</label>
                    <input 
                        onChange = {evt => onFileChange(evt)} 
                        type="file" 
                        id="poster" 
                        name="poster" 
                        accept=".png, .jfif, .jpg, .jpeg" 
                        required
                    />
                </div>

                <div className="mb-3">
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
                </div>

                <button className="btn btn-primary" type="submit" value="Submit">Add Review</button>
            </form>
        </>
    );
}