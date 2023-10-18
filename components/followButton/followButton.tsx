import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { getServerSession } from "next-auth"
import FollowClient from "./followClient"

interface Props {
  targetUserId: string
}

export default async function FollowButton({ targetUserId }: Props) {
  const session = await getServerSession(authOptions)
  const currentUserId = session?.user.id!

  const isFollowing = await prisma.follows.findFirst({
    where: {
      followerId: currentUserId,
      followingId: targetUserId
    }
  })

  return (
    <FollowClient targetUserId={ targetUserId } isFollowing={!!isFollowing} />
  )

}