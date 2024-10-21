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
        <div>
            {/* book image, or generic image if not available */}
            {book.volumeInfo.imageLinks ? (
                <img src={book.volumeInfo.imageLinks.smallThumbnail} alt={book.volumeInfo.title} />
                ) : (
                    <div>No Image Available</div>
                )}
             <h3>Title: {book.volumeInfo.title}</h3>
             <h3>Author: {book.volumeInfo.authors}</h3>
             {/*book description, or "not availabe" if not availabe */}
             {book.volumeInfo.description ? (
                    <p>{limitDescription(book.volumeInfo.description, 25)}</p>
                ) : (
                    <p>No Description Available</p>
                )}
             <p><a href={book.volumeInfo.previewLink} target="_blank" rel="noreferrer">Read this book</a></p>
        </div>
    );
}

export default BookCard;