import './App.css';
import { useEffect, useState } from 'react';
import Film from './Film';

const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&';
const API_KEY = '04c35731a5ee918f014970082a0088b1';


const App = () => {

  const searchMovies = async () => {
    const response = await fetch(`${API_URL}api_key=${API_KEY}&page=1`);
    const data = await response.json();

    setFilms(data.results);
    console.log(films)
  }

  const [searchQuery, setSearchQuery] = useState('');
  const [films, setFilms] = useState([]);

  useEffect(() => {
    searchMovies();
  }, []);

  return (
    <>
      <header id="header-container">
        <h1>Movies App</h1>
      </header>
      <main id="main-container">
        <input
          className="search"
          type="text"
          placeholder="Search movies"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
        <div className="films">
          {films.map((item, index) => {
            return <Film key={index} film={item} />
          })}
        </div>
      </main>
      <footer><a id="credits" href="https://github.com/BartZaw00" target="_blank">Created By <span>Bartosz
        Zawadka</span></a></footer>
    </>
  );
}

export default App;