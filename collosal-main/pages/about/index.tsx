import LineDivider from 'components/atoms/LineDivider'
import TeamCard from 'components/molecules/Card/TeamCard'
import PageSentence from 'components/molecules/PageSentence'
import SectionSentence from 'components/molecules/SectionSentence'
import LogoList from 'components/organisms/LogoList'
import StatisticList from 'components/organisms/StatisticList'
import PageTemplate from 'components/templates/PageTemplate'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <PageTemplate title="About - Collosal">
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
            title="Des solutions innovantes pour vos projets ambitieux"
            description={`Nous sommes un studio d'applications à la pointe de l'innovation, créant des solutions numériques uniques et avant-gardistes. Notre mission est de transformer vos idées novatrices en applications performantes et accessibles à tous sur l'Apple Store.`}
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
          <LogoList />
        </div>
      </section>
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
          <div data-aos="fade-up">
            <TeamCard
              imageSrc="/images/louis.jfif"
              job="Co-fondateur et ingénieur logiciel"
              name="Louis M"
            />
          </div>
          <div data-aos="fade-up">
            <TeamCard
              imageSrc="/images/alexis.jfif"
              job="Co-fondateur et ingénieur logiciel"
              name="Alexis L"
            />
          </div>
          <div data-aos="fade-up">
            <TeamCard
              imageSrc="/images/tommy.jpg"
              job="Community Manager"
              name="Tommy M"
            />
          </div>
        </div>
      </section>
    </PageTemplate>
  )
}

export default About
