import React from 'react';
import { useParams } from 'react-router-dom';
import { Clock, Calendar, Star, Film, Users } from 'lucide-react';
import ShowtimeSelector from '../components/ShowtimeSelector';
import { nowShowingMovies } from '../data/movieData';

const MoviePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const movie = nowShowingMovies.find(m => m.id === Number(id));

  if (!movie) {
    return <div className="container mx-auto px-4 py-12 text-center">Movie not found</div>;
  }

  const dates = [
    'Today, Nov 10',
    'Tomorrow, Nov 11',
    'Sunday, Nov 12',
    'Monday, Nov 13',
    'Tuesday, Nov 14',
  ];

  const theaters = [
    'Downtown Cinema',
    'Westfield Mall',
    'Central Plaza',
    'Riverside Theater',
  ];

  const showtimes = [
    { theater: 'Downtown Cinema', time: '12:30', type: '2D' },
    { theater: 'Downtown Cinema', time: '15:45', type: 'IMAX' },
    { theater: 'Downtown Cinema', time: '19:00', type: '3D' },
    { theater: 'Downtown Cinema', time: '21:30', type: '2D' },
    { theater: 'Westfield Mall', time: '13:15', type: '2D' },
    { theater: 'Westfield Mall', time: '16:30', type: '2D' },
    { theater: 'Westfield Mall', time: '20:00', type: 'IMAX' },
    { theater: 'Central Plaza', time: '14:00', type: '3D' },
    { theater: 'Central Plaza', time: '17:15', type: '2D' },
    { theater: 'Central Plaza', time: '20:30', type: '2D' },
    { theater: 'Riverside Theater', time: '13:45', type: '2D' },
    { theater: 'Riverside Theater', time: '18:00', type: 'IMAX' },
    { theater: 'Riverside Theater', time: '21:15', type: '3D' },
  ];

  return (
    <div>
      {/* Movie Hero */}
      <div className="relative h-[400px] md:h-[500px]">
        <img 
          src={movie.backdropUrl || movie.posterUrl} 
          alt={movie.title} 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
          <div className="container mx-auto px-4 h-full flex items-end pb-8">
            <div className="flex flex-col md:flex-row items-start md:items-end gap-6">
              <img 
                src={movie.posterUrl} 
                alt={movie.title} 
                className="w-32 md:w-48 rounded-lg shadow-lg hidden md:block"
              />
              <div className="text-white">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{movie.title}</h1>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-500 mr-1" />
                    <span>{movie.rating}/10</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-1" />
                    <span>{movie.duration} min</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 mr-1" />
                    <span>{movie.releaseDate}</span>
                  </div>
                  <div className="bg-blue-900 text-white px-2 py-1 text-sm font-semibold rounded">
                    {movie.ageRating}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {movie.genres.map((genre, index) => (
                    <span key={index} className="bg-white/20 text-white text-sm px-3 py-1 rounded-full">
                      {genre}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Movie Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Movie Info */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-bold mb-4">Synopsis</h2>
              <p className="text-gray-700 mb-6">{movie.description}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Director</h3>
                  <p className="text-gray-600">{movie.director}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Cast</h3>
                  <p className="text-gray-600">{movie.cast.join(', ')}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Language</h3>
                  <p className="text-gray-600">{movie.language}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Subtitles</h3>
                  <p className="text-gray-600">{movie.subtitles}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-bold mb-4">Trailer</h2>
              <div className="aspect-w-16 aspect-h-9">
                <div className="w-full h-0 pb-[56.25%] relative bg-gray-200 flex items-center justify-center">
                  <Film className="h-16 w-16 text-gray-400" />
                  <span className="absolute text-gray-500">Trailer would play here</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">Reviews</h2>
              <div className="flex items-center mb-6">
                <div className="flex items-center mr-4">
                  <Star className="h-6 w-6 text-yellow-500 mr-1" />
                  <span className="text-2xl font-bold">{movie.rating}</span>
                  <span className="text-gray-500 ml-1">/10</span>
                </div>
                <div className="text-gray-600">
                  <Users className="h-5 w-5 inline mr-1" />
                  <span>Based on 1,245 reviews</span>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="border-b pb-4">
                  <div className="flex justify-between mb-2">
                    <div className="font-semibold">John D.</div>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 text-yellow-500" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Amazing movie! The special effects were incredible and the story kept me engaged throughout.
                  </p>
                </div>
                
                <div className="border-b pb-4">
                  <div className="flex justify-between mb-2">
                    <div className="font-semibold">Sarah M.</div>
                    <div className="flex">
                      {[1, 2, 3, 4].map((star) => (
                        <Star key={star} className="h-4 w-4 text-yellow-500" />
                      ))}
                      <Star className="h-4 w-4 text-gray-300" />
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Great performances by the cast. The plot was a bit predictable but still enjoyable.
                  </p>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <div className="font-semibold">Michael T.</div>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 text-yellow-500" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">
                    One of the best films I've seen this year! The cinematography was breathtaking.
                  </p>
                </div>
              </div>
              
              <button className="mt-6 w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 rounded-md transition-colors">
                Read More Reviews
              </button>
            </div>
          </div>
          
          {/* Showtimes */}
          <div>
            <ShowtimeSelector 
              dates={dates}
              theaters={theaters}
              showtimes={showtimes}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;