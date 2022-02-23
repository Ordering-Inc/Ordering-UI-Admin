import React, { useState } from 'react'
import { useLanguage, ProductTagsList as ProductTagsController } from 'ordering-components-admin'
import Skeleton from 'react-loading-skeleton'
import { SearchBar, SideBar } from '../../Shared'
import { Button, Checkbox } from '../../../styles'
import { ChevronRight, Image as ImageIcon } from 'react-bootstrap-icons'
import { ProductTagDetails } from '../ProductTagDetails'

import {
  TagsListContainer,
  SearchBarWrapper,
  SelectButtonGroup,
  TagsListWrapper,
  ProductTagWrapper,
  TagImageWrapper,
  AddNewLabel
} from './styles'

const ProductTagsListUI = (props) => {
  const {
    tagsState,
    searchValue,
    onSearch,
    selectedTagIds,
    actionState,
    setIsExtendExtraOpen,
    handleSuccessUpdate,
    handleSuccessDelete,
    handleSuccessAdd,
    handleChangeProductTag,
    handleSelectNoneTags,
    handleSelectAllTags
  } = props

  const [, t] = useLanguage()
  const [selectedTag, setSelectedTag] = useState(null)
  const [isOpenTagDetail, setIsOpenTagDetail] = useState(false)

  const handleOpenProductTagDetail = (e, tag) => {
    const isInvalid = e.target.closest('.product-tag-checkbox')
    if (isInvalid) return

    setSelectedTag(tag)
    setIsExtendExtraOpen(true)
    setIsOpenTagDetail(true)
  }

  const handleCloseDetail = () => {
    setIsOpenTagDetail(false)
    setIsExtendExtraOpen(false)
    setSelectedTag(null)
  }

  return (
    <>
      <TagsListContainer>
        <SearchBarWrapper>
          <SearchBar
            isCustomLayout
            lazyLoad
            placeholder={t('SEARCH', 'Search')}
            search={searchValue}
            onSearch={val => onSearch(val)}
          />
        </SearchBarWrapper>
        <SelectButtonGroup>
          <Button
            color='secundaryDark'
            onClick={() => handleSelectAllTags()}
            disabled={actionState.loading || tagsState.tags.length === 0}
          >
            {t('SELECT_ALL', 'Select all')}
          </Button>
          <Button
            color='secundaryDark'
            onClick={() => handleSelectNoneTags()}
            disabled={actionState.loading || tagsState.tags.length === 0}
          >
            {t('SELECT_NONE', 'Select none')}
          </Button>
        </SelectButtonGroup>
        {tagsState?.loading ? (
          [...Array(10).keys()].map(i => (
            <ProductTagWrapper key={i} isSkeleton>
              <div>
                <Skeleton width={20} height={20} />
                <TagImageWrapper>
                  <Skeleton width={32} height={32} />
                </TagImageWrapper>
                <Skeleton width={80} height={14} />
              </div>
              <Skeleton width={10} height={13} />
            </ProductTagWrapper>
          ))
        ) : (
          <TagsListWrapper>
            {tagsState.tags.map(tag => (
              <ProductTagWrapper
                key={tag.id}
                active={tag.id === selectedTag?.id}
                onClick={(e) => handleOpenProductTagDetail(e, tag)}
              >
                <div>
                  <Checkbox
                    className='product-tag-checkbox'
                    checked={selectedTagIds.includes(tag.id)}
                    onChange={e => handleChangeProductTag(e.target.checked, tag.id)}
                  />
                  <TagImageWrapper>
                    {tag?.image ? (
                      <img src={tag.image} alt='' />
                    ) : (
                      <ImageIcon />
                    )}
                  </TagImageWrapper>
                  <span className='tag-name'>{tag.name}</span>
                </div>
                <ChevronRight />
              </ProductTagWrapper>
            ))}
          </TagsListWrapper>
        )}

        {!tagsState.loading && (
          <AddNewLabel
            onClick={e => handleOpenProductTagDetail(e, null)}
          >
            {t('ADD_NEW_LABEL', 'Add new label')}
          </AddNewLabel>
        )}
      </TagsListContainer>

      {isOpenTagDetail && (
        <SideBar
          sidebarId='product-tag-details'
          isBorderShow
          open={isOpenTagDetail}
          onClose={() => handleCloseDetail()}
        >
          <ProductTagDetails
            tag={selectedTag}
            handleSuccessUpdate={handleSuccessUpdate}
            handleSuccessDelete={handleSuccessDelete}
            handleSuccessAdd={handleSuccessAdd}
            onClose={handleCloseDetail}
          />
        </SideBar>
      )}
    </>
  )
}

export const ProductTagsList = (props) => {
  const tagsProps = {
    ...props,
    UIComponent: ProductTagsListUI
  }
  return <ProductTagsController {...tagsProps} />
}
