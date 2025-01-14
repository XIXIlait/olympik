import Button from 'components/atoms/Button'
import Select from 'components/atoms/Form/Select'
import LineDivider from 'components/atoms/LineDivider'
import PageSentence from 'components/molecules/PageSentence'
import ProjectCard from 'components/molecules/Card/ProjectCard'
import PageTemplate from 'components/templates/PageTemplate'
import React from 'react'
import randomString from 'utils/randomString'

const Project = () => {
  interface Project {
    title: string
    description: string
    detailPage: string
    imageUrl: string
  }
  const projectList: Project[] = [
    {
      title: 'Drop the Block - Craft Edition',
      description: 'Un jeu d\'arcade addictif',
      detailPage: '/project/detail',
      imageUrl: '/images/drop.PNG'
    },
    {
      title: 'Jymu',
      description: 'Le nouveau réseau social du sport',
      detailPage: '/project/detail/index1',
      imageUrl: '/images/JPEG.jpg'
    },
    {
      title: 'SMA (Student mobile App)',
      description: 'L\'outil moderne pour écoles et étudiants',
      detailPage: '/project/detail/index2',
      imageUrl: '/images/sma.jpg'
    },
    {
      title: 'Friends Trip',
      description: 'Une application pour trouver où les gens vont en voyage',
      detailPage: '/project/detail/index3',
      imageUrl: '/images/friends.webp'
    },
  ]
  return (
    <PageTemplate title="Project - Collosal">
      <section className="flex flex-col items-center gap-5 md:flex-row md:justify-between">
        <aside
          className="w-full sm:w-10/12 grid grid-cols-1 place-items-center gap-12 md:place-items-start md:w-8/12 lg:w-6/12"
          data-aos="fade-right"
        >
          <div className="text-center md:text-left">
            <PageSentence
              badge="PROJETS"
              title="Jetez un coup d'oeil à nos projets déjà existants !"
            />
          </div>
        </aside>
        <aside className="w-full min-w-[175px] md:w-fit" data-aos="fade-left">
          <Select
            options={[
              { label: 'App', value: 'app' },
              { label: 'UI Design', value: 'ui-design' },
            ]}
          />
        </aside>
      </section>
      <LineDivider />
      <section className="grid place-items-center gap-16">
        <div className="w-full grid grid-cols-1 gap-y-16 sm:grid-cols-2 sm:gap-x-5">
          {projectList.map((project) => {
            return (
              <div className="basis-full lg:basis-1/2" key={randomString(64)} data-aos="zoom-in-up">
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  detailPage={project.detailPage}
                  imageUrl={project.imageUrl}
                />
              </div>
            )
          })}
        </div>
        <Button value="Charger plus" color="white" style="light" />
      </section>
    </PageTemplate>
  )
}

export default Project
