import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import ProfileCard from "../components/profileCard";

const UserProfile = () => {
    const [books, setBooks] =useState([]);

useEffect(() => {
    const fetchUserBooks = async () => {
      const auth = getAuth();
        const user = auth.currentUser;
      
        if (!user) {
          console.error("No authenticated user found");
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
      
          const booksData = await response.json();
          setBooks(booksData);
        } catch (error) {
          console.error("Error fetching user books:", error);
        }
      };
fetchUserBooks();
}, []); 


    return(
        <>
        <h1>Welcome to your book branch!</h1>
        <ul>
            {books.length > 0 ? (
      books.map(book => (
          <ProfileCard key={book.bookID} book={book} id={book.bookID}/>
        ))
    ) :(
        <p>You don't have any saved books yet! Browse or search to add books you've read!</p>
    )}
      </ul>

        </>
    )
}

export default UserProfile