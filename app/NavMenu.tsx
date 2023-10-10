import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function NavMenu() {
  return (
    <div className="navbar bg-base-200 shadow-md">
      <div className="flex-1">
        <Link href={'/'} className="btn btn-ghost normal-case text-xl">MySpace</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal sm:gap-1 sm:px-1 text-md sm:tracking-wide">
          <li><Link className="px-2 sm:px-3" href={'/about'}>About</Link></li>
          <li><Link className="px-2 sm:px-3" href={'/blog'}>Blog</Link></li>
          <li><Link className="px-2 sm:px-3" href={'/users'}>Users</Link></li>
        </ul>
      </div>
      <ThemeToggle />
    </div>
  )
}