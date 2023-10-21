import PageHeading from "@/components/PageHeading";
import FollowButton from "@/components/followButton/followButton";
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
    <>
      <PageHeading title={name ?? "User Profile"} />

      <div className="flex flex-col gap-4 items-start">
        <Image
          width={300}
          height={300}
          src={image ?? ""}
          alt={`${name}'s Profile`}
          className="rounded-xl"
        />

        {!bio ? <></> :
          <div>
            <span className="text-lg text-secondary font-bold">BIO: </span>
            <span className="opacity-80">{bio}</span>
          </div>
        }

        <div className="flex gap-4">
          <FollowButton targetUserId={params.id} />

          <Link className="btn btn-accent w-36" href={'/users'}>
            Back
          </Link>
        </div>
      </div>
    </>
  )
}