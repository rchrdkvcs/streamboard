import { useForm } from '@inertiajs/react'

export default function StoreQstForm({
  setIsQstFormVisible,
  id,
}: {
  setIsQstFormVisible: (value: boolean) => void
  id: string
}) {
  const { data, setData, post } = useForm({
    label: '',
    answer: '',
    media: '',
    eventId: id,
  })

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    post('/store-qst')
    setIsQstFormVisible(false)
  }

  return (
    <div className="absolute top-0 left-0 flex items-center justify-center w-full h-screen bg-black bg-opacity-25 backdrop-blur-md">
      <form
        onSubmit={submit}
        className="flex flex-col items-start justify-start w-1/4 gap-6 p-3 border bg-neutral-950 rounded-xl border-neutral-800"
      >
        <h2 className="text-lg font-semibold text-white">Crée un évenement</h2>
        <input
          type="text"
          placeholder="Question"
          className="w-full px-2 py-1 bg-transparent rounded-lg outline-none ring-2 ring-neutral-800 focus:ring focus:ring-primary-500 focus:ring-opacity-75"
          value={data.label}
          onChange={(e) => setData('label', e.target.value)}
        />
        <input
          type="text"
          placeholder="Réponse"
          className="w-full px-2 py-1 bg-transparent rounded-lg outline-none ring-2 ring-neutral-800 focus:ring focus:ring-primary-500 focus:ring-opacity-75"
          value={data.answer}
          onChange={(e) => setData('answer', e.target.value)}
        />
        <input
          type="text"
          placeholder="Média (optionnel)"
          className="w-full px-2 py-1 bg-transparent rounded-lg outline-none ring-2 ring-neutral-800 focus:ring focus:ring-primary-500 focus:ring-opacity-75"
          value={data.media}
          onChange={(e) => setData('media', e.target.value)}
        />
        <button className="self-end px-2 py-1 font-semibold text-black transition-all duration-150 ease-in-out bg-white bg-opacity-75 rounded-lg hover:bg-opacity-100">
          Crée
        </button>
      </form>
    </div>
  )
}
