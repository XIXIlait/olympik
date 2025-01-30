import ButtonLink from 'components/atoms/Button/ButtonLink'
import LineDivider from 'components/atoms/LineDivider'
import PageSentence from 'components/molecules/PageSentence'
import SectionSentence from 'components/molecules/SectionSentence'
import StatisticList from 'components/organisms/StatisticList'
// import LogoList from 'components/organisms/LogoList'
import TestimonialList from 'components/organisms/TestimonialList'
import PageTemplate from 'components/templates/PageTemplate'
import Image from 'next/image'
import React from 'react'
// import { FiFigma, FiCode, FiBox } from 'react-icons/fi'

const Home = () => {
  return (
    <>
      <PageTemplate title="Accueil - OLYMPIK">
        {/* Section Bannière */}
        <section
          className="flex flex-col gap-10 items-center"
          data-aos="fade-up"
        >
          <div className="w-10/12 md:w-8/12 text-center">
            <PageSentence
              title="Olympik - Studio de développement d'applications iOS"
              description="Nous sommes un studio de développement d'applications iOS dédié à fournir des solutions de haute qualité. Notre équipe passionnée travaille pour transformer vos idées en applications performantes et innovantes. Nous visons à dépasser vos attentes et à offrir un résultat attendu."
              badge="QUI NOUS SOMMES"
            />
          </div>
          <div className="flex flex-col gap-6 sm:flex-row w-full sm:w-fit">
            <ButtonLink value="Envoyer nous un mail" href="/contact" />
            <ButtonLink
              value="Nous découvrir"
              color="white"
              style="light"
              href="/a-propos"
            />
          </div>
        </section>
        <section className="grid place-items-center gap-16">
        <div
          className="sm:w-10/12 md:w-8/12 lg:w-6/12 2xl:w-5/12 text-center"
          data-aos="zoom-in-up"
        >
      
        </div>
        <div className="w-full grid gap-14">
          <div data-aos="fade-right">
            <StatisticList />
          </div>
          {/* <LogoList /> */}
        </div>
      </section>
        <LineDivider />
        {/* Service des applications classiques */}
        <section className="grid grid-cols-1 gap-6 sm:gap-8 place-items-center lg:grid-cols-2">
          <aside className="w-full h-[400px] relative" data-aos="fade-right">
            <Image
              src="/images/how-we-work-illustration.svg"
              layout="fill"
              objectFit="fill"
              alt="Plan structuré"
            />
          </aside>
          <aside
            className="text-center sm:w-10/12 lg:text-left lg:w-full"
            data-aos="fade-left"
          >
            <SectionSentence
              title="Développement d'applications classiques"
              paragraph="Nous créons des applications iOS robustes et performantes pour répondre à vos besoins spécifiques. Notre équipe utilise les technologies les plus avancées pour transformer vos idées en réalité. Nous offrons des tests en conditions réelles et une estimation gratuite pour chaque projet."
              badge="NOS SERVICES"
            />
            <div className="mt-6">
              <ButtonLink
                value="Voir cette offre"
                href="/apps-sur-mesure"
                size="small"
                color="white"
                style="light"
              />
            </div>
          </aside>
        </section>
        <LineDivider />
        {/* Service des applications pour entreprises et instituts */}
        <section className="grid grid-cols-1 gap-6 sm:gap-8 place-items-center lg:grid-cols-2">
          <aside className="text-center sm:w-10/12 lg:text-left lg:w-full">
            <div className="space-y-12" data-aos="fade-right">
              <SectionSentence
                title="Applications pour entreprises et instituts"
                paragraph="Nous développons des applications sur mesure pour les entreprises et les instituts, en tenant compte de leurs besoins spécifiques. Nos solutions sont conçues pour améliorer l'efficacité et la productivité, tout en offrant une expérience utilisateur optimale."
                badge="NOS SERVICES"
              />
              <ButtonLink
                value="Voir cette offre"
                href="/apps-adaptable"
                size="small"
                color="white"
                style="light"
              />
            </div>
          </aside>
          <aside
            className="w-full h-[400px] relative sm:w-8/12 lg:w-full"
            data-aos="fade-left"
          >
            <Image
              src="/images/team-illustration.svg"
              layout="fill"
              objectFit="fill"
              alt="Éditeur de code et popup d'édition UI"
            />
          </aside>
        </section>
        {/* Nos projets */}
        <section className="flex flex-col gap-16 items-center">
          <ButtonLink
            value="Découvrez nos projets"
            href="/projects"
            color="primary"
            style="solid"
          />
        </section>
        <LineDivider />
        {/* Témoignages */}
        <section className="flex flex-col gap-16 items-center">
          <div className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12" data-aos="zoom-in-up">
            <SectionSentence
              title="Ce que disent nos clients"
              badge="TÉMOIGNAGE"
            />
          </div>
          <div className="w-full" data-aos="fade-up">
            <TestimonialList />
          </div>
        </section>
      </PageTemplate>
    </>
  )
}

export default Home
