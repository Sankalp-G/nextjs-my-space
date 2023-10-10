import Link from "next/link";

export default function NavMenu() {
  return (
    <div className="navbar bg-base-200 shadow-md">
      <div className="flex-1">
        <Link href={'/'} className="btn btn-ghost normal-case text-xl">MySpace</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal gap-1 px-1 text-md tracking-wide">
          <li><Link href={'/about'}>About</Link></li>
          <li><Link href={'/blog'}>Blog</Link></li>
          <li><Link href={'/users'}>Users</Link></li>
        </ul>
      </div>
    </div>
  )
}