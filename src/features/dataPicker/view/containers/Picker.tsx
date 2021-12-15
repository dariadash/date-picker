import React from 'react';
import {
    startOfYear,
    startOfToday,
    startOfYesterday,
    subDays,
    subMonths,
    startOfMonth,
    endOfMonth,
    toDate
} from "date-fns";
import { DateRangePicker } from "materialui-daterange-picker";
import { setCurrentDateInterval } from '../../model';

type Props = {
    open: any,
    toggle: any,
    wrapperClassName?: any
}

export const Picker = ({ open, toggle, wrapperClassName }: Props) => {
    return (
        <>
            <DateRangePicker
                open={open}
                toggle={toggle}
                minDate={'04.04.2017'}
                wrapperClassName={wrapperClassName}
                onChange={(range) => setCurrentDateInterval(range)}
                definedRanges={[
                    {
                        label: "Today",
                        startDate: startOfToday(),
                        endDate: new Date()
                    },
                    {
                        label: "Yesterday",
                        startDate: startOfYesterday(),
                        endDate: new Date()
                    },
                    {
                        label: "Last 7 Days",
                        startDate: subDays(startOfToday(), 6),
                        endDate: new Date()
                    },
                    {
                        label: "Last 30 Days",
                        startDate: subDays(startOfToday(), 29),
                        endDate: new Date()
                    },
                    {
                        label: "Last Month",
                        startDate: subMonths(startOfMonth(new Date()), 1),
                        endDate: subMonths(endOfMonth(new Date()), 1)
                    },
                    {
                        label: "This Year",
                        startDate: startOfYear(new Date()),
                        endDate: new Date()
                    },
                    {
                        label: "Lifetime",
                        startDate: toDate(new Date(2017, 3, 4)),
                        endDate: new Date()
                    },
                ]}
            />
        </>
    )
}
