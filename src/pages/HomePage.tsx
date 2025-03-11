import React from 'react';
import HeroSlider from '../components/HeroSlider';
import NowShowing from '../components/NowShowing';
import ComingSoon from '../components/ComingSoon';
import { heroSlides, nowShowingMovies, comingSoonMovies } from '../data/movieData';

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSlider slides={heroSlides} />
      <NowShowing movies={nowShowingMovies} />
      <ComingSoon movies={comingSoonMovies} />
      
      <section className="py-12 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Join Our Movie Club</h2>
          <p className="max-w-2xl mx-auto mb-8 text-blue-200">
            Get exclusive benefits, discounts on tickets, and special invitations to premieres and events.
          </p>
          <button className="bg-white text-blue-900 hover:bg-blue-100 px-6 py-3 rounded-md font-semibold transition-colors">
            Sign Up Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;