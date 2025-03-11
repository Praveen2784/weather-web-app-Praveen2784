import React from 'react';
import { Movie } from '../types';
import { Calendar, Clock } from 'lucide-react';

interface ComingSoonProps {
  movies: Movie[];
}

const ComingSoon: React.FC<ComingSoonProps> = ({ movies }) => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Coming Soon</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {movies.map(movie => (
            <div key={movie.id} className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <img 
                  src={movie.posterUrl} 
                  alt={movie.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 md:w-2/3">
                <h3 className="font-bold text-lg">{movie.title}</h3>
                <div className="flex items-center text-gray-600 mt-2 text-sm">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Release: {movie.releaseDate}</span>
                </div>
                <div className="flex items-center text-gray-600 mt-1 text-sm">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{movie.duration} min</span>
                </div>
                <div className="mt-3">
                  {movie.genres.map((genre, index) => (
                    <span key={index} className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                      {genre}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm mt-3 line-clamp-3">{movie.description}</p>
                <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors">
                  Notify Me
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;