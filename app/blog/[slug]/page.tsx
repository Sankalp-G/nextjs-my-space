import PageHeading from "@/components/PageHeading";

interface Post {
  title: String;
  slug: String;
  content: String;
}

interface Props {
  params: { slug: String }
}

function hosted_api_url() {
  if (typeof process.env.VERCEL_URL !== "undefined") {
    return `https://${process.env.VERCEL_URL}/api/content`
  }
  return undefined
}

export async function generateStaticParams() {
  const posts: Post[] = await fetch(hosted_api_url() ?? "http://localhost:3000/api/content").then(
    res => res.json()
  )

  return posts.map(
    post => { slug: post.slug }
  )
}

export default async function BlogPostPage({ params }: Props) {
  const posts: Post[] = await fetch(hosted_api_url() ?? "http://localhost:3000/api/content").then(
    res => res.json()
  )
  const post = posts.find(post => post.slug == params.slug)!;

  return (
    <>
      <PageHeading title={post.title} />
      <p>
        {post.content}
      </p>
    </>
  )
}