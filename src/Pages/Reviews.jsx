import { useState, useEffect, useMemo } from "react";
import Card from "../Components/Card";
import Loader from "../Components/Loader";
import SplitText from "../Components/SplitText";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await fetch("/Server.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setReviews(data.users);

        // Introduce a 3-second delay before hiding the loader
        setTimeout(() => {
          setLoading(false);
        }, 1500);
      } catch (err) {
        console.error("Error loading data:", err);
        setLoading(false); // Hide loader even if there's an error
      }
    }

    loadData();
  }, []);

  const reviewCards = useMemo(
    () => reviews.map((review) => <Card key={review.id} review={review} />),
    [reviews]
  );

  return (
    <div className="min-h-screen flex flex-col items-center gap-9 px-4 justify-center">
      <SplitText
        text="User's Reviews"
        className="text-5xl font-semibold font-mono"
        delay={10}
        animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
        animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
        easing="easeOutCubic"
        threshold={0.2}
        rootMargin="-50px"
      />
      {loading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 w-full px-4 gap-4 max-w-screen-xl">
          {reviewCards}
        </div>
      )}
    </div>
  );
};

export default Reviews;
