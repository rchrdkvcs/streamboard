export default function Section({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <section
      className={`w-full h-full px-4 mx-auto overflow-y-auto max-w-7xl xl:px-0 ${className}`}
    >
      {children}
    </section>
  )
}
