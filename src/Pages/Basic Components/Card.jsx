import {
  Card,
  Typography,
  Button,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";
import StarRating from "./StarRating";
function ReviewCard({ review }) {
  return (
    <Card className="max-w-xs p-4 shadow-lg bg-gray-900 text-white hover:scale-105 transition-all duration-300">
      <CardBody>
        <Typography variant="h6" className="font-semibold font-mono text-xl">
          {review.name}
        </Typography>
        <Typography className="my-1">{review.review}</Typography>
        <StarRating rating={review.rating} />
      </CardBody>
      <CardFooter className="pt-2">
        <Button fullWidth color="blue">
          Read More
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ReviewCard;
