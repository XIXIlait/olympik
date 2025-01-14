import LineDivider from 'components/atoms/LineDivider'
import FaqTabbar from 'components/molecules/FaqTabbar'
import PageSentence from 'components/molecules/PageSentence'
import FaqList from 'components/organisms/FaqList'
import PageTemplate from 'components/templates/PageTemplate'
import React, { useEffect, useState } from 'react'
import getRandomItemsFromArray from 'utils/getRandomItemsFromArray'

const Faq = () => {
  const faqs = [
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
  const [randomFaqs, setRandomFaqs] = useState([faqs, faqs, faqs, faqs])
  const [activeFaq, setActiveFaq] = useState(faqs)
  useEffect(() => {
    const faqs = [
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
    setRandomFaqs([
      faqs,
      getRandomItemsFromArray(faqs, 5),
      getRandomItemsFromArray(faqs, 4),
      getRandomItemsFromArray(faqs, 3),
    ])
  }, [])
  return (
    <PageTemplate>
      <section className="grid grid-cols-1 place-items-center">
        <div className="sm:w-10/12 md:8/12 lg:w-6/12 text-center" data-aos="zoom-in-up">
          <PageSentence
            badge="FAQ"
            title="Questions fréquemment posées, peut-être les mêmes que les vôtres"
          />
        </div>
      </section>
      <section className="flex flex-col md:flex-row gap-5">
        <div className="basis-12/12 md:basis-4/12" data-aos="fade-up">
          <FaqTabbar
            tabs={[
              {
                name: 'Général',
                onClick: () => {
                  setActiveFaq(randomFaqs[0])
                },
              },
              {
                name: 'Transaction',
                onClick: () => {
                  setActiveFaq(randomFaqs[1])
                },
              },
              {
                name: 'Maintenance',
                onClick: () => {
                  setActiveFaq(randomFaqs[2])
                },
              },
              {
                name: 'Technologie',
                onClick: () => {
                  setActiveFaq(randomFaqs[3])
                },
              },
            ]}
          />
        </div>
        <div className="basis-12/12 md:basis-8/12">
          <FaqList faqs={activeFaq} />
        </div>
      </section>
      <LineDivider />
    </PageTemplate>
  )
}

export default Faq
