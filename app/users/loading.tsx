export default function LoadingUsers() {
  return (
    <div className="h-96 sm:w-96 flex flex-col items-center justify-center">
      <span className="loading loading-infinity loading-md"></span>
      <span className="text-lg">Loading user data</span>
    </div>
  )
}