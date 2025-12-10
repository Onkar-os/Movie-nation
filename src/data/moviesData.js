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
import fifa from '../assets/fifa.jpeg';
import formulaf1 from '../assets/formulaf1.jpeg';


import ipl from '../assets/ipl.jpeg';
import isl from '../assets/isl.png'
import laliga from '../assets/laliga.png'
import nba from '../assets/nba.jpeg'
import olympics from '../assets/olympics.jpeg'
import premierleague from '../assets/premierleague.png'
import prokabaddi from '../assets/prokabaddi.jpeg'
import uefa from '../assets/uefa.png'
import ufc from '../assets/ufc.png'
import wimbledon from '../assets/wimbledon.webp'
import worldcup from '../assets/worldcup.png'
import tourdefrance from '../assets/tourdefrance.jpeg';
import  wwe from '../assets/wwe.png'
import boxingworld from '../assets/boxingworld.png';

//cartoon
import aatar from '../assets/aatar.jpeg'
import ben10 from '../assets/ben10.jpeg'
import chotabheem from '../assets/chotabheem.jpeg'
import doremon from '../assets/doremon.jpeg'
import kungfupanda from '../assets/kungfupanda.jpeg'
import motupatlu from '../assets/motupatlu.jpeg'
import oggy from '../assets/oggy.jpeg'
import pokemon from '../assets/pokemon.jpeg'
import scoobydoo from '../assets/scoobydoo.jpeg'
import shinchan from '../assets/shinchan.png'
import tomandjerry from '../assets/tomandjerry.jpeg'
import ninja from '../assets/ninja.jpeg'
import spiderman1 from '../assets/spiderman1.jpeg'
import simpsons from '../assets/simpsons.webp'
import looney from '../assets/looney.webp'
import frozen from '../assets/frozen.jpeg'

//tv-serials
import anupamaa from '../assets/anupamaa.jpeg'
import yehrishta from '../assets/yehrishta.jpeg'
import bhabi from '../assets/bhabi.jpeg'
import kundali from '../assets/kundali.jpeg'
import bigbos from '../assets/bigbos.jpeg'
import cid from '../assets/cid.jpeg'
import crimepetrol from '../assets/crimepetrol.jpeg'
import danceindia from '../assets/danceindia.jpeg'
import jethalal from '../assets/jethalal.jpeg'
import khiladi from '../assets/khiladi.jpeg'
import mahabharat from '../assets/mahabharat.jpeg'
import naagin from '../assets/naagin.jpeg'
import sarabhai from '../assets/sarabhai.jpeg'
import shaktimaan from '../assets/shaktimaan.jpeg'
import taarak from '../assets/taarak.jpeg'
import ramayana from '../assets/ramayana.webp'

