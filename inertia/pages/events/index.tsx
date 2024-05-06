import { InferPageProps } from '@adonisjs/inertia/types'
import { Head, Link, router, useForm } from '@inertiajs/react'
import { useState } from 'react'
import type IndexEventsController from '../../../app/events/controllers/index_events_controller'

interface IndexEventsProps {
  event: InferPageProps<IndexEventsController, 'handle'>
}

export default function Index({ events }: IndexEventsProps['event']) {
  const [formDisplay, setFormDisplay] = useState(false)

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

  function submitDestroyEvent(eventId: string) {
    router.delete('/event/destroy', {
      data: {
        eventId,
      },
    })
  }

  return (
    <>
      <Head title="JeanPormanove - Événements" />

      {formDisplay && (
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
      )}

      <main className="flex flex-col items-start justify-start w-full h-screen overflow-hidden bg-neutral-950">
        <header className="w-full h-16 border-b border-neutral-800">
          <div className="flex items-center justify-between w-full h-full px-4 mx-auto max-w-7xl xl:px-0">
            <div className="flex items-center justify-start h-full gap-2">
              <img
                src="https://files.kick.com/images/user/380888/profile_image/conversion/b91b943d-b9d5-444d-8cd9-90d36cb63ba4-fullsize.webp"
                alt="Logo kick JeanPormanove"
                className="object-cover border-2 rounded-full size-10 border-neutral-900"
              />
              <p className="text-base font-semibold text-neutral-100">Événements</p>
            </div>
            <button
              className="px-3 py-1 font-semibold transition-all duration-150 ease-in-out border rounded-full border-neutral-500 text-neutral-300 hover:bg-neutral-200 hover:text-black"
              onClick={() => setFormDisplay(true)}
            >
              Ajouter un événement
            </button>
          </div>
        </header>

        <section className="w-full h-full px-4 mx-auto overflow-y-auto max-w-7xl xl:px-0">
          <ul className="flex flex-col items-start justify-start w-full h-full py-4 space-y-4">
            {events.map((event) => (
              <li key={event.id} className="w-full group">
                <div className="flex items-center justify-between w-full p-4 transition-all duration-150 ease-in-out bg-opacity-75 cursor-pointer -z-10 bg-neutral-900 rounded-xl backdrop-blur-md hover:bg-opacity-100">
                  <Link
                    className="flex items-center justify-start w-full h-full gap-4"
                    href={`/event/${event.id}`}
                  >
                    <img
                      src="https://files.kick.com/images/user/380888/profile_image/conversion/b91b943d-b9d5-444d-8cd9-90d36cb63ba4-fullsize.webp"
                      alt="Logo kick JeanPormanove"
                      className="object-cover border-2 rounded-full size-10 border-neutral-800"
                    />
                    <div className="flex flex-col items-start justify-center">
                      <h2 className="text-lg font-semibold text-neutral-100">{event.title}</h2>
                    </div>
                  </Link>
                  <div className="items-center justify-end hidden group-hover:flex">
                    <button
                      onClick={() => submitDestroyEvent(event.id)}
                      className="z-50 px-2 py-1 font-semibold text-red-600 transition-all duration-150 ease-in-out bg-opacity-75 rounded-full hover:bg-red-600 hover:text-white hover:bg-opacity-100"
                    >
                      Supprimer
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  )
}
