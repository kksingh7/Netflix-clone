import React, { useEffect, useState } from 'react';
import './Banner.css';
import axios from './axios';
import requests from './Requests';

function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }

        fetchData();
    }, [])

    console.log(movie);

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n-1) + '...' : string;
    }

    return ( 
        <header className = "banner" style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: "center center",
        }}>
            <div className="banner__contents">
                <h1 className="banner__title">
                    Movie Name
                </h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">
                    {truncate('This is a test description. Gretel New York-based Gretel were tasked with creating an identity that would connect everything the Netflix brand touches. The result is one of the strongest and most comprehensive identities of recent times. Netflix remains the top choice for TV and movie streaming thanks to its ease of use, lack of commercials and original content. Streaming shows and movies over the internet is the best way to watch TV, and Netflix is the best choice for streaming entertainment, period.', 
                     150)}    
                </h1>
            </div>

            <div className="banner--fadebottom" />
        </header>
    )
}

export default Banner