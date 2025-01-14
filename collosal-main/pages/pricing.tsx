import LineDivider from 'components/atoms/LineDivider'
import Text from 'components/atoms/Text'
import PricingCard from 'components/molecules/Card/PricingCard'
import PageSentence from 'components/molecules/PageSentence'
import PageTemplate from 'components/templates/PageTemplate'
import Link from 'next/link'
import React from 'react'
import randomString from 'utils/randomString'

const Pricing = () => {
  interface Faq {
    title: string
    description: string
  }
  const faqs: Faq[] = [
        {
          "title": "Comment fonctionne le système de paiement ?",
          "description": "Si le projet est accepté, vous paierez un acompte, un deuxième paiement sera effectué lorsque les progrès atteindront 50 %, et une fois le projet terminé à 100 %, vous réglerez le solde."
        },
        {
          "title": "Puis-je consulter avant de commencer ?",
          "description": "Bien sûr, vous pouvez nous consulter en premier. Nous serons ravis de vous aider à résoudre vos problèmes et de vous fournir nos meilleures solutions. Vous pouvez nous contacter via la page de contact."
        },
        {
          "title": "Que se passe-t-il si le projet s'arrête à mi-chemin ?",
          "description": "Nous nous engageons à toujours terminer le projet dans les délais. Si un problème survient (en raison d'une erreur de notre part), tous les paiements seront remboursés et le projet sera arrêté."
        },
        {
          "title": "Est-ce que cela inclut les serveurs et les domaines ?",
          "description": "Vous n'avez à vous soucier de rien d'autre, tout est déjà préparé. Vous devez simplement suivre les progrès et vérifier que les fonctionnalités souhaitées correspondent à vos attentes."
        },
        {
          "title": "Aurais-je accès au code source ?",
          "description": "Lorsque le projet est terminé à 100 %, toutes les ressources, telles que les fichiers de conception, les diagrammes d'analyse, le code source, etc., vous seront fournies. Vous n'avez pas à vous inquiéter à ce sujet."
        },
        {
          "title": "Y a-t-il une garantie ?",
          "description": "Nous offrons une garantie d'un an pour nos erreurs ou défauts. Si vous souhaitez ajouter une fonctionnalité qui ne fait pas partie de la garantie, des frais supplémentaires par fonctionnalité seront appliqués, en fonction de la complexité."
        }
      ]
    
    

  return (
    <PageTemplate>
      <section className="grid grid-cols-1 place-items-center">
        <div
          className="sm:w-10/12 md:8/12 lg:w-6/12 text-center"
          data-aos="zoom-in-up"
        >
          <PageSentence
            badge="PRIX"
            title="De quoi avez-vous besoin ? Choisissez un service qui peut vous aider"
          />
        </div>
      </section>
      <LineDivider />
      <section className="w-full grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        <div data-aos="fade-up">
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
      </section>
      <section className="grid place-items-center gap-16">
        <div className="sm:w-10/12 md:w-8/12 lg:w-6/12 text-center" data-aos="zoom-in-up">
          <PageSentence
            badge="FAQ"
            title="Frequently asked questions, maybe the same as yours"
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
        <div className="text-white text-base font-medium text-center">
          {`Vous ne trouvez pas votre réponse ? `}
          <div className="sm:hidden"></div>
          <div className="text-primary inline select-none">
            <Link href={'/quote'}>N&apos;hésitez pas, contactez nous !</Link>
          </div>
        </div>
      </section>
    </PageTemplate>
  )
}

export default Pricing
