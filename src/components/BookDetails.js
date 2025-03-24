import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AddReviewForm from './AddReviewForm';
import bookImage from "../assets/bookImage.jpg";
import SaveBookButton from './SaveBookButton';

const BookDetails = () => {
    const { id } = useParams();
    const [book, setBook] = useState({});


    useEffect(() => {
        async function fetchData() {
        try {
          const res = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
          const data = await res.json();
            setBook(data);
        }catch(error){
            console.log(error);
        }
        };
        fetchData();
      }, [id]);

      return (
        <>
        <div className='bookDetails'>
          <h2>Book Details</h2>
          {book.volumeInfo ? (
            <>
              <div className='bookDetailsTop'>
                {book.volumeInfo.imageLinks ? (
                    <img src={book.volumeInfo.imageLinks.smallThumbnail} alt={book.volumeInfo.title} />
                ) : (
                  <img src={bookImage} alt={book.volumeInfo.title}/>
                )}
                <div className='bookDetailsTopText'>
                <h3>Title: {book.volumeInfo.title}</h3>
                <h3>Author: {book.volumeInfo.authors}</h3>
                {book.volumeInfo.description ? (
                    <p>{book.volumeInfo.description}</p>
                ) : (
                    <p>No Description Available</p>
                )}
                <p>Page count: {book.volumeInfo.pageCount}</p>
                <p>Genres: {book.volumeInfo.categories}</p>
                </div>
                </div>
                <p className='saveButtonDescriptions'>Have you read this book? Save it to your Book Branch with a review</p>
                <AddReviewForm />
                <p className='saveButtonDescriptions'>Interested in reading this book? Save it to your Book Branch for later</p>
                <SaveBookButton />
                <p><a href={book.volumeInfo.previewLink} target="_blank" rel="noreferrer">Find this book online --&gt;</a></p>
            </>
          ) : (
            <div>Loading...</div>
          )}
        </div>
        </>
      );
}

export default BookDetails;