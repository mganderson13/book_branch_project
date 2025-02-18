import { useRef, useState } from 'react';
import useUser from '../hooks/useUser';
import { useNavigate, useParams } from "react-router-dom";
import { getAuth } from 'firebase/auth';

const AddReviewForm = () => {
    const [review, setReview] = useState('');
    const [rating, setRating] = useState('');
    const [error, setError] = useState('');

    const { user, isLoading } = useUser();
    const navigate = useNavigate();
    const dialogRef = useRef(null);
    const { id } = useParams();

  function showModal() {
    dialogRef.current?.showModal();
  }

  function closeModal() {
    dialogRef.current?.close();
  }

  const Review = async () => {
    try {
        if (!review || !rating) {
            setError('Please leave a review and rating');
            return;
        }

        const auth = getAuth();
        const user = auth.currentUser;
        console.log(user);
        if (!user) {
            setError("User not authenitcated");
            return;
        }
        const email = user.email; 

        // Send user data to your backend
        const response = await fetch(`/api/details/${id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, review, rating })
        });

        if (!response.ok) {
            throw new Error("Failed to add review");
        }

        closeModal();
    } catch (e) {
        setError(e.message);
    }
};

const handleSubmit = async (event) => {
    event.preventDefault();
    await Review(); // Calls review when the form is submitted
};

  return (
    <>
        {user ?
        <button onClick={showModal} id="showModal">Add a review</button>
      : <button onClick={() => {navigate("/login")}}>Log in to add a review</button>}
      
      <dialog ref={dialogRef} id="dialogForm">
        <form onSubmit={handleSubmit} id="addReviewForm">
          <h3>Add a Review for this book</h3>
          {error && <p className="error">{error}</p>}
          <label htmlFor="review">Review</label>
          <textarea id="review" name="review"placeholder="Let us know what you thought of this book" 
            minLength="3" maxLength="500" value={review}
            onChange={e => setReview(e.target.value)}></textarea>

          <label id="rating">Rating</label>
          <div className="rating">
            <input type="radio" id="star5" name="rating" value="5" checked={rating === '5'}
            onChange={e => setRating(e.target.value)}/>
            <label htmlFor="star5" title="5 stars">☆</label>
            <input type="radio" id="star4" name="rating" value="4" checked={rating === '4'}
            onChange={e => setRating(e.target.value)}/>
            <label htmlFor="star4" title="4 stars">☆</label>
            <input type="radio" id="star3" name="rating" value="3" checked={rating === '3'}
            onChange={e => setRating(e.target.value)}/>
            <label htmlFor="star3" title="3 stars">☆</label>
            <input type="radio" id="star2" name="rating" value="2" checked={rating === '2'}
            onChange={e => setRating(e.target.value)}/>
            <label htmlFor="star2" title="2 stars">☆</label>
            <input type="radio" id="star1" name="rating" value="1" checked={rating === '1'}
            onChange={e => setRating(e.target.value)}/>
            <label htmlFor="star1" title="1 star">☆</label>
          </div>

          <button type="submit" id="addReviewButton">Submit Review</button>
          <button type="button" onClick={closeModal} id="exit">X</button>
        </form>
      </dialog>
    </>
  );
};

export default AddReviewForm;
