import TestimonialCard from 'components/molecules/Card/TestimonialCard'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper'

const TestimonialList = () => {
  return (
    <div className="w-full">
      <Swiper
        breakpoints={{
          300: {
            spaceBetween: 10,
          },
          640: {
            spaceBetween: 20,
          },
          768: {
            spaceBetween: 40,
          },
          1024: {
            spaceBetween: 50,
          },
        }}
        loop={true}
        pagination={{
          clickable: true,
          type: 'bullets',
          clickableClass: 'swiper-pagination',
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
        direction="horizontal"
        modules={[Pagination]}
        slideClass='swiper-slide'
        slideActiveClass='swiper-slide-active'
      >
        <SwiperSlide className='mt-10'>
          <TestimonialCard
            avatarSrc="/images/emoji/emoji_menuh.png"
            name="Anonyme"
            company="SMA Services"
            testimony={`"L'application SMA a été une véritable révolution pour notre école. Les élèves peuvent consulter leur emploi du temps et suivre leurs absences très facilement. L'équipe a été super réactive et a livré une application de qualité. Nous avons travaillé ensemble pour ajuster certains détails, et le résultat final est exactement ce que nous voulions. Je suis très satisfait du service et de la qualité du travail fourni."`}
          />
        </SwiperSlide>
        <SwiperSlide className='mt-10'>
          <TestimonialCard
            avatarSrc="/images/emoji/emoji_hero.png"
            name="Anonyme"
            company="SMA Services"
            testimony={`"L'application SMA a été un véritable atout pour notre école. Les élèves peuvent facilement consulter leur emploi du temps et suivre leurs absences. L'équipe a été très réactive et a livré une application qui répond parfaitement à nos besoins. Nous avons travaillé ensemble pour ajuster certains détails, et le résultat final est excellent. Je suis très satisfait du service et de la qualité du travail fourni."`}
          />
        </SwiperSlide>
        <SwiperSlide className='mt-10'>
          <TestimonialCard
            avatarSrc="/images/emoji/emoji_femme.png"
            name="Anonyme"
            company="DropTheBlock"
            testimony={`"Je suis vraiment content du travail réalisé sur DropTheBlock. L'application est maintenant disponible sur l'Apple Store et elle fonctionne parfaitement. L'équipe a respecté les délais et a livré exactement ce que je voulais. Nous avons retravaillé plusieurs fois ensemble pour peaufiner les détails, et le résultat final me correspond !"`}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default TestimonialList
