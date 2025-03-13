interface Props {
  name: string
  description: string
  image: string
  link: string
}

export function Card({ name, description, image, link }: Props) {
  return (
    <a
      href={link}
      target="_blank"
      className="group bg-gray-700 p-3 rounded-xl w-full shadow-md
      shadow-gray-900/50 hover:cursor-pointer hover:scale-105 transition"
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
          <small className="text-gray-200 text-sm line-clamp-2">
            {description}
          </small>
        </figcaption>
      </figure>
    </a>
  )
}
