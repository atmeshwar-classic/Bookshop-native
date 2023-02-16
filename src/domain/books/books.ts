import { Book } from "./types";

export const books: Book[] = [
  {
    id: "0",
      name: 'MALGUDI DAYS',
      author: 'Author : R.K. Narayan',
      description: 'The book includes 32 stories, all set in the fictional town of Malgudi, located in South India...',
      price: "2.99$",
  },
  {
    id: "1",
      name: 'THE ROOM ON THE ROOF',
      author: 'Author : RUSKIN BOND',
      description: 'The Room on the Roof is the story of an orphaned Anglo-Indian boy...',
      price: "3.99$",
  },
  {
    id: "2",
      name: 'THE COMPLETE ADVENTURES OF FELUDA',
      author: 'Author : SATYAJIT RAY',
      description: 'Between 1965 and 1992, Satyajit Ray wrote a total of 35 Feluda stories...',
      price: "4.99$",
  }
]
export default books;