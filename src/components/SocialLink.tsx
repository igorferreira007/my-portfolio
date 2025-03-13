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
      className="bg-gray-700 flex gap-3 items-center p-5 rounded-lg
    text-gray-200 max-w-100 w-full hover:brightness-120 transition"
    >
      <Icon size={28} />
      <span className="mr-auto font-medium">{title}</span>
      <GoArrowUpRight size={20} color="#3996DB" />
    </a>
  )
}
