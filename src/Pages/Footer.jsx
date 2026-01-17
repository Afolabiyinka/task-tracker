import { Typography } from "@material-tailwind/react";

const YEAR = new Date().getFullYear();

const LINKS = [
  {
    title: "About Us",
    href: "#",
  },

  {
    title: "Contribute",
    href: "https://github.com/Afolabiyinka/task-tracker",
  },
  {
    title: "Contact Us",
    href: "/contact",
  },
];

export default function Footer() {
  return (
    <footer className="flex w-full h-fit p-3 flex-row flex-wrap items-center justify-center gap-x-12 gap-y-3 border-t border-surface py-4  px-3 text-center md:justify-between">
      <Typography>
        &copy; {YEAR}{" "}
        <a href="https://github.com/Afolabiyinka" target="-blank">
          Ice Chain labs
        </a>
      </Typography>
      <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 p-3">
        {LINKS.map(({ title, href, index }) => (
          <li key={title}>
            <Typography
              as="a"
              href={href}
              className="hover:text-primary"
              target="_blank"
            >
              {title}
            </Typography>
          </li>
        ))}
      </ul>
    </footer>
  );
}
