import { CiLinkedin } from "react-icons/ci"
import { Title } from "./Title"
import { SocialLink } from "./SocialLink"
import { PiEnvelopeSimple, PiGithubLogo } from "react-icons/pi"

export function Contacts() {
  return (
    <section className="pt-8 lg:pt-24" id="contacts">
      <div className="max-w-7xl w-full mx-auto px-4 appear">
        <Title sectionTitle="Contatos" phrase="Gostou do meu trabalho?" />
        <p className="text-sm text-stone-500 dark:text-gray-200 text-center mt-2">
          Entre em contato ou acompanhe as minhas redes sociais!
        </p>

        <div className="grid gap-4 max-w-100 mx-auto mt-8 lg:mt-16">
          <SocialLink
            title="LinkedIn"
            icon={CiLinkedin}
            link="https://www.linkedin.com/in/ferreira-igor/"
          />
          <SocialLink
            title="GitHub"
            icon={PiGithubLogo}
            link="https://github.com/igorferreira007"
          />
          <SocialLink
            title="Email"
            icon={PiEnvelopeSimple}
            link="mailto:ferreiraigor.dev@gmail.com"
          />
        </div>
      </div>
    </section>
  )
}
