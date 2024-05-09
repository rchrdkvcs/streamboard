export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col items-start justify-start w-full h-screen overflow-hidden bg-neutral-950">
      {children}
    </main>
  )
}
