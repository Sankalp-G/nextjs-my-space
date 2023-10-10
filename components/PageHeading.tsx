export default function PageHeading({ title, ...props }: { title: String }) {
  return (
    <>
      <h1 className="text-3xl font-bold" {...props}>{title}</h1>
      <hr className="border-secondary w-32 mb-2 border-2" />
    </>
  )
}