import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('./movies.json')
      .then((response) => response.json())
      .then(setMovies)
  }, []);

  return (
    <div className="App">
      <nav>
        <a>Movie Reviews</a>
        <a>Add Review</a>
        
      </nav>
      <h1>Movie Reviews</h1>
      { movies.map( (movie, i) => { return <Movie key={i} info={movie}></Movie>}) }
    </div>
  );
}

function Movie(props) {
  console.log(props);
  return (
    <>
      <h2>{props.info.name}</h2>
      <p>{props.info.date}</p>
      {props.info.actors.map( actor => {return <p>{actor}</p>})}
      <img src={"images/" + props.info.poster} width="15%" height="15%"/>
      <p>{props.info.rating}</p>
      {/* <p>{ JSON.stringify(props.title)}</p> */}
    </>
  )
}

export default App;
