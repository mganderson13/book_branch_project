import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import bookImage from "../assets/bookImage.jpg";

const ReviewedCard = ({ book, id }) => {

    const [googleBook, setGoogleBook] = useState({});
    useEffect(() => {
        async function fetchData() {
        try {
          const res = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
          const data = await res.json();
            setGoogleBook(data);
        }catch(error){
            console.log(error);
        }
        };
        fetchData();
      }, [id]);

//check if book from database exists
    if (!book) {
        return <p>No book data available.</p>;
    }

    const { rating, review } = book; 

    return (
        <>
        <Link to={`/details/${id}`} className="profileCardContainer">
            {googleBook.volumeInfo ? (
            <>
                {googleBook.volumeInfo.imageLinks ? (
                <img
                    src={googleBook.volumeInfo.imageLinks.smallThumbnail}
                    alt={googleBook.volumeInfo.title}
                    className="profileCardImage"
                />
                ) : (
                <img src={bookImage} alt={googleBook.volumeInfo.title} className="profileCardImage"/>
                )}
                <div className="profileCardText">
                <h3>Title: {googleBook.volumeInfo.title}</h3>
                <p>Rating: {rating}</p>
                <p>Review: {review}</p>
                </div>
            </>
            ) : (
            <div>Loading title and picture...</div>
            )}
        </Link>
        </>

    )
}

export default ReviewedCard;