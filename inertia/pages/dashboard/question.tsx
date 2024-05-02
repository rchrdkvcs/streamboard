import { useState } from 'react'
import FaqCard from '../components/faq_card'
import SideNav from '../components/side_nav'
import StoreQstForm from '../components/store_question_form'
import TopNav from '../components/top_nav'

interface Events {
  id: string
  title: string
}

interface Question {
  id: string
  event_id: string
  label: string
  answer: string
  media?: string
}

export default function Question({
  events,
  questions,
  id,
}: {
  events: Events[]
  questions: Question[]
  id: string
}) {
  const [isQstFormVisible, setIsQstFormVisible] = useState(false)

  return (
    <main className="flex items-start justify-start w-full h-screen overflow-hidden text-white bg-neutral-950">
      <SideNav events={events} paramsId={id} />
      <section className="flex flex-col items-start justify-start w-full h-full">
        <TopNav />
        <div className="flex flex-wrap w-full h-full p-3 overflow-y-scroll">
          {questions.map((q) => (
            <FaqCard key={q.id} question={q.label} answer={q.answer} media={q.media} />
          ))}
        </div>
        <button
          className="absolute px-3 py-2 font-semibold text-black transition-all duration-150 ease-in-out bg-white bg-opacity-75 rounded-full backdrop-blur-md bottom-3 right-3 hover:bg-opacity-100 hover:scale-105"
          onClick={() => {
            setIsQstFormVisible(true)
          }}
        >
          Crée une question
        </button>
      </section>
      {isQstFormVisible && <StoreQstForm setIsQstFormVisible={setIsQstFormVisible} id={id} />}
    </main>
  )
}
