import type Task from '#tasks/models/task'
import { motion } from 'framer-motion'

export default function StreamCard({ task }: { task: Task }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      exit={{ opacity: 0, y: 100 }}
      layout
      className="absolute z-50 flex flex-col gap-2 p-4 overflow-hidden text-white border rounded-lg bg-neutral-950 bottom-4 right-4 w-80 border-neutral-800"
    >
      <motion.h3 layout className="text-lg font-semibold text-neutral-100">
        {task?.label}
      </motion.h3>
      {task?.media && (
        <>
          <motion.img layout src={task?.media} className="object-cover w-full h-auto rounded-lg" />
          <img
            src={task?.media}
            className="absolute top-0 left-0 object-cover rounded-lg opacity-15 size-full -z-10 blur-xl"
          />
        </>
      )}
      {task.answerVisibility === true && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          layout
          className="text-lg font-semibold text-neutral-200"
        >
          {task.answer}
        </motion.p>
      )}
    </motion.div>
  )
}
