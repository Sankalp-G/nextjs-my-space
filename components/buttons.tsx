"use client"

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";


function Avatar() {
  const { data: session, status } = useSession();

  if (!session?.user?.image) {
    return (
      <Link href={"/dashboard"} className="p-0">
        <div className="avatar placeholder w-[32px] h-[32px]">
          <div className="bg-neutral-focus text-neutral-content rounded-full w-[32px] h-[32px]">
            <span className="text-3xl">K</span>
          </div>
        </div>
      </Link>
    );
  }
  else {
    return (
      <Link href={"/dashboard"} className="p-0">
        <div className="avatar w-[32px] h-[32px]">
          <Image
            className="w-[32px] h-[32px] p-0 m-0 object-contain rounded-full text-center flex items-center bg-base-300"
            src={session?.user?.image}
            width={32}
            height={32}
            alt="User"
          />
        </div>
      </Link>
    )
  }
}

export function SignInButton() {
  const { status } = useSession();

  if (status == "loading") {
    return <span className="loading loading-spinner loading-sm opacity-25 "></span>;
  }

  if (status == "authenticated") {
    return (
      <Avatar />
    );
  }

  return (
    <button
      className="btn btn-sm btn-primary"
      onClick={() => signIn()}
    >Sign In</button>
  )
}

export function SignOutButton() {
  const { status } = useSession();

  if (status == "authenticated") {
    return (
      <button className="btn btn-md btn-warning px-8 mb-4" onClick={() => signOut()}>Sign Out</button>
    )
  }

  return <></>
}
