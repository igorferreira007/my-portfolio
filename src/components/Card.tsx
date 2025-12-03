import { FaGithub, FaGlobe } from "react-icons/fa"

interface Props {
  name: string
  description: string
  image: string
  link: string
  repositoryLink: string
}

export function Card({
  name,
  description,
  image,
  link,
  repositoryLink,
}: Props) {
  return (
    <div
      className="group bg-stone-300 dark:bg-gray-700 p-3 rounded-xl w-full
      shadow-md dark:shadow-gray-900/50 hover:cursor-pointer hover:scale-105 transition"
    >
      <figure>
        <img
          src={image}
          alt=""
          className="w-full h-40 object-cover object-top lg:grayscale-20
          lg:group-hover:grayscale-0 lg:group-hover:saturate-150 lg:sepia-20
          lg:group-hover:sepia-0 transition"
        />
        <figcaption className="mt-6">
          <h3 className="font-bold">{name}</h3>
          <small
            className="text-stone-500 dark:text-gray-200 text-sm line-clamp-2"
            title={description}
          >
            {description}
          </small>
          <div className="flex gap-2 mt-2 ml-auto items-center">
            <small className="dark:text-gray-200">Acesse:</small>
            <a href={repositoryLink} target="_blank" title="Repositório">
              <FaGithub size={22} />
            </a>
            <a href={link} target="_blank" title="Site">
              <FaGlobe size={22} />
            </a>
          </div>
        </figcaption>
      </figure>
    </div>
  )
}
