import { Card } from "./Card"
import { Title } from "./Title"

import taskger from "../assets/taskger.png"
import foodexplorer from "../assets/foodexplorer.jpg"
import rocketmovies from "../assets/rocketmovies.jpg"
import gitfav from "../assets/gitfav.jpg"
import rocketnotes from "../assets/rocketnotes.jpg"
import timer from "../assets/timer.jpg"
import numbers from "../assets/numbers.jpg"

const projects = [
  {
    name: "Taskger - Gerenciador de tarefas",
    description:
      "Uma aplicação web moderna para gerenciar tarefas e colaboração em equipe, desenvolvida com Node.js, React, TypeScript e Tailwind CSS.",
    image: taskger,
    link: "https://taskger.vercel.app/",
    repositoryLink: "https://github.com/igorferreira007/taskger",
  },
  {
    name: "Food Explorer",
    description:
      "Food Explorer, um menu interativo para um restaurante fictício.",
    image: foodexplorer,
    link: "https://food-3xplorer.netlify.app/",
    repositoryLink: "https://github.com/igorferreira007/food-explorer-frontend",
  },
  {
    name: "Rocketmovies",
    description: "RocketMovies é uma aplicação web para os amantes de cinema.",
    image: rocketmovies,
    link: "https://rocketmovies-by-igor.netlify.app/",
    repositoryLink: "https://github.com/igorferreira007/Rocketmovies",
  },
  {
    name: "GitFav",
    description:
      "GitFav é uma aplicação para salvar seus perfis do GitHub favoritos.",
    image: gitfav,
    link: "https://igorferreira007.github.io/GitFav/",
    repositoryLink: "https://github.com/igorferreira007/GitFav",
  },
  {
    name: "Rocketnotes",
    description: "Uma aplicação para criar e gerenciar anotações.",
    image: rocketnotes,
    link: "https://rocketnotes-by-igor.netlify.app/",
    repositoryLink: "https://github.com/igorferreira007/frontend-rocketnotes",
  },
  {
    name: "Timer",
    description:
      "O Timer é uma aplicação que permite temporizar o tempo em uma tarefa.",
    image: timer,
    link: "https://t1merfocus.netlify.app/",
    repositoryLink: "https://github.com/igorferreira007/timer-ignite",
  },
  {
    name: "Numbers",
    description:
      "Um sorteador de números, podendo receber algumas configurações.",
    image: numbers,
    link: "https://igorferreira007.github.io/sorteador-de-numeros/",
    repositoryLink: "https://github.com/igorferreira007/sorteador-de-numeros",
  },
]

export function Projects() {
  return (
    <section className="py-8 lg:py-24" id="projects">
      <div className="max-w-7xl w-full mx-auto px-4 appear">
        <Title sectionTitle="Projetos" phrase="Veja os destaques" />

        <div
          className="mx-auto mt-8 lg:mt-16 max-w-260 w-full grid
          grid-cols-[repeat(auto-fit,minmax(18rem,1fr))] gap-4"
        >
          {projects.map((project) => (
            <Card
              key={project.name}
              name={project.name}
              description={project.description}
              image={project.image}
              link={project.link}
              repositoryLink={project.repositoryLink}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
