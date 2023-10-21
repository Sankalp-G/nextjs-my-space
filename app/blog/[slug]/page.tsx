export const dynamic = "force-dynamic";

import PageHeading from "@/components/PageHeading";

interface Post {
  title: String;
  slug: String;
  content: String;
}

interface Props {
  params: { slug: String }
}

export async function generateStaticParams() {
  const posts: Post[] = await fetch("http://localhost:3000/api/content").then(
    res => res.json()
  )

  return posts.map(
    post => { slug: post.slug }
  )
}

export default async function BlogPostPage({ params }: Props) {
  const posts: Post[] = await fetch("http://localhost:3000/api/content").then(
    res => res.json()
  )
  const post = posts.find(post => post.slug == params.slug);

  if (!post) {
    return (
      <h1 className="text-4xl font-bold">Post Not Found</h1>
    )
  }

  return (
    <>
      <PageHeading title={post.title} />
      <p>
        {post.content}
      </p>
    </>
  )
}