import { createDomain } from "effector"
import { DateRange } from "materialui-daterange-picker"

const d = createDomain()

export const $visible = d.store(false)
export const setVisible = d.event<boolean>()
export const showPicker = d.event()
export const hidePicker = d.event()

export const $currentDateInterval = d.store<DateRange | null>(null)
export const setCurrentDateInterval = d.event<DateRange>()
export const clearDateInterval = d.event()

export const $currentMonth = d.store<Date>(new Date())
export const setCurrentMonth = d.event<Date>()