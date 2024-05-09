import Task from '#tasks/models/task'
import { router } from '@inertiajs/react'
import { motion } from 'framer-motion'

export default function TaskSaveBtn({
  tasks,
  setModified,
}: {
  tasks: Task[]
  setModified: (value: boolean) => void
}) {
  function submitReorder(newOrder: any[]) {
    router.patch('/task/reorder', { newOrder })
    setModified(false)
  }

  return (
    <motion.button
      initial={{ opacity: 0, y: 100, x: '-50%' }}
      animate={{ opacity: 1, y: 0, x: '-50%' }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.15, ease: 'easeInOut' }}
      exit={{ opacity: 0, y: 100, x: '-50%' }}
      onClick={() => submitReorder(tasks)}
      className="absolute px-4 py-2 font-semibold text-black bg-[#53fc18] rounded-full bottom-4 left-1/2 z-50"
    >
      Enregistrer les modifications
    </motion.button>
  )
}
