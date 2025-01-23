import LineDivider from 'components/atoms/LineDivider'
import PageSentence from 'components/molecules/PageSentence'
import SectionSentence from 'components/molecules/SectionSentence'
import PageTemplate from 'components/templates/PageTemplate'
import Image from 'next/image'
import React, { useState } from 'react'
import PricingCard from 'components/molecules/Card/PricingCard'
import Text from 'components/atoms/Text'
import ProjectCard from 'components/molecules/Card/ProjectCard'
import ButtonLink from 'components/atoms/Button/ButtonLink'
import randomString from 'utils/randomString'

const HowWeWork = () => {
  interface Project {
    title: string
    description: string
    detailPage: string
    imageUrl: string
    category: string
  }

  const projectList: Project[] = [
    {
      title: 'Drop the Block - Craft Edition',
      description: 'Un jeu d\'arcade addictif',
      detailPage: '/project/detail/DropTheBlock',
      imageUrl: '/images/drop.PNG',
      category: 'App sur mesure'
    },
    {
      title: 'Jymu',
      description: 'Le nouveau réseau social du sport',
      detailPage: '/project/detail/Jymu',
      imageUrl: '/images/JPEG.jpg',
      category: 'App sur mesure'
    },
    {
      title: 'SMA (Student mobile App)',
      description: 'L\'outil moderne pour écoles et étudiants',
      detailPage: '/project/detail/SMA',
      imageUrl: '/images/sma.jpg',
      category: 'App adaptable'
    },
    {
      title: 'Friends Trip',
      description: 'Une application pour trouver où les gens vont en voyage',
      detailPage: '/project/detail/FriendsTrip',
      imageUrl: '/images/friends.webp',
      category: 'App sur mesure'
    },
  ]

  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projectList.filter(project => project.category === 'App adaptable'));

  return (
    <PageTemplate>
      <section className="grid place-items-center">
        <div className="sm:w-10/12 md:w-8/12 lg:w-6/12 2xl:w-8/12 text-center mb-4" data-aos="zoom-in-up">
          <PageSentence
            badge="Pour votre entreprise/institut"
            title="Des applications adaptables pour vos besoins spécifiques"
            description="Nous proposons des templates d'applications adaptables que nous personnalisons selon les besoins de votre entreprise ou institut. Que ce soit pour des écoles, des entreprises ou d'autres institutions, nous ajoutons des fonctionnalités spécifiques pour répondre à vos exigences uniques."
          />
        </div>
      </section>
      <section className="py-8">
        <div className="container mx-auto">
          <div className="w-full grid place-items-center">
            {filteredProjects.map((project) => (
              <div className="w-full sm:w-10/12 md:w-8/12 lg:w-5/12" key={randomString(64)} data-aos="zoom-in-up">
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  detailPage={project.detailPage}
                  imageUrl={project.imageUrl}
                />
              </div>
            ))}
            <div className="mt-8 text-center mb-16 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center">
              <ButtonLink value="Intéressé par SMA pour votre établissement" href="/project" />
              <a
                href="https://app.olympik.net"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-buttonLight text-white hover:brightness-90 rounded px-14 py-4 text-base font-semibold text-[#FFD700] border border-[#FFD700]"
              >
                Devenez partenaire SMA
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-8 lg:gap-5">
        <aside className="w-full" data-aos="fade-up-right">
          <div className="w-full h-[380px] relative">
            <Image
              src={'/images/discuss-illustration.webp'}
              quality={100}
              layout="fill"
              objectFit="contain"
              alt='Des personnes discutent'
            />
          </div>
        </aside>
        <aside className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left" data-aos="fade-up-left">
          <SectionSentence
            badge="ÉTAPE 01"
            title={`Contactez-nous et présentez votre projet`}
            paragraph={"Contactez-nous via notre site internet ou par email (contact@olympik.net). Nous discuterons de vos besoins et de vos attentes pour bien comprendre votre projet."}
          />
        </aside>
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-8 lg:gap-5">
        <aside className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left" data-aos="fade-up-right">
          <SectionSentence
            badge="ÉTAPE 02"
            title={`Planification et personnalisation de l'application`}
            paragraph="Nous discutons des fonctionnalités et des propositions de design pour personnaliser l'application selon vos besoins. Nous vous fournissons un devis détaillé et un plan de développement. À cette étape, nous nous assurons que toutes vos exigences sont prises en compte."
          />
        </aside>
        <aside className="w-full" data-aos="fade-up-left">
          <div className="w-full h-[380px] relative">
            <Image
              src={'/images/development-illustration-2.svg'}
              quality={100}
              layout="fill"
              objectFit="contain"
              alt='Développement'
            />
          </div>
        </aside>
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-8 lg:gap-5">
        <aside className="w-full" data-aos="fade-up-right">
          <div className="w-full h-[380px] relative">
            <Image
              src={'/images/project-asset-illustration.svg'}
              quality={100}
              layout="fill"
              objectFit="contain"
              alt='Actif de projet'
            />
          </div>
        </aside>
        <aside className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left" data-aos="fade-up-left">
          <SectionSentence
            badge="ÉTAPE 03"
            title={`Développement, livraison et support`}
            paragraph="Nous développons l'application en suivant le plan établi. Une fois le développement terminé, nous vous livrons tous les actifs du projet, y compris le code source et l'accès au serveur. Nous assurons également une maintenance continue moyennant un abonnement discuté lors de notre échange. À cette étape, votre application est prête à être utilisée."
          />
        </aside>
      </section>
      <LineDivider />
      <section className="py-16">
        <div className="container mx-auto text-center">
          <Text textStyle="SectionTitle" value="Nos Tarifs" />
          <div className="h-8"></div> {/* Add space between title and cards */}
          <div className="w-full grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-2">
            <div data-aos="fade-up">
              <PricingCard
                price="200€"
                title="Adaptation de l'application à vos besoins"
                features={[
                  'Application mobile IOS/Android',
                  'Design initial gratuit',
                  '5 revisions',
                  'Prix sur Devis',
                ]}
              />
            </div>
            <div data-aos="fade-up">
              <PricingCard
                price="30€/mois"
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
        </div>
      </section>
    </PageTemplate>
  )
}

export default HowWeWork
