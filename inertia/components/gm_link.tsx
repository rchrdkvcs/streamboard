import Task from '#tasks/models/task'
import { Link } from '@inertiajs/react'

export default function GmLink({
  children,
  data,
  setVisibility,
  link,
}: {
  children: React.ReactNode
  data: Task
  setVisibility: (visibility: boolean, taskId: string) => void
  link: string
}) {
  return (
    <Link
      href={link}
      onClick={() => {
        setVisibility(false, data.id)
      }}
      className="flex items-center justify-center w-full gap-1 py-4 text-sm font-medium transition-all duration-300 ease-in-out border rounded-lg md:gap-2 md:p-4 md:text-base border-neutral-500 text-neutral-300 hover:bg-neutral-200 hover:text-black"
    >
      {children}
    </Link>
  )
}
