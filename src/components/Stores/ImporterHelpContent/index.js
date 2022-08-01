import React from 'react'
import { useLanguage } from 'ordering-components-admin'

import {
  SubjectTitle,
  TitleWrapper,
  TitleNumber,
  TitleHeader,
  TitleContent
} from './styles'

export const ImporterHelpContent = (props) => {
  const [, t] = useLanguage()
  return (
    <>
      <SubjectTitle>{t('HOW_TO_USE_IMPORTER', 'How to use the importer?')}</SubjectTitle>
      <TitleContent>Follow the next steps to use our Importer system.</TitleContent>
      <TitleWrapper>
        <TitleHeader><TitleNumber>1.</TitleNumber> Select your importer.</TitleHeader>
        <TitleContent>Using our list of default importers, you can select the importer that you require according to your needs.</TitleContent>
      </TitleWrapper>
      <TitleWrapper>
        <TitleHeader><TitleNumber>2.</TitleNumber> Download the Sample CSV.</TitleHeader>
        <TitleContent>Download the CSV that is inside of our default importers list and your importer selection to be able to edit it.</TitleContent>
      </TitleWrapper>
      <TitleWrapper>
        <TitleHeader><TitleNumber>3.</TitleNumber> Prepare your importer.</TitleHeader>
        <TitleContent>Using our list of default importers, you can have an idea of the required fields to import/update according to your needs. Please consider that all importers start with 0(this is considered the first column) to N number of columns.</TitleContent>
      </TitleWrapper>
      <TitleWrapper>
        <TitleHeader><TitleNumber>4.</TitleNumber> Prepare your CSV file.</TitleHeader>
        <TitleContent>Verify that your CSV file has the same fields of your importer and in the same order, please consider that like the importer, this needs to stars with 0(the first column) to N number of columns.</TitleContent>
      </TitleWrapper>
      <TitleWrapper>
        <TitleHeader><TitleNumber>5.</TitleNumber> Import fields.</TitleHeader>
        <TitleContent>Open your recently created importer and verify that has the same fields and order of your CSV file.</TitleContent>
      </TitleWrapper>
      <TitleWrapper>
        <TitleHeader><TitleNumber>6.</TitleNumber> Update existing importer fields.</TitleHeader>
        <TitleContent>Open the importer that you want to use to update fields of your dashboard. You can use the same CSV file to import new fields and update already created fields.</TitleContent>
      </TitleWrapper>
      <TitleWrapper>
        <TitleHeader><TitleNumber>7.</TitleNumber> Upload your CSV.</TitleHeader>
        <TitleContent>Select your recently created importer from the importer list and upload your edited CSV file with the upload button.</TitleContent>
      </TitleWrapper>
      <TitleWrapper>
        <TitleHeader><TitleNumber>8.</TitleNumber> Verify the import.</TitleHeader>
        <TitleContent>Wait until the import process ends and verify the changes in the section that you select to use your importer.</TitleContent>
      </TitleWrapper>
    </>
  )
}
