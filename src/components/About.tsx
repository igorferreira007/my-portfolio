import {
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from "react-icons/fa"
import { Tag } from "./Tag"
import { Title } from "./Title"
import { SiStyledcomponents, SiTailwindcss, SiTypescript } from "react-icons/si"
import { IoLogoJavascript } from "react-icons/io"
import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"

export function About() {
  const { currentTheme } = useContext(ThemeContext)

  return (
    <section
      className="py-8 lg:py-24 bg-stone-100 dark:bg-gray-900 grid justify-center animate-(--animate-appear)"
      id="about"
    >
      <div className="max-w-7xl w-full mx-auto px-4 flex flex-col items-center gap-8 lg:gap-16 appear">
        <Title
          sectionTitle="SOBRE MIM"
          phrase="Conheça um pouco da minha história"
        />

        <p
          className="text-sm lg:text-base text-stone-500 dark:text-gray-200 text-center
          leading-6 max-w-180 w-full lg:text-justify"
        >
          E aí! Sou o Igor Ferreira, moro em São José dos Campos - SP e
          encontrei na programação minha maior motivação profissional. Gosto de
          criar interfaces bem feitas, intuitivas e funcionais — por isso, estou
          mergulhado no mundo do Front-End, mas sem deixar o Back-End de lado
          (Node.js é meu aliado por aqui). Tenho formação técnica em programação
          e atualmente sigo me desenvolvendo com a Rocketseat, onde estou focado
          em me tornar um dev full-stack, colocando a mão na massa em diversos
          projetos.
          <br />
          <br />
          Logo abaixo você vai ver as tecnologias que fazem parte do meu dia a
          dia:
        </p>

        <div className="flex flex-wrap gap-3 justify-center max-w-189">
          <Tag name="HTML" icon={FaHtml5} colorIcon="#E3646E" />
          <Tag name="CSS" icon={FaCss3Alt} colorIcon="#3996DB" />
          <Tag name="JavaScript" icon={IoLogoJavascript} colorIcon="#EABD5F" />
          <Tag name="TypeScript" icon={SiTypescript} colorIcon="#007ACC" />
          <Tag name="React" icon={FaReact} colorIcon="#3996DB" />
          <Tag name="Tailwind" icon={SiTailwindcss} colorIcon="#38BDF8" />
          <Tag name="Node.js" icon={FaNodeJs} colorIcon="#82BC4F" />
          <Tag
            name="Styled-Components"
            icon={SiStyledcomponents}
            colorIcon={currentTheme === "dark" ? "#C0C4CE" : "#000"}
          />
          <Tag name="Git" icon={FaGitAlt} colorIcon="#F34F29" />
          <Tag
            name="GitHub"
            icon={FaGithub}
            colorIcon={currentTheme === "dark" ? "#C0C4CE" : "#000"}
          />
        </div>
      </div>
    </section>
  )
}
