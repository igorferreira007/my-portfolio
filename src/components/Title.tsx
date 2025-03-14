interface Props {
  sectionTitle: string
  phrase: string
}

export function Title({ sectionTitle, phrase }: Props) {
  return (
    <div className="text-center">
      <h3 className="text-orange-600 dark:text-blue-500 uppercase font-semibold text-sm lg:text-xl">
        {sectionTitle}
      </h3>
      <span className="inline-block text-lg lg:text-2xl font-bold mt-2">
        {phrase}
      </span>
    </div>
  )
}
