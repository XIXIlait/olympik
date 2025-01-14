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
            avatarSrc="/images/testimonial-avatar.png"
            name="Anonyme"
            company="Jymu"
            testimony={`"Votre entreprise est vraiment remarquable et soutient son produit à 100 %. C'est la solution parfaite pour notre entreprise. Elle a vraiment aidé notre entreprise."`}
          />
        </SwiperSlide>
        <SwiperSlide className='mt-10'>
          <TestimonialCard
            avatarSrc="/images/testimonial-avatar-2.png"
            name="Anonyme"
            company="SMA Services"
            testimony={`"Votre entreprise est vraiment remarquable et soutient son produit à 100 %. C'est la solution parfaite pour notre entreprise. Elle a vraiment aidé notre entreprise."`}
          />
        </SwiperSlide>
        <SwiperSlide className='mt-10'>
          <TestimonialCard
            avatarSrc="/images/testimonial-avatar-3.png"
            name="Anonyme"
            company="Jymu"
            testimony={`"Votre entreprise est vraiment remarquable et soutient son produit à 100 %. C'est la solution parfaite pour notre entreprise. Elle a vraiment aidé notre entreprise."`}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default TestimonialList
