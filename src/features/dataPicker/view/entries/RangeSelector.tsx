import React from 'react'
import { useStore } from 'effector-react'
import { CalendarToday, ArrowBackIos, ArrowForwardIos } from '@mui/icons-material'
import styled from 'styled-components'
import { $currentDateInterval, $currentMonth, setCurrentMonth, showPicker } from '../../model'
import { Button } from '../../../../ui/Button'
import { addMonths } from 'date-fns'

export const RangeSelector = () => {
    const currentDateInterval = useStore($currentDateInterval)
    const currentMonth = useStore($currentMonth)
    let dateToShow = currentMonth.toDateString()
    if (currentDateInterval?.startDate && currentDateInterval?.endDate) {
        dateToShow = `${currentDateInterval.startDate.toDateString()} - ${currentDateInterval.endDate.toDateString()}`
    }

    const changeMonthPrev = () => {
        let prevMonth = addMonths(currentMonth, -1)
        setCurrentMonth(prevMonth)
    }

    const changeMonthNext = () => {
        let nextMonth = addMonths(currentMonth, 1)
        setCurrentMonth(nextMonth)
    }

    return (
        <Wrapper>
            <Calendar onClick={() => showPicker()}>
                <CalendarToday color='disabled' /> &nbsp;{dateToShow}
            </Calendar>
            <Button onClick={() => changeMonthPrev()}>
                <ArrowBackIos fontSize='small' />
            </Button>
            <Button onClick={() => changeMonthNext()}>
                <ArrowForwardIos fontSize='small' />
            </Button>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;
`

const Calendar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center
`