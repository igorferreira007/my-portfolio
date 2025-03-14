import { useContext } from "react"
import { BiMenuAltRight } from "react-icons/bi"
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
  handleMenuIsOpen: () => void
}

export function Header({ handleMenuIsOpen }: Props) {
  const { changeTheme, currentTheme } = useContext(ThemeContext)

  return (
    <header
      className="bg-stone-200 dark:bg-gray-800 lg:bg-stone-200/50
      lg:dark:bg-gray-800/50 lg:backdrop-blur-xs z-50 sticky top-0"
      id="header"
    >
      <div className="flex items-center max-w-7xl w-full gap-12 mx-auto px-4 py-8">
        <h1 className="font-bold text-xl lg:text-2xl text-stone-600 dark:text-gray-100">
          Igor Ferreira
        </h1>

        <ul className="hidden lg:flex gap-12 ml-auto">
          {liOptions.map((option) => (
            <li key={option.id}>
              <Link
                to={option.id}
                smooth={true}
                duration={500}
                offset={-96}
                className="text-stone-600 dark:text-gray-100 font-semibold
                hover:text-orange-600 dark:hover:text-blue-500 transition"
              >
                {option.title}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="hidden lg:block text-stone-600 dark:text-gray-100
          hover:text-orange-600 dark:hover:text-blue-500 transition"
          title={currentTheme === "dark" ? "Tema Claro" : "Tema escuro"}
          aria-label="Tema: Escuro/Claro"
          onClick={changeTheme}
        >
          {currentTheme === "dark" ? <MdLightMode size={24} /> : <MdDarkMode size={24} />}
        </button>

        <button
          type="button"
          className="lg:hidden leading-0 ml-auto text-stone-600 dark:text-gray-100 hover:text-orange-600 dark:hover:text-blue-500
          transition"
          title="Menu"
          aria-label="Menu"
          onClick={handleMenuIsOpen}
        >
          <BiMenuAltRight size={32} />
        </button>
      </div>
    </header>
  )
}
