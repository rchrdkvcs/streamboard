import type Event from '#events/models/event'
import { Head, router } from '@inertiajs/react'
import { useState } from 'react'
import EventCreateForm from '~/components/event_create_form'
import EventList from '~/components/event_list'
import HeaderLayout from '~/components/header_layout'
import Section from '~/components/section'

export default function Index({ events }: { events: Event[] }) {
  const [formDisplay, setFormDisplay] = useState(false)

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

      {formDisplay && <EventCreateForm setFormDisplay={setFormDisplay} />}

      <HeaderLayout>
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
      </HeaderLayout>

      <Section>
        <ul className="flex flex-col items-start justify-start w-full h-full py-4 space-y-4">
          {events.map((event) => (
            <EventList event={event} submitDestroyEvent={submitDestroyEvent} />
          ))}
        </ul>
      </Section>
    </>
  )
}
