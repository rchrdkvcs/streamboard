import { useForm } from '@inertiajs/react'

export default function EventCreateForm({
  setFormDisplay,
}: {
  setFormDisplay: (formDisplay: boolean) => void
}) {
  const { data, setData, post } = useForm({
    title: '',
  })

  function submitEventCreate(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    post('/event/store', {
      onSuccess: () => {
        setData('title', '')
      },
    })
  }

  return (
    <div className="absolute top-0 left-0 z-50 flex items-center justify-center bg-black bg-opacity-5 size-full backdrop-blur-md">
      <form
        onSubmit={submitEventCreate}
        className="flex flex-col items-center justify-center w-1/4 gap-6 p-4 border rounded-xl bg-neutral-950 border-neutral-800"
      >
        <h2 className="text-lg font-semibold text-white">Crée un événement</h2>
        <input
          type="text"
          name="title"
          value={data.title}
          placeholder={"Titre de l'événement"}
          onChange={(e) => setData('title', e.target.value)}
          className="w-full px-4 py-2 text-white placeholder-white placeholder-opacity-50 transition-all duration-150 ease-in-out border rounded-lg outline-none border-neutral-800 focus:bg-neutral-900 bg-neutral-900 focus:ring-2 focus:ring-white focus:ring-opacity-50"
        />
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
            disabled={!data.title}
            className="px-3 py-1 font-semibold text-white transition-all duration-150 ease-in-out bg-green-600 rounded-full hover:bg-green-800 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Valider
          </button>
        </div>
      </form>
    </div>
  )
}
