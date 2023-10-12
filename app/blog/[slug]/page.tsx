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
  const posts: Post[] = await fetch("https://nextjs-my-space-frer5xrmn-sankalp-g.vercel.app/api/content").then(
    res => res.json()
  )

  return posts.map(
    post => { slug: post.slug }
  )
}

export default async function BlogPostPage({ params }: Props) {
  const posts: Post[] = await fetch("https://nextjs-my-space-frer5xrmn-sankalp-g.vercel.app/api/content").then(
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