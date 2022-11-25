import { useParams } from "react-router-dom";
import ReviewListByYou from "./MySpotsReview";
import "./MyReviews.css";

function ManageReviewPage() {
  const { id } = useParams();

  return (
    <div className="my_review__container">
      <h2>My Reviews</h2>
      <div>
        <p></p>
        <ReviewListByYou id={id} />
      </div>
    </div>
  );
}

export default ManageReviewPage;
