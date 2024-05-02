import SideNav from '../components/side_nav'

interface Events {
  id: string
  title: string
}

export default function Index({ events }: { events: Events[] }) {
  return (
    <main className="flex items-start justify-start w-full h-screen overflow-hidden text-white bg-neutral-950">
      <SideNav events={events} />
      <section className="flex items-center justify-center w-full h-full">
        <h1 className="text-xl font-semibold text-opacity-75">Aucun évenement séléctionné</h1>
      </section>
    </main>
  )
}
