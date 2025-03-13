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
      <div className="flex flex-col items-center lg:items-start lg:-mt-16">
        <p className="font-inconsolata font-bold lg:text-2xl lg:mt-16">
          Hello World! Meu nome é <span className="text-blue-500">Igor</span> e
          sou
        </p>

        <div className="flex items-center mt-2 lg:mt-6">
          <img src={bracket1} alt="" />
          <h2 className="text-xl lg:text-5xl font-bold">
            Desenvolvedor Full-Stack
          </h2>
          <img src={bracket2} alt="" />
        </div>

        <a
          href="../../public/assets/Curriculo.pdf"
          download="Igor-Ferreira-CV.pdf"
          className="bg-blue-500 rounded-lg px-6 py-4 text-sm font-medium
          lg:text-lg hover:brightness-110 transition mt-8 lg:mt-22 lin"
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
        className="absolute bottom-2 lg:bottom-10 left-1/2 animate-(--animate-increase)
        hover:brightness-150 transition duration-200"
      >
        <PiCaretDoubleDownBold size={32} color="#878ea1" />
      </Link>
    </section>
  )
}
