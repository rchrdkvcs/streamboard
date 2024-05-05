import type Task from '#tasks/models/task'
import { Head, Link, router } from '@inertiajs/react'
import { useState } from 'react'
import {
  MaterialSymbolsChevronLeftRounded,
  MaterialSymbolsChevronRightRounded,
  MdiEyeOffOutline,
  MdiEyeOutline,
} from '~/components/icones'

interface ShowGameMasterProps {
  props: {
    qst: Task
    meta: any
    eventId: string
  }
}

export default function Show({ qst, meta, eventId }: ShowGameMasterProps['props']) {
  const [showAnswer, setShowAnswer] = useState<boolean>(qst.answerVisibility)

  const setVisibility = (visibility: boolean, qstId: string) => {
    setShowAnswer(visibility)
    router.put('/gamemaster/answer-visibility', { visibility, qstId })
  }

  return (
    <>
      <Head title="GameMaster" />

      <main className="flex flex-col items-start justify-start w-full h-screen overflow-hidden bg-neutral-950">
        <header className="w-full h-16 border-b border-neutral-800">
          <div className="flex items-center justify-center w-full h-full mx-auto text-white max-w-7xl">
            {/* <p>Player1</p> */}
            <p className="text-lg font-semibold">
              {meta.currentPage} / {meta.total}
            </p>
            {/* <p>Player2</p> */}
          </div>
        </header>

        <section className="flex flex-col items-center justify-between w-full h-full px-4 py-4 mx-auto md:px-0 max-w-7xl">
          <div className="relative z-50 flex flex-col items-center justify-center w-full gap-3 p-4 overflow-hidden text-white border md:w-1/2 md:gap-4 bg-neutral-900 rounded-xl border-neutral-800">
            <div
              className="absolute top-0 left-0 bg-center bg-no-repeat bg-cover size-full blur-3xl opacity-15 -z-10"
              style={{
                backgroundImage: `url(${qst.media})`,
              }}
            ></div>
            <h2 className="text-xl font-semibold text-center text-neutral-100">{qst.label}</h2>
            {qst.media && <img src={qst.media} className="w-full mx-auto rounded-lg md:w-3/4" />}
            <p className="text-lg font-semibold text-center text-neutral-300">{qst.answer}</p>
          </div>

          <div className="flex flex-col items-center justify-center w-full gap-2 text-white md:gap-4 md:w-1/2">
            {/* <div className="flex items-center justify-center w-full gap-4">
              <button className="w-full p-2 border rounded-lg border-neutral-500 text-neutral-300">
                Player 1
              </button>
              <button className="w-full p-2 border rounded-lg border-neutral-500 text-neutral-300">
                Player 2
              </button>
            </div> */}

            <div className="flex items-center justify-center w-full gap-2 md:gap-4">
              <Link
                href={`/gamemaster/${eventId}${meta.previousPageUrl || '/?page=1'}`}
                onClick={() => {
                  setVisibility(false, qst.id)
                }}
                className="flex items-center justify-center w-full gap-1 py-4 text-sm font-semibold transition-all duration-150 ease-in-out border rounded-lg md:gap-4 md:p-4 md:text-base border-neutral-500 text-neutral-300 hover:bg-neutral-200 hover:text-black"
              >
                <MaterialSymbolsChevronLeftRounded className="size-5" />
                Précédent
              </Link>
              <button
                onClick={() => {
                  setVisibility(!showAnswer, qst.id)
                }}
                className={`flex items-center justify-center w-full gap-1 py-4 text-sm font-semibold transition-all duration-150 ease-in-out border rounded-lg md:gap-4 md:p-4 md:text-base border-neutral-500 hover:bg-neutral-200 hover:text-black ${showAnswer ? 'bg-neutral-200 text-black' : 'text-neutral-300'}`}
              >
                {showAnswer ? (
                  <>
                    <MdiEyeOffOutline className="size-5" />
                    Masquer
                  </>
                ) : (
                  <>
                    <MdiEyeOutline className="size-5" />
                    Afficher
                  </>
                )}
              </button>
              <Link
                href={`/gamemaster/${eventId}${meta.nextPageUrl || '/?page=1'}`}
                onClick={() => {
                  setVisibility(false, qst.id)
                }}
                className="flex items-center justify-center w-full gap-1 py-4 text-sm font-semibold transition-all duration-150 ease-in-out border rounded-lg md:gap-4 md:p-4 md:text-base border-neutral-500 text-neutral-300 hover:bg-neutral-200 hover:text-black"
              >
                Suivant
                <MaterialSymbolsChevronRightRounded className="size-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
