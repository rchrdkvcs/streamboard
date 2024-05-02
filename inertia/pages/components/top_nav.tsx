import { Link, usePage } from '@inertiajs/react'

export default function TopNav() {
  const links = [
    { href: 'question', label: 'Question' },
    { href: 'game', label: 'Jeux' },
    { href: '/stream-assets', label: 'Stream' },
  ]

  const currentPath = usePage().url.split('/').pop()

  return (
    <nav className="w-full h-16 p-3 border-b border-neutral-800">
      <ul className="flex items-center justify-start w-full h-full gap-4">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`text-white hover:text-opacity-100 ${
                link.href === currentPath ? 'text-opacity-80' : 'text-opacity-50'
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
