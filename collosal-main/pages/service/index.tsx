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
                title="Ne laissez pas votre idée trainer, concevez votre prototype avec nous "
                paragraph="Déléguez vos idées le plus rapidement possible, créez des designs modernes et des prototypes interactifs. Nos services sont abordables et accessibles à tous."
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
                title="Créez des applications innovantes pour vos problèmes"
                paragraph="Dites-nous simplement votre problème ou cos idées, et nous ferons une application qui répondra à vos besoins. Nous développons des applications iOS et Android, avec des tests directs sur téléphone et une estimation gratuite."
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
                title="Prenez soin de votre serveur comme de votre propre enfant"
                paragraph="Nous sauvegarderons vos serveurs chaque jour, les nettoierons chaque semaine, et les mettrons à jour. Nos services de maintenance sont sécurisés et optimisés."
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
      </PageTemplate>
    </>
  )
}

export default Services
