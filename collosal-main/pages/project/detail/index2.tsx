import LazyCard from 'components/atoms/LazyCard'
import LineDivider from 'components/atoms/LineDivider'
import Text from 'components/atoms/Text'
import PageSentence from 'components/molecules/PageSentence'
import PageTemplate from 'components/templates/PageTemplate'
import Image from 'next/image'
import React from 'react'

const ProjectDetail = () => {
  return (
    <PageTemplate title='SMA'>
      <section className="grid place-items-center" data-aos="zoom-in-up">
        <div className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12">
          <PageSentence
            badge="PROJET"
            title="SMA"
          />
        </div>
      </section>
      <LineDivider />
      <section className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <aside data-aos="fade-up-right">
          <div className="relative w-full h-[400px]">
            <Image src="/images/sma.jpg" layout="fill" objectFit="cover" alt="SMA" />
          </div>
        </aside>
        <aside className="grid gap-12 place-content-center" data-aos="fade-up-left">
          <Text
            textStyle="SectionParagraph"
            value="L'outil moderne pour écoles et étudiants. Permet de consulter son emploi du temps, de faire des tâches, et d'avoir les infos nécessaires pour les étudiants."
          />
          <div className="grid gap-6">
            <div className="grid gap-2">
              <Text value="CATÉGORIE" textStyle="ProjectDetailLabel" />
              <Text value="Applications scolaires" textStyle="ProjectDetailValue" />
            </div>
            <div className="grid gap-2">
              <Text value="CLIENT" textStyle="ProjectDetailLabel" />
              <Text value="Anonyme" textStyle="ProjectDetailValue" />
            </div>
            <div className="grid gap-2">
              <Text value="TECHNOLOGIE" textStyle="ProjectDetailLabel" />
              <Text
                value="Flutter, Firebase"
                textStyle="ProjectDetailValue"
              />
            </div>
          </div>
        </aside>
      </section>
    </PageTemplate>
  )
}

export default ProjectDetail
