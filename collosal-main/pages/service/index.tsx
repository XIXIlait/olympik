import React from 'react'
import PageTemplate from 'components/templates/PageTemplate'
import PageSentence from 'components/molecules/PageSentence'
import LineDivider from 'components/atoms/LineDivider'
import Image from 'next/image'
import SectionSentence from 'components/molecules/SectionSentence'
import {
  FiArrowUp,
  FiCheckCircle,
  FiDownload,
  FiGlobe,
  FiLayout,
  FiMonitor,
  FiRefreshCcw,
  FiSmartphone,
} from 'react-icons/fi'
import SmallCardIcon from 'components/molecules/Card/SmallCardIcon'
import CardListIcon from 'components/molecules/Card/CardListIcon'
import TextArrowLink from 'components/molecules/TextArrowLink'
import IconListItem from 'components/molecules/IconListItem'
import PricingCard from 'components/molecules/Card/PricingCard'

const Services = () => {
  return (
    <>
      <PageTemplate title='Service - Olympique'>
        <section className="grid place-items-center" data-aos="zoom-in-up">
          <div className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12">
            <PageSentence
              badge="VOTRE APPLICATION MOBILE DE A à Z"
              title="Nous sommes là pour vous aider à donner vie à vos idées"
            />
          </div>
        </section>
        <LineDivider />
        <section className="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2 lg:gap-5 ">
          <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full" data-aos="fade-up-right">
            <figure className="w-full h-[315px] relative">
              <Image
                src={'/images/ui-design-illustration.svg'}
                layout="fill"
                objectFit="fill"
                alt='Conception UI'
              />
            </figure>
          </aside>
          <aside className="grid gap-12 place-items-center" data-aos="fade-up-left">
            <div className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left">
              <SectionSentence
                badge="CONCEPTION UI"
                title="Donnez vie à vos idées avec un design moderne"
                paragraph="Nous vous aidons à transformer vos idées en designs modernes et interactifs. Nos services sont accessibles et nous travaillons rapidement pour concrétiser vos projets."
              />
            </div>
            <div className="grid gap-6 w-full place-items-end md:w-8/12 lg:w-full">
              <aside className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5">
                <SmallCardIcon
                  title="Design Moderne"
                  description="Transformez votre idée en un design moderne et attrayant."
                  icon={<FiLayout />}
                />
                <SmallCardIcon
                  title="Prototypes Interactifs"
                  description="Créez des prototypes interactifs pour visualiser vos designs."
                  icon={<FiLayout />}
                />
              </aside>
              <TextArrowLink label="Détail du service" href="/service/detail" />
            </div>
          </aside>
        </section>
        <section className="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2 lg:gap-5 ">
          <aside className="grid gap-12 place-items-center" data-aos="fade-up-right">
            <div className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left">
              <SectionSentence
                badge="DÉVELOPPEMENT"
                title="Des applications sur mesure pour vos besoins"
                paragraph="Partagez vos idées ou problèmes avec nous, et nous créerons une application qui répondra parfaitement à vos attentes. Nous développons des applications iOS et Android, avec des tests en conditions réelles et une estimation gratuite."
              />
            </div>
            <div className="grid gap-6 w-full place-items-end md:w-8/12 lg:w-full">
              <aside className="w-full grid grid-cols-1 gap-5">
                <CardListIcon
                  icon={<FiSmartphone />}
                  title="Développement d'applications mobiles iOS et Android"
                />
                <CardListIcon
                  icon={<FiMonitor />}
                  title="Solutions adaptées aux clients"
                />
                <CardListIcon icon={<FiGlobe />} title="Estimation gratuite" />
              </aside>
              <TextArrowLink label="Détail du service" href="/service/detail/index1" />
            </div>
          </aside>
          <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full" data-aos="fade-up-left">
            <figure className="w-full h-[450px] relative">
              <Image
                src={'/images/development-illustration.svg'}
                layout="fill"
                objectFit="fill"
                alt='IDE pour le développement'
              />
            </figure>
          </aside>
        </section>
        <section className="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2 lg:gap-5 ">
          <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full" data-aos="fade-up-right">
            <figure className="w-full h-[545px] relative">
              <Image
                src={'/images/maintenance-illustration.svg'}
                layout="fill"
                objectFit="fill"
                alt='maintenance du serveur'
              />
            </figure>
          </aside>
          <aside className="grid gap-12 place-items-center" data-aos="fade-up-left">
            <div className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left">
              <SectionSentence
                badge="MAINTENANCE"
                title="Prenez soin de vos serveurs avec notre aide"
                paragraph="Nous nous occupons de la sauvegarde quotidienne, du nettoyage hebdomadaire et des mises à jour de vos serveurs. Nos services de maintenance sont sécurisés et optimisés pour garantir la meilleure performance."
              />
            </div>
            <div className="grid gap-6 w-full place-items-end md:w-8/12 lg:w-full">
              <aside className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
                <IconListItem icon={<FiDownload />} value='Sauvegarde quotidienne' />
                <IconListItem icon={<FiArrowUp />} value='Mise à jour' />
                <IconListItem icon={<FiRefreshCcw />} value='Nettoyage hebdomadaire' />
                <IconListItem icon={<FiCheckCircle />} value='Correction des erreurs' />
              </aside>
              <TextArrowLink label="Détail du service" href="/service/detail/index2" />
            </div>
          </aside>
        </section>
        <LineDivider />
        {/* Prix */}
        <section className="flex flex-col gap-16 items-center">
          <div
            className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12"
            data-aos="zoom-in-up"
          >
            <SectionSentence
              title="Nos Tarifs"
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
                  'Révisions illimitées',
                  'Comprendre votre besoin et vous accompagner',
                ]}
              />
            </div>
            <div data-aos="fade-up">
              <PricingCard
                price="500€"
                title="Développement App"
                features={[
                  'Application mobile IOS/Android',
                  'Support complet',
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
        </section>
      </PageTemplate>
    </>
  )
}

export default Services
