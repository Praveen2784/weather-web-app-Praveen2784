import { Movie, HeroSlide } from '../types';

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    title: "Dune: Part Two",
    description: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
    imageUrl: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1944&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Gladiator II",
    description: "The story of Lucius, the son of Lucilla, following in the footsteps of his father and uncle to become a powerful warrior.",
    imageUrl: "https://images.unsplash.com/photo-1543536448-1e76fc2795bf?q=80&w=1770&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Furiosa: A Mad Max Saga",
    description: "The origin story of renegade warrior Furiosa before her encounter with Mad Max.",
    imageUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop"
  }
];

export const nowShowingMovies: Movie[] = [
  {
    id: 1,
    title: "Dune: Part Two",
    description: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the universe, he must prevent a terrible future only he can foresee.",
    posterUrl: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=1770&auto=format&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1944&auto=format&fit=crop",
    duration: 166,
    rating: 8.7,
    ageRating: "PG-13",
    genres: ["Sci-Fi", "Adventure", "Drama"],
    releaseDate: "March 1, 2024",
    director: "Denis Villeneuve",
    cast: ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson", "Josh Brolin"],
    language: "English",
    subtitles: "Multiple languages"
  },
  {
    id: 2,
    title: "Gladiator II",
    description: "The story of Lucius, the son of Lucilla, following in the footsteps of his father and uncle to become a powerful warrior in ancient Rome.",
    posterUrl: "https://images.unsplash.com/photo-1543536448-1e76fc2795bf?q=80&w=1770&auto=format&fit=crop",
    duration: 158,
    rating: 8.2,
    ageRating: "R",
    genres: ["Action", "Drama", "History"],
    releaseDate: "November 22, 2024",
    director: "Ridley Scott",
    cast: ["Paul Mescal", "Denzel Washington", "Pedro Pascal", "Connie Nielsen"],
    language: "English",
    subtitles: "Multiple languages"
  },
  {
    id: 3,
    title: "Furiosa: A Mad Max Saga",
    description: "The origin story of renegade warrior Furiosa before her encounter with Mad Max.",
    posterUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop",
    duration: 145,
    rating: 7.9,
    ageRating: "R",
    genres: ["Action", "Adventure", "Sci-Fi"],
    releaseDate: "May 24, 2024",
    director: "George Miller",
    cast: ["Anya Taylor-Joy", "Chris Hemsworth", "Tom Burke", "Alyla Browne"],
    language: "English",
    subtitles: "Multiple languages"
  },
  {
    id: 4,
    title: "The Fall Guy",
    description: "A stuntman is forced to track down a missing movie star, solve a conspiracy, and try to win back the love of his life.",
    posterUrl: "https://images.unsplash.com/photo-1597002973885-8c90683fa6e0?q=80&w=1770&auto=format&fit=crop",
    duration: 126,
    rating: 7.4,
    ageRating: "PG-13",
    genres: ["Action", "Comedy"],
    releaseDate: "May 3, 2024",
    director: "David Leitch",
    cast: ["Ryan Gosling", "Emily Blunt", "Aaron Taylor-Johnson", "Hannah Waddingham"],
    language: "English",
    subtitles: "Multiple languages"
  },
  {
    id: 5,
    title: "Kingdom of the Planet of the Apes",
    description: "Many years after the reign of Caesar, a young ape goes on a journey that will lead him to question everything he's been taught about the past.",
    posterUrl: "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?q=80&w=1792&auto=format&fit=crop",
    duration: 145,
    rating: 7.8,
    ageRating: "PG-13",
    genres: ["Action", "Adventure", "Sci-Fi"],
    releaseDate: "May 10, 2024",
    director: "Wes Ball",
    cast: ["Owen Teague", "Freya Allan", "Kevin Durand", "Peter Macon"],
    language: "English",
    subtitles: "Multiple languages"
  },
  {
    id: 6,
    title: "Inside Out 2",
    description: "As Riley enters her teenage years, new emotions join the mix, complicating her emotional landscape.",
    posterUrl: "https://images.unsplash.com/photo-1535016120720-40c646be5580?q=80&w=1770&auto=format&fit=crop",
    duration: 105,
    rating: 8.5,
    ageRating: "PG",
    genres: ["Animation", "Adventure", "Comedy"],
    releaseDate: "June 14, 2024",
    director: "Kelsey Mann",
    cast: ["Amy Poehler", "Phyllis Smith", "Lewis Black", "Tony Hale"],
    language: "English",
    subtitles: "Multiple languages"
  },
  {
    id: 7,
    title: "Bad Boys: Ride or Die",
    description: "Miami detectives Mike Lowrey and Marcus Burnett are back for another ride as they face new challenges and enemies.",
    posterUrl: "https://images.unsplash.com/photo-1605806616949-59450e59a6df?q=80&w=1771&auto=format&fit=crop",
    duration: 115,
    rating: 7.2,
    ageRating: "R",
    genres: ["Action", "Comedy", "Crime"],
    releaseDate: "June 7, 2024",
    director: "Adil El Arbi, Bilall Fallah",
    cast: ["Will Smith", "Martin Lawrence", "Vanessa Hudgens", "Alexander Ludwig"],
    language: "English",
    subtitles: "Multiple languages"
  },
  {
    id: 8,
    title: "A Quiet Place: Day One",
    description: "The prequel to the post-apocalyptic horror franchise, showing the first day of the alien invasion.",
    posterUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop",
    duration: 110,
    rating: 7.6,
    ageRating: "PG-13",
    genres: ["Horror", "Sci-Fi", "Thriller"],
    releaseDate: "June 28, 2024",
    director: "Michael Sarnoski",
    cast: ["Lupita Nyong'o", "Joseph Quinn", "Alex Wolff", "Djimon Hounsou"],
    language: "English",
    subtitles: "Multiple languages"
  }
];

