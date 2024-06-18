import Task from '#tasks/models/task'
import { Head, router } from '@inertiajs/react'
import { useState } from 'react'
import GmLink from '~/components/gm_link'
import GmShowBtn from '~/components/gm_show_btn'
import GmTaskCard from '~/components/gm_task_card'
import HeaderLayout from '~/components/header_layout'
import {
  MaterialSymbolsArrowLeftAltRounded,
  MaterialSymbolsChevronLeftRounded,
  MaterialSymbolsChevronRightRounded,
  MaterialSymbolsDashboardRounded,
  StreamlineLiveVideo,
} from '~/components/icones'
import NavLink from '~/components/nav_link'
import Section from '~/components/section'

export default function Show({ data, meta, eventId }: { data: Task; meta: any; eventId: string }) {
  const [showAnswer, setShowAnswer] = useState<boolean>(data.answerVisibility)

  const setVisibility = (visibility: boolean, taskId: string) => {
    setShowAnswer(visibility)
    router.put('/gm/answer-visibility', { visibility, taskId })
  }

  return (
    <>
      <Head title="GameMaster" />

      <HeaderLayout justify="between">
        <div className="flex gap-4">
          <NavLink
            label="Retour"
            href={`/event/${eventId}`}
            Icon={MaterialSymbolsArrowLeftAltRounded}
          />
          <NavLink label="Événements" href={`/events`} Icon={MaterialSymbolsDashboardRounded} />
          <NavLink label="Overlay" href={`/stream/overlay`} Icon={StreamlineLiveVideo} />
        </div>
        <p className="text-lg font-semibold">
          {meta.currentPage} / {meta.total}
        </p>
      </HeaderLayout>

      <Section className="flex flex-col items-center justify-between pt-4 py-4 overflow-hidden">
        <div className="w-full h-full overflow-y-auto flex justify-center items-start">
          <GmTaskCard data={data} />
        </div>

        <div className="flex flex-col items-center justify-center w-full gap-2 text-white md:gap-4 md:w-1/2">
          <div className="flex items-center justify-center w-full gap-2 md:gap-4">
            <GmLink
              data={data}
              setVisibility={setVisibility}
              link={`/gm/${eventId}${meta.previousPageUrl || '/?page=1'}`}
            >
              <MaterialSymbolsChevronLeftRounded className="size-5" />
              Précédent
            </GmLink>
            <GmShowBtn showAnswer={showAnswer} setVisibility={setVisibility} data={data} />
            <GmLink
              data={data}
              setVisibility={setVisibility}
              link={`/gm/${eventId}${meta.nextPageUrl || '/?page=1'}`}
            >
              Suivant
              <MaterialSymbolsChevronRightRounded className="size-5" />
            </GmLink>
          </div>
        </div>
      </Section>
    </>
  )
}
