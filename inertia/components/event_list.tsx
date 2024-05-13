import Event from '#events/models/event'
import { Link } from '@inertiajs/react'
import { motion } from 'framer-motion'

export default function EventList({
  event,
  submitDestroyEvent,
}: {
  event: Event
  submitDestroyEvent: (submitDestroyEvent: string) => void
}) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      key={event.id}
      className="w-full group"
    >
      <Link
        href={`/event/${event.id}`}
        className="flex items-center justify-start w-full gap-4 p-4 overflow-hidden transition-all duration-500 ease-in-out bg-opacity-75 cursor-pointer bg-neutral-900 rounded-xl backdrop-blur-3xl hover:bg-opacity-100 text group"
      >
        <img
          src="https://files.kick.com/images/user/380888/profile_image/conversion/b91b943d-b9d5-444d-8cd9-90d36cb63ba4-fullsize.webp"
          alt="Logo kick JeanPormanove"
          className="object-cover transition-transform duration-500 ease-in-out border-2 rounded-full size-10 group-hover:translate-x-2 border-neutral-800"
        />
        <img
          src="https://files.kick.com/images/user/380888/profile_image/conversion/b91b943d-b9d5-444d-8cd9-90d36cb63ba4-fullsize.webp"
          alt="Logo kick JeanPormanove"
          className="absolute top-0 left-0 transition-transform duration-500 ease-in-out opacity-25 size-full blur-2xl rounded-xl group-hover:scale-125 group-hover:opacity-50"
        />
        <div className="flex flex-col items-start justify-center transition-transform duration-500 ease-in-out group-hover:translate-x-2">
          <h2 className="text-base font-semibold lg:text-lg text-neutral-100">{event.title}</h2>
        </div>
      </Link>
    </motion.li>
  )
}
