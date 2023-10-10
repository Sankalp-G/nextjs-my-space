import PageHeading from "@/components/PageHeading"

export default function About() {
  return (
    <main className="prose">
      <PageHeading title={"About"} />
      <p>
        Made by Sankalp Gawali.
        <br />
        This is a Nextjs app, made with daisyUI and tailwind for frontend and bun as the package manager
      </p>
    </main>
  )
}