import { PiDevices, PiHardDrives } from "react-icons/pi"
import { Title } from "./Title"
import { WorkCard } from "./WorkCard"
import { MdOutlineDesignServices } from "react-icons/md"

export function Works() {
  return (
    <section className="py-8 lg:py-24 bg-stone-100 dark:bg-gray-900" id="works">
      <div className="max-w-7xl w-full mx-auto px-4 appear">
        <Title
          sectionTitle="Meus serviços"
          phrase="Como posso contribuir na empresa"
        />

        <div
          className="grid grid-cols-[repeat(auto-fit,minmax(17rem,1fr))] gap-4
          max-w-222 mx-auto mt-8 lg:mt-16"
        >
          <WorkCard
            title="Websites e Aplicativos"
            description="Desenvolvimento de interfaces"
            icon={<PiDevices color="#BB72E9" size={48} />}
          />
          <WorkCard
            title="API"
            description="Criação de serviços do sistema"
            icon={<PiHardDrives color="#EABD5F" size={48} />}
          />
          <WorkCard
            title="UI Designer"
            description="Criação de interfaces com Figma"
            icon={<MdOutlineDesignServices color="#E3646E" size={48} />}
          />
        </div>
      </div>
    </section>
  )
}
