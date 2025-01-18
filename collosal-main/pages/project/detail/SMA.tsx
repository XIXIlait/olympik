import LazyCard from 'components/atoms/LazyCard'
import LineDivider from 'components/atoms/LineDivider'
import Text from 'components/atoms/Text'
import PageSentence from 'components/molecules/PageSentence'
import PageTemplate from 'components/templates/PageTemplate'
import Image from 'next/image'
import React, { useState } from 'react'
import ImageCarousel from 'components/molecules/ImageCarousel'
import ButtonLink from 'components/atoms/Button/ButtonLink'

const ProjectDetail = () => {
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const images = ['/images/1s.jpeg', '/images/2s.jpeg', '/images/3s.jpeg'];

  const openCarousel = (index: number) => {
    setCarouselIndex(index);
    setIsCarouselOpen(true);
  };

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
            <Image src="/images/sma.jpg" layout="fill" objectFit="contain" alt="SMA" />
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
              <Text value="Application scolaire" textStyle="ProjectDetailValue" />
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
      <section className="grid grid-cols-1 gap-8 md:grid-cols-3 mt-8">
        {images.map((src, index) => (
          <div key={index} className="relative w-full h-[400px]" onClick={() => openCarousel(index)}>
            <Image src={src} layout="fill" objectFit="contain" alt={`SMA Image ${index + 1}`} />
          </div>
        ))}
      </section>
      {isCarouselOpen && (
        <ImageCarousel images={images} initialIndex={carouselIndex} onClose={() => setIsCarouselOpen(false)} />
      )}
      <div className="mt-8 text-center mb-16 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center">
        <ButtonLink value="Nos autres projets" href="/project" />
        <a
          href="https://app.olympik.net"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-buttonLight text-white hover:brightness-90 rounded px-14 py-4 text-base font-semibold  text-[#FFD700] hover:brightness-90 rounded px-14 py-4 text-base font-semibold border border-[#FFD700]"
        >
          Devenez partenaire SMA
        </a>
      </div>
    </PageTemplate>
  )
}

export default ProjectDetail
