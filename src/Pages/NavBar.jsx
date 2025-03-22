import * as React from "react";
import {
  Button,
  IconButton,
  Typography,
  Collapse,
  Navbar,
} from "@material-tailwind/react";
import {
  Menu,
  X as Xmark,
  Home as HomeIcon,
  FileText as AboutIcon,
  Star as ReviewsIcon,
  MessageCircle as ContactIcon,
} from "lucide-react";
import { CheckCheck } from "lucide-react";
import { Link } from "react-router-dom";

const LINKS = [
  {
    icon: HomeIcon,
    title: "Home",
    href: "/",
  },
  {
    icon: AboutIcon,
    title: "About",
    href: "/about",
  },
  {
    icon: ReviewsIcon,
    title: "Reviews",
    href: "/reviews",
  },
  {
    icon: ContactIcon,
    title: "Contact",
    href: "/contact",
  },
];

function NavList() {
  return (
    <ul className="mt-4 flex flex-col gap-x-3 gap-y-1.5 lg:mt-0 lg:flex-row lg:items-center">
      {LINKS.map(({ icon: Icon, title, href }) => (
        <li key={title}>
          <Link
            to={href}
            className="flex items-center gap-x-2 p-1 text-white hover:text-gray-300"
          >
            <Icon className="h-4 w-4" />
            <Typography type="small">{title}</Typography>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function DarkNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="mx-auto w-full max-w-screen-xl bg-black dark:bg-surface-dark">
      <div className="flex items-center text-white">
        <Link
          to="/"
          className="ml-2 mr-2 flex items-center gap-1 text-xl font-semibold"
        >
          <CheckCheck />
          Task Manager
        </Link>
        <hr className="ml-1 mr-1.5 hidden h-5 w-px border-l border-t-0 border-surface/25 lg:block dark:border-surface" />
        <div className="hidden lg:block">
          <NavList />
        </div>
        <Button
          size="sm"
          className="hidden border-white bg-white text-black hover:border-white hover:bg-white hover:text-black lg:ml-auto lg:inline-block"
        >
          <Link to="/auth/login">Log In</Link>
        </Button>
        <IconButton
          size="sm"
          color="secondary"
          onClick={() => setOpenNav(!openNav)}
          className="ml-auto grid lg:hidden"
        >
          {openNav ? (
            <Xmark className="h-4 w-4" />
          ) : (
            <Menu className="h-4 w-4" />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <Button
          size="sm"
          isFullWidth
          className="mt-4 border-white bg-white text-black hover:border-white hover:bg-white hover:text-black"
        >
          <Link to="/auth/login">Log In</Link>
        </Button>
      </Collapse>
    </Navbar>
  );
}
