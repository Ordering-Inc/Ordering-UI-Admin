import React from 'react'

import {
  TitleWrapper,
  TitleNumber,
  TitleHeader,
  TitleContent
} from './styles'

export const ImporterHelpContent = (props) => {
  return (
    <>
      <TitleContent>Follow these easy steps to import your CSV.</TitleContent>
      <TitleWrapper>
        <TitleHeader><TitleNumber>1</TitleNumber> Download the Sample CSV</TitleHeader>
        <TitleContent>You can download the sample csv by clicking on the Sample csv option.</TitleContent>
      </TitleWrapper>
      <TitleWrapper>
        <TitleHeader><TitleNumber>2</TitleNumber> Import Catalogue</TitleHeader>
        <TitleContent>You can import the csv in respective areas- category, product, add-ons and add-ons Options.</TitleContent>
        <TitleContent>The csv needs to be uploaded separately for each section. Use Combined Section If you prefer to upload category, product all at the same time.</TitleContent>
      </TitleWrapper>
      <TitleWrapper>
        <TitleHeader><TitleNumber>3</TitleNumber> Update Catalogue</TitleHeader>
        <TitleContent>Click on existing csv in respective section to download it. (You’ll receive an email with csv Report) Edit the downloaded csv as per your requirement. (You can add the updated data with the existing one in the same csv).</TitleContent>
      </TitleWrapper>
      <TitleWrapper>
        <TitleHeader><TitleNumber>4</TitleNumber> Upload CSV</TitleHeader>
        <TitleContent>You can simply import the new csv by drag and drop your file or browse from your system.</TitleContent>
      </TitleWrapper>
      <TitleWrapper>
        <TitleHeader><TitleNumber>5</TitleNumber> Check status of CSV</TitleHeader>
        <TitleContent>After uploading csv, you will receive a csv Report on your email with the status of complete data which is uploaded or not. True means csv upload is successful and False means upload is unsuccessful. if it’s false, there will be error message which will be shown with the field containing error.</TitleContent>
      </TitleWrapper>
    </>
  )
}
