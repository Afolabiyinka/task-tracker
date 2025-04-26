import * as React from "react";
import {
  Button,
  IconButton,
  Typography,
  Collapse,
  Navbar,
} from "@material-tailwind/react";
import {
  Home,
  X,
  Menu,
  MessageSquare,
  Mail,
  CircleCheck,
  DollarSign,
} from "lucide-react";
import tmLogo from "../../src/Assets/favicon-32x32.png";
import { Link } from "react-router-dom";
import { ModeToggle } from "./ModeToggle";

const LINKS = [
  { icon: Home, title: "Home", href: "/" },
  { icon: CircleCheck, title: "Feautures", href: "/feautures" },
  { icon: DollarSign, title: "Pricing", href: "/pricing" },
  { icon: MessageSquare, title: "Reviews", href: "/reviews" },
  { icon: Mail, title: "Contact", href: "/contact" },
  // { icon: Flag, title: "Sponsors", href: "/sponsors" },
];

function NavList({ onClick }) {
  return (
    <ul className="mt-4 flex flex-col gap-x-3 gap-y-1.5 lg:mt-0 lg:flex-row lg:items-center">
      {LINKS.map(({ icon: Icon, title, href }) => (
        <li key={title}>
          <Link
            to={href}
            className="flex items-center gap-x-2 p-1  hover:text-gray-300"
            onClick={onClick}
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
    <Navbar className="mx-auto w-full max-w-screen-xl  mb-2">
      <div className="flex items-center">
        <a
          href="/"
          className="ml-2 mr-2 flex items-center gap-1 font-semibold"
          onClick={() => setOpenNav(false)}
        >
          <img src={tmLogo} alt="Logo" className="rounded-lg object-cover" />
          Task Manager
        </a>
        <hr className="ml-1 mr-1.5 hidden h-5 w-px border-l border-t-0 border-surface/25 lg:block dark:border-surface" />
        <div className="hidden lg:block">
          <NavList />
        </div>

        <Link
          to="/auth/login"
          className="ease-in-out lg:ml-auto lg:inline-block"
        >
          <Button
            size="md"
            variant="solid"
            className="hidden bg-purple-600 px-8 py-2.5 rounded-lg  gap-1 font-sans font-semibold hover:bg-blue-600 lg:ml-auto lg:inline-block transition-transform hover:scale-105 duration-700 ease-in-out "
          >
            Log in
          </Button>
        </Link>
        <div className="hidden lg:block mr-3 ml-3">
          <ModeToggle />
        </div>
        <IconButton
          size="sm"
          color="secondary"
          variant="ghost"
          onClick={() => setOpenNav(!openNav)}
          className="ml-auto grid lg:hidden "
        >
          {openNav ? <X size={30} /> : <Menu size={35} />}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList onClick={() => setOpenNav(false)} />
        <div className="flex gap-2 items-center ">
          <ModeToggle />
          <p>Change Theme</p>
        </div>
        <Button
          size="sm"
          isFullWidth
          className="mt-4 border-white hover:border-white"
          onClick={() => setOpenNav(false)}
        >
          <Link to="/auth/login">Log In</Link>
        </Button>
      </Collapse>
    </Navbar>
  );
}
