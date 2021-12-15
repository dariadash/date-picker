import React from 'react'
import { useStore } from 'effector-react'
import { Popover } from "@material-ui/core";
import { $visible, hidePicker } from '../../model'
import { Picker } from '../containers/Picker'

export const Datapicker = () => {
    const visible = useStore($visible)
    return (
        <Popover
            open={visible}
            anchorReference="anchorPosition"
            anchorPosition={{ top: 50, left: 900 }}
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "right"
            }}
            transformOrigin={{
                vertical: "top",
                horizontal: "center"
            }}
        >
            <Picker
                open={true}
                toggle={hidePicker}
            />
        </Popover>
    )
}
