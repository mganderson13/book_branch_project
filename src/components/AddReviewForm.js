import { useRef } from 'react';
import useUser from '../hooks/useUser';
import { useNavigate } from "react-router-dom";

const AddReviewForm = () => {

  const { user, isLoading } = useUser();
  const navigate = useNavigate();

  const dialogRef = useRef(null);

  function showModal() {
    dialogRef.current?.showModal();
  }

  function closeModal() {
    dialogRef.current?.close();
  }

  return (
    <>
        {user ?
        <button onClick={showModal} id="showModal">Add a review</button>
      : <button onClick={() => {navigate("/login")}}>Log in to add a review</button>}
      <dialog ref={dialogRef} id="dialogForm">
        <form id="addReviewForm">
          <h3>Add a Review for this book</h3>
          
          <label htmlFor="review">Review</label>
          <textarea id="review" placeholder="Let us know what you thought of this book" 
            minLength="3" maxLength="500"></textarea>

          <label id="rating">Rating</label>
          <div className="rating">
            <input type="radio" id="star5" name="rating" value="5" />
            <label htmlFor="star5" title="5 stars">☆</label>
            <input type="radio" id="star4" name="rating" value="4" />
            <label htmlFor="star4" title="4 stars">☆</label>
            <input type="radio" id="star3" name="rating" value="3" />
            <label htmlFor="star3" title="3 stars">☆</label>
            <input type="radio" id="star2" name="rating" value="2" />
            <label htmlFor="star2" title="2 stars">☆</label>
            <input type="radio" id="star1" name="rating" value="1" />
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