export const comingSoonMovies: Movie[] = [
  {
    id: 101,
    title: "Deadpool & Wolverine",
    description: "Wade Wilson aka Deadpool teams up with Wolverine in this highly anticipated crossover event.",
    posterUrl: "https://images.unsplash.com/photo-1608889175123-8ee362201f81?q=80&w=1780&auto=format&fit=crop",
    duration: 135,
    rating: 0,
    ageRating: "R",
    genres: ["Action", "Comedy", "Superhero"],
    releaseDate: "July 26, 2024",
    director: "Shawn Levy",
    cast: ["Ryan Reynolds", "Hugh Jackman", "Emma Corrin", "Morena Baccarin"],
    language: "English",
    subtitles: "Multiple languages"
  },
  {
    id: 102,
    title: "Twisters",
    description: "A new chapter in the Twister universe, following a new group of storm chasers facing the most dangerous tornadoes.",
    posterUrl: "https://images.unsplash.com/photo-1527482797697-8795b05a13fe?q=80&w=1887&auto=format&fit=crop",
    duration: 125,
    rating: 0,
    ageRating: "PG-13",
    genres: ["Action", "Adventure", "Disaster"],
    releaseDate: "July 19, 2024",
    director: "Lee Isaac Chung",
    cast: ["Daisy Edgar-Jones", "Glen Powell", "Anthony Ramos", "Brandon Perea"],
    language: "English",
    subtitles: "Multiple languages"
  },
  {
    id: 103,
    title: "Alien: Romulus",
    description: "A group of young space colonizers come face to face with the most terrifying life form in the universe.",
    posterUrl: "https://images.unsplash.com/photo-1518562180175-34a163b1a9a6?q=80&w=1974&auto=format&fit=crop",
    duration: 140,
    rating: 0,
    ageRating: "R",
    genres: ["Horror", "Sci-Fi", "Thriller"],
    releaseDate: "August 16, 2024",
    director: "Fede Álvarez",
    cast: ["Cailee Spaeny", "David Jonsson", "Archie Renaux", "Isabela Merced"],
    language: "English",
    subtitles: "Multiple languages"
  },
  {
    id: 104,
    title: "Kraven the Hunter",
    description: "The origin story of one of Spider-Man's most iconic villains, Sergei Kravinoff, aka Kraven the Hunter.",
    posterUrl: "https://images.unsplash.com/photo-1518562180175-34a163b1a9a6?q=80&w=1974&auto=format&fit=crop",
    duration: 130,
    rating: 0,
    ageRating: "PG-13",
    genres: ["Action", "Adventure", "Superhero"],
    releaseDate: "August 30, 2024",
    director: "J.C. Chandor",
    cast: ["Aaron Taylor-Johnson", "Russell Crowe", "Ariana DeBose", "Fred Hechinger"],
    language: "English",
    subtitles: "Multiple languages"
  },
  {
    id: 105,
    title: "Beetlejuice Beetlejuice",
    description: "The long-awaited sequel to the 1988 classic, with the mischievous ghost returning to cause more chaos.",
    posterUrl: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=1922&auto=format&fit=crop",
    duration: 115,
    rating: 0,
    ageRating: "PG-13",
    genres: ["Comedy", "Fantasy", "Horror"],
    releaseDate: "September 6, 2024",
    director: "Tim Burton",
    cast: ["Michael Keaton", "Winona Ryder", "Jenna Ortega", "Catherine O'Hara"],
    language: "English",
    subtitles: "Multiple languages"
  },
  {
    id: 106,
    title: "Joker: Folie à Deux",
    description: "The sequel to the acclaimed Joker film, exploring Arthur Fleck's continued descent into madness.",
    posterUrl: "https://images.unsplash.com/photo-1559583109-3e7968136c99?q=80&w=1974&auto=format&fit=crop",
    duration: 150,
    rating: 0,
    ageRating: "R",
    genres: ["Crime", "Drama", "Thriller"],
    releaseDate: "October 4, 2024",
    director: "Todd Phillips",
    cast: ["Joaquin Phoenix", "Lady Gaga", "Zazie Beetz", "Brendan Gleeson"],
    language: "English",
    subtitles: "Multiple languages"
  }
];