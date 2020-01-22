import React from 'react';

const MovieCard = props => {
  return(
    <div className="movie-card">
      <h2>{props.title}</h2>
      <div className="movie-director">Director: <em>{props.director}</em></div>
      <div className="movie-metascore">Metascore: <strong>{props.metascore}</strong></div>
      <h3>Actors</h3>
      {/* {props.stars.map(star => {
        return(
          <div className="movie-star">{star}</div>
        )
      })} */}
      
    </div>
  )
};

export default MovieCard;


// import React from 'react';
// import {Link} from 'react-router-dom';

// const MovieCard = props => {
//   return(
//     <div>
//       {console.log(props)}
//       <Link style={{textDecoration: "none", color: "inherit"}} to={`/movies/0`}>
//         <div className="movie-card">
//           <h2>{props.title}</h2>
//           <div className="movie-director">
//             Director: <em>{props.director}</em>
//           </div>
//           <div className="movie-metascore">
//             Metascore: <strong>{props.metascore}</strong>
//           </div>
//           <h3>Actors</h3>
//           let stars=Object.entries(props.stars)

//           stars.map(star)         
            
//           ))
          
//         </div>
//       </Link>
//       <div className="save-button">Save</div>
//     </div>
//   )
// };

// export default MovieCard;
