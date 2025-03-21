import { useState } from 'react';
import useUser from '../hooks/useUser';
import { useNavigate, useParams } from "react-router-dom";
import { getAuth } from 'firebase/auth';

const SaveBookButton = () => {
    const [error, setError] = useState('');

    const { user } = useUser();
    const navigate = useNavigate();
    const { id } = useParams();


  const saveBook = async () => {
    try {
        const auth = getAuth();
        const user = auth.currentUser;
        if (!user) {
            setError("User not authenticated");
            return;
        }
        const email = user.email; 

        // Send user data to backend
        const response = await fetch(`/api/details/${id}/save`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email })
        });
        console.log("book saved!");
        setError(''); // Clear any previous errors on success
        if (!response.ok) {
            throw new Error("Failed to save book");
        }
    } catch (e) {
        setError(e.message);
    }
};

  return (
    <>
        {user ? (
        <button onClick={saveBook} id="saveBookButton">Save book</button>
        ) : (
        <button onClick={() => {navigate("/login")}}>Log in to save book</button>
        )}

        {error && <p className="error">{error}</p>}
    </>
  );
};

export default SaveBookButton;
