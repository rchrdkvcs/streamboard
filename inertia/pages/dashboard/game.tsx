import type ShareDataMiddleware from '#middleware/share_data_middleware'
import { InferPageProps } from '@adonisjs/inertia/types'
import { usePage } from '@inertiajs/react'
import SideNav from '../components/side_nav'
import TopNav from '../components/top_nav'

interface GameProps {
  events: InferPageProps<ShareDataMiddleware, 'handle'>
}

export default function Game({ id }: { id: string }) {
  const { events } = usePage().props

  return (
    <main className="flex items-start justify-start w-full h-screen overflow-hidden text-white bg-neutral-950">
      <SideNav events={events} paramsId={id} />
      <section className="flex flex-col items-center justify-center w-full h-full">
        <TopNav />
        <div className="flex flex-col items-start justify-between w-1/3 h-full my-3 border border-neutral-800">
          <div className="relative flex items-center justify-center w-full px-4 py-4 border-b bg-neutral-950 border-neutral-800">
            <p className="w-full font-medium text-left">Jp : 6</p>
            <p className="w-full font-medium text-right">Coudoux : 6</p>
            <div className="absolute bottom-0 -translate-x-1/2 translate-y-full border left-1/2 border-neutral-800 rounded-b-xl">
              <p className="w-full px-3 py-2 font-semibold text-center">Question 1/13</p>
            </div>
          </div>
          <div></div>
          <form className="flex flex-col items-center justify-center w-full gap-2 p-2">
            <div className="flex items-center justify-center w-full gap-2">
              <input type="checkbox" name="Coudoux" id="" className="text-white" />
            </div>
            <div className="flex items-center justify-center w-full gap-2">
              <button className="w-full py-4 text-lg font-semibold text-black bg-white rounded-xl">
                Retour
              </button>
              <button className="w-full py-4 text-lg font-semibold text-black bg-white rounded-xl">
                Afficher
              </button>
              <button className="w-full py-4 text-lg font-semibold text-black bg-white rounded-xl">
                Valider
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}
