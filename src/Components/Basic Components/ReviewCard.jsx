import {
  Card,
  Typography,
  CardBody,
  CardHeader,
  Avatar,
} from "@material-tailwind/react";
import StarRating from "./StarRating";
function ReviewCard({ review }) {
  return (
    <Card className="max-w-lg  h-full p-2 shadow-lg transition-all duration-300 border-none">
      <CardBody>
        <span className="flex gap-2 items-center">
          <Avatar src={review.image} className="ring-1" />
          <Typography variant="h6" className="font-sans text-xl">
            {review.name}
          </Typography>
        </span>
        <Typography className="my-1">{review.review}</Typography>
        <StarRating rating={review.rating} />
      </CardBody>
    </Card>
  );
}

export default ReviewCard;
