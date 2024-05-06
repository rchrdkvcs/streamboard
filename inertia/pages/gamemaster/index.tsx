import Event from '#events/models/event'
import { Head } from '@inertiajs/react'
import GmEventList from '~/components/gm_event_list'
import HeaderLayout from '~/components/header_layout'
import Section from '~/components/section'

export default function Index({ events }: { events: Event[] }) {
  return (
    <>
      <Head title="JeanPormanove - GameMaster" />

      <HeaderLayout>
        <div className="flex items-center justify-center w-full h-full gap-2">
          <p className="text-base font-semibold text-neutral-100">GameMaster</p>
        </div>
      </HeaderLayout>

      <Section>
        <ul className="flex flex-col items-start justify-start w-full h-full py-4 space-y-4">
          {events.map((event) => (
            <GmEventList event={event} key={event.id} />
          ))}
        </ul>
      </Section>
    </>
  )
}
