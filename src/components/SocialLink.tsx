import { GoArrowUpRight } from "react-icons/go"

interface Props {
  title: string
  icon: React.ElementType
  link: string
}

export function SocialLink({ title, icon: Icon, link }: Props) {
  return (
    <a
      href={link}
      target="_blank"
      className="bg-stone-300 dark:bg-gray-700 flex gap-3 items-center p-5 rounded-lg
    text-stone-500 dark:text-gray-200 max-w-100 w-full hover:brightness-80 dark:hover:brightness-120 transition"
    >
      <Icon size={28} />
      <span className="mr-auto font-medium">{title}</span>
      <GoArrowUpRight size={20} className="text-orange-600 dark:text-blue-500" />
    </a>
  )
}
