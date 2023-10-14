import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  console.log(session);

    return <pre>{JSON.stringify(session, null, 2)}</pre>;
}
