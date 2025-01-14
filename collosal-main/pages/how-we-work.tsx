import LineDivider from 'components/atoms/LineDivider'
import PageSentence from 'components/molecules/PageSentence'
import SectionSentence from 'components/molecules/SectionSentence'
import PageTemplate from 'components/templates/PageTemplate'
import Image from 'next/image'
import React from 'react'

const HowWeWork = () => {
  return (
    <PageTemplate>
      <section className="grid place-items-center">
        <div className="sm:w-10/12 md:w-8/12 lg:w-6/12 2xl:w-5/12 text-center" data-aos="zoom-in-up">
          <PageSentence
            badge="COMMENT NOUS TRAVAILLONS"
            title="Nous avons un flux de travail qui permet de bien livrer le travail"
          />
        </div>
      </section>
      <LineDivider />
      <section className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-8 lg:gap-5">
        <aside className="w-full" data-aos="fade-up-right">
          <div className="w-full h-[410px] relative">
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
            title={`Parlons d'abord des problèmes de votre entreprise`}
            paragraph={"Après avoir soumis le formulaire de devis, nous examinerons les données, puis nous vous contacterons. Vous pouvez discuter avec notre équipe de votre problème et trouver une solution à ce problème. <br> <br> À cette étape, vous discuterez de l'application à créer."}
          />
        </aside>
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-8 lg:gap-5">
        <aside className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left" data-aos="fade-up-right">
          <SectionSentence
            badge="ÉTAPE 02"
            title={`Faire la planification, la conception et le développement jusqu'à ce que tout soit terminé`}
            paragraph="Lorsque tout est convenu, notre équipe fera des plans liés à l'application qui sera créée. À partir de l'analyse, de la conception, jusqu'au développement. <br> <br> À cette étape, l'application est terminée à 100%."
          />
        </aside>
        <aside className="w-full" data-aos="fade-up-left">
          <div className="w-full h-[410px] relative">
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
          <div className="w-full h-[410px] relative">
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
            title={`Le projet est terminé et nous livrons tous les actifs du projet et l'accès au serveur`}
            paragraph="Nous serons responsables de la livraison de tous les actifs du projet, ne vous inquiétez pas. Ces actifs comprennent, les fichiers de conception, le code source, l'accès au serveur, etc. <br> <br> À cette étape, tout est terminé et le contrat prend fin."
          />
        </aside>
      </section>
      <LineDivider />
    </PageTemplate>
  )
}

export default HowWeWork
