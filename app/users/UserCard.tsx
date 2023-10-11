import Link from "next/link";

interface Props {
  id: string;
  name: string;
  image: string;
}

export default function UserCard({ id, name, image }: Props) {
  return (
    <div className="card w-64 h-96 bg-base-100 shadow-xl flex flex-col items-center">
      <figure className="flex-1"><img className="flex-1" src={image} alt={name + "'s profile"} /></figure>
      <div className="card-body flex-none w-full flex flex-col items-center gap-4">
        <h2 className="card-title">{name}</h2>
        {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
        <div className="card-actions justify-end w-full">
          <Link href={`/users/${id}`} className="btn btn-primary w-full">View</Link>
        </div>
      </div>
    </div>
  )
}