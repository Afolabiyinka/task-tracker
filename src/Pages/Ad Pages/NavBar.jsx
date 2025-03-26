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
import tmLogo from "../../Assets/favicon-32x32.png";
import { Link } from "react-router-dom";

const LINKS = [
  { icon: HomeIcon, title: "Home", href: "/" },
  { icon: AboutIcon, title: "About", href: "/about" },
  { icon: ReviewsIcon, title: "Reviews", href: "/reviews" },
  { icon: ContactIcon, title: "Contact", href: "/contact" },
];

function NavList({ onClick }) {
  return (
    <ul className="mt-4 flex flex-col gap-x-3 gap-y-1.5 lg:mt-0 lg:flex-row lg:items-center">
      {LINKS.map(({ icon: Icon, title, href }) => (
        <li key={title}>
          <Link
            to={href}
            className="flex items-center gap-x-2 p-1 text-white hover:text-gray-300"
            onClick={onClick} // Close navbar on click
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
    const handleResize = () => {
      if (window.innerWidth >= 960) setOpenNav(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Navbar className="mx-auto w-full max-w-screen-xl bg-black dark:bg-surface-dark mb-2">
      <div className="flex items-center text-white">
        <Link
          to="/"
          className="ml-2 mr-2 flex items-center gap-1 font-semibold"
          onClick={() => setOpenNav(false)} // Close navbar on logo click
        >
          <img src={tmLogo} alt="Logo" />
          Task Manager
        </Link>
        <hr className="ml-1 mr-1.5 hidden h-5 w-px border-l border-t-0 border-surface/25 lg:block dark:border-surface" />
        <div className="hidden lg:block">
          <NavList />
        </div>
        <Button
          size="md"
          className="hidden bg-purple-700 px-6 py-3 rounded-lg md:flex gap-1 font-sans font-semibold hover:bg-blue-600 transition-transform hover:scale-105 duration-700 ease-in-out lg:ml-auto lg:inline-block"
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
        <NavList onClick={() => setOpenNav(false)} />
        <Button
          size="sm"
          isFullWidth
          className="mt-4 border-white bg-white text-black hover:border-white hover:bg-white hover:text-black"
          onClick={() => setOpenNav(false)} // Close navbar when login button is clicked
        >
          <Link to="/auth/login">Log In</Link>
        </Button>
      </Collapse>
    </Navbar>
  );
}
