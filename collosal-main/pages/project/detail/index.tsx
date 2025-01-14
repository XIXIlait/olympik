import LazyCard from 'components/atoms/LazyCard'
import LineDivider from 'components/atoms/LineDivider'
import Text from 'components/atoms/Text'
import PageSentence from 'components/molecules/PageSentence'
import PageTemplate from 'components/templates/PageTemplate'
import Image from 'next/image'
import React from 'react'

const ProjectDetail = () => {
  return (
    <PageTemplate title='Drop the Block - Craft Edition'>
      <section className="grid place-items-center" data-aos="zoom-in-up">
        <div className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12">
          <PageSentence
            badge="PROJET"
            title="Drop the Block - Craft Edition"
          />
        </div>
      </section>
      <LineDivider />
      <section className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <aside data-aos="fade-up-right">
          <div className="relative w-full h-[400px]">
            <Image src="/images/drop.PNG" layout="fill" objectFit="cover" alt="Drop the Block - Craft Edition" />
          </div>
        </aside>
        <aside className="grid gap-12 place-content-center" data-aos="fade-up-left">
          <Text
            textStyle="SectionParagraph"
            value="Un jeu d'arcade addictif où vous devrez empiler des cubes et améliorer votre score pour devenir le roi des blocs."
          />
          <div className="grid gap-6">
            <div className="grid gap-2">
              <Text value="CATÉGORIE" textStyle="ProjectDetailLabel" />
              <Text value="Jeu" textStyle="ProjectDetailValue" />
            </div>
            <div className="grid gap-2">
              <Text value="CLIENT" textStyle="ProjectDetailLabel" />
              <Text value="Anonyme" textStyle="ProjectDetailValue" />
            </div>
            <div className="grid gap-2">
              <Text value="TECHNOLOGIE" textStyle="ProjectDetailLabel" />
              <Text
                value="C-sharp"
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
