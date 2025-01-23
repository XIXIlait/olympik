import LineDivider from 'components/atoms/LineDivider'
import Text from 'components/atoms/Text'
import FeatureCard, {
  FeatureCardProps,
} from 'components/molecules/Card/FeatureCard'
import PageSentence from 'components/molecules/PageSentence'
import PageTemplate from 'components/templates/PageTemplate'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
  FiDownload,
  FiArrowUp,
  FiRefreshCcw,
} from 'react-icons/fi'
import randomString from 'utils/randomString'

const ServiceDetail = () => {
  interface Faq {
    title: string
    description: string
  }
  const faqs: Faq[] = [
    {
      title: `Comment fonctionne le système de paiement ?`,
      description: `Si le projet est accepté, vous paierez un acompte, et lorsque l'avancement atteindra 50%, vous effectuerez un deuxième paiement, et lorsque l'avancement sera de 100%, vous le réglerez.`,
    },
    {
      title: `Puis-je consulter d'abord ?`,
      description: `Bien sûr, vous pouvez nous consulter d'abord. Nous sommes très heureux de vous aider à résoudre vos problèmes et de vous fournir nos meilleures solutions. Vous pouvez nous contacter via la page de contact.`,
    },
    {
      title: `Que se passe-t-il si le projet s'arrête à mi-chemin ?`,
      description: `Nous promettons de toujours terminer le projet à temps, si un problème survient (à cause de notre erreur), tous les paiements seront remboursés. Et le projet sera terminé.`,
    },
    {
      title: `Cela inclut-il les serveurs et les domaines ?`,
      description: `Vous n'avez pas besoin de penser à autre chose, nous avons tout préparé. Vous devez simplement vérifier votre progression et vous assurer que les fonctionnalités que vous souhaitez sont les bonnes.`,
    },
    {
      title: `Vais-je obtenir le code source ?`,
      description: `Lorsque le projet est terminé à 100%, toutes les ressources, telles que les fichiers de conception, les diagrammes d'analyse, le code source, etc. vous seront fournies. Vous n'avez pas à vous inquiéter à ce sujet.`,
    },
    {
      title: `Y a-t-il une garantie ?`,
      description: `Garantie d'un an pour nos erreurs ou fautes. Si vous souhaitez ajouter une fonctionnalité qui n'est pas incluse dans la garantie, il y a un autre coût par fonctionnalité, et le prix dépend de la difficulté.`,
    },
  ]
  const features: FeatureCardProps[] = [
    {
      title: 'Sauvegarde quotidienne',
      description: 'Nous sauvegarderons vos serveurs chaque jour.',
      icon: <FiDownload />,
    },
    {
      title: 'Mise à jour',
      description: 'Nous mettrons à jour vos serveurs régulièrement.',
      icon: <FiArrowUp />,
    },
    {
      title: 'Nettoyage hebdomadaire',
      description: 'Nous nettoierons vos serveurs chaque semaine.',
      icon: <FiRefreshCcw />,
    },
  ]
  return (
    <PageTemplate title="Détail du service - Olympique">
      <section className="grid place-items-center">
        <div className="sm:w-10/12 md:w-8/12 lg:w-6/12 text-center" data-aos="zoom-in-up">
          <PageSentence
            badge="MAINTENANCE"
            title="Prenez soin de votre serveur comme de votre propre enfant"
          />
        </div>
      </section>
      <LineDivider />
      <section className="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2 lg:gap-5 ">
        <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full" data-aos="fade-up-right">
          <figure className="w-full h-[450px] relative">
            <Image
              src={'/images/maintenance-illustration.svg'}
              layout="fill"
              objectFit="fill"
              alt="Maintenance du serveur"
            />
          </figure>
        </aside>
        <aside className="grid gap-12 place-items-center" data-aos="fade-up-left">
          <div className="sm:w-10/12 md:w-8/12 lg:w-full lg:text-left grid gap-10">
            <div className="grid gap-8">
              <Text
                value={`Nous sauvegarderons vos serveurs chaque jour, les nettoierons chaque semaine, et les mettrons à jour. Nos services de maintenance sont sécurisés et optimisés.`}
                textStyle={'SectionParagraph'}
              />
            </div>
            <ul className="list-square text-white text-base font-medium pl-5 grid gap-2.5">
              <li>Sauvegarde quotidienne</li>
              <li>Mise à jour régulière</li>
              <li>Nettoyage hebdomadaire</li>
            </ul>
          </div>
          <div className="grid gap-6 w-full place-items-end md:w-8/12 lg:w-full"></div>
        </aside>
      </section>
      <section className="grid place-items-center gap-16">
        <div className="sm:w-10/12 md:w-8/12 lg:w-6/12 text-center" data-aos="zoom-in-up">
          <PageSentence
            badge="CARACTÉRISTIQUES"
            title="Voici ce que vous obtiendrez en utilisant ce service"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature) => {
            return (
              <div key={randomString(64)} data-aos="fade-up">
                <FeatureCard
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  isNaked={true}
                />
              </div>
            )
          })}
        </div>
      </section>
      <section className="grid place-items-center gap-16">
        <div className="sm:w-10/12 md:w-8/12 lg:w-6/12 text-center" data-aos="zoom-in-up">
          <PageSentence
            badge="FAQ"
            title="Questions fréquemment posées, peut-être les mêmes que les vôtres"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-7">
          {faqs.map((faq) => {
            return (
              <div className="grid gap-2.5" key={randomString(64)} data-aos="fade-right">
                <Text textStyle="FAQTitle" value={faq.title} />
                <Text textStyle="FAQDescription" value={faq.description} />
              </div>
            )
          })}
        </div>
        <div className="text-white text-base font-medium">
          {`Vous n'avez pas trouvé de réponse ? `}
          <div className="sm:hidden"></div>
          <div className="text-primary inline">
            <Link href={'/contact'}>N&apos;hésitez pas à demander !</Link>
          </div>
        </div>
      </section>
    </PageTemplate>
  )
}

export default ServiceDetail
