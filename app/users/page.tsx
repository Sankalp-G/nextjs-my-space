import { prisma } from "@/lib/prisma";
import UserCard from "./UserCard";
import PageHeading from "@/components/PageHeading";

export default async function UsersPage() {
  const users = await prisma.user.findMany();

  return (
    <>
      <PageHeading title={"Users"} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 justify-items-center">
        {users.map((user, index) => (
          <UserCard
            id={user.id}
            image={user.image!}
            name={user.name!}
            key={index}
          />
        ))}
      </div>
    </>
  )
}