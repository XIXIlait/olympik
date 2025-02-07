import NavBrand from 'components/atoms/NavBrand'
import NavLink from 'components/atoms/NavLink'
import Text from 'components/atoms/Text'
import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="mt-32 pb-16">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-16 xl:gap-20">
          <div className="space-y-5">
            <NavBrand />
            <div className="">
              <Text
                value={`Copyright © ${new Date().getFullYear()}`}
                textStyle="SectionParagraph"
              />
              <Text
                value={`Réalisé par OLYMPIK`}
                textStyle="SectionParagraph"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:gap-16 xl:gap-20">
            <div className="space-y-5">
              <Text value="SERVICES" textStyle="FooterLinkGroupTitle" />
              <div className="space-y-[10px]">
                <NavLink
                  value="Apps sur mesure"
                  href="/apps-sur-mesure"
                />
                <NavLink
                  value="Apps adaptables"
                  href="/apps-adaptable"
                />
              </div>
            </div>
            <div className="space-y-5">
              <Text value="ENTREPRISE" textStyle="FooterLinkGroupTitle" />
              <div className="space-y-[10px]">
                <NavLink value="Contact" href="/contact" />
                <NavLink value="Conditions & Mentions légales" href="/cdg-t" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
