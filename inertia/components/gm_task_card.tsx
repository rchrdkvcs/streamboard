import Task from '#tasks/models/task'
import { motion } from 'framer-motion'

export default function GmTaskCard({ data }: { data: Task }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      exit={{ opacity: 0, y: 100 }}
      layout
      className="relative z-50 flex flex-col items-center justify-center w-full gap-3 p-4 overflow-hidden text-white border md:w-1/2 md:gap-4 bg-neutral-900 rounded-xl border-neutral-800"
    >
      <div
        className="absolute top-0 left-0 bg-center bg-no-repeat bg-cover size-full blur-3xl opacity-15 -z-10"
        style={{
          backgroundImage: `url(${data.media})`,
        }}
      ></div>
      <h2 className="text-xl font-semibold text-center text-neutral-100">{data.label}</h2>
      {data.media && <img src={data.media} className="w-full mx-auto rounded-lg md:w-3/4" />}
      <p className="text-lg font-semibold text-center text-neutral-300">{data.answer}</p>
    </motion.div>
  )
}
