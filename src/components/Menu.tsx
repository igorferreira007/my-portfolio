import { useContext } from "react"
import { MdDarkMode, MdLightMode } from "react-icons/md"
import { Link } from "react-scroll"
import { ThemeContext } from "../contexts/ThemeContext"

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
  const { changeTheme, currentTheme } = useContext(ThemeContext)

  return (
    <div
      className={`fixed z-10 w-full lg:hidden transition-all duration-200 ease-in-out 
        ${
          menuIsOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
    >
      <ul className="grid text-stone-600 dark:text-gray-100 font-semibold ml-auto">
        {liOptions.map((option) => (
          <li className="text-center" key={option.id}>
            <Link
              smooth={true}
              duration={500}
              offset={-96}
              to={option.id}
              className="inline-block py-4 bg-stone-100 dark:bg-gray-900
              hover:brightness-90 dark:hover:brightness-110
              focus-within:brightness-105 w-full"
            >
              {option.title}
            </Link>
          </li>
        ))}
        <li className="flex items-center justify-center gap-4 py-4 bg-stone-100 dark:bg-gray-900 w-full">
          <span>Tema: </span>
          <button
            type="button"
            title={currentTheme === "dark" ? "Tema Claro" : "Tema escuro"}
            aria-label="Escuro/claro"
            className="border border-gray100 p-2 rounded hover:text-orange-600
            dark:hover:text-blue-500 transition"
            onClick={changeTheme}
          >
            {currentTheme === "dark" ? <MdLightMode size={16} /> : <MdDarkMode size={16} />}
          </button>
        </li>
      </ul>
    </div>
  )
}
