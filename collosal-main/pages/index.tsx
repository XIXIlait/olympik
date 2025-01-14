import ButtonLink from 'components/atoms/Button/ButtonLink'
import LineDivider from 'components/atoms/LineDivider'
import FeatureCard from 'components/molecules/Card/FeatureCard'
import PageSentence from 'components/molecules/PageSentence'
import PricingCard from 'components/molecules/Card/PricingCard'
import ProjectCard from 'components/molecules/Card/ProjectCard'
import SectionSentence from 'components/molecules/SectionSentence'
import LogoList from 'components/organisms/LogoList'
import TestimonialList from 'components/organisms/TestimonialList'
import PageTemplate from 'components/templates/PageTemplate'
import Image from 'next/image'
import React from 'react'
import { FiFigma, FiCode, FiBox } from 'react-icons/fi'
const Home = () => {
  return (
    <>
      <PageTemplate title="Accueil - Collosal">
        {/* Section Bannière */}
        <section
          className="flex flex-col gap-10 items-center"
          data-aos="fade-up"
        >
          <div className="w-10/12 md:w-8/12 text-center">
            <PageSentence
              title="Nous concevons. Nous développons. Nous livrons. Rapidement et efficacement."
              description="Nous nous engageons à fournir des solutions de développement d'applications iOS de haute qualité, rapidement et sans compromis. Notre équipe dédiée travaille sans relâche pour livrer des résultats exceptionnels, même dans des délais serrés."
              badge="DRIVÉ PAR LE DÉVELOPPEMENT CLIENT"
            />
          </div>
          <div className="flex flex-col gap-6 sm:flex-row w-full sm:w-fit">
            <ButtonLink value="Envoyer nous un mail" href="/quote" />
            <ButtonLink
              value="En savoir plus"
              color="white"
              style="light"
              href="/about"
            />
          </div>
        </section>
        {/* Liste des fonctionnalités */}
        <section className="grid grid-cols-1 gap-5 md:grid-cols-3 mb-16">
          <div data-aos="fade-up">
            <FeatureCard
              title="Conception"
              description="Nous créons des interfaces utilisateur intuitives et attrayantes en utilisant Figma, garantissant une expérience utilisateur optimale."
              icon={<FiFigma />}
            />
          </div>
          <div data-aos="fade-up">
            <FeatureCard
              title="Développement"
              description="Nous transformons vos idées en applications iOS robustes et performantes, en utilisant les technologies les plus avancées."
              icon={<FiCode />}
            />
          </div>
          <div data-aos="fade-up">
            <FeatureCard
              title="Livraison"
              description="Nous livrons des applications complètes et prêtes à l'emploi, avec tous les actifs nécessaires."
              icon={<FiBox />}
            />
          </div>
        </section>
        {/* Liste des logos */}
        <LogoList />
        {/* Comment nous travaillons */}
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
              title="Une approche méthodique et passionnée"
              paragraph="Chaque projet est soigneusement planifié et conçu avec les meilleures pratiques. Nous testons rigoureusement chaque application pour garantir une qualité et une fiabilité optimales avant la livraison."
              badge="COMMENT NOUS TRAVAILLONS"
            />
          </aside>
        </section>
        {/* Notre équipe */}
        <section className="grid grid-cols-1 gap-6 sm:gap-8 place-items-center lg:grid-cols-2">
          <aside className="text-center sm:w-10/12 lg:text-left lg:w-full">
            <div className="space-y-12" data-aos="fade-right">
              <SectionSentence
                title="Une équipe de professionnels passionnés"
                paragraph="Notre équipe est composée de designers, d'ingénieurs et d'analystes talentueux et créatifs. Nous nous engageons à fournir un travail de qualité supérieure, rapidement et efficacement, en collaborant étroitement pour atteindre des résultats exceptionnels."
                badge="NOTRE ÉQUIPE"
              />
              <ButtonLink
                value="Voir notre équipe"
                href="/about"
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
        <LineDivider />
        {/* Nos projets */}
        <section className="flex flex-col gap-16 items-center">
          <div
            className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12"
            data-aos="zoom-in-up"
          >
            <SectionSentence
              title="Découvrez nos projets exceptionnels qui dépassent les attentes"
              badge="PROJETS"
            />
          </div>
          <div className="w-full grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-5">
            
              
          
          </div>
          <ButtonLink
            value="Découvrez nos projets"
            href="/projects"
            color="primary"
            style="solid"
          />
        </section>
        <LineDivider />
        {/* Prix */}
        <section className="flex flex-col gap-16 items-center">
          <div
            className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12"
            data-aos="zoom-in-up"
          >
            <SectionSentence
              title="Besoin d'aide ? Choisissez un service adapté à vos besoins"
              badge="COMMENCER"
            />
          </div>
          <div className="w-full grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            <div data-aos="fade-up-right">
            <PricingCard
            price="FREE€"
            title="UI Design/Concept"
            features={[
              '5 Pages de design',
              'Bien documenté',
              '2 revisions',
              '$15/additional page',
            ]}
          />
        </div>
        <div data-aos="fade-up">
          <PricingCard
            price="500€"
            title="Développement App"
            features={[
              'Application mobile IOS/Android',
              'Bien documenté',
              '5 revisions',
              'Prix sur Devis',
            ]}
          />
        </div>
        <div data-aos="fade-up">
          <PricingCard
            price="50€/mois"
            title="Maintenance"
            features={[
              'Sauvegarde quotidienne',
              'Nettoyage hebdomadaire',
              'Correction de bugs',
              'Prix sur Devis',
            ]}
          />
            </div>
          </div>
        </section>
        {/* Témoignages */}
        <section className="flex flex-col gap-16 items-center">
          <div className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12" data-aos="zoom-in-up">
            <SectionSentence
              title="Que disent ils de nous  ?"
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
