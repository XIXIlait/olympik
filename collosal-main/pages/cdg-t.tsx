import LineDivider from 'components/atoms/LineDivider';
import Text from 'components/atoms/Text';
import PageSentence from 'components/molecules/PageSentence';
import PageTemplate from 'components/templates/PageTemplate';
import React from 'react';

const TermOfService = () => {
  return (
    <PageTemplate title='CDG & ML- OLYMPIK'>
      <section className="space-y-6 text-center" data-aos="zoom-in-up">
        <PageSentence badge="A SAVOIR" title={`Conditions Générales d'Utilisation`} />
        <Text textStyle="BlogMeta" value="Mis à jour le 14 janvier 2025" />
      </section>
      <LineDivider />
      <section className="grid place-items-center" data-aos="fade-up">
        <div className="w-full sm:w-10/12 md:w-8/12 space-y-10">
          <Text
            textStyle="PageContent"
            value={`
              Bienvenue dans les applications développées par notre studio, disponibles sur l'Apple Store ! 
              En tant que créateurs d'une variété d'applications innovantes, nous nous engageons à respecter et protéger votre vie privée et vos droits en ligne. 
              Chaque application que nous publions est accompagnée d'une politique de confidentialité détaillée et d'avis juridiques spécifiques pour garantir une transparence totale.
              <br> <br>
              Ces documents fournissent des informations claires sur la manière dont nous collectons, utilisons et protégeons vos données, ainsi que sur vos droits en tant qu'utilisateur. 
              Nous vous invitons à consulter ces avis juridiques pour chaque application afin de mieux comprendre nos pratiques et les mesures de protection qui vous concernent.
              `}
          />
          <div className="space-y-2.5">
            <Text textStyle="PageSubtitle" value="Système de paiement" />
            <Text
              textStyle="PageContent"
              value={`
              Si le projet est accepté, vous paierez un acompte. Lorsque les progrès atteignent 50 %, vous effectuerez un deuxième paiement, et une fois le projet terminé à 100 %, vous réglerez le solde restant.
              `}
            />
          </div>
          <div className="space-y-2.5">
            <Text textStyle="PageSubtitle" value="Consultation préalable" />
            <Text
              textStyle="PageContent"
              value={`
              Bien sûr, vous pouvez nous consulter au préalable. Nous serons ravis de vous aider à résoudre vos problèmes et de vous fournir nos meilleures solutions. Vous pouvez nous contacter via la page de contact.
              `}
            />
          </div>
          <div className="space-y-2.5">
            <Text textStyle="PageSubtitle" value="Interruption du projet" />
            <Text
              textStyle="PageContent"
              value={`
              Nous nous engageons à terminer le projet dans les délais. Si un problème survient en raison d'une erreur de notre part, tous les paiements seront remboursés et le projet sera arrêté.
              `}
            />
          </div>
          <div className="space-y-2.5">
            <Text textStyle="PageSubtitle" value="Serveurs et domaines inclus" />
            <Text
              textStyle="PageContent"
              value={`
              Vous n'avez à vous soucier de rien d'autre. Tout est déjà préparé. Vous devez simplement suivre les progrès et vérifier que les fonctionnalités souhaitées correspondent à vos attentes.
              `}
            />
          </div>
          <div className="space-y-2.5">
            <Text textStyle="PageSubtitle" value="Accès au code source" />
            <Text
              textStyle="PageContent"
              value={`
              Lorsque le projet est terminé à 100 %, toutes les ressources, telles que les fichiers de conception, les diagrammes d'analyse et le code source, vous seront fournies.
              `}
            />
          </div>
          <div className="space-y-2.5">
            <Text textStyle="PageSubtitle" value="Garantie" />
            <Text
              textStyle="PageContent"
              value={`
              Nous offrons une garantie d'un an couvrant nos erreurs ou défauts. Si vous souhaitez ajouter une fonctionnalité qui ne fait pas partie de la garantie, des frais supplémentaires seront appliqués, en fonction de la complexité.
              `}
            />
          </div>
        </div>
      </section>
    </PageTemplate>
  );
};

export default TermOfService;
