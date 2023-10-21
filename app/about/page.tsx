import PageHeading from "@/components/PageHeading"

export default function About() {
  return (
    <main className="prose sm:w-96">
      <PageHeading title={"About"} />
      <p>
        This is a Nextjs app, made with daisyUI and tailwind for frontend.
        <br />
        Database used is Prisma ORM with Postgres.
        <br />
        Authentication is done with NextAuth.js.
        <br />
        <br />
        Made by Sankalp Gawali.
      </p>
    </main>
  )
}