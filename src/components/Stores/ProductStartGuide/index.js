import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { FileMedical, ColumnsGap, FileEarmarkArrowUp, TabletLandscape } from 'react-bootstrap-icons'
import Skeleton from 'react-loading-skeleton'
import {
  Container,
  GuideItemContainer,
  InfoWrapper,
  IconWrapper
} from './styles'

export const ProductStartGuide = (props) => {
  const { onClose, setStep, setOption, countriesState } = props
  const [, t] = useLanguage()

  const guideList = [
    { id: 1, title: t('START_WITH_AN_EMPTY_MENU', 'Start with an empty Menu'), description: t('START_WITH_AN_EMPTY_MENU_DESC', 'Start with an empty Menu and enter your menu items'), icon: <FileMedical /> },
    { id: 2, title: t('IMPORT_MENU_ONLY_USA_CANADA', 'Import Menu (Only if USA and Canada)'), description: t('IMPORT_MENU_ONLY_USA_CANADA_DESC', 'Import your menu from the Ordering Network that includes over 1M restaurants and stores from the US and Canada.'), icon: <ColumnsGap /> },
    { id: 3, title: t('UPLOAD_YOUR_MENU', 'Upload your Menu'), description: t('UPLOAD_YOUR_MENU_DESC', 'Click to upload your menu (PDF or image file) or share your menu link (For website or another online ordering system)'), icon: <FileEarmarkArrowUp /> },
    { id: 4, title: t('INTEGRATE_MY_POS_TO_EXTRACT_MENU', 'Integrate my POS to extract the menu'), icon: <TabletLandscape /> }
  ]

  const handleChangeStep = (id) => {
    switch (id) {
      case 2:
        setStep(2)
        setOption(2)
        break
      case 3:
        setStep(2)
        setOption(3)
        break
      case 4:
        setStep(2)
        setOption(4)
        break
      default:
        onClose()
    }
  }

  return (
    <Container>
      <h2>{t('HOW_DO_YOU_WANT_TO_START', 'How do you want to start?')}</h2>
      {countriesState?.loading && [...Array(4).keys()].map(idx => (
        <GuideItemContainer key={idx}>
          <IconWrapper>
            <Skeleton width={24} height={24} />
          </IconWrapper>
          <InfoWrapper>
            <h3>
              <Skeleton height={18} width={200} />
            </h3>
            <p>
              <Skeleton height={10} />
            </p>
            <p>
              <Skeleton height={10} />
            </p>
          </InfoWrapper>
        </GuideItemContainer>
      ))}
      {!countriesState?.loading && guideList.map(guide => guide.enabled && (
        <GuideItemContainer key={guide.id} onClick={() => handleChangeStep(guide.id)}>
          <IconWrapper>
            {guide.icon}
          </IconWrapper>
          <InfoWrapper>
            <h3>{guide.title}</h3>
            {guide.description && <p>{guide.description}</p>}
          </InfoWrapper>
        </GuideItemContainer>
      ))}
    </Container>
  )
}
