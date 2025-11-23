import * as React from "react";
import {
  Button,
  IconButton,
  Typography,
  Navbar,
} from "@material-tailwind/react";
import { Home, X, Mail, CircleCheck, DollarSign, Menu } from "lucide-react";
import tmLogo from "../../src/Assets/favicon-32x32.png";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const LINKS = [
  { icon: Home, title: "Home", href: "/" },
  { icon: CircleCheck, title: "Feautures", href: "/feautures" },
  { icon: DollarSign, title: "Pricing", href: "/pricing" },
  { icon: Mail, title: "Contact", href: "/contact" },
];

function NavList({ onClick }) {
  return (
    <ul className="mt-4 flex flex-col gap-x-9 gap-y-4 lg:mt-0 lg:flex-row lg:items-center">
      {LINKS.map(({ icon: Icon, title, href }) => (
        <NavLink
          to={href}
          className={({ isActive }) =>
            `w-full h-10 flex items-center gap-3 justify-start ${
              isActive ? "underline-offset-4  underline" : ""
            }`
          }
          onClick={onClick}
        >
          <Icon className="h-5 w-5 stroke-[1.5px]" />
          <Typography type="small">{title}</Typography>
        </NavLink>
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
    <Navbar className="mx-auto w-full bg-inherit p-4 border-none mb-1 shadow-sm z-50">
      <div className="flex items-center">
        <a
          href="/"
          className="ml-2 mr-6 flex text-lg items-center gap-1 "
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
          <span
            size="md"
            variant="solid"
            className="px-16 bg-gradient-to-r from-indigo-500 to-blue-500  font-bold py-3 rounded-xl hover:bg-indigo-600 hover:to-blue-700  text-white transition duration-200"
          >
            Log in
          </span>
        </Link>

        <IconButton
          size="sm"
          color="secondary"
          variant="ghost"
          onClick={() => setOpenNav(!openNav)}
          className="ml-auto grid lg:hidden"
        >
          {openNav ? (
            <X size={30} className="stroke-[1px]" />
          ) : (
            <Menu size={35} className="stroke-[1px]" />
          )}
        </IconButton>
      </div>

      <AnimatePresence>
        {openNav && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
            className="lg:hidden mt-4"
          >
            <NavList onClick={() => setOpenNav(false)} />
            <Button
              size="sm"
              isFullWidth
              className="mt-4 border-white hover:border-white"
              onClick={() => setOpenNav(false)}
            >
              <Link to="/auth/login">Log In</Link>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </Navbar>
  );
}
