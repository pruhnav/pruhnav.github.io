import type { ImageMetadata } from 'astro';
import herLoss from '../assets/albums/her-loss.jpg';
import habibti from '../assets/albums/habibti.jpg';
import acrossTheSpiderVerse from '../assets/albums/across-the-spider-verse.jpg';
import octane from '../assets/albums/octane.jpg';
import dopamine from '../assets/albums/dopamine.jpg';
import theRealMe from '../assets/albums/the-real-me.jpg';
import soMuchFun from '../assets/albums/so-much-fun.jpg';
import monica from '../assets/albums/monica.jpg';
import iceman from '../assets/albums/iceman.jpg';

export interface Album {
  title: string;
  artist: string;
  /** Official artwork from Apple's catalog, 1000px square. */
  cover: ImageMetadata;
  spotify: string;
}

/** "Albums on repeat right now", the first section on /thwip/. */
export const onRepeat: Album[] = [
  {
    title: 'Her Loss',
    artist: 'Drake & 21 Savage',
    cover: herLoss,
    spotify: 'https://open.spotify.com/album/5MS3MvWHJ3lOZPLiMxzOU6',
  },
  {
    title: 'HABIBTI',
    artist: 'Drake',
    cover: habibti,
    spotify: 'https://open.spotify.com/album/57od8OD4RYQiCe9jKKiUCW',
  },
  {
    title: 'ACROSS THE SPIDER-VERSE',
    artist: 'Metro Boomin',
    cover: acrossTheSpiderVerse,
    spotify: 'https://open.spotify.com/album/1bwbZJ6khPJyVpOaqgKsoZ',
  },
  {
    title: 'OCTANE',
    artist: 'Don Toliver',
    cover: octane,
    spotify: 'https://open.spotify.com/album/131x9G87mD0hP0hGZc9qYN',
  },
  {
    title: 'DOPAMINE',
    artist: 'Lil Tecca',
    cover: dopamine,
    spotify: 'https://open.spotify.com/album/0CLqdKIh14TmKqLZCs9dml',
  },
  {
    title: 'The Real Me',
    artist: 'Future',
    cover: theRealMe,
    spotify: 'https://open.spotify.com/album/0pFlE0rc68RS8f3UHzioQY',
  },
  {
    title: 'So Much Fun',
    artist: 'Young Thug',
    cover: soMuchFun,
    spotify: 'https://open.spotify.com/album/1bnHPO4dKK7IjvgrtVBcQh',
  },
  {
    title: 'Monica',
    artist: 'Jack Harlow',
    cover: monica,
    spotify: 'https://open.spotify.com/album/4TcxLc5EAuqIgYxXMD3ZES',
  },
  {
    title: 'ICEMAN',
    artist: 'Drake',
    cover: iceman,
    spotify: 'https://open.spotify.com/album/0OAv7DCME2AV4q1KPO95HY',
  },
];
