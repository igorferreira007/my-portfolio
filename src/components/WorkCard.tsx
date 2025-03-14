interface Props {
  title: string
  description: string
  icon: React.ReactNode
}

export function WorkCard({ title, description, icon }: Props) {
  return (
    <div className="border-2 border-stone-200 dark:border-gray-800 rounded-xl p-5">
      {icon}
      <h3 className="font-bold mt-5">{title}</h3>
      <small className="text-sm text-stone-500 dark:text-gray-200">{description}</small>
    </div>
  )
}
