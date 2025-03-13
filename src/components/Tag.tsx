interface Props {
  name: string
  icon: React.ElementType
  colorIcon: string
}

export function Tag({ name, icon: Icon, colorIcon }: Props) {
  return (
    <div className="bg-gray-700 w-fit px-4 py-2 rounded-full flex items-center gap-2">
      <Icon size={20} color={colorIcon} />
      <span className="text-gray-200">{name}</span>
    </div>
  )
}
