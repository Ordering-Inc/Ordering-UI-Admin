import React from 'react'
import moment from 'moment'
import { Button, Checkbox, DefaultSelect, Switch } from '../../../styles'
import { InputPrimary, TextArea } from '../../../styles/Inputs'
import { useLanguage } from 'ordering-components-admin'
import { Circle, RecordCircleFill } from 'react-bootstrap-icons/dist'
import DatePicker from 'react-datepicker'
import {
  FormControl,
  FormWrapper,
  WeekDayCheckWrapper,
  RrulesItem,
  RrulesListWrapper,
  SelectTitle,
  SelectTitleWrappre,
  SelectWrapper,
  ChecksWrapper,
  SelectsWrapper,
  ButtonsWrapper,
  ShowBreakBlocksWrapper,
  BlocksWrapper,
  DateBlockWrapper
} from './styles'

export const DriverBlockAddFormUI = (props) => {
  const {
    scheduleOptions,
    selectedBlock,
    handleChangeScheduleTime,
    setScheduleState,
    rruleList,
    setRuleState,
    scheduleState,
    ruleState,
    handleChangeStartDate,
    rruleDayList,
    selectedDate,
    selectedUntilDate,
    isEdit,
    handleAddBlockTime,
    setOpenDeleteModal,
    setShowBreakBlock,
    showBreakBlock,
    handleUntilDate,
    setOpenEditModal
  } = props

  const [, t] = useLanguage()

  const getHourOrMinute = (block, isStart) => {
    if (!block) {
      return isStart ? '00:00' : '23:59'
    }
    const hour = moment(block).hour()
    const minute = moment(block).minute()
    const time = hour === 23 && minute === 59 ? `${hour}:${minute}` : `${(hour < 10 ? `0${hour}` : hour)}:${minute !== 0 ? parseInt((minute / 15) * 15) : '00'}`
    return time
  }

  const handleChangeFrequency = (value) => {
    setRuleState({ ...ruleState, freq: value })
  }

  const handleChangeInput = (e) => {
    setScheduleState({
      ...scheduleState,
      state: {
        ...scheduleState.state,
        [e.target.name]: e.target.value || ''
      }
    })
  }

  const handleChangeDaily = (e, value) => {
    if (e.target.checked) {
      setRuleState({ ...ruleState, byweekday: [...ruleState.byweekday, value] })
    } else {
      setRuleState({ ...ruleState, byweekday: ruleState.byweekday.filter(day => day !== value) })
    }
  }

  return (
    <FormWrapper>
      <span>{t('BLOCK_NAME', 'Block Name')}</span>
      <InputPrimary
        name='name'
        placeholder={t('BLOCK_NAME_OPTIONAL', 'Block name (Optional)')}
        onChange={e => handleChangeInput(e)}
        defaultValue={selectedBlock?.name}
      />

      <span>{t('BLOCK_DESCRIPTION', 'Block Description')}</span>
      <TextArea
        name='description'
        placeholder={t('BLOCK_DESCRIPTION_OPTIONAL', 'Block description (Optional)')}
        onChange={e => handleChangeInput(e)}
        defaultValue={selectedBlock?.description}
      />

      <BlocksWrapper>
        <DateBlockWrapper>
          <span>{t('BLOCK_DATE', 'Block date')}</span>
          <DatePicker
            selected={scheduleState?.state?.start ? selectedDate === new Date(scheduleState?.state?.start) ? new Date(scheduleState?.state?.start) : selectedDate : selectedDate}
            placeholderText='mm/dd/yyyy'
            className='startDate'
            minDate={new Date()}
            onChange={date => handleChangeStartDate(date)}
          />
        </DateBlockWrapper>
        <ShowBreakBlocksWrapper>
          <span>{t('SHOW_BREAK_BLOCK', 'Show break blocks')}</span>
          <Switch
            defaultChecked={showBreakBlock}
            onChange={enabled => setShowBreakBlock(enabled)}
          />
        </ShowBreakBlocksWrapper>
      </BlocksWrapper>

      <SelectsWrapper>
        <SelectTitleWrappre>
          <SelectTitle>{t('START_BLOCK_DATE', 'Start block date:')}</SelectTitle>
          <SelectWrapper>
            <DefaultSelect
              noSelected
              options={scheduleOptions.filter(option => !['break_start', 'end', 'break_end'].includes(option?.name))}
              defaultValue={getHourOrMinute(scheduleState?.state?.start ?? selectedBlock?.start, true)}
              onChange={val => handleChangeScheduleTime(val, true)}
              optionInnerMaxHeight='300px'
            />
          </SelectWrapper>
        </SelectTitleWrappre>

        <SelectTitleWrappre>
          <SelectTitle>{t('END_BLOCK_DATE', 'End block date:')}</SelectTitle>
          <SelectWrapper>
            <DefaultSelect
              noSelected
              options={scheduleOptions.filter(option => !['break_start', 'start', 'break_end'].includes(option?.name))}
              defaultValue={getHourOrMinute(scheduleState?.state?.end ?? selectedBlock?.end)}
              onChange={val => handleChangeScheduleTime(val, false)}
              optionInnerMaxHeight='300px'
            />
          </SelectWrapper>
        </SelectTitleWrappre>
        {showBreakBlock && (
          <SelectTitleWrappre>
            <SelectTitle>{t('START_BREAK_BLOCK_DATE', 'Start break block date:')}</SelectTitle>
            <SelectWrapper>
              <DefaultSelect
                noSelected
                options={scheduleOptions.filter(option => !['start', 'end', 'break_end'].includes(option?.name))}
                defaultValue={getHourOrMinute(scheduleState?.state?.break_start ?? selectedBlock?.break_start, true)}
                onChange={val => handleChangeScheduleTime(val, true, true)}
                optionInnerMaxHeight='300px'
              />
            </SelectWrapper>
          </SelectTitleWrappre>
        )}
        {showBreakBlock && (
          <SelectTitleWrappre>
            <SelectTitle>{t('END_BREAK_BLOCK_DATE', 'End break block date:')}</SelectTitle>
            <SelectWrapper>
              <DefaultSelect
                noSelected
                options={scheduleOptions.filter(option => !['break_start', 'end', 'start'].includes(option?.name))}
                defaultValue={getHourOrMinute(scheduleState?.state?.break_end ?? selectedBlock?.break_end)}
                onChange={val => handleChangeScheduleTime(val, false, true)}
                optionInnerMaxHeight='300px'
              />
            </SelectWrapper>
          </SelectTitleWrappre>
        )}
      </SelectsWrapper>

      <FormControl>
        <span>{t('FREQUENCY', 'Frequency')}</span>
        <RrulesListWrapper>
          {rruleList.map(rule => (
            <RrulesItem key={rule.value} onClick={() => handleChangeFrequency(rule?.value)}>
              {ruleState?.freq === rule.value ? <RecordCircleFill className='active' /> : <Circle />}
              <span>{rule.name}</span>
            </RrulesItem>
          ))}
        </RrulesListWrapper>
      </FormControl>

      {ruleState?.freq && (
        <>
          <span>{t('BY_WEEK_DAY', 'By week day')}</span>
          <ChecksWrapper>
            {rruleDayList.map(day => (
              <WeekDayCheckWrapper key={day.value.weekday}>
                <Checkbox
                  defaultChecked={ruleState.byweekday?.includes(day.value.weekday)}
                  onChange={e => handleChangeDaily(e, day.value.weekday)}
                />
                <h4>{day.name}</h4>
              </WeekDayCheckWrapper>
            ))}
          </ChecksWrapper>
          {!isEdit && (
            <>
              <span>{t('UNTIL_DATE', 'Until date')}</span>
              <DatePicker
                selected={selectedUntilDate}
                placeholderText='mm/dd/yyyy'
                className='endDate'
                minDate={new Date()}
                onChange={date => handleUntilDate(date)}
              />
            </>
          )}
        </>
      )}

      <ButtonsWrapper>
        {isEdit && (
          <Button
            color='lightPrimary'
            borderRadius='8px'
            disabled={scheduleState.loading}
            onClick={() => setOpenDeleteModal(true)}
          >
            {t('DELETE', 'Delete')}
          </Button>
        )}
        <Button
          color='primary'
          borderRadius='8px'
          disabled={scheduleState.loading || (isEdit ? false : !scheduleState?.state?.until && scheduleState.rrule)}
          onClick={() => isEdit ? setOpenEditModal(true) : handleAddBlockTime()}
        >
          {scheduleState.loading ? t('LOADING', 'Loading') : isEdit ? t('EDIT', 'Edit') : t('ADD', 'Add')}
        </Button>
      </ButtonsWrapper>
    </FormWrapper>
  )
}
