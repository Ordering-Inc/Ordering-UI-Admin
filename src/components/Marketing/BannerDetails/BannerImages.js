import React, { useState } from 'react'
import {
  useUtils,
  useLanguage
} from 'ordering-components-admin'
import { PlusCircle } from 'react-bootstrap-icons'
import { SideBar } from '../../Shared'
import { BannerImageDetails } from '../BannerImageDetails'
import {
  ImagesContainer,
  BannerImage,
  UploadImageIconContainer
} from './styles'

export const BannerImages = (props) => {
  const {
    aspectRatio,
    bannerItemsState,
    handleAddBannerItem,
    handleUpdateBannerItem,
    handleDeleteBannerItem,
    setBannerMoveDistance
  } = props

  const [, t] = useLanguage()
  const [{ optimizeImage }] = useUtils()

  const [openLinkDetails, setOpenLinkDetails] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  const handleImageLink = (image) => {
    setSelectedImage(image)
    setOpenLinkDetails(true)
    setBannerMoveDistance(500)
  }

  const handleCloseImageDetail = () => {
    setBannerMoveDistance(0)
    setOpenLinkDetails(false)
    setSelectedImage(null)
  }

  return (
    <>
      <ImagesContainer>
        {bannerItemsState.images.map(image => (
          <BannerImage
            key={image.id}
            active={selectedImage?.id === image.id}
            onClick={() => handleImageLink(image)}
          >
            <img src={optimizeImage(image?.url, 'h_130,c_limit')} alt='item image' loading='lazy' />
          </BannerImage>
        ))}
        <BannerImage
          onClick={() => handleImageLink(null)}
        >
          <UploadImageIconContainer>
            <PlusCircle />
            <p>{t('ADD', 'Add')}</p>
          </UploadImageIconContainer>
        </BannerImage>
      </ImagesContainer>

      {openLinkDetails && (
        <SideBar
          open={openLinkDetails}
          onClose={() => handleCloseImageDetail()}
          isBorderShow
        >
          <BannerImageDetails
            key={selectedImage?.id}
            image={selectedImage}
            aspectRatio={aspectRatio}
            onClose={() => handleCloseImageDetail()}
            handleUpdateBannerItem={handleUpdateBannerItem}
            handleAddBannerItem={handleAddBannerItem}
            handleDeleteBannerItem={handleDeleteBannerItem}
          />
        </SideBar>
      )}
    </>
  )
}
