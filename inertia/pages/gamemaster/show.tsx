import type Task from '#tasks/models/task'
import { Link } from '@inertiajs/react'

interface ShowGameMasterProps {
  props: {
    data: Task
    meta: any
  }
}

export default function Show({ data, meta }: ShowGameMasterProps['props']) {
  const prevPage = () => {
    if (meta.currentPage <= 1) {
      return meta.currentPage
    }

    return meta.currentPage - 1
  }

  const nextPage = () => {
    if (meta.currentPage >= meta.total) {
      return meta.currentPage
    }

    return meta.currentPage + 1
  }

  return (
    <div>
      <h1>Game Master</h1>
      <div>
        <h2>{data.label}</h2>
        {data.media && <img src={data.media} />}
        <p>{data.answer}</p>
      </div>
      <nav>
        <ul>
          <li>
            <Link href={`${prevPage()}`}>Previous</Link>
          </li>
          <li>
            <Link href={`${nextPage()}`}>Next</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
