import Button from 'components/atoms/Button'
import ButtonLink from 'components/atoms/Button/ButtonLink'
import InputGroup from 'components/molecules/FormGroup/InputGroup'
import SelectGroup from 'components/molecules/FormGroup/SelectGroup'
import TextAreaGroup from 'components/molecules/FormGroup/TextAreaGroup'
import PageSentence from 'components/molecules/PageSentence'
import PageTemplate from 'components/templates/PageTemplate'
import React from 'react'

const Quote = () => {
  return (
    <>
      <PageTemplate title='Envoyer un devis - Olympique'>
        <section className="grid grid-cols-1 place-items-center gap-5 lg:grid-cols-2">
          <aside className="w-full sm:w-10/12 md:w-8/12 grid grid-cols-1 place-items-center gap-12 lg:w-full lg:place-items-start" data-aos="fade-down-right">
            <div className="text-center lg:text-left">
              <PageSentence
                title="Parlez-nous de vos idées et de comment nous pouvons vous aider"
                description="Nous sommes heureux de vous aider. Dites-nous quel est le problème de votre entreprise ou vos idées, et nous sommes prêts à y répondre. Nous répondons généralement en quelques minutes."
                badge="ENVOYER UN DEVIS"
              />
            </div>
            <div className="w-fit">
              <ButtonLink
                value="Envoyez-nous directement un mail"
                href="mailto:contact@olympik.net"
                color="white"
                style="light"
              />
            </div>
          </aside>
          <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full lg:flex lg:justify-end" data-aos="fade-up-left">
            <div className="grid grid-cols-1 gap-7 p-6 md:p-9 bg-light rounded-md lg:w-10/12 ">
              <div className="grid grid-cols-2 gap-4">
                <InputGroup label="Nom" />
                <InputGroup label="Email" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <InputGroup label="Compagnie ou Particulier" />
                <SelectGroup
                  label="Type de service"
                  options={[
                    { label: 'Conception UI', value: 'conception-ui' },
                    { label: 'Développement', value: 'developpement' },
                    { label: 'Maintenance', value: 'maintenance' },
                  ]}
                />
              </div>
              <TextAreaGroup label="Parlez-nous de votre problème" />
              <Button value="Envoyez" />
            </div>
          </aside>
        </section>
      </PageTemplate>
    </>
  )
}

export default Quote
