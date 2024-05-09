import Task from '#tasks/models/task'
import { MdiEyeOffOutline, MdiEyeOutline } from './icones'

export default function GmShowBtn({
  showAnswer,
  setVisibility,
  data,
}: {
  showAnswer: boolean
  setVisibility: (visibility: boolean, taskId: string) => void
  data: Task
}) {
  return (
    <button
      onClick={() => {
        setVisibility(!showAnswer, data.id)
      }}
      className={`flex items-center justify-center w-full gap-1 py-4 text-sm font-semibold transition-all duration-150 ease-in-out border rounded-lg md:gap-4 md:p-4 md:text-base border-neutral-500 hover:bg-neutral-200 hover:text-black ${showAnswer ? 'bg-neutral-200 text-black' : 'text-neutral-300'}`}
    >
      {showAnswer ? (
        <>
          <MdiEyeOffOutline className="size-5" />
          Masquer
        </>
      ) : (
        <>
          <MdiEyeOutline className="size-5" />
          Afficher
        </>
      )}
    </button>
  )
}
