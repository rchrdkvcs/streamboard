import Task from '#tasks/models/task'
import { router } from '@inertiajs/react'
import { motion } from 'framer-motion'
import { MaterialSymbolsSaveOutlineRounded } from './icones'

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
      transition={{ duration: 0.15, ease: 'easeInOut' }}
      exit={{ opacity: 0, y: 100, x: '-50%' }}
      onClick={() => submitReorder(tasks)}
      className="absolute z-50 flex items-center gap-2 px-4 py-2 text-sm font-semibold text-black transition-all duration-300 bg-white bg-opacity-75 rounded-full shadow-md bottom-4 left-1/2 backdrop-blur-md md:text-base hover:bg-opacity-100"
    >
      <MaterialSymbolsSaveOutlineRounded className="size-4 md:size-5" />
      <span>Enregistrer</span>
    </motion.button>
  )
}
