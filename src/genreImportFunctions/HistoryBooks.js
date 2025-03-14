import React, { useEffect, useState } from 'react';
import BookCard from "../components/Card";

const HistoryBooks = () => {
    const [books, setBooks] =useState([]);

useEffect(() => {
    async function fetchData() {
        try{ 
            const res = await fetch('https://www.googleapis.com/books/v1/volumes?q=history');
            const data = await res.json();
            setBooks(data.items); //Data.items contains the array of books
        } catch(error) {
            console.log(error);
        }
    }
    fetchData();
}, []);

return (
    <div>
      <h3 className='genreTitle'>History Books</h3>
      <ul className="browseLists">
      {books.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </ul>
    </div>
  );

} 

export default HistoryBooks;