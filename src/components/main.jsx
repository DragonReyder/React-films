import React from "react";
import { Movies } from "./Movies";
import { Search } from "./search";
import { Preloader } from "./preloader";

class Main extends React.Component {
    state = {
        movies: [],
        loading: true,
    };
    componentDidMount() {
        fetch('http://www.omdbapi.com/?s=The Chronicles of Narnia&apikey=ab6ec8c1')
            .then((response) => response.json())
            .then((data) => this.setState({ movies: data.Search, loading: false }));
    }

    searchMovies = (str, type = "all") => {
        fetch(
            `http://www.omdbapi.com/?apikey=ab6ec8c1&s=${str}${type !== "all" ? `&type=${type}` : ""
            }`
        )
            .then((response) => response.json())
            .then((data) => this.setState({ movies: data.Search, loading: false }));
    }
    render() {
        const { movies, loading } = this.state;
        return (<main className="container content">
            <Search searchMovies={this.searchMovies} />
            {loading ? <Preloader /> : <Movies movies={this.state.movies} />}
        </main>
        );
    }
}
export { Main };
