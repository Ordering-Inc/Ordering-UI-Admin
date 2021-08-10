import React from 'react'
import {
  CheckSquareFill as Checked,
  Square as UnChecked
} from 'react-bootstrap-icons'
import {
  HomeSingleStoreContainer,
  BoxNumberWrapper,
  StoreContent,
  TitleContainer,
  Description
} from './styles'

export const HomeSingleTask = (props) => {
  const {
    task,
    taskList,
    handleUpdateTaskList
  } = props

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
      <BoxNumberWrapper active={task?.completed}>
        <p>{task?.id}</p>
      </BoxNumberWrapper>
      <StoreContent>
        <TitleContainer>
          <p>{task?.name}</p>
          <div onClick={() => handleChangeCheckBox(task?.id)}>
            {
              task?.completed ? <Checked className='fill' /> : <UnChecked />
            }
          </div>
        </TitleContainer>
        <Description>{task?.description}</Description>
      </StoreContent>
    </HomeSingleStoreContainer>
  )
}
