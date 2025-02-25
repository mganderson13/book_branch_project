import bookImage from "../assets/bookImage.jpg";

const ProfileCard = ({ book }) => {

    return (
        <>
        {book.volumeInfo ? (
            <>
                {book.volumeInfo.imageLinks ? (
                    <img src={book.volumeInfo.imageLinks.smallThumbnail} alt={book.volumeInfo.title} />
                ) : (
                    <img src={bookImage} alt={book.volumeInfo.title}/>
                )}
                <h3>Title: {book.volumeInfo.title}</h3>
            </>
                ) : (
                    <div>Loading...</div>
                )}
            
        </>
    )
}

export default ProfileCard;