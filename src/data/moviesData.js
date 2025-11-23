import familyman from "../assets/familyman.jpeg";
import mirzapur from "../assets/mirzapur.jpeg";
import farzi from "../assets/farzi.jpeg";
import delhicrime from "../assets/delhicrime.jpeg";
import animal from "../assets/animal.jpeg";
import idiots from "../assets/3idiots.jpeg";
import jawan from "../assets/jWn.jpeg";
import pathaan from "../assets/pathaan.jpeg";
import salaar from "../assets/salaar.jpeg";
import leo from "../assets/leo.jpeg";
import kgf from "../assets/kgf.jpeg";
import pushpa from "../assets/pushpa.jpeg";
import anaconda from "../assets/anaconda.jpeg";
import ironman from "../assets/ironman.jpeg";
import captainamerica from "../assets/captainamerica.jpeg";
import spiderman from "../assets/spiderman.jpeg";
export const allMovies = [
  // Bollywood
  {
    id: 1,
    category: "bollywood",
    name: "Animal",
    img: animal,
    time: "3h 21m",
    rating: 7.5,
    description:
      "The Movie is About Father and Son story THE ANIMAL, YOU HAVE NEVER SEEN BEFORE! PRESENTING THE OFFICIAL TRAILER OF THE FILM ANIMAL. STARRING RANBIR KAPOOR, RASHMIKA MANDANNA, ANIL KAPOOR, BOBBY DEOL, TRIPTI DIMRI & SHAKTI KAPOOR.",
    trailer: "https://youtu.be/8FkLRUJj-o0?t=2",
    cast: ["Ranbir Kapoor", "Boby Deol", " Rashmika Mandhanna","TRIPTI DIMRI"],
    downloadLinks: [
      { quality: "480p", url: "/downloads/movie-480p.mp4" },
      { quality: "720p", url: "/downloads/movie-720p.mp4" },
      { quality: "1080p", url: "/downloads/movie-1080p.mp4" },
    ],
    episodes: [
      {
        title: "Episode 1",
        time: "3h 21min",
        download: "/downloads/episode1.mp4",
      },
    ],
    
  },
  {
    id: 2,
    category: "bollywood",
    name: "Jawan",
    img: jawan,
    time: "2h 49m",
    rating: 8.2,
    trailer: "https://www.youtube.com/embed/your-video-id",
    cast: ["Actor 1", "Actor 2", "Actor 3"],
    downloadLinks: [
      { quality: "480p", url: "/downloads/movie-480p.mp4" },
      { quality: "720p", url: "/downloads/movie-720p.mp4" },
      { quality: "1080p", url: "/downloads/movie-1080p.mp4" },
    ],
    episodes: [
      {
        title: "Episode 1",
        time: "2h 49min",
        download: "/downloads/episode1.mp4",
      },
    ],
    description: "This movie is about ...",
  },
  {
    id: 3,
    category: "bollywood",
    name: "Pathaan",
    img: pathaan,
    time: "2h 26m",
    rating: 6.8,
    trailer: "https://www.youtube.com/embed/your-video-id",
    cast: ["Actor 1", "Actor 2", "Actor 3"],
    downloadLinks: [
      { quality: "480p", url: "/downloads/movie-480p.mp4" },
      { quality: "720p", url: "/downloads/movie-720p.mp4" },
      { quality: "1080p", url: "/downloads/movie-1080p.mp4" },
    ],
    episodes: [
      {
        title: "Episode 1",
        time: "2h 26min",
        download: "/downloads/episode1.mp4",
      },
    ],
    description: "This movie is about ...",
  },
  {
    id: 4,
    category: "bollywood",
    name: "3-Idiots",
    img: idiots,
    time: "2h 50m",
    rating: 8.0,
    trailer: "https://www.youtube.com/embed/your-video-id",
    cast: ["Actor 1", "Actor 2", "Actor 3"],
    downloadLinks: [
      { quality: "480p", url: "/downloads/movie-480p.mp4" },
      { quality: "720p", url: "/downloads/movie-720p.mp4" },
      { quality: "1080p", url: "/downloads/movie-1080p.mp4" },
    ],
    episodes: [
      {
        title: "Episode 1",
        time: "2h 50min",
        download: "/downloads/episode1.mp4",
      },
    ],
    description: "This movie is about ...",
  },

  // South
  {
    id: 5,
    category: "south",
    name: "KGF 2",
    img: kgf,
    time: "2h 48m",
    rating: 8.5,
    trailer: "https://www.youtube.com/embed/your-video-id",
    cast: ["Actor 1", "Actor 2", "Actor 3"],
    downloadLinks: [
      { quality: "480p", url: "/downloads/movie-480p.mp4" },
      { quality: "720p", url: "/downloads/movie-720p.mp4" },
      { quality: "1080p", url: "/downloads/movie-1080p.mp4" },
    ],
    episodes: [
      {
        title: "Episode 1",
        time: "2h 48min",
        download: "/downloads/episode1.mp4",
      },
    ],
    description: "This movie is about ...",
  },
  {
    id: 6,
    category: "south",
    name: "Pushpa",
    img: pushpa,
    time: "2h 59m",
    rating: 7.8,
    trailer: "https://www.youtube.com/embed/your-video-id",
    cast: ["Actor 1", "Actor 2", "Actor 3"],
    downloadLinks: [
      { quality: "480p", url: "/downloads/movie-480p.mp4" },
      { quality: "720p", url: "/downloads/movie-720p.mp4" },
      { quality: "1080p", url: "/downloads/movie-1080p.mp4" },
    ],
    episodes: [
      {
        title: "Episode 1",
        time: "2h 59min",
        download: "/downloads/episode1.mp4",
      },
    ],
    description: "This movie is about ...",
  },
  {
    id: 7,
    category: "south",
    name: "Leo",
    img: leo,
    time: "2h 44m",
    rating: 7.9,
    trailer: "https://www.youtube.com/embed/your-video-id",
    cast: ["Actor 1", "Actor 2", "Actor 3"],
    downloadLinks: [
      { quality: "480p", url: "/downloads/movie-480p.mp4" },
      { quality: "720p", url: "/downloads/movie-720p.mp4" },
      { quality: "1080p", url: "/downloads/movie-1080p.mp4" },
    ],
    episodes: [
      {
        title: "Episode 1",
        time: "2h 44min",
        download: "/downloads/episode1.mp4",
      },
    ],
    description: "This movie is about ...",
  },
  {
    id: 8,
    category: "south",
    name: "Salaar",
    img: salaar,
    time: "2h 55m",
    rating: 8.0,
    trailer: "https://www.youtube.com/embed/your-video-id",
    cast: ["Actor 1", "Actor 2", "Actor 3"],
    downloadLinks: [
      { quality: "480p", url: "/downloads/movie-480p.mp4" },
      { quality: "720p", url: "/downloads/movie-720p.mp4" },
      { quality: "1080p", url: "/downloads/movie-1080p.mp4" },
    ],
    episodes: [
      {
        title: "Episode 1",
        time: "2h 55min",
        download: "/downloads/episode1.mp4",
      },
    ],
    description: "This movie is about ...",
  },

  // OTT series
  {
    id: 9,
    category: "ott",
    name: "The Family-Man",
    time: "2h 48m",
    rating: 8.4,
    img: familyman,
    trailer: "https://www.youtube.com/embed/your-video-id",
    cast: ["Actor 1", "Actor 2", "Actor 3"],
    downloadLinks: [
      { quality: "480p", url: "/downloads/movie-480p.mp4" },
      { quality: "720p", url: "/downloads/movie-720p.mp4" },
      { quality: "1080p", url: "/downloads/movie-1080p.mp4" },
    ],
    episodes: [
      {
        title: "Episode 1",
        time: "2h 48min",
        download: "/downloads/episode1.mp4",
      },
    ],
    description: "This movie is about ...",
  },
  {
    id: 10,
    category: "ott",
    name: "Mirzapur",
    time: "2h 59m",
    rating: 7.6,
    img: mirzapur,
    trailer: "https://www.youtube.com/embed/your-video-id",
    cast: ["Actor 1", "Actor 2", "Actor 3"],
    downloadLinks: [
      { quality: "480p", url: "/downloads/movie-480p.mp4" },
      { quality: "720p", url: "/downloads/movie-720p.mp4" },
      { quality: "1080p", url: "/downloads/movie-1080p.mp4" },
    ],
    episodes: [
      {
        title: "Episode 1",
        time: "2h 59min",
        download: "/downloads/episode1.mp4",
      },
    ],
    description: "This movie is about ...",
  },
  {
    id: 11,
    category: "ott",
    name: "Farzi",
    time: "3h 7m",
    rating: 8.0,
    img: farzi,
    trailer: "https://www.youtube.com/embed/your-video-id",
    cast: ["Actor 1", "Actor 2", "Actor 3"],
    downloadLinks: [
      { quality: "480p", url: "/downloads/movie-480p.mp4" },
      { quality: "720p", url: "/downloads/movie-720p.mp4" },
      { quality: "1080p", url: "/downloads/movie-1080p.mp4" },
    ],
    episodes: [
      {
        title: "Episode 1",
        time: "3h 7min",
        download: "/downloads/episode1.mp4",
      },
    ],
    description: "This movie is about ...",
  },
  {
    id: 12,
    category: "ott",
    name: "Delhi-Crime",
    time: "2h 53m",
    rating: 8.3,
    img: delhicrime,
    trailer: "https://www.youtube.com/embed/your-video-id",
    cast: ["Actor 1", "Actor 2", "Actor 3"],
    downloadLinks: [
      { quality: "480p", url: "/downloads/movie-480p.mp4" },
      { quality: "720p", url: "/downloads/movie-720p.mp4" },
      { quality: "1080p", url: "/downloads/movie-1080p.mp4" },
    ],
    episodes: [
      {
        title: "Episode 1",
        time: "2h 53min",
        download: "/downloads/episode1.mp4",
      },
    ],
    description: "This movie is about ...",
  },

  // Hollywood
  {
    id: 13,
    category: "hollywood",
    name: "Iron-Man",
    time: "2h 48m",
    rating: 8.4,
    img: ironman,
    trailer: "https://www.youtube.com/embed/your-video-id",
    cast: ["Actor 1", "Actor 2", "Actor 3"],
    downloadLinks: [
      { quality: "480p", url: "/downloads/movie-480p.mp4" },
      { quality: "720p", url: "/downloads/movie-720p.mp4" },
      { quality: "1080p", url: "/downloads/movie-1080p.mp4" },
    ],
    episodes: [
      {
        title: "Episode 1",
        time: "2h 48min",
        download: "/downloads/episode1.mp4",
      },
    ],
    description: "This movie is about ...",
  },
  {
    id: 14,
    category: "hollywood",
    name: "SpiderMan No-Way Home",
    time: "2h 59m",
    rating: 7.6,
    img: spiderman,
    trailer: "https://www.youtube.com/embed/your-video-id",
    cast: ["Actor 1", "Actor 2", "Actor 3"],
    downloadLinks: [
      { quality: "480p", url: "/downloads/movie-480p.mp4" },
      { quality: "720p", url: "/downloads/movie-720p.mp4" },
      { quality: "1080p", url: "/downloads/movie-1080p.mp4" },
    ],
    episodes: [
      {
        title: "Episode 1",
        time: "2h 59min",
        download: "/downloads/episode1.mp4",
      },
    ],
    description: "This movie is about ...",
  },
  {
    id: 15,
    category: "hollywood",
    name: "Captain America",
    time: "3h 7m",
    rating: 8.0,
    img: captainamerica,
    trailer: "https://www.youtube.com/embed/your-video-id",
    cast: ["Actor 1", "Actor 2", "Actor 3"],
    downloadLinks: [
      { quality: "480p", url: "/downloads/movie-480p.mp4" },
      { quality: "720p", url: "/downloads/movie-720p.mp4" },
      { quality: "1080p", url: "/downloads/movie-1080p.mp4" },
    ],
    episodes: [
      {
        title: "Episode 1",
        time: "3h 7min",
        download: "/downloads/episode1.mp4",
      },
    ],
    description: "This movie is about ...",
  },
  {
    id: 16,
    category: "hollywood",
    name: "Anaconda",
    time: "2h 53m",
    rating: 8.3,
    img: anaconda,
    trailer: "https://www.youtube.com/embed/your-video-id",
    cast: ["Actor 1", "Actor 2", "Actor 3"],
    downloadLinks: [
      { quality: "480p", url: "/downloads/movie-480p.mp4" },
      { quality: "720p", url: "/downloads/movie-720p.mp4" },
      { quality: "1080p", url: "/downloads/movie-1080p.mp4" },
    ],
    episodes: [
      {
        title: "Episode 1",
        time: "2h 53min",
        download: "/downloads/episode1.mp4",
      },
    ],
    description: "This movie is about ...",
  },
];
