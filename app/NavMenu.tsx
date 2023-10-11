import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { SignInButton, SignOutButton } from "@/components/buttons";

export default function NavMenu() {
  return (
    <div className="navbar bg-base-200 shadow-md">
      <div className="flex-1">
        <Link href={"/"} className="btn btn-ghost normal-case text-xl">
          MySpace
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal align-center sm:gap-1 sm:px-1 text-md sm:tracking-wide">
          <li>
            <Link className="px-2 sm:px-3" href={"/about"}>About</Link>
          </li>
          <li>
            <Link className="px-2 sm:px-3" href={"/blog"}>Blog</Link>
          </li>
          <li>
            <Link className="px-2 sm:px-3" href={"/users"}>Users</Link>
          </li>
          <div className="divider divider-horizontal w-1 mx-0"></div>
          <li className="justify-center flex-row">
            <SignOutButton />
            <SignInButton />
          </li>
        </ul>
      </div>
      <ThemeToggle />
    </div>
  );
}
