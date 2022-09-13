import React, { useEffect, useState } from 'react'
import { useLanguage, SiteTheme as SiteThemeController } from 'ordering-components-admin'
import { SecondSelect as Select, Button } from '../../../styles'
import Skeleton from 'react-loading-skeleton'
import { ThemeOption } from './ThemeOption'
import { ThemeComponent } from './ThemeComponent'

import {
  Container,
  Option,
  ThemeStructureContainer,
  SelectThemeContainer,
  PageBlockTitle,
  BlockContainer,
  UpdateButtonWrapper,
  PageSelectWrapper
} from './styles'

const SiteThemeUI = (props) => {
  const {
    siteThemesState,
    themesList,
    actionState,
    selectedTheme,
    handleSelectTheme,
    handleAssignTheme,
    handleUpdateSiteTheme,
    handleAddThemeGallery
  } = props

  const [, t] = useLanguage()
  const [themeOptions, setThemeOptions] = useState([])
  const [pageOptions, setPageOptions] = useState([])
  const [selectedPage, setSelectedPage] = useState(null)
  const [themeStructure, setThemeStructure] = useState({})
  const [themeValues, setThemeValues] = useState({})
  const getOptions = (options) => {
    return options.map(option => {
      return {
        value: option,
        content: <Option>{t(option.toUpperCase(), option.replace(/_/g, ' '))}</Option>
      }
    })
  }

  const getTitle = (key) => {
    return t(key.toUpperCase, key.replace(/_/g, ' '))
  }

  useEffect(() => {
    if (themesList.loading) return
    const _themeOptions = themesList.result.map(theme => {
      return {
        value: theme.id,
        content: (
          <Option>{t(theme.name.toUpperCase(), theme.name.replace(/_/g, ' '))}</Option>
        )
      }
    })
    setThemeOptions(_themeOptions)
  }, [themesList])

  useEffect(() => {
    if (siteThemesState.loading || siteThemesState.result.length === 0) return
    setThemeValues(siteThemesState.result[0]?.values)
    const structure = siteThemesState.result[0]?.theme?.structure || {}
    setThemeStructure(structure)
    const _pageOptions = getOptions(Object.keys(structure))
    setPageOptions(_pageOptions)
  }, [siteThemesState])

  return (
    <Container>
      {siteThemesState.loading ? (
        <BlockContainer>
          <h3>
            <Skeleton height={20} width={300} />
          </h3>
          <Skeleton height={20} width={200} style={{ marginBottom: 10 }} />
          <Skeleton height={20} style={{ marginBottom: 10 }} />
          <Skeleton height={20} width={130} style={{ marginBottom: 10 }} />
          <Skeleton height={20} />
        </BlockContainer>
      ) : (
        <>
          {siteThemesState.result.length !== 0 ? (
            <>
              <ThemeStructureContainer>
                <PageBlockTitle>{t('SECTION', 'Section')}</PageBlockTitle>
                <PageSelectWrapper>
                  <Select
                    placeholder={<Option isPlaceholder>{t('SELECT_SECTION_TO_CUSTOMIZE', 'Select a section to customize')}</Option>}
                    defaultValue={selectedPage}
                    options={pageOptions}
                    onChange={key => setSelectedPage(key)}
                  />
                </PageSelectWrapper>
                {selectedPage && (
                  <>
                    <PageBlockTitle>{t('BLOCKS', 'Blocks')}</PageBlockTitle>
                    {Object.keys(themeStructure[selectedPage]?.components).map(block => {
                      const components = themeStructure[selectedPage].components
                      return (
                        <BlockContainer key={block}>
                          <h3>{getTitle(block)}</h3>
                          {Object.keys(components[block]).filter(option => option !== 'components').map(option => {
                            const optionObject = components[block][option]
                            return (
                              <ThemeOption
                                key={option}
                                name={option}
                                optionObject={optionObject}
                                valueObject={themeValues[selectedPage].components[block][option]}
                                path={[selectedPage, 'components', block, option].join('.')}
                                themeValues={themeValues}
                                setThemeValues={setThemeValues}
                              />
                            )
                          })}
                          {components[block]?.components && (
                            <>
                              {Object.keys(components[block]?.components).map(component => {
                                const componentObject = components[block]?.components[component]
                                return (
                                  <ThemeComponent
                                    key={component}
                                    name={component}
                                    componentObject={componentObject}
                                    valueObject={themeValues[selectedPage].components[block]?.components[component]}
                                    themeValues={themeValues}
                                    setThemeValues={setThemeValues}
                                    path={[selectedPage, 'components', block, 'components', component].join('.')}
                                    handleAddThemeGallery={handleAddThemeGallery}
                                  />
                                )
                              })}
                            </>
                          )}
                        </BlockContainer>
                      )
                    })}
                  </>
                )}
              </ThemeStructureContainer>
              <UpdateButtonWrapper>
                <Button
                  borderRadius='8px'
                  color='primary'
                  onClick={() => handleUpdateSiteTheme(themeValues)}
                >
                  {t('UPDATE', 'Update')}
                </Button>
              </UpdateButtonWrapper>
            </>
          ) : (
            <SelectThemeContainer>
              <Select
                placeholder={<Option>{t('SELECT_THEME', 'Select theme')}</Option>}
                options={themeOptions}
                onChange={themeId => handleSelectTheme(themeId)}
              />
              <Button
                borderRadius='8px'
                color='primary'
                disabled={actionState.loading || !selectedTheme}
                onClick={() => handleAssignTheme()}
              >
                {actionState.loading ? t('LOADING', 'Loading') : t('SAVE', 'Save')}
              </Button>
            </SelectThemeContainer>
          )}
        </>
      )}
    </Container>
  )
}

export const SiteTheme = (props) => {
  const siteThemeProps = {
    ...props,
    UIComponent: SiteThemeUI
  }
  return <SiteThemeController {...siteThemeProps} />
}
