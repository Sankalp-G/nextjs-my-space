import PageHeading from "@/components/PageHeading";

interface Post {
  title: String;
  slug: String;
  content: String;
}

interface Props {
  params: { slug: String }
}

export default async function BlogPostPage({ params }: Props) {
  const posts: Post[] = await fetch("http://localhost:3000/api/content").then(
    res => res.json()
  )
  const post = posts.find(post => post.slug = params.slug)!;

  return (
    <>
      <PageHeading title={post.title} />
      <p>
        {post.content}
      </p>
    </>
  )
}