import LineDivider from 'components/atoms/LineDivider'
import TeamCard from 'components/molecules/Card/TeamCard'
import PageSentence from 'components/molecules/PageSentence'
import SectionSentence from 'components/molecules/SectionSentence'
// import LogoList from 'components/organisms/LogoList'
import StatisticList from 'components/organisms/StatisticList'
import PageTemplate from 'components/templates/PageTemplate'
import Image from 'next/image'
import React from 'react'
import TestimonialList from 'components/organisms/TestimonialList'
import ButtonLink from 'components/atoms/Button/ButtonLink'

const About = () => {
  return (
    <PageTemplate title="A Propos - OLYMPIK">
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 place-items-center">
        <aside className="w-full" data-aos="fade-down-right">
          <div className="w-full h-[480px] relative">
            <Image
              src={'/images/about-illustration.webp'}
              layout="fill"
              objectFit="contain"
              quality={80}
              alt="Programmers when coding in their laptop"
              
            />
          </div>
        </aside>
        <aside
          className="text-center sm:w-10/12 md:w-8/12 lg:w-full lg:text-left"
          data-aos="fade-up-left"
        >
          <PageSentence
            badge="A PROPOS"
            title="Olympik : Medaillé d'or en innovation"
            description={`Olympik est LE studio de développement le plus moderne (fondé par deux jeunes ingénieurs passionnés). Notre mission est de créer des applications sur mesure qui répondent à vos besoins. Nous nous engageons TOUJOURS à fournir des produits finis de  qualité, en respectant vos délais et vos exigences. Nos ambitions sont élevées : nous voulons développer un maximum d'apps performantes atteignant des milliers d'utilisateurs mensuels. Rejoignez-nous dans cette aventure en nous proposant aussi vos projets !`}
          />
        </aside>
      </section>
      <LineDivider />
      <section className="grid place-items-center gap-16">
        <div
          className="sm:w-10/12 md:w-8/12 lg:w-6/12 2xl:w-5/12 text-center"
          data-aos="zoom-in-up"
        >
          <SectionSentence
            badge="STATISTIQUES"
            title="Olympik a déja dévellopé plus de 5 applications en moins d'un an"
          />
        </div>
        <div className="w-full grid gap-14">
          <div data-aos="fade-right">
            <StatisticList />
          </div>
          {/* <LogoList /> */}
        </div>
      </section>
      <LineDivider />

      <section className="flex flex-col gap-16 items-center">
        <div className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12" data-aos="zoom-in-up">
          <SectionSentence
            title="Ce que pensent nos clients..."
            badge="TÉMOIGNAGES"
          />
        </div>
        <div className="w-full" data-aos="fade-up">
          <TestimonialList />
        </div>
        <ButtonLink value="Découvrir nos projets" href="/projects" />
      </section>
      <LineDivider />
      <section className="grid place-items-center gap-16">
        <div
          className="sm:w-10/12 md:w-8/12 lg:w-6/12 2xl:w-5/12 text-center"
          data-aos="zoom-in-up"
        >
          <SectionSentence
            badge="EQUIPE OLYMPIK"
            title="Découvrez l'équipe et n'hésitez pas à nous contacter !"
          />
        </div>
        <div className="w-full grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <a href="mailto:contact@olympik.net" data-aos="fade-up">
            <TeamCard
              imageSrc="/images/louis.jpeg"
              job="Co-fondateur et ingénieur logiciel"
              name="Louis M"
            />
          </a>
          <a href="mailto:contact@olympik.net" data-aos="fade-up">
            <TeamCard
              imageSrc="/images/alexis.jfif"
              job="Co-fondateur et ingénieur logiciel"
              name="Alexis L"
            />
          </a>
          <a href="mailto:contact@olympik.net" data-aos="fade-up">
            <TeamCard
              imageSrc="/images/tommy.jpg"
              job="Community Manager"
              name="Tommy M"
            />
          </a>
        </div>
      </section>
    </PageTemplate>
  )
}

export default About
