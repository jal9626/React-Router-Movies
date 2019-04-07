import React, { Component } from 'react';
import axios from 'axios';

import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';

export default class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/movies')
      .then(response => {
        this.setState(() => ({ movies: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }

  render() {
    return (
      
      <div className="movie-list">
        {this.state.movies.map(movie => (
          <div className='movie-card' key='movie.id'> 
            <Link to={`/movies/${movie.id}`}>
              <MovieCard movie={movie} />
            </Link>
             
       </div>
        ))}
      </div>
      // stars={movie.stars}
    );
  }
}

// function MovieDetails({movie, id}) {
  
//   return (
//     <div className='movie-card'> 
//       <Link to={`/movies/${id}`}>
//         <MovieCard movie={movie} />
//       </Link>
          
//     </div>
//   );
// }
