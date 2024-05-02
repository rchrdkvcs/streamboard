export default function FaqCard({
  question,
  answer,
  media,
}: {
  question: string
  answer: string
  media?: string
}) {
  return (
    <div className="w-full p-3 lg:w-1/3 xl:w-1/4 md:w-1/2 h-fit">
      <div className="flex flex-col items-start justify-start gap-4 p-3 border border-opacity-75 border-neutral-800 rounded-xl size-full">
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">{question}</h3>
          <img src={media} className="object-cover w-full rounded-lg" />
        </div>
        <div className="w-full h-[2px] bg-neutral-800 bg-opacity-75 rounded-full"></div>
        <p className="text-base text-white text-opacity-75">{answer}</p>
      </div>
    </div>
  )
}
