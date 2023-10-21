import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { SignInButton, SignOutButton } from "@/components/buttons";

export default function NavMenu() {
  return (
    <div className="navbar flex-wrap sm:flex-nowrap bg-base-200 shadow-md">
      <div className="flex-1 w-full sm:w-auto flex justify-between">
        <Link href={"/"} className="btn btn-ghost normal-case text-xl">
          MySpace
        </Link>

        <div className="flex sm:hidden items-center justify-center mr-4">
          <SignInButton />
        </div>
      </div>
      <div className="flex-none w-full sm:w-auto px-4 sm:px-0">
        <ul className="px-0 menu menu-horizontal align-center gap-6 text-md sm:tracking-wide w-full sm:w-auto">
          <li>
            <Link className="px-2 -mx-2 py-1 rounded-2x" href={"/about"}>About</Link>
          </li>
          <li>
            <Link className="px-2 -mx-2 py-1 rounded-2x" href={"/blog"}>Blog</Link>
          </li>
          <li>
            <Link className="px-2 -mx-2 py-1 rounded-2x" href={"/users"}>Users</Link>
          </li>
          <li className="items-center flex-row ml-auto sm:ml-0 hidden sm:flex">
            <SignInButton />
          </li>
          <div className="flex items-center flex-row ml-auto sm:ml-0 sm:hidden">
            <ThemeToggle />
          </div>
        </ul>
        <div className="hidden sm:flex items-center justify-center self-end sm:self-auto">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
