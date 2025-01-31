import Button from 'components/atoms/Button'
import IconListItem from 'components/molecules/IconListItem'
import PageSentence from 'components/molecules/PageSentence'
import PageTemplate from 'components/templates/PageTemplate'
import React from 'react'
import { FiMail } from 'react-icons/fi'

const Contact = () => {
  return (
    <>
      <PageTemplate title='Contact - OLYMPIK'>
        <section className="grid grid-cols-1 place-items-center gap-5 lg:gap-3">
          <div className="sm:w-10/12 md:w-8/12 lg:w-6/12 2xl:w-8/12 text-center mb-48" data-aos="zoom-in-up">
            <PageSentence
              title="Nous adorons recevoir vos messages, n'hésitez pas à nous contacter."
              badge="CONTACT"
            />
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-32 text-center">
            <div className="flex flex-col items-center space-y-6">
              <IconListItem
                label="Email"
                value="support@olympik.net"
                icon={<FiMail />}
              />
              <Button
                value="Envoyer un mail"
                onClick={() => window.location.href = 'mailto:support@olympik.net'}
                style="solid"
                color="primary"
              />
            </div>
            <div className="flex flex-col items-center space-y-6">
              <IconListItem
                label="Email"
                value="contact@olympik.net"
                icon={<FiMail />}
              />
              <Button
                value="Envoyer un mail"
                onClick={() => window.location.href = 'mailto:contact@olympik.net'}
                style="solid"
                color="primary"
              />
            </div>
          </div>
        </section>
      </PageTemplate>
    </>
  )
}

export default Contact
