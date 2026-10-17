// The Logbook (/thwip/logbook/): every aircraft type I've flown on.
import type { AircraftKey } from '../lib/aircraft';

/** One line under the Logbook title, on /thwip/ and on its page. */
export const logbookBlurb = "Wings that stuck with me. One could say I'm a bit of a plane nerd.";

export interface Plane {
  name: string;
  /** Which side-view silhouette to draw (see src/lib/aircraft.ts). */
  silhouette: AircraftKey;
  /** Each airline flown on this type, with the livery it wore. */
  airlines: { airline: string; livery: string }[];
}

// Biggest to smallest, so the to-scale silhouettes step down the grid.
export const planes: Plane[] = [
  {
    name: 'Airbus A380-800',
    silhouette: 'a388',
    airlines: [
      { airline: 'Emirates', livery: 'Standard' },
      { airline: 'Emirates', livery: 'Expo 2020' },
      { airline: 'Etihad', livery: 'Standard' },
      { airline: 'Singapore Airlines', livery: 'Standard' },
    ],
  },
  {
    name: 'Boeing 777-300ER',
    silhouette: 'b77w',
    airlines: [
      { airline: 'Emirates', livery: 'Standard' },
      { airline: 'Emirates', livery: 'Expo 2020' },
      { airline: 'Cathay Pacific', livery: '1994 livery' },
      { airline: 'Singapore Airlines', livery: 'Standard' },
      { airline: 'United', livery: '2019 rebrand' },
    ],
  },
  {
    name: 'Boeing 757-200',
    silhouette: 'b752',
    airlines: [{ airline: 'United', livery: 'Continental' }],
  },
  {
    name: 'Airbus A321',
    silhouette: 'a321',
    airlines: [
      { airline: 'Etihad', livery: 'Standard' },
      { airline: 'Delta', livery: 'Standard' },
      { airline: 'American Airlines', livery: 'Standard' },
    ],
  },
  {
    name: 'Boeing 737-900ER',
    silhouette: 'b739',
    airlines: [{ airline: 'Delta', livery: 'Standard' }],
  },
  {
    name: 'Boeing 737 MAX 8',
    silhouette: 'b38m',
    airlines: [{ airline: 'American Airlines', livery: 'Standard' }],
  },
  {
    name: 'Airbus A220-300',
    silhouette: 'bcs3',
    airlines: [{ airline: 'Delta', livery: 'Standard' }],
  },
  {
    name: 'Airbus A320',
    silhouette: 'a320',
    airlines: [
      { airline: 'IndiGo', livery: 'Standard' },
      { airline: 'Delta', livery: 'Standard' },
      { airline: 'American Airlines', livery: 'Standard' },
    ],
  },
  {
    name: 'Bombardier CRJ900',
    silhouette: 'crj9',
    airlines: [{ airline: 'Delta', livery: 'Standard' }],
  },
  {
    name: 'Airbus A319',
    silhouette: 'a319',
    airlines: [{ airline: 'SilkAir', livery: 'Standard' }],
  },
  {
    name: 'ATR 72',
    silhouette: 'at72',
    airlines: [{ airline: 'IndiGo', livery: 'Standard' }],
  },
  {
    name: 'Airbus H125',
    silhouette: 'h125',
    airlines: [],
  },
];
