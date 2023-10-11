import PageHeading from "@/components/PageHeading";
import { prisma } from "@/lib/prisma";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

interface Props {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const user = await prisma.user.findUnique({ where: { id: params.id } });
  return { title: `${user?.name}'s profile` }
}

export default async function UserProfile({ params }: Props) {
  const user = await prisma.user.findUnique({ where: { id: params.id } });
  const { name, bio, image } = user ?? {};

  return (
    <div className="flex flex-col items-start">
      <PageHeading title={name ?? "User Profile"} />

      <Image
        width={300}
        height={300}
        src={image ?? ""}
        alt={`${name}'s Profile`}
        className="my-2 mb-4 rounded-xl"
      />

      {/* <h3>Bio</h3>
      <p>{bio}</p> */}
      <Link
        className="btn btn-accent w-36"
        href={'/users'}
      >Back</Link>
    </div>
  )
}