import { Link } from "react-router-dom";
import bookImage from "../assets/bookImage.jpg";

const BookCard = ({ book }) => {
        // Function to limit the description to a certain number of words (instead of characters with substring)
  const limitDescription = (description, limit) => {
    const words = description.split(' ');
    if (words.length > limit) {
      return words.slice(0, limit).join(' ') + '...';
    }
    return description;
  };
    return (
        <div className="bookCard">
        <Link to={`/details/${book.id}`}>
          <div className="bookCardInfo">
            {/* book image, or generic image if not available */}
            {book.volumeInfo.imageLinks ? (
                <img src={book.volumeInfo.imageLinks.smallThumbnail} alt={book.volumeInfo.title} />
                ) : (
                  <img src={bookImage} alt={book.volumeInfo.title}/>
                )}
             <h3 className="cardText">Title: {book.volumeInfo.title}</h3>
             <h3 className="cardText">Author: {book.volumeInfo.authors}</h3>
             {/*book description, or "not availabe" if not availabe */}
             {book.volumeInfo.description ? (
                    <p className="cardText">{limitDescription(book.volumeInfo.description, 25)}</p>
                ) : (
                    <p className="cardText">No Description Available</p>
                )}
          </div>
        </Link>
        </div>
    );
}

export default BookCard;