export default function NavBtn({
  onClick,
  Icon,
  label,
}: {
  onClick: () => void
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  label: string
}) {
  return (
    <button
      onClick={onClick}
      className="relative flex items-center gap-1 transition duration-300 text-neutral-400 hover:text-white group"
    >
      <Icon className="size-4" />
      {label}
    </button>
  )
}
