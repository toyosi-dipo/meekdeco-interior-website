import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavLink({ href, title, index }) {
  const [activePage, setActivePage] = useState(0);
  const pageRoute = useRouter().asPath;

  return (
    <li>
      <Link
        href={href}
        className={`h-full px-2.5 py-2  rounded-b-lg flex items-end text-secondary hover:text-tertiary ${
          pageRoute === href ? "bg-primary text-white" : "text-secondary"
        }`}
        onClick={() => setActivePage(index)}
      >
        {title}
      </Link>
    </li>
  );
}
