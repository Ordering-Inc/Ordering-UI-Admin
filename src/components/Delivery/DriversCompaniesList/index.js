import React, { useState, useEffect } from 'react'
import { useLanguage } from 'ordering-components-admin'
import Skeleton from 'react-loading-skeleton'
import { Pagination } from '../../Shared'
import MdCheckBoxOutlineBlank from '@meronex/icons/md/MdCheckBoxOutlineBlank'
import MdCheckBox from '@meronex/icons/md/MdCheckBox'
import { Switch } from '../../../styles'

import {
  DriversCompaniesContainer,
  TableWrapper,
  CompaniesTable,
  PagesBottomContainer,
  AddNewCompanyButton,
  CompanyNameContainer,
  CheckBoxWrapper,
  EnableWrapper,
  TimezoneWrapper,
  PriorityWrapper,
  LimitWrapper
} from './styles'

export const DriversCompaniesList = (props) => {
  const {
    driversCompaniesState,
    searchValue,
    handleOpenDetails,
    curDriversCompany,
    handleUpdateDriversCompany,
    handleSelectCompany,
    selectedCompanyList,
    handleAllSelectCompany
  } = props

  const [, t] = useLanguage()

  // Change page
  const [currentPage, setCurrentPage] = useState(1)
  const [companiesPerPage, setCompaniesPerPage] = useState(10)

  // Get current companies
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

  const getPriorityTag = (priority) => {
    switch (parseInt(priority)) {
      case -1:
        return t('LOW', 'Low')
      case 0:
        return t('NORMAL', 'Normal')
      case 1:
        return t('HIGH', 'High')
      case 2:
        return t('URGENT', 'Urgent')
      default:
        return t('UNKNOWN', 'Unknown')
    }
  }

  const handleClickCompany = (e, company) => {
    const isInvalid = e.target.closest('.company-checkbox') || e.target.closest('.company-enabled')
    if (isInvalid) return
    handleOpenDetails(company)
  }

  return (
    <>
      <DriversCompaniesContainer>
        <TableWrapper>
          <CompaniesTable>
            <thead>
              <tr>
                <th>
                  <CompanyNameContainer isHeader>
                    <CheckBoxWrapper
                      className='company-checkbox'
                      onClick={() => handleAllSelectCompany()}
                      isChecked={!driversCompaniesState.loading && (selectedCompanyList.length === driversCompaniesState.companies.length)}
                    >
                      {
                        !driversCompaniesState.loading && (selectedCompanyList.length === driversCompaniesState.companies.length)
                          ? <MdCheckBox />
                          : <MdCheckBoxOutlineBlank />
                      }
                    </CheckBoxWrapper>
                    <p>{t('COMPANY', 'Company')}</p>
                  </CompanyNameContainer>
                </th>
                <th>
                  <LimitWrapper isHeader>
                    {t('LIMIT', 'Limit')}
                  </LimitWrapper>
                </th>
                <th>
                  <PriorityWrapper isHeader>
                    {t('PRIORITY', 'Priority')}
                  </PriorityWrapper>
                </th>
                <th>
                  <TimezoneWrapper isHeader>
                    {t('TIMEZONE', 'Timezone')}
                  </TimezoneWrapper>
                </th>
                <th>
                  {t('ACTIONS', 'Actions')}
                </th>
              </tr>
            </thead>
            {driversCompaniesState.loading ? (
              [...Array(companiesPerPage).keys()].map(i => (
                <tbody key={i}>
                  <tr>
                    <td>
                      <CompanyNameContainer isHeader>
                        <Skeleton width={100} />
                      </CompanyNameContainer>
                    </td>
                    <td>
                      <LimitWrapper isHeader>
                        <Skeleton width={20} />
                      </LimitWrapper>
                    </td>
                    <td>
                      <PriorityWrapper isHeader>
                        <Skeleton width={70} />
                      </PriorityWrapper>
                    </td>
                    <td>
                      <TimezoneWrapper isHeader>
                        <Skeleton width={80} />
                      </TimezoneWrapper>
                    </td>
                    <td>
                      <EnableWrapper>
                        <Skeleton width={50} />
                      </EnableWrapper>
                    </td>
                  </tr>
                </tbody>
              ))
            ) : (
              currentCompanies.map(company => (
                <tbody
                  key={company.id}
                  className={company.id === parseInt(curDriversCompany?.id) ? 'active' : null}
                  onClick={e => handleClickCompany(e, company)}
                >
                  <tr>
                    <td>
                      <CompanyNameContainer>
                        <CheckBoxWrapper
                          className='company-checkbox'
                          onClick={() => handleSelectCompany(company.id)}
                          isChecked={selectedCompanyList.includes(company.id)}
                        >
                          {
                            selectedCompanyList.includes(company.id)
                              ? <MdCheckBox />
                              : <MdCheckBoxOutlineBlank />
                          }
                        </CheckBoxWrapper>
                        <p>{company?.name}</p>
                      </CompanyNameContainer>
                    </td>
                    <td>
                      <LimitWrapper>
                        {company?.limit}
                      </LimitWrapper>
                    </td>
                    <td>
                      <PriorityWrapper>
                        {getPriorityTag(company?.priority)}
                      </PriorityWrapper>
                    </td>
                    <td>
                      <TimezoneWrapper>
                        {company?.timezone}
                      </TimezoneWrapper>
                    </td>
                    <td>
                      <EnableWrapper className='company-enabled'>
                        <span>{t('ENABLE', 'Enable')}</span>
                        <Switch
                          defaultChecked={company?.enabled}
                          onChange={enabled => handleUpdateDriversCompany(company.id, { enabled: enabled })}
                        />
                      </EnableWrapper>
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
              onClick={() => handleOpenDetails(null)}
            >
              {t('ADD_NEW_DRIVER_COMPANY', 'Add new driver company')}
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
