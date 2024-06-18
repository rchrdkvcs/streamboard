import { Link } from '@inertiajs/react'

export default function NavLink({
  href,
  Icon,
  label,
  className,
}: {
  href: string
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  label: string
  className?: string
}) {
  return (
    <Link
      href={href}
      className={
        className
          ? className
          : 'flex items-center gap-1 transition duration-300 text-neutral-400 hover:text-white '
      }
    >
      <Icon className="lg:size-4 size-5" />
      <span className="hidden lg:block">{label}</span>
    </Link>
  )
}
