import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Star } from 'lucide-react';
import { Movie } from '../types';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <Link to={`/movies/${movie.id}`} className="group">
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
        <div className="relative">
          <img 
            src={movie.posterUrl} 
            alt={movie.title} 
            className="w-full h-[350px] object-cover"
          />
          <div className="absolute top-0 right-0 bg-blue-900 text-white px-2 py-1 text-sm font-semibold">
            {movie.ageRating}
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-bold text-lg group-hover:text-blue-600 transition-colors line-clamp-1">
            {movie.title}
          </h3>
          <div className="flex items-center text-gray-600 mt-2 text-sm">
            <Clock className="h-4 w-4 mr-1" />
            <span>{movie.duration} min</span>
            <div className="mx-2">•</div>
            <Star className="h-4 w-4 mr-1 text-yellow-500" />
            <span>{movie.rating}/10</span>
          </div>
          <div className="mt-3">
            <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
              {movie.genres[0]}
            </span>
            {movie.genres[1] && (
              <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                {movie.genres[1]}
              </span>
            )}
          </div>
          <button className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition-colors">
            Book Tickets
          </button>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;