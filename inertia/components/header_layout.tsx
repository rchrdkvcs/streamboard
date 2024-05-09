export default function HeaderLayout({
  children,
  justify = 'between',
}: {
  children: React.ReactNode
  justify?: 'center' | 'between' | 'start' | 'end'
}) {
  return (
    <header className="w-full h-16 text-white border-b border-neutral-800">
      <div
        className={`flex items-center w-full h-full px-4 mx-auto max-w-7xl xl:px-0 justify-${justify}`}
      >
        {children}
      </div>
    </header>
  )
}
