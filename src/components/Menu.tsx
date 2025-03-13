import { MdLightMode } from "react-icons/md"
import { Link } from "react-scroll"

const liOptions = [
  {
    title: "Início",
    id: "hero",
  },
  {
    title: "Sobre",
    id: "about",
  },
  {
    title: "Projetos",
    id: "projects",
  },
  {
    title: "Serviços",
    id: "works",
  },
  {
    title: "Contatos",
    id: "contacts",
  },
]

interface Props {
  menuIsOpen: boolean
}

export function Menu({ menuIsOpen = false }: Props) {
  return (
    <div
      className={`fixed w-full lg:hidden transition-all duration-200 ease-in-out 
        ${
          menuIsOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
    >
      <ul className="grid text-gray-100 font-semibold ml-auto">
        {liOptions.map((option) => (
          <li className="text-center" key={option.id}>
            <Link
              smooth={true}
              duration={500}
              offset={-96}
              to={option.id}
              className="inline-block py-4 bg-gray-900 hover:brightness-110
                focus-within:brightness-105 w-full"
            >
              {option.title}
            </Link>
          </li>
        ))}
        <li className="flex items-center justify-center gap-4 py-4 bg-gray-900 w-full">
          <span>Tema: </span>
          <button
            type="button"
            className="border border-gray100 p-2 rounded hover:text-blue-500 transition"
          >
            <MdLightMode />
          </button>
        </li>
      </ul>
    </div>
  )
}
