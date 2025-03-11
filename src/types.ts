export interface Movie {
  id: number;
  title: string;
  description: string;
  posterUrl: string;
  backdropUrl?: string;
  duration: number;
  rating: number;
  ageRating: string;
  genres: string[];
  releaseDate: string;
  director: string;
  cast: string[];
  language: string;
  subtitles: string;
}

export interface HeroSlide {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

export interface Theater {
  id: number;
  name: string;
  address: string;
  phone: string;
  hours: string;
  imageUrl: string;
  region: string;
}

export interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  price: string;
  imageUrl: string;
  ageRestriction: string;
}