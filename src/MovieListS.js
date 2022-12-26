import React from "react";
import MovieList from "./MovieList";

class MovieListS extends React.Component{
    constructor(){
        super();
        
        // this.state = {
        //     title: "The Avengers",
        //     plot: "Plot of the movie is related to super natural powers",
        //     price: 199,
        //     rating: 8.0,
        //     poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        //     stars: 0,
        //     fav:false,
        //     isInCart:false
            
            
        // }
        //this.addStars = this.addStars.bind(this);

        this.state = {
            movies: [{
                id: 1,
                title: 'The Avengers',      
                plot:
                    "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
                poster:
                    'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
                rating: '8.0',
                price: 99,
                stars: 0,
                fav: false
                },

                {
                    id: 2,
                title: 'The Dark Knight',                
                plot:
                    'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
                poster:
                    'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',                
                rating: '9.0',
                price: 199,
                stars: 0,
                fav: false                
                },

                {
                    id: 3,
                title: 'Iron Man',                
                plot:
                    'After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.',               
                poster:
                    'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg',                
                rating: '7.9',
                price: 139,
                stars: 0,
                fav: false
                
                }
            ]
        }
    }

    addStars = (movie) => {

        const {movies} = this.state;
        
        const mid = movies.indexOf(movie);


        // form 1
        if(movies[mid].stars >= 5){
            return;
        }
        movies[mid].stars += 0.5;

        this.setState({
            movies: movies
        })
    }

        decStars = (movieId) => {

             const {movies} = this.state;
            
            // const mid = movies.indexOf(movie);
                      
            movies.map((movie) => {
                return  movieId === movie.id && movie.stars > 0 ?  movie.stars -= 0.5: null
            })

            // form 1
            // if(movies[mid].stars <= 0){
            //     return;
            // }
            // movies[mid].stars -= 0.5;
    
            this.setState({
                movies
            })

        //console.log("Change the stars of: ", movie)

    }

    toggleFav= (movie) => {
        const {movies} = this.state;
            
        const mid = movies.indexOf(movie);

        movies[mid].fav = !movies[mid].fav; 

        this.setState({
            movies
        })
    }

    toggleCart= (movie) => {
        const {movies} = this.state;
            
        const mid = movies.indexOf(movie);

        movies[mid].isInCart = !movies[mid].isInCart; 
        
        this.setState({
            movies
        })
    }
   
    render(){
        // const {title,plot,price,poster,fav,isInCart,rating} = this.state;
        const {movies} = this.state
        return(
            <>
            {movies.map((movie) => 
            <MovieList movie= {movie} 
                       onIncStars = {this.addStars}
                       onDecStars = {this.decStars}
                       onFavClick = {this.toggleFav}
                       onCartClick = {this.toggleCart}
                       key = {movie.id}
            />)}
            
            
            </>
        )
    }
}

export default MovieListS;