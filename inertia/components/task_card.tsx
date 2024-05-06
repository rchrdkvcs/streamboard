import Task from '#tasks/models/task'
import { IonTrashBin } from './icones'

export default function TaskCard({
  task,
  submitDestroyTask,
}: {
  task: Task
  submitDestroyTask: (taskId: string) => void
}) {
  return (
    <div className="relative flex flex-col items-start justify-start w-full h-full gap-4 p-4 overflow-hidden transition-all duration-150 ease-in-out bg-opacity-75 bg-neutral-900 hover:bg-neutral-800 rounded-xl backdrop-blur-md group cursor-grab">
      <IonTrashBin
        className="absolute p-1 text-white transition-all ease-in-out transform -translate-x-1/2 bg-red-600 rounded-full opacity-0 cursor-pointer duration-20000 -bottom-10 group-hover:bottom-3 left-1/2 group-hover:opacity-100 size-7 hover:scale-110"
        onClick={() => submitDestroyTask(task.id)}
      />
      <div className="flex flex-col items-start justify-start w-full h-fit">
        <h3 className="text-lg font-semibold text-neutral-100">{task.label}</h3>
        <p className="text-base text-neutral-200">{task.answer}</p>
      </div>
      {task.media && (
        <>
          <img
            src={task.media}
            alt="Logo kick JeanPormanove"
            className="object-cover w-full border rounded-xl border-neutral-800"
            draggable={false}
          />
          <div
            className="absolute top-0 left-0 bg-center bg-no-repeat bg-cover size-full blur-3xl opacity-15 -z-10"
            style={{
              backgroundImage: `url(${task.media})`,
            }}
          ></div>
        </>
      )}
    </div>
  )
}
