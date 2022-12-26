import React from "react";
import MovieCard from "./MoviCard";

class MovieList extends React.Component{
    
    render(){
       console.log("rendered")
       const {stars,fav,isInCart, title,plot,price,rating,poster,id} = this.props.movie;
       const {movie} = this.props;
    
        return(
            <>
            <div className="main">
                
                <div className="movie-card">
                    <div className="left">
                        <img alt="poster" src={poster} />
                    </div>
                    
                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">Rs. {price}</div>
                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">
                            <img className="str-btn" 
                                alt="Decrease" 
                                src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png" 
                                onClick={() => this.props.onDecStars(id)}
                                />
                                <img className="stars" 
                                        alt="stars" 
                                        src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png" 
                                        
                                />
                                <img className="str-btn" 
                                    alt="increase" 
                                    src="https://cdn-icons-png.flaticon.com/128/2997/2997933.png" 
                                    onClick={() => this.props.onIncStars(movie)}
                                />
                                <span className="starCount">{stars}</span>
                            </div>
                            <button className={fav?"unfavourite-btn":"favourite-btn"}  onClick={() => this.props.onFavClick(movie)}>
                                {fav ? "Un-favourite":"Favourite"}
                            </button>
                            <button className={isInCart?"unfavourite-btn":"cart-btn"}  onClick={() => this.props.onCartClick(movie)}>
                                {isInCart ? "Remove from Cart":"Add to Cart"}
                            </button>
                            
                        </div>
                    </div>

                </div>
            </div>
            
            </>
            
        )
    }
    
}

MovieCard.defaultProps = {
    title : "Movie ",
    plot : "Movie Plot is not available",
    price: "N.A"
}


export default MovieList;