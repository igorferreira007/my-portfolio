import { useState } from "react"
import { Header } from "../components/Header"
import { Menu } from "../components/Menu"
import { Hero } from "../components/Hero"
import { About } from "../components/About"
import { Projects } from "../components/Projects"
import { Works } from "../components/Works"
import { Contacts } from "../components/Contacts"
import { RxCaretUp } from "react-icons/rx"

export function Home() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  function handleMenuIsOpen() {
    if (menuIsOpen) {
      setMenuIsOpen(false)
      return
    }
    setMenuIsOpen(true)
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div>
      <Header handleMenuIsOpen={handleMenuIsOpen} />
      <Menu menuIsOpen={menuIsOpen} />

      <main>
        <Hero />
        <About />
        <Projects />
        <Works />
        <Contacts />
      </main>

      <footer className="max-w-7xl w-full mx-auto px-4 pb-4 lg:pb-8">
        <button
          type="button"
          onClick={scrollToTop}
          title="Ir para o topo"
          aria-label="Ir para o topo"
          className="w-8 h-8 bg-stone-300 dark:bg-gray-700 rounded-full grid place-items-center
          ml-auto mt-4 hover:brightness-80 dark:hover:brightness-120 transition shadow-sm"
        >
          <RxCaretUp size={28} />
        </button>
      </footer>
    </div>
  )
}