//news
import aajtak from '../assets/aajtak.png';
import abpnews from '../assets/abpnews.jpeg';
import aljazeera from '../assets/alj.png';
import bbcnews from '../assets/bbc.png';
import cnbc from '../assets/cnbc.png';
import cnn from '../assets/cnn.png';
import foxnews from '../assets/foxnews.png';
import france24 from '../assets/france24.png';
import indiatv from '../assets/indiatv.jpeg';
import ndtv from '../assets/ndtv.png';
import new18india from '../assets/news18india.png';
import republic from '../assets/republic.png';
import skynews from '../assets/skynews.jpeg';
import timesnow from '../assets/timesnow.jpeg';
import wion from '../assets/wion.jpeg';
import zeenews from '../assets/zeenews.png';


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
    trailer: "https://www.youtube.com/embed/8FkLRUJj-o0",
    cast: ["Ranbir Kapoor", "Boby Deol", " Rashmika Mandhanna","TRIPTI DIMRI"],
    downloadLinks: [
      { quality: "480p", url: "/downloads/movie-480p.mp4" },
      { quality: "720p", url: "/downloads/movie-720p.mp4" },
      { quality: "1080p", url: "/downloads/movie-1080p.mp4" },
    ],
    Movie: [
      {
        title: "Animal",
        time: "3h 21min",
        Watch: "/downloads/episode1.mp4",
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
    trailer: "https://www.youtube.com/embed/COv52Qyctws",
    cast: ["Actor 1", "Actor 2", "Actor 3"],
    downloadLinks: [
      { quality: "480p", url: "/downloads/movie-480p.mp4" },
      { quality: "720p", url: "/downloads/movie-720p.mp4" },
      { quality: "1080p", url: "/downloads/movie-1080p.mp4" },
    ],
    Movie: [
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
    trailer: "https://www.youtube.com/embed/vqu4z34wENw",
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
    trailer: "https://www.youtube.com/embed/lbCRtrrMvSw",
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
    trailer: "https://www.youtube.com/embed/KfsY-qwBS0",
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
    trailer: "https://www.youtube.com/embed/MhIulWFPcpg",
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
    trailer: "https://www.youtube.com/embed/Po3jStA673E",
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
    trailer: "https://www.youtube.com/embed/HihakYi5M2I",
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
    trailer: "https://www.youtube.com/embed/jsauQx_Fwrg",
    cast: ["Actor 1", "Actor 2", "Actor 3"],
    downloadLinks: [
      { quality: "480p", url: "/downloads/movie-480p.mp4" },
      { quality: "720p", url: "/downloads/movie-720p.mp4" },
      { quality: "1080p", url: "/downloads/movie-1080p.mp4" },
    ],
    episodes: [
      {
        title: "Episode 1",
        time: " 48min",
        download: "/downloads/episode1.mp4",
      },
      {
        title: "Episode 2",
        time: " 44min",
        download: "/downloads/episode2.mp4",
      },
      {
        title: "Episode 3",
        time: " 52min",
        download: "/downloads/episode3.mp4",
      },
      {
        title: "Episode 4",
        time: " 55min",
        download: "/downloads/episode4.mp4",
      },
      {
        title: "Episode 5",
        time: " 48min",
        download: "/downloads/episode5.mp4",
      },
      {
        title: "Episode 6" ,
        time: " 47min",
        download: "/downloads/episode6.mp4",
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
// ---------------- SPORTS ----------------
export const sports = [
  { id: 1, name: "ICC Cricket World Cup",category:"Cricket", img: worldcup, description: "International championship of One Day cricket." },
  { id: 2, name: "FIFA World Cup",category:"Football", img: fifa, description: "The biggest international football tournament." },
  { id: 3, name: "Wimbledon",category:"Wimbledon", img:wimbledon, description: "Prestigious tennis Grand Slam held in London." },
  { id: 4, name: "Olympic Games",category:"Cricket", img:olympics, description: "Largest international multi-sport event." },
  { id: 5, name: "NBA Finals",category:"Basketball", img: nba, description: "Championship series of the National Basketball Association." },
  { id: 6, name: "Formula 1 Championship",category:"Racing", img: formulaf1, description: "World's top-level motor racing competition." },
  { id: 7, name: "UEFA Champions League",category:"Football", img: uefa, description: "Top European football club tournament." },
  { id: 8, name: "IPL – Indian Premier League",category:"Cricket", img: ipl, description: "World’s biggest domestic T20 cricket league." },
  { id: 9, name: "La Liga",category:"Football", img: laliga, description: "Top Spain football league featuring Real Madrid & Barcelona." },
  { id: 10, name: "Premier League",category:"Football", img: premierleague, description: "England’s top-tier football league." },
  { id: 11, name: "UFC Championship",category:"Boxing", img: ufc, description: "World’s leading Mixed Martial Arts competition." },
  { id: 12, name: "WWE WrestleMania",category:"Boxing", img: wwe, description: "Professional wrestling’s biggest annual event." },
  { id: 13, name: "Pro Kabaddi League",category:"Kabaddi", img: prokabaddi, description: "India's professional kabaddi league." },
  { id: 14, name: "ISL – Indian Super League",category:"Football", img: isl, description: "India’s top-level football league." },
  { id: 15, name: "Tour de France",category:"Cricket", img: tourdefrance, description: "World's most famous cycling race." },
  { id: 16, name: "Boxing World Championship",category:"Boxing", img: boxingworld, description: "Prestigious global boxing tournament." },
];

// ---------------- CARTOONS ----------------
export const cartoons = [
  { id: 1, name: "Doraemon", img: doremon, description: "A robot cat helps a young boy Nobita." },
  { id: 2, name: "Shinchan", img: shinchan, description: "Comedy show about mischievous kid Shinnosuke Nohara." },
  { id: 3, name: "Tom and Jerry", img: tomandjerry, description: "Classic cat-and-mouse comedy." },
  { id: 4, name: "Ben 10", img: ben10, description: "A boy uses an alien device Omnitrix to transform." },
  { id: 5, name: "Pokemon", img: pokemon, description: "Ash and Pikachu explore the world to become Pokémon masters." },
  { id: 6, name: "Motu Patlu", img: motupatlu, description: "Two friends solve problems in Furfuri Nagar." },
  { id: 7, name: "Chhota Bheem", img: chotabheem, description: "A brave kid saves Dholakpur from villains." },
  { id: 8, name: "Oggy and the Cockroaches", img: oggy, description: "Comedy about Oggy and three cockroaches." },
  { id: 9, name: "Kung Fu Panda", img: kungfupanda, description: "Po learns kung fu to become the Dragon Warrior." },
  { id: 10, name: "Avatar: The Last Airbender", img: aatar, description: "Aang must master all elements to save the world." },
  { id: 11, name: "Scooby-Doo", img: scoobydoo, description: "A group solves mysteries with Scooby." },
  { id: 12, name: "Teenage Mutant Ninja Turtles", img: ninja, description: "Four turtle brothers fight crime." },
  { id: 13, name: "Spider-Man Animated Series", img: spiderman1, description: "Peter Parker fights villains in NYC." },
  { id: 14, name: "The Simpsons", img: simpsons, description: "Comedy series about the Simpson family." },
  { id: 15, name: "Looney Tunes", img: looney, description: "Bugs Bunny, Daffy Duck and friends." },
  { id: 16, name: "Frozen – The Series", img: frozen, description: "Anna and Elsa’s adventures." },
];

// ---------------- NEWS ----------------
export const news = [
  { id: 1, name: "NDTV India", img: ndtv, description: "24/7 India news coverage." },
  { id: 2, name: "Aaj Tak", img: aajtak, description: "India’s most popular Hindi news channel." },
  { id: 3, name: "Republic TV", img: republic, description: "Indian news and political debates." },
  { id: 4, name: "CNN", img: cnn, description: "World’s leading international news network." },
  { id: 5, name: "BBC News", img: bbcnews, description: "Global breaking news and analysis." },
  { id: 6, name: "Al Jazeera", img: aljazeera, description: "Middle East and world news." },
  { id: 7, name: "India TV", img: indiatv, description: "Popular Indian Hindi news channel." },
  { id: 8, name: "ABP News", img: abpnews, description: "Hindi news and live updates." },
  { id: 9, name: "Times Now", img: timesnow, description: "English-language news from India." },
  { id: 10, name: "Zee News", img: zeenews, description: "Domestic & international news." },
  { id: 11, name: "CNBC", img: cnbc, description: "Business and stock market news." },
  { id: 12, name: "WION", img: wion, description: "World-is-One global news." },
  { id: 13, name: "News18 India", img: new18india, description: "Live Hindi news coverage." },
  { id: 14, name: "Fox News", img: foxnews, description: "US political & world news." },
  { id: 15, name: "France 24", img: france24, description: "Live world news from France." },
  { id: 16, name: "Sky News", img: skynews, description: "UK & international news." },
];

// ---------------- TV SERIALS ----------------
export const tv = [
  { id: 1, name: "Anupamaa", img: anupamaa, description: "Story of a housewife rediscovering life." },
  { id: 2, name: "Yeh Rishta Kya Kehlata Hai", img: yehrishta, description: "India’s longest-running family show." },
  { id: 3, name: "Taarak Mehta Ka Ooltah Chashmah", img: taarak, description: "Comedy show based on Gokuldham society." },
  { id: 4, name: "Kundali Bhagya", img: kundali, description: "Drama about relationships and destiny." },
  { id: 5, name: "Bigg Boss", img: bigbos, description: "India’s most popular reality show." },
  { id: 6, name: "Naagin", img: naagin, description: "Fantasy shape-shifting serpent story." },
  { id: 7, name: "Mahabharat", img: mahabharat, description: "Epic mythological show." },
  { id: 8, name: "CID", img: cid, description: "Famous Indian crime investigation series." },
  { id: 9, name: "Crime Patrol", img: crimepetrol, description: "Real-life crime stories from India." },
  { id: 10, name: "Bhabhi Ji Ghar Par Hain", img: bhabi, description: "Popular comedy TV show." },
  { id: 11, name: "Shaktimaan", img: shaktimaan, description: "India’s first superhero show." },
  { id: 12, name: "Jethalal Comedy Compilation", img:jethalal , description: "Funniest moments from TMKOC." },
  { id: 13, name: "Ramayana", img: ramayana, description: "Legendary mythological series." },
  { id: 14, name: "Khatron Ke Khiladi", img: khiladi, description: "Adventure stunt-based reality show." },
  { id: 15, name: "Dance India Dance", img: danceindia, description: "India’s top dance reality show." },
  { id: 16, name: "Sarabhai vs Sarabhai", img: sarabhai, description: "Cult comedy show about a quirky family." },
];
