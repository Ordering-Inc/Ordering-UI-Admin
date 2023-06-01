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
      <TitleContent>{t('HOW_TO_USE_IMPORTER_CONTENT', 'Follow the next steps to use our Importer system.')}</TitleContent>
      <TitleWrapper>
        <TitleHeader><TitleNumber>{t('IMPORTER_INSTRUCTIONS_1_NUM', '1.')}</TitleNumber>{t('IMPORTER_INSTRUCTIONS_1', 'Select your importer.')}</TitleHeader>
        <TitleContent>{t('IMPORTER_INSTRUCTIONS_1_CONTENT', 'Using our list of default importers, you can select the importer that you require according to your needs.')}</TitleContent>
      </TitleWrapper>
      <TitleWrapper>
        <TitleHeader><TitleNumber>{t('IMPORTER_INSTRUCTIONS_2_NUM', '2.')}</TitleNumber>{t('IMPORTER_INSTRUCTIONS_2', 'Download the Sample CSV.')}</TitleHeader>
        <TitleContent>{t('IMPORTER_INSTRUCTIONS_2_CONTENT', 'Download the CSV that is inside of our default importers list and your importer selection to be able to edit it.')}</TitleContent>
      </TitleWrapper>
      <TitleWrapper>
        <TitleHeader><TitleNumber>{t('IMPORTER_INSTRUCTIONS_3_NUM', '3.')}</TitleNumber>{t('IMPORTER_INSTRUCTIONS_3', 'Prepare your importer.')}</TitleHeader>
        <TitleContent>{t('IMPORTER_INSTRUCTIONS_3_CONTENT', 'Using our list of default importers, you can have an idea of the required fields to import/update according to your needs. Please consider that all importers start with 0(this is considered the first column) to N number of columns.')}</TitleContent>
      </TitleWrapper>
      <TitleWrapper>
        <TitleHeader><TitleNumber>{t('IMPORTER_INSTRUCTIONS_4_NUM', '4.')}</TitleNumber>{t('IMPORTER_INSTRUCTIONS_4', 'Prepare your CSV file.')}</TitleHeader>
        <TitleContent>{t('IMPORTER_INSTRUCTIONS_4_CONTENT', 'Verify that your CSV file has the same fields of your importer and in the same order, please consider that like the importer, this needs to stars with 0(the first column) to N number of columns.')}</TitleContent>
      </TitleWrapper>
      <TitleWrapper>
        <TitleHeader><TitleNumber>{t('IMPORTER_INSTRUCTIONS_5_NUM', '5.')}</TitleNumber>{t('IMPORTER_INSTRUCTIONS_5', 'Import fields.')}</TitleHeader>
        <TitleContent>{t('IMPORTER_INSTRUCTIONS_5_CONTENT', 'Open your recently created importer and verify that has the same fields and order of your CSV file.')}</TitleContent>
      </TitleWrapper>
      <TitleWrapper>
        <TitleHeader><TitleNumber>{t('IMPORTER_INSTRUCTIONS_6_NUM', '6.')}</TitleNumber>{t('IMPORTER_INSTRUCTIONS_6', 'Update existing importer fields.')}</TitleHeader>
        <TitleContent>{t('IMPORTER_INSTRUCTIONS_6_CONTENT', 'Open the importer that you want to use to update fields of your dashboard. You can use the same CSV file to import new fields and update already created fields.')}</TitleContent>
      </TitleWrapper>
      <TitleWrapper>
        <TitleHeader><TitleNumber>{t('IMPORTER_INSTRUCTIONS_7_NUM', '7.')}</TitleNumber>{t('IMPORTER_INSTRUCTIONS_7', 'Upload your CSV.')}</TitleHeader>
        <TitleContent>{t('IMPORTER_INSTRUCTIONS_8_CONTENT', 'Select your recently created importer from the importer list and upload your edited CSV file with the upload button.')}</TitleContent>
      </TitleWrapper>
      <TitleWrapper>
        <TitleHeader><TitleNumber>{t('IMPORTER_INSTRUCTIONS_8_NUM', '8.')}</TitleNumber>{t('IMPORTER_INSTRUCTIONS_8', 'Verify the import.')}</TitleHeader>
        <TitleContent>{t('IMPORTER_INSTRUCTIONS_8_CONTENT', 'Wait until the import process ends and verify the changes in the section that you select to use your importer.')}</TitleContent>
      </TitleWrapper>
    </>
  )
}
