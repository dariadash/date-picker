import { forward } from "effector";
import {
    $currentDateInterval,
    $visible,
    hidePicker,
    setCurrentDateInterval,
    setVisible,
    showPicker,
    clearDateInterval,
    $currentMonth,
    setCurrentMonth
} from "./public";

$visible
    .on(setVisible, (_, s) => s)
    .on(showPicker, () => true)
    .on(hidePicker, () => false)

$currentDateInterval
    .on(setCurrentDateInterval, (_, v) => v)
    .reset(clearDateInterval)

$currentMonth
    .reset(clearDateInterval)
    .on(setCurrentMonth, (_, m) => m)

forward({
    from: setCurrentMonth,
    to: showPicker
})    