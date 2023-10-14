import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import PageHeading from "@/components/PageHeading";
import ProfileForm from "./ProfileForm";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  const user = await prisma.user.findUnique({ where: { id: session?.user.id } })

  return (
    <>
      <PageHeading title={"Update Profile"} />

      <ProfileForm user={user} />
    </>
  )
}
