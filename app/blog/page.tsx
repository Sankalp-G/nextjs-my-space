import PageHeading from "@/components/PageHeading";
import Link from "next/link";

interface Posts {
  title: string;
  slug: string;
  content: string;
}

export default async function BlogPage() {
  const posts: Posts[] = await (
    await fetch("https://nextjs-my-space.vercel.app/api/content")
  ).json();

  return (
    <main>
      <PageHeading title={"Blogs"} />

      <ul className="menu sm:menu-lg px-0 bg-base-200 rounded-box text-secondary font-bold">
        {posts.map((post) => (
          <li>
            <Link href={"/blog/" + post.slug}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
