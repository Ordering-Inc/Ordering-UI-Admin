import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { useLanguage } from 'ordering-components-admin'
import {
  CheckSquareFill as Checked,
  Square as UnChecked
} from 'react-bootstrap-icons'
import {
  HomeSingleStoreContainer,
  BoxNumberWrapper,
  StoreContent,
  TitleContainer,
  Description,
  ThatsIt
} from './styles'

export const HomeSingleTask = (props) => {
  const {
    task,
    taskList,
    handleUpdateTaskList,
    isSkeleton
  } = props
  const [, t] = useLanguage()

  const handleChangeCheckBox = (id) => {
    const data = taskList?.data.map(item => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed
        }
      }
      return item
    })
    handleUpdateTaskList(data)
  }

  return (
    <HomeSingleStoreContainer>
      {
        isSkeleton ? (
          <BoxNumberWrapper>
            <Skeleton width={64} height={64} />
          </BoxNumberWrapper>
        ) : (
          <BoxNumberWrapper active={task?.completed}>
            <p>{task?.id}</p>
          </BoxNumberWrapper>
        )
      }
      <StoreContent>
        {
          isSkeleton ? (
            <TitleContainer>
              <Skeleton width={100} height={20} />
              <Skeleton width={16} height={16} />
            </TitleContainer>
          ) : (
            <TitleContainer>
              <p>{task?.name}</p>
              <div onClick={() => handleChangeCheckBox(task?.id)}>
                {
                  task?.completed ? <Checked className='fill' /> : <UnChecked />
                }
              </div>
            </TitleContainer>
          )
        }
        {
          isSkeleton ? (
            <Skeleton height={40} />
          ) : (
            <Description>{task?.description}</Description>
          )
        }
        {
          task?.addText && (
            <ThatsIt>{t('THATS_IT', "That's it")}</ThatsIt>
          )
        }
      </StoreContent>
    </HomeSingleStoreContainer>
  )
}
