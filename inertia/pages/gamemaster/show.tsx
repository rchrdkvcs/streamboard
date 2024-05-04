import type Task from '#tasks/models/task'
import { Link } from '@inertiajs/react'

interface ShowGameMasterProps {
  props: {
    qst: Task
    meta: any
    eventId: string
  }
}

export default function Show({ qst, meta, eventId }: ShowGameMasterProps['props']) {
  function setVisibility(isVisible: boolean) {
    localStorage.setItem('answerIsVisible', JSON.stringify(isVisible))
  }

  function getVisibility(): boolean {
    const stored = localStorage.getItem('answerIsVisible')
    return stored ? JSON.parse(stored) : false
  }

  return (
    <div>
      <h1>Game Master</h1>
      <div>
        <h2>{qst.label}</h2>
        {qst.media && <img src={qst.media} />}
        <p>{qst.answer}</p>
      </div>
      <nav>
        <ul>
          <li>
            <Link
              href={`/gamemaster/${eventId}${meta.previousPageUrl || '/?page=1'}`}
              onClick={() => {
                setVisibility(false)
              }}
            >
              Previous
            </Link>
          </li>
          <li>
            <Link
              href={`/gamemaster/${eventId}${meta.nextPageUrl || '/?page=1'}`}
              onClick={() => {
                setVisibility(false)
              }}
            >
              Next
            </Link>
          </li>
        </ul>
        <button
          onClick={() => {
            const currentVisibility = getVisibility()
            setVisibility(!currentVisibility)
          }}
        >
          Afficher
        </button>
      </nav>
    </div>
  )
}
