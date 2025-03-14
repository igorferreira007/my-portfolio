import { PiCaretDoubleDownBold } from "react-icons/pi"
import bracket1 from "../assets/bracket-1.svg"
import bracket2 from "../assets/bracket-2.svg"
import { Avatar } from "./Avatar"
import { Link } from "react-scroll"

export function Hero() {
  return (
    <section
      id="hero"
      className="py-16 lg:py-32 max-w-7xl w-full mx-auto px-4 lg:flex
      items-center gap-16 lg:h-[calc(100vh-96px)] relative"
    >
      <div
        className="flex flex-col items-center lg:items-start lg:-mt-16
        animate-(--animate-slideLeftToRight)"
      >
        <p
          className="font-inconsolata text-stone-500 dark:text-gray-200
          font-bold lg:text-2xl lg:mt-16"
        >
          Hello World! Meu nome é <span className="text-orange-600 dark:text-blue-500">Igor</span> e
          sou
        </p>

        <div className="flex items-center mt-2 lg:mt-6">
          <img src={bracket1} className="invert dark:invert-0" />
          <h2 className="text-xl lg:text-5xl font-bold">
            Desenvolvedor Full-Stack
          </h2>
          <img src={bracket2} className="invert dark:invert-0" />
        </div>

        <a
          href="/curriculo.pdf"
          download="Igor-Ferreira-CV.pdf"
          className="bg-orange-600 dark:bg-blue-500 rounded-lg px-6 py-4 text-sm font-medium
          lg:text-lg hover:brightness-110 hover:scale-110 transition mt-8 lg:mt-22"
        >
          Baixar CV
        </a>
      </div>

      <Avatar />

      <Link
        to="about"
        smooth={true}
        duration={500}
        offset={-96}
        type="button"
        title="Veja mais"
        aria-label="Veja mais"
        className="absolute bottom-2 lg:bottom-10 left-[calc(50%-16px)]
        animate-(--animate-increaseLight) dark:animate-(--animate-increaseDark)
        transition duration-200 text-stone-400 dark:text-gray-300"
      >
        <PiCaretDoubleDownBold size={32} />
      </Link>
    </section>
  )
}
