import React from "react";

const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

const Film = (props) => {
    return (
        <div className="film">
            <img src={`${IMG_PATH}${props.film.poster_path}`} alt="film-cover" />
            <div className="film-description">
                <span className="font-size-medium">{props.film.title}</span>
                <span className='vote'>{props.film.vote_average}</span>
            </div>
        </div>

    )
}

export default Film;