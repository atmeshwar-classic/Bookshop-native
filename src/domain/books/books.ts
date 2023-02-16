import { Book } from "./types";

export const books: Book[] = [
  {
    id: '123',
    name: 'Eloquent JavaScript, Third Edition',
    author: '"Marijn Haverbeke"',
    description: 'JavaScript lies at the heart of almost every modern web application, from social apps like Twitter to browser-based game frameworks like Phaser and Babylon.',
    price: 20
  },
  {
    id: '124',
    name: 'Practical Modern JavaScript',
    author: 'Nicolás Bevacqua',
    description: 'To get the most out of modern JavaScript, you need learn the latest features of its parent specification, ECMAScript 6 (ES6)',
    price: 35
  },
  {
    id: '125',
    name: 'Understanding ECMAScript 6',
    author: 'Nicholas C. Zakas',
    description: 'ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language.',
    price: 68
  },
]