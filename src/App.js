import React, {Component} from 'react';
import axios from 'axios';
import Movie from "./Movie";
import './App.css';

class App extends Component {
    state = {
        isLoading: true,
    };
    getMovies = async () => {
        const {
            data: {
                data: {
                    movies
                },
            },
        } = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating');
        this.setState({movies, isLoading: false});
    }

    componentDidMount() {
        this.getMovies();
    }

    render() {
        const {isLoading, movies} = this.state;
        return (
            <section>{
                isLoading ?
                    (
                        <div className="loader">
                            <span className="loader__text">Loading..</span>
                        </div>
                    )
                    :
                    (
                        <div className="movies">
                            {
                                movies.map(movie => (
                                    <Movie
                                        key={movie.id}
                                        id={movie.id}
                                        title={movie.title}
                                        summary={movie.summary}
                                        poster={movie.medium_cover_image}
                                        genres={movie.genres}
                                    />
                                ))
                            }
                        </div>
                    )
            }</section>
        );
    }
}

export default App;