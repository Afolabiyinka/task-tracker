import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";

import Loader from "../../Components/Basic Components/Loader";
import SplitText from "../../Components/Basic Components/SplitText";
import ReviewCard from "../../Components/Basic Components/Card";

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

        setTimeout(() => {
          setLoading(false);
        }, 1500);
      } catch (err) {
        console.error("Error loading data:", err);
        setLoading(false);
      }
    }

    loadData();
  }, []);

  // Animation variants for sliding in from the bottom
  const cardVariants = {
    hidden: { opacity: 0, y: 50 }, // Start lower
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const reviewCards = useMemo(
    () =>
      reviews.map((review, index) => (
        <motion.div
          key={review.id}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: index * 0.2 }} // Stagger animation
          className="w-full max-w-md mx-auto"
        >
          <ReviewCard review={review} />
        </motion.div>
      )),
    [reviews]
  );

  return (
    <div className="min-h-screen flex flex-col items-center gap-9 px-4 py-6 md:py-12 justify-center">
      <SplitText
        text="User's Reviews"
        className="text-3xl sm:text-4xl md:text-5xl font-semibold font-mono text-center"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 w-full px-4 gap-6 max-w-screen-xl">
          {reviewCards}
        </div>
      )}
    </div>
  );
};

export default Reviews;
