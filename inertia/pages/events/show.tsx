import { InferPageProps } from '@adonisjs/inertia/types'
import { Head, Link, router, useForm } from '@inertiajs/react'
import { useState } from 'react'
import { IonTrashBin } from '~/components/icones'
import type ShowEventController from '../../../app/events/controllers/show_event_controller'

interface ShowEventProps {
  props: InferPageProps<ShowEventController, 'handle'>
}

export default function Show({ event, tasks }: ShowEventProps['props']) {
  const [formDisplay, setFormDisplay] = useState(false)

  const { data, setData, post } = useForm({
    label: '',
    answer: '',
    media: '',
    eventId: event.id,
  })

  function submitCreateTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    post('/task/store')
  }

  function submitDestroyTask(taskId: string) {
    router.delete('/task/destroy', {
      data: { id: taskId },
    })
  }

  return (
    <>
      <Head title={event.title} />

      {formDisplay && (
        <div className="absolute top-0 left-0 z-50 flex items-center justify-center bg-black bg-opacity-5 size-full backdrop-blur-md">
          <form
            onSubmit={submitCreateTask}
            className="flex flex-col items-center justify-center w-1/4 gap-6 p-4 border rounded-xl bg-neutral-950 border-neutral-800"
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
      )}

      <main className="flex flex-col items-start justify-start w-full h-screen overflow-hidden bg-neutral-950">
        <header className="w-full h-16 border-b border-neutral-800">
          <div className="flex items-center justify-between w-full h-full px-4 mx-auto max-w-7xl xl:px-0">
            <div className="flex items-center justify-start h-full gap-2">
              <img
                src="https://files.kick.com/images/user/380888/profile_image/conversion/b91b943d-b9d5-444d-8cd9-90d36cb63ba4-fullsize.webp"
                alt="Logo kick JeanPormanove"
                className="object-cover border-2 rounded-full size-10 border-neutral-800"
              />
              <div className="flex items-center justify-center gap-1">
                <Link
                  href="/events"
                  className="text-base font-semibold text-neutral-100 hover:underline"
                >
                  Événements
                </Link>
                <span className="text-neutral-100">/</span>
                <p className="text-base font-semibold text-neutral-100">{event.title}</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <button
                className="px-3 py-1 font-semibold transition-all duration-150 ease-in-out border rounded-full border-neutral-500 text-neutral-300 hover:bg-neutral-200 hover:text-black"
                onClick={() => setFormDisplay(true)}
              >
                Ajouter une question
              </button>
              <Link
                href={`/gamemaster/${event.id}?page=1`}
                className="px-4 py-2 font-semibold text-black transition-all duration-150 ease-in-out rounded-full bg-[#53fc18] hover:scale-105"
              >
                Démarrer
              </Link>
            </div>
          </div>
        </header>

        <section className="w-full h-full px-4 mx-auto overflow-y-auto max-w-7xl xl:px-0">
          <ul className="grid items-start justify-start w-full grid-cols-1 py-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 h-fit">
            {tasks.map((task) => (
              <li
                key={task.id}
                className="flex flex-col items-start justify-start w-full h-full p-2"
              >
                <div className="relative flex flex-col items-start justify-start w-full h-full gap-4 p-4 overflow-hidden transition-all duration-150 ease-in-out bg-opacity-75 bg-neutral-900 rounded-xl backdrop-blur-md group">
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
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  )
}
