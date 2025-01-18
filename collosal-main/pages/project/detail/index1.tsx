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
  const images = ['/images/1j.jpeg', '/images/2j.jpeg', '/images/3j.jpeg'];

  const openCarousel = (index: number) => {
    setCarouselIndex(index);
    setIsCarouselOpen(true);
  };

  return (
    <PageTemplate title='Jymu'>
      <section className="grid place-items-center" data-aos="zoom-in-up">
        <div className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12">
          <PageSentence
            badge="PROJET"
            title="Jymu"
          />
        </div>
      </section>
      <LineDivider />
      <section className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <aside data-aos="fade-up-right">
          <div className="relative w-full h-[400px]">
            <Image src="/images/JPEG.jpg" layout="fill" objectFit="contain" alt="Jymu" />
          </div>
        </aside>
        <aside className="grid gap-12 place-content-center" data-aos="fade-up-left">
          <Text
            textStyle="SectionParagraph"
            value="Une appli qui combine sport, réseau social et programmes réalisés par l'IA."
          />
          <div className="grid gap-6">
            <div className="grid gap-2">
              <Text value="CATÉGORIE" textStyle="ProjectDetailLabel" />
              <Text value="Applications, Santé, Sport" textStyle="ProjectDetailValue" />
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
            <Image src={src} layout="fill" objectFit="contain" alt={`Jymu Image ${index + 1}`} />
          </div>
        ))}
      </section>
      {isCarouselOpen && (
        <ImageCarousel images={images} initialIndex={carouselIndex} onClose={() => setIsCarouselOpen(false)} />
      )}
      <div className="mt-8 text-center mb-8">
        <ButtonLink value="Nos autres projets" href="/project" />
      </div>
    </PageTemplate>
  )
}

export default ProjectDetail
