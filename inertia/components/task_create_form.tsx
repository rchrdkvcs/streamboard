import { useForm } from '@inertiajs/react'

export default function TaskCreateForm({
  setFormDisplay,
  eventId,
}: {
  setFormDisplay: (value: boolean) => void
  eventId: string
}) {
  const { data, setData, post } = useForm({
    label: '',
    answer: '',
    media: '',
    eventId,
  })

  function submitCreateTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    post('/task/store')
  }

  return (
    <div className="absolute top-0 left-0 z-50 flex items-center justify-center px-4 bg-black bg-opacity-5 size-full backdrop-blur-md md:px-0">
      <form
        onSubmit={submitCreateTask}
        className="flex flex-col items-center justify-center w-full gap-6 p-4 border md:w-1/2 xl:w-1/4 rounded-xl bg-neutral-950 border-neutral-800"
      >
        <h2 className="text-lg font-semibold text-white">Ajouter une question</h2>
        <div className="flex flex-col w-full gap-2">
          <input
            type="text"
            name="title"
            value={data.label}
            placeholder={'Question'}
            onChange={(e) => setData('label', e.target.value)}
            className="w-full px-4 py-2 text-white placeholder-white placeholder-opacity-50 transition-all duration-150 ease-in-out border rounded-lg outline-none border-neutral-800 focus:bg-neutral-900 bg-neutral-900 focus:ring-2 focus:ring-white focus:ring-opacity-50"
          />
          <input
            type="text"
            name="title"
            value={data.answer}
            placeholder={'Réponse'}
            onChange={(e) => setData('answer', e.target.value)}
            className="w-full px-4 py-2 text-white placeholder-white placeholder-opacity-50 transition-all duration-150 ease-in-out border rounded-lg outline-none border-neutral-800 focus:bg-neutral-900 bg-neutral-900 focus:ring-2 focus:ring-white focus:ring-opacity-50"
          />
          <input
            type="text"
            name="title"
            value={data.media}
            placeholder={'Média (Optionnel)'}
            onChange={(e) => setData('media', e.target.value)}
            className="w-full px-4 py-2 text-white placeholder-white placeholder-opacity-50 transition-all duration-150 ease-in-out border rounded-lg outline-none border-neutral-800 focus:bg-neutral-900 bg-neutral-900 focus:ring-2 focus:ring-white focus:ring-opacity-50"
          />
        </div>
        <div className="flex items-center justify-end w-full gap-4">
          <button
            type="button"
            onClick={() => setFormDisplay(false)}
            className="px-2 py-1 text-sm font-semibold text-red-600 transition-all duration-150 ease-in-out bg-opacity-75 rounded-full hover:text-red-800 hover:bg-opacity-100"
          >
            Annuler
          </button>
          <button
            type="submit"
            disabled={!data.label || !data.answer}
            className="px-3 py-1 font-semibold text-white transition-all duration-150 ease-in-out bg-green-600 rounded-full hover:bg-green-800 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Valider
          </button>
        </div>
      </form>
    </div>
  )
}
