import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView as useReactInView } from "react-intersection-observer";
import ReviewCard from "../../Components/Basic Components/ReviewCard";
import ReviewsData from "../../Server.json";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  // Setup intersection observer for the section heading
  const [headingRef, headingInView] = useReactInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [gridRef, gridInView] = useReactInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (ReviewsData && ReviewsData.users) {
      setReviews(ReviewsData.users);
    }
  }, []);

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const gridVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };
  return (
    <div className="h-fit shadow-sm flex flex-col items-center gap-9 px-4 py-6 md:py-16 justify-center">
      <motion.h1
        ref={headingRef}
        className="text-3xl font-bold text-center"
        initial="hidden"
        animate={headingInView ? "visible" : "hidden"}
        variants={headingVariants}
      >
        User Reviews
      </motion.h1>

      <motion.div
        ref={gridRef}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 w-full px-4 gap-6 max-w-screen-xl"
        initial="hidden"
        animate={gridInView ? "visible" : "hidden"}
        variants={gridVariants}
      >
        {reviews.map((review, index) => (
          <motion.div
            key={review.id || `review-${index}`}
            variants={itemVariants}
            custom={index}
          >
            <ReviewCard review={review} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Reviews;
