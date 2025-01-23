import Button from 'components/atoms/Button'
import Select from 'components/atoms/Form/Select'
import LineDivider from 'components/atoms/LineDivider'
import PageSentence from 'components/molecules/PageSentence'
import ProjectCard from 'components/molecules/Card/ProjectCard'
import PageTemplate from 'components/templates/PageTemplate'
import React, { useState } from 'react'
import randomString from 'utils/randomString'

const Project = () => {
  interface Project {
    title: string
    description: string
    detailPage: string
    imageUrl: string
    category: string
  }

  const projectList: Project[] = [
    {
      title: 'Drop the Block - Craft Edition',
      description: 'Un jeu d\'arcade addictif',
      detailPage: '/project/detail/DropTheBlock',
      imageUrl: '/images/drop.PNG',
      category: 'App sur mesure'
    },
    {
      title: 'Jymu',
      description: 'Le nouveau réseau social du sport',
      detailPage: '/project/detail/Jymu',
      imageUrl: '/images/JPEG.jpg',
      category: 'App sur mesure'
    },
    {
      title: 'SMA (Student mobile App)',
      description: 'L\'outil moderne pour écoles et étudiants',
      detailPage: '/project/detail/SMA',
      imageUrl: '/images/sma.jpg',
      category: 'App adaptable'
    },
    {
      title: 'Friends Trip',
      description: 'Une application pour trouver où les gens vont en voyage',
      detailPage: '/project/detail/FriendsTrip',
      imageUrl: '/images/friends.webp',
      category: 'App sur mesure'
    },
  ]

  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projectList);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const handleFilterChange = (value: string) => {
    setSelectedCategory(value);
    if (value === 'all') {
      setFilteredProjects(projectList);
    } else {
      setFilteredProjects(projectList.filter(project => project.category === value));
    }
  };

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
              title="Jetez un coup d'oeil à nos projets déjà existants ! "
              
            />
          </div>
        </aside>
        <aside className="w-full min-w-[175px] md:w-fit" data-aos="fade-left">
          <Select
            options={[
              { label: 'Toutes les apps', value: 'all' },
              { label: 'App sur mesure', value: 'App sur mesure' },
              { label: 'App adaptable', value: 'App adaptable' },
            ]}
            value={selectedCategory}
            onChange={(e) => handleFilterChange(e.target.value)}
          />
        </aside>
      </section>
      <LineDivider />
      <section className="grid place-items-center gap-16">
        <div className="w-full grid grid-cols-1 gap-y-16 sm:grid-cols-2 sm:gap-x-5">
          {filteredProjects.map((project) => {
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
        {/* <Button value="Charger plus" color="white" style="light" /> */}
      </section>
    </PageTemplate>
  )
}

export default Project
