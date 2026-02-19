import * as React from "react";
import {
  Button,
  IconButton,
  Typography,
  Navbar,
} from "@material-tailwind/react";
import { Home, X, Mail, CircleCheck, DollarSign, Menu } from "lucide-react";
import tmLogo from "../../src/Assets/favicon-32x32.png";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import CustomBtn from "../Components/custom/CustomBtn";

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
          key={href}
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
  const navigate = useNavigate();

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setOpenNav(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Navbar className="mx-auto w-full bg-inherit p-3 border-none mb-1 shadow-sm z-50">
      <div className="flex items-center">
        <a
          href="/"
          className="ml-2 mr-6 flex text-2xl items-center gap-1  capitalize"
          onClick={() => setOpenNav(false)}
        >
          <img src={tmLogo} alt="Logo" className="rounded-lg object-cover" />
          Task Manager
        </a>
        <hr className="ml-1 mr-1.5 hidden h-5 w-px border-l border-t-0 border-surface/25 lg:block dark:border-surface" />
        <div className="hidden lg:block">
          <NavList />
        </div>

        <span className="ease-in-out hidden lg:ml-auto lg:inline-block">
          <CustomBtn
            children={`Log in`}
            onClick={() => navigate("/auth/login")}
          />
        </span>

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
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden mt-4 flex flex-col"
          >
            <NavList onClick={() => setOpenNav(false)} />
            <span className="w-full mt-4">
              <CustomBtn
                className={`w-full`}
                children={`Log in`}
                onClick={() => navigate("/auth/login")}
              />
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </Navbar>
  );
}
