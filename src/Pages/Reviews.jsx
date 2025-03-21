import { useState, useEffect } from "react";
import Card from "../Components/Card";
import Loader from "../Components/Loader";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await fetch("/Server.json"); // Ensure it's inside public/
        const data = await response.json();
        console.log(data); // Log data for debugging
        setReviews(data.users); // Assuming JSON has "users" array
      } catch (err) {
        console.error("Error loading data:", err);
      }
    }

    loadData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center gap-3 px-4 justify-center">
      <h2 className="text-3xl font-bold font-mono mb-8 text-center">
        User Reviews
      </h2>
      {reviews.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 w-full px-4 gap-4 max-w-screen-xl">
          {reviews.map((review) => (
            <Card key={review.id} review={review} />
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Reviews;
