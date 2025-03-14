interface Props {
  name: string
  icon: React.ElementType
  colorIcon?: string
}

export function Tag({ name, icon: Icon, colorIcon }: Props) {
  return (
    <div className="bg-stone-300 dark:bg-gray-700 w-fit px-4 py-2 rounded-full flex items-center gap-2">
      <Icon size={20} color={colorIcon} />
      <span className="text-stone-500 dark:text-gray-200">{name}</span>
    </div>
  )
}
