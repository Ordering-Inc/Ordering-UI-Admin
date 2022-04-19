import React, { useState, useEffect, useRef } from 'react'
import {
  useLanguage,
  ProductGallery as ProductGalleryController
} from 'ordering-components-admin'
import Skeleton from 'react-loading-skeleton'
import { Alert, Confirm } from '../../Shared'
import { Button, Input } from '../../../styles'

import {
  ProdcutVideosContainer,
  GalleryVideosContainer,
  GalleryVideos,
  AddNewVideo,
  GalleryItem,
  GalleryURL
} from './styles'

const ProductVideosUI = (props) => {
  const {
    productGalleryState,
    changesState,
    handleDeteteProductGalleryItem,
    handleChangeInput,
    handleAddGalleryProduct
  } = props

  const [, t] = useLanguage()
  const inputAddRef = useRef()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })

  const handleDeleteClick = (itemId, type) => {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_VIDEO', 'Are you sure that you want to delete this video url?'),
      handleOnAccept: () => {
        setConfirm({ ...confirm, open: false })
        handleDeteteProductGalleryItem(itemId, type)
      }
    })
  }
  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  useEffect(() => {
    if (!changesState?.error) return
    setAlertState({
      open: true,
      content: changesState?.error
    })
  }, [changesState?.error])

  useEffect(() => {
    if (Object.entries(changesState?.changes).length === 0 && inputAddRef?.current) inputAddRef.current.value = ''
  }, [changesState?.changes])

  const handleAddVideo = () => {
    const _url = changesState?.changes?.video
    const matchFormat = matchYoutubeUrl(_url)
    let validId

    if (matchFormat) {
      validId = validationVideoId(_url)
    }

    if (matchFormat && validId) {
      fetch('https://www.youtube.com/oembed?url=https%3A//youtube.com/watch%3Fv%3D' + validId + '&format=json')
        .then(response => response.json())
        .then(data => {
          if (data) {
            handleAddGalleryProduct(2)
          }
        })
        .catch(error => {
          if (error) {
            console.log(error?.message)
          }
          setAlertState({
            open: true,
            content: t('INVALID_VIDEO_ID', 'The video ID is not valid')
          })
        })
    }
  }

  const matchYoutubeUrl = (url) => {
    const patt = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|videoseries\?.+&list=|playlist\?.+&list=)?)((\w|-){11})(?:\S+)?$/
    const matches = url.match(patt)
    if (!matches) {
      setAlertState({
        open: true,
        content: t('INVALID_VIDEO_ID', 'The video ID is not valid')
      })
      return false
    }
    return true
  }

  const validationVideoId = (url) => {
    const keys = url.split('/')
    let _videoId = keys[keys.length - 1]
    if (_videoId.includes('watch')) {
      const __url = _videoId.split('=')[1]
      _videoId = __url
    }
    if (_videoId.includes('?')) {
      const __url = _videoId.split('?')[0]
      _videoId = __url
    }

    if (!(_videoId.length === 11)) {
      setAlertState({
        open: true,
        content: t('INVALID_VIDEO_ID', 'The video ID is not valid')
      })
      return false
    }
    return _videoId
  }

  return (
    <>
      <ProdcutVideosContainer>
        <h1>{t('PRODUCT_VIDEOS', 'Product videos')}</h1>
        <GalleryVideosContainer>
          {productGalleryState?.loading ? (
            <>
              <GalleryVideos>
                {
                  [...Array(2).keys()].map(i => (
                    <GalleryItem key={i}>
                      <Skeleton width={250} height={15} />
                      <Skeleton width={60} height={15} />
                    </GalleryItem>
                  ))
                }
              </GalleryVideos>
              <AddNewVideo>
                <Skeleton width={200} height={20} />
                <Skeleton width={60} height={20} />
              </AddNewVideo>
            </>
          ) : (
            <>
              {productGalleryState?.videos && productGalleryState?.videos.length > 0 && (
                <GalleryVideos>
                  {productGalleryState?.videos.map(video => (
                    <GalleryItem key={video.id}>
                      <GalleryURL>{video?.video}</GalleryURL>
                      <Button
                        onClick={() => handleDeleteClick(video.id, video.type)}
                      >
                        Delete
                      </Button>
                    </GalleryItem>
                  ))}
                </GalleryVideos>
              )}
              <AddNewVideo>
                <Input
                  name='video'
                  placeholder={t('YOUTUBE_VIDEO_URL', 'Youtube Video URL')}
                  ref={inputAddRef}
                  onChange={e => handleChangeInput(e, null)}
                />
                <div style={{ width: 18 }} />
                <Button
                  color='primary'
                  onClick={() => handleAddVideo()}
                >
                  {t('ADD', 'Add')}
                </Button>
              </AddNewVideo>
            </>
          )}
        </GalleryVideosContainer>
      </ProdcutVideosContainer>
      <Alert
        title={t('WEB_APPNAME', 'Ordering')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
      <Confirm
        title={t('WEB_APPNAME', 'Ordering')}
        content={confirm.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={confirm.open}
        onClose={() => setConfirm({ ...confirm, open: false })}
        onCancel={() => setConfirm({ ...confirm, open: false })}
        onAccept={confirm.handleOnAccept}
        closeOnBackdrop={false}
      />
    </>
  )
}

export const ProductVideos = (props) => {
  const productGalleryProps = {
    ...props,
    UIComponent: ProductVideosUI
  }
  return <ProductGalleryController {...productGalleryProps} />
}
