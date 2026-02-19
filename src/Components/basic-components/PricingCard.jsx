import { Card, Typography, Chip } from "@material-tailwind/react";
import { ArrowRight, CheckCircle } from "lucide-react";
import CustomBtn from "../custom/CustomBtn";
import { useNavigate } from "react-router-dom";

export default function PricingCard() {
  const navigate = useNavigate();
  return (
    <Card className="max-w-xs rounded-2xl">
      <Card.Header className="py-6 px-7 text-center">
        <Chip
          size="lg"
          variant="ghost"
          color="secondary"
          className=" text-xl font-mono font-bold"
        >
          <Chip.Label>Its completely Free</Chip.Label>
        </Chip>
        <Typography
          as="span"
          type="h1"
          className="mt-3 flex justify-center gap-1 text-7xl"
        >
          <span className="mt-2 text-4xl">$</span>0
          <span className="self-end text-4xl">/mo</span>
        </Typography>
      </Card.Header>
      <hr className="border-primary-dark" />
      <Card.Body as="ul" className="space-y-3 px-8 pb-6 pt-8">
        <li className="flex items-center gap-4 ">
          <CheckCircle className="h-5 w-5" />
          <Typography>Unlimited Tasks</Typography>
        </li>
        <li className="flex items-center gap-4 ">
          <CheckCircle className="h-5 w-5" />
          <Typography>Notifications & Reminders</Typography>
        </li>
        <li className="flex items-center gap-4">
          <CheckCircle className="h-5 w-5" />
          <Typography>Theme Switching</Typography>
        </li>

        <li className="flex items-center gap-4">
          <CheckCircle className="h-5 w-5" />
          <Typography>Free Account</Typography>
        </li>
      </Card.Body>
      <Card.Footer>
        <CustomBtn
          children={`Try it now`}
          onClick={() => navigate("/auth/login")}
          icon={ArrowRight}
        />
      </Card.Footer>
    </Card>
  );
}
