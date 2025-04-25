import {
  Card,
  Typography,
  Button,
  CardBody,
  CardFooter,
  Avatar,
} from "@material-tailwind/react";
import StarRating from "./StarRating";
function ReviewCard({ review }) {
  return (
    <Card className="max-w-xl  h-full p-4 shadow-lg transition-all duration-300">
      <CardBody>
        <Avatar src={review.image} alt={review.name} className="ring-1" />
        <Typography variant="h6" className="font-semibold font-mono text-xl">
          {review.name}
        </Typography>
        <Typography className="my-1">{review.review}</Typography>
        <StarRating rating={review.rating} />
      </CardBody>
    </Card>
  );
}

export default ReviewCard;
