import IndexGamemasterController from '#gamemaster/controllers/index_gamemaster_controller'
import { InferPageProps } from '@adonisjs/inertia/types'
import { Head, Link } from '@inertiajs/react'

interface IndexGameMasterProps {
  events: InferPageProps<IndexGamemasterController, 'handle'>
}

export default function Index({ events }: IndexGameMasterProps['events']) {
  return (
    <>
      <Head title="JeanPormanove - GameMaster" />

      <main className="flex flex-col items-start justify-start w-full h-screen overflow-hidden bg-neutral-950">
        <header className="w-full h-16 border-b border-neutral-800">
          <div className="flex items-center justify-between w-full h-full mx-auto max-w-7xl">
            <div className="flex items-center justify-center w-full h-full gap-2">
              <p className="text-base font-semibold text-neutral-100">GameMaster</p>
            </div>
          </div>
        </header>

        <section className="w-full h-full px-4 mx-auto overflow-y-auto max-w-7xl xl:px-0">
          <ul className="flex flex-col items-start justify-start w-full h-full py-4 space-y-4">
            {events.map((event) => (
              <li key={event.id} className="w-full">
                <div className="flex items-center justify-between w-full p-4 transition-all duration-150 ease-in-out bg-opacity-75 cursor-pointer -z-10 bg-neutral-900 rounded-xl backdrop-blur-md hover:bg-opacity-100">
                  <Link
                    className="flex items-center justify-start w-full h-full gap-4"
                    href={`/gamemaster/${event.id}?page=1`}
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
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  )
}
