import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import branchImage from "../assets/branchImage2.png";
import ReviewedCard from "../components/reviewedCard";
import SavedCard from "../components/savedCard";

const UserProfile = () => {
    const [books, setBooks] =useState([]);
    const [saved, setSaved] =useState([]);
    const [loading, setLoading] = useState(true);

useEffect(() => {
    const fetchUserBooks = async () => {
      const auth = getAuth();
        const user = auth.currentUser;
      
        if (!user) {
          console.error("No authenticated user found");
          setLoading(false);
          return;
        }
      
        try {
          const token = await user.getIdToken(); // Get Firebase ID token
      
          const response = await fetch("/api/profile", {
            method: "GET",
            headers: {
              "Authorization": `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          });
          
      
          if (!response.ok) {
            throw new Error("Failed to fetch books");
          }
      
          const userData = await response.json();
          setBooks(userData.books);
          setSaved(userData.saved);
        } catch (error) {
          console.error("Error fetching user books:", error);
        }finally {
          setLoading(false); // Stop loading after fetch (success or error)
      }
      };

  fetchUserBooks();
}, []); 


    return(
      <>
        <h1 id="profileHeading">Welcome to your Book Branch!</h1>
        {loading ? (
          <p>Loading...</p>
        ) : books.length > 0 ? (
          <>
        <div className="bookColumns">
        <div className="reviewedColumn">
        <div className="columnTitles">
        <h1 className="profileSubheading">My Read Books</h1>
        <img className="branchImage"src={branchImage} alt="Book Branch"></img>
        </div>
      <ul>
        {books.map(book => (
          <ReviewedCard key={book.bookID} book={book} id={book.bookID}/>
        ))}
        </ul>
        </div>
        <div className="savedColumn">
        <div className="columnTitles">
        <h1 className="profileSubheading">Saved For Later</h1>
        <img className="branchImage"src={branchImage} alt="Book Branch"></img>
        </div>
        <ul>
        {saved.map(book => (
          <SavedCard key={book.bookID} book={book} id={book.bookID}/>
        ))}
        </ul>
        </div>
        </div>
        </>
    ) : (
        <p>You don't have any saved books yet! Browse or search to add books you've read!</p>
    )}

      </>
    )
}

export default UserProfile