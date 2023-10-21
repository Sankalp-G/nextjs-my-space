import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import PageHeading from "@/components/PageHeading";
import ProfileForm from "./ProfileForm";
import { SignOutButton } from "@/components/buttons";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect('/')
  }
  const user = await prisma.user.findUnique({ where: { id: session?.user.id } })

  return (
    <div className="sm:w-96">
      <PageHeading title={"Sign Out"} />
      <SignOutButton />

      <PageHeading title={"Update Profile"} />
      <ProfileForm user={user} />
    </div>
  )
}
