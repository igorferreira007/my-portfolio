import code from "../assets/code.svg"

export function Avatar() {
  return (
    <div
      className="border-4 bg-blue-500/20 lg:border-6 border-blue-500
      rounded-full w-fit h-fit p-1 lg:p-2 mx-auto mt-16 lg:mx-0 lg:ml-auto
      shadow-[0px_0px_128px_50px_rgba(57,150,219,0.2)] relative -z-10 animate-pulse
      lg:-mt-16"
    >
      <img
        src="https://github.com/igorferreira007.png"
        alt=""
        className="rounded-full w-48 h-48 lg:size-full lg:max-size lg:max-w-96 object-cover aspect-square"
      />
      <img
        src={code}
        alt=""
        className="absolute bottom-2 right-2 lg:bottom-0 lg:right-8 w-9 h-9 lg:w-20 lg:h-20"
      />
    </div>
  )
}
