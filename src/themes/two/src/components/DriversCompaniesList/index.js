import React, { useState, useEffect } from 'react'
import { useLanguage } from 'ordering-components-admin'
import Skeleton from 'react-loading-skeleton'
import { Pagination } from '../Pagination'
import MdCheckBoxOutlineBlank from '@meronex/icons/md/MdCheckBoxOutlineBlank'
import MdCheckBox from '@meronex/icons/md/MdCheckBox'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { Switch } from '../../styles'
import FiMoreVertical from '@meronex/icons/fi/FiMoreVertical'
import { useTheme } from 'styled-components'
import {
  DriversCompaniesContainer,
  TableWrapper,
  CompaniesTable,
  PagesBottomContainer,
  AddNewCompanyButton,
  CompanyNameContainer,
  CheckBoxWrapper,
  ActionsContainer,
  EnableWrapper,
  ActionSelectorWrapper
} from './styles'

export const DriversCompaniesList = (props) => {
  const {
    driversCompaniesState,
    searchValue
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()

  // Change page
  const [currentPage, setCurrentPage] = useState(1)
  const [companiesPerPage, setCompaniesPerPage] = useState(10)

  // Get current plugins
  const [currentCompanies, setCurrentCompanies] = useState([])
  const [totalPages, setTotalPages] = useState(null)

  const handleChangePage = (page) => {
    setCurrentPage(page)
  }

  const handleChangePageSize = (pageSize) => {
    const expectedPage = Math.ceil(((currentPage - 1) * companiesPerPage + 1) / pageSize)
    setCurrentPage(expectedPage)
    setCompaniesPerPage(pageSize)
  }

  useEffect(() => {
    if (driversCompaniesState.loading) return
    let _totalPages
    let companies = []
    if (searchValue) {
      companies = driversCompaniesState.companies.filter(plugin => plugin.name.toLowerCase().includes(searchValue.toLowerCase()))
    } else {
      companies = [...driversCompaniesState.companies]
    }
    if (companies.length > 0) {
      _totalPages = Math.ceil(companies.length / companiesPerPage)
    }
    const indexOfLastPost = currentPage * companiesPerPage
    const indexOfFirstPost = indexOfLastPost - companiesPerPage
    const _currentCompanies = companies.slice(indexOfFirstPost, indexOfLastPost)
    setTotalPages(_totalPages)
    setCurrentCompanies(_currentCompanies)
  }, [driversCompaniesState, currentPage, companiesPerPage, searchValue])

  return (
    <>
      <DriversCompaniesContainer>
        <TableWrapper>
          <CompaniesTable>
            <thead>
              <tr>
                <th>{t('COMPANY', 'Company')}</th>
                <th>{t('LIMIT', 'Limit')}</th>
                <th>{t('PRIORITY', 'Priority')}</th>
                <th>{t('TIMEZONE', 'Timezone')}</th>
                <th>{t('ACTIONS', 'Actions')}</th>
              </tr>
            </thead>
            {driversCompaniesState.loading ? (
              [...Array(companiesPerPage).keys()].map(i => (
                <tbody key={i}>
                  <tr>
                    <td><Skeleton /></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              ))
            ) : (
              currentCompanies.map(company => (
                <tbody key={company.id}>
                  <tr>
                    <td>
                      <CompanyNameContainer>
                        <CheckBoxWrapper>
                          <MdCheckBoxOutlineBlank />
                        </CheckBoxWrapper>
                        <p>{company?.name}</p>
                      </CompanyNameContainer>
                    </td>
                    <td>
                      {company?.limit}
                    </td>
                    <td>
                      {company?.priority}
                    </td>
                    <td>
                      {company?.timezone}
                    </td>
                    <td>
                      <ActionsContainer>
                        <EnableWrapper>
                          <span>{t('ENABLE', 'Enable')}</span>
                          <Switch
                            defaultChecked={company?.enabled}
                            // onChange={enabled => handleUpdatePlugin(plugin.id, { enabled: enabled })}
                          />
                        </EnableWrapper>
                        <ActionSelectorWrapper>
                          <DropdownButton
                            menuAlign={theme?.rtl ? 'left' : 'right'}
                            title={<FiMoreVertical />}
                            id={theme?.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'}
                          >
                            <Dropdown.Item
                              // onClick={() => handleUpdatePlugin(plugin.id, { root: plugin.root })}
                            >
                              {t('UPDATE', 'Update')}
                            </Dropdown.Item>
                            <Dropdown.Item
                              // onClick={() => onClickDeletePlugin(plugin.id)}
                            >
                              {t('DELETE', 'Delete')}
                            </Dropdown.Item>
                          </DropdownButton>
                        </ActionSelectorWrapper>
                      </ActionsContainer>
                    </td>
                  </tr>
                </tbody>
              ))
            )}
          </CompaniesTable>
        </TableWrapper>
        {!driversCompaniesState.loading && (
          <PagesBottomContainer>
            <AddNewCompanyButton
              // onClick={() => setIsAddMode(true)}
            >
              {t('ADD_NEW_DRIVER_COMPANY ', 'Add new driver company')}
            </AddNewCompanyButton>
            {currentCompanies?.length > 0 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                handleChangePage={handleChangePage}
                defaultPageSize={companiesPerPage}
                handleChangePageSize={handleChangePageSize}
              />
            )}
          </PagesBottomContainer>
        )}
      </DriversCompaniesContainer>
    </>
  )
}
