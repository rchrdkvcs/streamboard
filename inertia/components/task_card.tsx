import Task from '#tasks/models/task'
import { RemoveIcon } from './icones'

export default function TaskCard({
  task,
  submitDestroyTask,
  isModifyng,
}: {
  task: Task
  submitDestroyTask: (taskId: string) => void
  isModifyng: boolean
}) {
  return (
    <div className="relative flex flex-col items-start justify-start w-full h-full gap-4 p-4 overflow-hidden transition-all duration-150 ease-in-out bg-opacity-75 bg-neutral-900 rounded-xl backdrop-blur-md group cursor-grab">
      <div className="flex flex-col items-start justify-start w-full h-fit">
        <h3 className="text-lg font-semibold text-neutral-100">{task.label}</h3>
        <p className="text-base text-neutral-200">{task.answer}</p>
      </div>
      {task.media && (
        <>
          <img
            src={task.media}
            alt="Logo kick JeanPormanove"
            className="object-cover w-full h-auto border max-h-48 rounded-xl border-neutral-800"
            draggable={false}
          />
          <div
            className="absolute top-0 left-0 transition-opacity duration-500 bg-center bg-no-repeat bg-cover size-full blur-3xl opacity-15 group-hover:opacity-25 group-hover:scale-110 -z-10"
            style={{
              backgroundImage: `url(${task.media})`,
            }}
          ></div>
        </>
      )}

      {isModifyng && (
        <button
          className="absolute z-50 flex items-center justify-center bg-red-600 rounded-full top-2 right-2 size-6"
          onClick={() => submitDestroyTask(task.id)}
        >
          <RemoveIcon className="text-white size-6" />
        </button>
      )}
    </div>
  )
}
